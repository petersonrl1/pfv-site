import Link from "next/link";
import { Fragment } from "react";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export function Breadcrumb({ items }: { items: BreadcrumbItem[] }) {
  return (
    <p className="text-xs tracking-[0.14em] uppercase text-neutral-600 mb-5">
      {items.map((item, i) => (
        <Fragment key={item.label}>
          {i > 0 && <span className="mx-2">/</span>}
          {item.href ? (
            <Link href={item.href} className="text-neutral-600 hover:text-accent-700 no-underline">
              {item.label}
            </Link>
          ) : (
            <span className="text-text">{item.label}</span>
          )}
        </Fragment>
      ))}
    </p>
  );
}
