import { ReactNode, useEffect, useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useLanguage } from "./LanguageContext";
import { Lang } from "@/lib/content";

function LangToggle() {
  const { lang, setLang } = useLanguage();
  const options: { value: Lang; label: string }[] = [
    { value: "en", label: "EN" },
    { value: "th", label: "TH" },
  ];
  return (
    <div
      className="inline-flex rounded-full border border-line bg-white p-0.5 text-xs font-semibold"
      role="group"
      aria-label="Language"
    >
      {options.map(o => (
        <button
          key={o.value}
          type="button"
          onClick={() => setLang(o.value)}
          aria-pressed={lang === o.value}
          className={`rounded-full px-3 py-1 transition-colors ${
            lang === o.value ? "bg-forest text-white" : "text-muted hover:text-ink"
          }`}
        >
          {o.label}
        </button>
      ))}
    </div>
  );
}

export default function Layout({ children }: { children: ReactNode }) {
  const { t } = useLanguage();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#experience", label: t.nav.experience },
    { href: "#work", label: t.nav.work },
    { href: "#skills", label: t.nav.skills },
    { href: "#contact", label: t.nav.contact },
  ];

  return (
    <div className="min-h-screen bg-paper text-ink">
      <header
        className={`sticky top-0 z-50 transition-all ${
          scrolled ? "border-b border-line bg-paper/90 backdrop-blur" : "bg-transparent"
        }`}
      >
        <nav className="container-page flex h-16 items-center justify-between">
          <a href="#top" className="font-display text-lg font-bold tracking-tight">
            Thanate<span className="text-accent">.</span>
          </a>
          <div className="hidden items-center gap-7 md:flex">
            {links.map(l => (
              <a key={l.href} href={l.href} className="nav-link">
                {l.label}
              </a>
            ))}
            <LangToggle />
          </div>
          <div className="flex items-center gap-3 md:hidden">
            <LangToggle />
            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              className="rounded-md p-1 text-ink"
            >
              <Bars3Icon className="h-7 w-7" />
            </button>
          </div>
        </nav>
      </header>

      <div
        className={`fixed inset-0 z-[60] bg-paper transition-transform duration-300 md:hidden ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
        aria-hidden={!open}
      >
        <button
          type="button"
          onClick={() => setOpen(false)}
          aria-label="Close menu"
          className="absolute right-5 top-4 p-1"
        >
          <XMarkIcon className="h-7 w-7" />
        </button>
        <div className="flex h-full flex-col items-center justify-center gap-8">
          {links.map(l => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="font-display text-2xl font-semibold"
            >
              {l.label}
            </a>
          ))}
        </div>
      </div>

      <main id="top">{children}</main>

      <footer className="border-t border-line py-8">
        <div className="container-page flex flex-col items-center justify-between gap-2 text-sm text-muted sm:flex-row">
          <p>
            © {new Date().getFullYear()} {t.footer}
          </p>
          <p>Next.js · Tailwind CSS</p>
        </div>
      </footer>
    </div>
  );
}
