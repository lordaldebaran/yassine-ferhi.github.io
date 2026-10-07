import { Link } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";
import { Menu, X, ExternalLink } from "lucide-react";
import { CV_URL, EMAIL, GITHUB_URL, LINKEDIN_URL, SCHOLAR_URL, type Publication } from "@/lib/site-data";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/research", label: "Research" },
  { to: "/experience", label: "Experience" },
  { to: "/publications", label: "Publications" },
  { to: "/about", label: "About" },
  { to: "/cv", label: "CV" },
] as const;

export function SiteNav() {
  const [open, setOpen] = useState(false);
  const linkCls = "text-ink/65 transition-colors hover:text-ink";
  const activeCls = "text-ink font-medium";
  return (
    <header className="sticky top-0 z-50 border-b border-ink/10 bg-paper/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <Link to="/" className="font-serif text-xl tracking-tight">
          Yassine Ferhi
        </Link>
        <nav className="hidden items-center gap-7 text-sm md:flex">
          {NAV.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              activeOptions={{ exact: true }}
              className={linkCls}
              activeProps={{ className: activeCls }}
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="rounded-full border border-ink/15 p-2 md:hidden"
        >
          {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </button>
      </div>
      {open && (
        <nav className="flex flex-col border-t border-ink/10 px-6 py-3 md:hidden">
          {NAV.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              activeOptions={{ exact: true }}
              onClick={() => setOpen(false)}
              className="py-2 text-sm text-ink/75"
              activeProps={{ className: "py-2 text-sm text-ink font-medium" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-ink/10">
      <div className="mx-auto flex max-w-5xl flex-col gap-4 px-6 py-10 text-sm text-ink/60 md:flex-row md:items-center md:justify-between">
        <p>
          Open to research internships and collaborations ·{" "}
          <a href={`mailto:${EMAIL}`} className="text-ink hover:text-accent-quantum">
            {EMAIL}
          </a>
        </p>
        <div className="flex flex-wrap gap-5">
          <a href={SCHOLAR_URL} target="_blank" rel="noreferrer" className="hover:text-ink">Scholar</a>
          <a href={GITHUB_URL} target="_blank" rel="noreferrer" className="hover:text-ink">GitHub</a>
          <a href={LINKEDIN_URL} target="_blank" rel="noreferrer" className="hover:text-ink">LinkedIn</a>
          <a href={CV_URL} target="_blank" rel="noreferrer" className="hover:text-ink">CV (PDF)</a>
        </div>
      </div>
    </footer>
  );
}

export function Page({ eyebrow, title, intro, children }: { eyebrow: string; title: string; intro?: ReactNode; children: ReactNode }) {
  return (
    <main className="mx-auto max-w-5xl px-6 pt-16 md:pt-20">
      <p className="mb-3 text-[11px] uppercase tracking-[0.22em] text-accent-quantum">{eyebrow}</p>
      <h1 className="font-serif text-4xl tracking-tight md:text-6xl">{title}</h1>
      {intro && <div className="mt-5 max-w-2xl text-ink/70 md:text-lg">{intro}</div>}
      <div className="mt-14">{children}</div>
    </main>
  );
}

export function H2({ children }: { children: ReactNode }) {
  return <h2 className="font-serif text-2xl tracking-tight md:text-3xl">{children}</h2>;
}

export function Tags({ items }: { items: string[] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {items.map((t) => (
        <span key={t} className="rounded-full border border-ink/15 px-3 py-0.5 text-xs text-ink/70">
          {t}
        </span>
      ))}
    </div>
  );
}

export function PublicationEntry({ pub }: { pub: Publication }) {
  const [before, after] = pub.authors.split("Y. Ferhi");
  return (
    <li className="border-b border-ink/10 py-6 last:border-0">
      <h3 className="font-serif text-xl leading-snug">{pub.title}</h3>
      <p className="mt-2 text-sm text-ink/65">
        {before}
        {after !== undefined && <span className="font-medium text-ink">Y. Ferhi</span>}
        {after}
      </p>
      <p className="mt-1 text-sm italic text-ink/55">{pub.venue}</p>
      <p className="mt-3 max-w-3xl text-sm leading-relaxed text-ink/75">{pub.summary}</p>
      {pub.links.length > 0 && (
        <div className="mt-3 flex flex-wrap gap-2">
          {pub.links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full border border-ink/15 px-3 py-1 text-xs text-ink/75 transition-colors hover:border-accent-quantum hover:text-ink"
            >
              {l.label}
              <ExternalLink className="h-3 w-3" />
            </a>
          ))}
        </div>
      )}
    </li>
  );
}

export function seo(title: string, description: string, extra: { property?: string; name?: string; content: string }[] = []) {
  return {
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      ...extra,
    ],
  };
}
