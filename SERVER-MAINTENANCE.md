# Server Maintenance Guide

Droplet: `provfairview.church` — Ubuntu 24.04, DigitalOcean $6/mo, 1GB RAM

---

## What's handled automatically

| Task                         | How                   |
| ---------------------------- | --------------------- |
| Ubuntu security patches      | `unattended-upgrades` |
| System package updates       | `unattended-upgrades` |
| SSL cert renewal             | Certbot cron job      |
| App process restart on crash | PM2                   |
| Node.js version upgrades     | Manual                |
| App dependency updates      | Update and test locally, then commit and deploy |
| App dependency installation | Deployment runs `npm ci --omit=dev` |
| PM2 updates                  | Manual                |

---

## Monthly Checklist (~15-20 min)

SSH in:

```bash
ssh deploy@provfairview.church
```

### OS updates

```bash
sudo apt update && sudo apt upgrade -y
```

### Check the app is healthy

```bash
pm2 status
pm2 logs pfv-site --lines 50
```

### Review app dependencies locally

Run these checks in your local project, in a separate terminal from the SSH session:

```bash
cd /Users/rosspeterson/Sites/PFV/pfv-site
npm outdated
npm audit
```

Apply any fixes locally using the dependency update process below. Do not run `npm update`, `npm install <package>`, or `npm audit fix` in the production app directory. These can change the server's lockfile and block future deployments.

### Update PM2

```bash
npm list -g pm2
npm install -g pm2@latest
pm2 update
```

### Verify SSL cert renewal is working

```bash
sudo certbot renew --dry-run
```

### Check fail2ban is active

```bash
sudo fail2ban-client status sshd
```

### Check disk usage

```bash
df -h
du -sh /var/www/provfairview.church/.next
```

---

## Quarterly Checklist (~30-45 min)

### Check for a new Node LTS

```bash
nvm list-remote --lts
```

If a new LTS is available:

```bash
nvm install 24
nvm alias default 24
```

Update `.nvmrc` in your local repo, not the server checkout, and test the app with the selected Node version before committing:

```bash
echo "24" > .nvmrc
git add .nvmrc
git commit -m "chore: update Node to v24"
git push origin main
```

### Update npm dependencies locally

Run these commands on your computer, outside the SSH session:

```bash
cd /Users/rosspeterson/Sites/PFV/pfv-site
npm outdated
npm update
```

For targeted updates, use `npm install <package>@<version>`. Review major version migration requirements before upgrading. If addressing audit findings, run `npm audit fix` locally and review the resulting changes.

Validate and commit both dependency files:

```bash
npm run lint
npm run build
git diff -- package.json package-lock.json
git add package.json package-lock.json
git commit -m "chore: update app dependencies"
git push origin main
```

Push only after validation succeeds. If working on a feature branch, push that branch and merge its pull request into `main` instead.

The deployment workflow builds the app, copies the build to the server, updates the server checkout, runs `npm ci --omit=dev` to install the committed dependency versions, and restarts PM2. You do not need to manually update app dependencies on the server. After deployment, confirm the GitHub Actions run succeeded and check the live site.

Keep the production checkout free of local edits. The uploaded build, source commit, and installed dependencies must match. If deployment reports local changes on the server, preserve and investigate them before retrying; do not force a reset or run dependency updates to work around the error.

Global PM2, Node.js, and operating-system updates remain separate server maintenance tasks.

### Reboot the droplet

```bash
sudo reboot
```

SSH back in after ~30 seconds and confirm:

```bash
pm2 status
sudo systemctl status nginx
curl localhost:3000
```

---

## Useful log commands

```bash
pm2 logs pfv-site --lines 100
sudo tail -50 /var/log/nginx/error.log
sudo tail -50 /var/log/nginx/access.log
sudo fail2ban-client status sshd
sudo cat /var/log/unattended-upgrades/unattended-upgrades.log
```

---

## Firewall rules (UFW)

```bash
22/tcp    SSH
80/tcp    HTTP (redirects to HTTPS)
443/tcp   HTTPS
```

```bash
sudo ufw status
```

---

## PM2 quick reference

```bash
pm2 status
pm2 restart pfv-site
pm2 stop pfv-site
pm2 logs pfv-site
pm2 logs pfv-site --lines 100
pm2 monit
```

---

## If the site goes down

```bash
# 1. Check PM2
pm2 status
pm2 logs pfv-site --lines 50

# 2. Restart if stopped or errored
pm2 restart pfv-site

# 3. Check Nginx
sudo systemctl status nginx
sudo nginx -t
sudo systemctl restart nginx

# 4. Check app responds locally
curl localhost:3000

# 5. Check disk space
df -h

# 6. Check memory
free -h
```

---

## Swap file

Verify the 1GB swap file is active:

```bash
free -h
```

If missing after a reboot:

```bash
sudo swapon /swapfile
```

---

## Suggested calendar reminders

| Cadence   | Task                                            |
| --------- | ----------------------------------------------- |
| Monthly   | Run monthly checklist                           |
| Quarterly | Run quarterly checklist + reboot                |
| Annually  | Review droplet size if consistently >70% memory |
