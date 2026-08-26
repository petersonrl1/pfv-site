import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

const QUICK_LINKS = [
  { label: "Worship & A/V", href: "/av" },
  { label: "SOPs & checklists", href: "/av/sops" },
  { label: "Glossary of terms", href: "/glossary" },
];

export default function NotFound() {
  return (
    <main>
      <div className="max-w-[1180px] mx-auto px-8">
        <div className="pt-16 pb-10">
          <p className="text-xs tracking-[0.16em] uppercase text-accent-700 mb-5">404</p>
          <h1 className="text-[46px] sm:text-[60px] leading-none tracking-[-0.03em] mb-5">
            This page doesn&apos;t exist.
          </h1>
          <p className="text-lg leading-[1.5] max-w-[52ch] text-neutral-800 mb-8">
            The link may be out of date, or the page moved when the hub was reorganized. Try one
            of these instead.
          </p>
          <Link href="/" className={buttonVariants({ variant: "primary" })}>
            Back to home
          </Link>
        </div>
      </div>

      <div className="border-t-2 border-divider">
        <div className="max-w-[1180px] mx-auto px-8">
          <div className="flex flex-col">
            {QUICK_LINKS.map((link, i) => (
              <Link
                key={link.href}
                href={link.href}
                className="flex items-center justify-between gap-4 py-4 border-t border-divider text-text text-[15px] no-underline hover:bg-text/[0.04]"
                style={i === QUICK_LINKS.length - 1 ? { borderBottom: "1px solid var(--color-divider)" } : undefined}
              >
                {link.label}
                <span className="text-accent">→</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
