import Link from "next/link";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/av", label: "Worship & A/V" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-20 bg-bg border-b-2 border-divider no-print">
      <div className="max-w-[1180px] mx-auto flex flex-wrap items-center justify-between gap-4 px-8 py-3.5">
        <Link href="/" className="flex items-baseline gap-2.5 no-underline">
          <span className="font-heading font-extrabold text-[15px] text-text">Providence Fairview</span>
          <span className="text-[11px] tracking-[0.14em] uppercase text-neutral-600">Resource Hub</span>
        </Link>
        <nav className="flex items-center gap-7">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[13px] tracking-wide uppercase text-text hover:text-accent no-underline"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
