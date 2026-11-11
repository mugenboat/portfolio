import { ReactNode, useEffect, useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useLanguage } from "./LanguageContext";
import { Lang } from "@/lib/content";

function LangToggle() {
  const { lang, setLang } = useLanguage();
  const options: Lang[] = ["en", "th"];
  return (
    <div
      className="inline-flex border-4 border-ink bg-paper font-pixel text-[10px] shadow-px-sm"
      role="group"
      aria-label="Language"
    >
      {options.map(o => (
        <button
          key={o}
          type="button"
          onClick={() => setLang(o)}
          aria-pressed={lang === o}
          className={`px-2.5 py-1.5 uppercase ${lang === o ? "bg-ink text-sun" : "hover:text-green"}`}
        >
          {o}
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
    { href: "#work", label: t.nav.work },
    { href: "#experience", label: t.nav.experience },
    { href: "#case-study", label: t.nav.caseStudy },
    { href: "#gallery", label: t.nav.gallery },
    { href: "#inventory", label: t.nav.inventory },
    { href: "#contact", label: t.nav.contact },
  ];

  return (
    <div className="min-h-screen">
      <header
        className={`sticky top-0 z-50 transition-colors ${
          scrolled ? "border-b-4 border-ink bg-bg/95 backdrop-blur" : ""
        }`}
      >
        <nav className="container-page flex h-16 items-center justify-between">
          <a href="#top" className="font-pixel text-sm sm:text-base">
            THANATE<span className="text-green">.EXE</span>
          </a>
          <div className="hidden items-center gap-7 lg:flex">
            {links.map(l => (
              <a key={l.href} href={l.href} className="nav-link">
                {l.label}
              </a>
            ))}
            <LangToggle />
          </div>
          <div className="flex items-center gap-3 lg:hidden">
            <LangToggle />
            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              className="border-4 border-ink bg-paper p-1 shadow-px-sm"
            >
              <Bars3Icon className="h-6 w-6" />
            </button>
          </div>
        </nav>
      </header>

      <div
        className={`fixed inset-0 z-[60] bg-bg transition-transform duration-300 lg:hidden ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
        aria-hidden={!open}
      >
        <button
          type="button"
          onClick={() => setOpen(false)}
          aria-label="Close menu"
          className="absolute right-5 top-4 border-4 border-ink bg-paper p-1"
        >
          <XMarkIcon className="h-6 w-6" />
        </button>
        <div className="flex h-full flex-col items-center justify-center gap-8">
          {links.map((l, i) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="font-pixel text-base uppercase hover:text-green"
            >
              <span className="text-green">{i === 0 ? "▶ " : ""}</span>
              {l.label}
            </a>
          ))}
        </div>
      </div>

      <main id="top">{children}</main>

      <footer className="border-t-4 border-forest bg-ink py-6 text-paper/70">
        <div className="container-page flex flex-col items-center justify-between gap-2 font-pixel text-[9px] uppercase sm:flex-row">
          <p>
            © {new Date().getFullYear()} {t.footer}
          </p>
          <p>Next.js · Tailwind CSS</p>
        </div>
      </footer>
    </div>
  );
}
