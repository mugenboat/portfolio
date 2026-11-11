import { ReactNode, useRef, useState } from "react";
import Image, { StaticImageData } from "next/image";
import {
  ArrowUpRightIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  EnvelopeIcon,
  PlayIcon,
} from "@heroicons/react/24/outline";
import { useLanguage } from "@/components/LanguageContext";
import QuestLog from "@/components/QuestLog";
import { contact, GalleryTab, marketingSkills, tools } from "@/lib/content";

import profile from "@/public/profile.jpg";
import profilePixel from "@/assets/profile-pixel.png";
import calendar from "@/assets/work/content-calendar.jpg";
import tracker from "@/assets/work/performance-tracker.jpg";
import design1 from "@/assets/work/design-1.jpg";
import design2 from "@/assets/work/design-2.jpg";
import design3 from "@/assets/work/design-3.jpg";
import design4 from "@/assets/work/design-4.jpg";
import design5 from "@/assets/work/design-5.jpg";
import design6 from "@/assets/work/design-6.jpg";
import video1 from "@/assets/work/video-1.jpg";
import video2 from "@/assets/work/video-2.jpg";
import video3 from "@/assets/work/video-3.jpg";

const designs = [design1, design2, design3, design4, design5, design6];
const videoThumbs = [video1, video2, video3];
const facebookVideos = [
  "https://www.facebook.com/chongnomst/videos/1780449818702034/",
  "https://www.facebook.com/chongnomst/videos/2119944344786195/",
  "https://www.facebook.com/chongnomst/videos/1926046817475666",
  "https://www.facebook.com/chongnomst/videos/2205632489531585/",
  "https://www.facebook.com/chongnomst/videos/738362913227850/",
  "https://www.facebook.com/chongnomst/videos/307033649895047",
  "https://www.facebook.com/reel/863562169618474",
];
const stepColors = ["bg-sun", "bg-pink", "bg-sky", "bg-green text-white"];

/* ---------- small building blocks ---------- */

function WinBox({ title, children, className = "" }: { title: string; children: ReactNode; className?: string }) {
  return (
    <div className={`box ${className}`}>
      <div className="win-bar">
        <span>{title}</span>
        <span aria-hidden>
          <i />
          <i />
        </span>
      </div>
      {children}
    </div>
  );
}

function ZoomImage({ src, alt, hint, imgClass = "h-auto w-full" }: { src: StaticImageData; alt: string; hint: string; imgClass?: string }) {
  return (
    <a href={src.src} target="_blank" rel="noopener noreferrer" title={hint} className="block overflow-hidden">
      <Image src={src} alt={alt} placeholder="blur" className={imgClass} sizes="(min-width: 1024px) 60vw, 100vw" />
    </a>
  );
}

function Carousel({ children, label }: { children: ReactNode; label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const scroll = (dir: 1 | -1) => {
    const el = ref.current;
    if (el) el.scrollBy({ left: dir * el.clientWidth * 0.8, behavior: "smooth" });
  };
  const arrow = "absolute top-1/2 z-10 hidden -translate-y-1/2 border-4 border-ink bg-sun p-2 shadow-px-sm hover:bg-paper md:block";
  return (
    <div className="relative">
      <div
        ref={ref}
        role="region"
        aria-label={label}
        className="-mx-5 flex snap-x snap-mandatory gap-5 overflow-x-auto px-5 pb-5 pt-1 sm:-mx-8 sm:px-8"
      >
        {children}
      </div>
      <button type="button" onClick={() => scroll(-1)} aria-label="Previous" className={`${arrow} -left-5`}>
        <ChevronLeftIcon className="h-5 w-5" />
      </button>
      <button type="button" onClick={() => scroll(1)} aria-label="Next" className={`${arrow} -right-5`}>
        <ChevronRightIcon className="h-5 w-5" />
      </button>
    </div>
  );
}

const slide = "w-[72%] shrink-0 snap-start border-4 border-ink bg-paper shadow-px sm:w-[44%] lg:w-[29%]";

/* ---------- page ---------- */

export default function Home() {
  const { t } = useLanguage();
  const [tab, setTab] = useState<GalleryTab>("videos");
  const [playing, setPlaying] = useState<number | null>(null);

  const openGallery = (next: GalleryTab) => {
    setTab(next);
    document.getElementById("gallery")?.scrollIntoView({ behavior: "smooth" });
  };

  const workThumbs: ReactNode[] = [
    <div key="v" className="grid h-full grid-cols-3 gap-1 bg-ink p-1">
      {videoThumbs.map((v, i) => (
        <Image key={i} src={v} alt="" className="h-full w-full object-cover" sizes="120px" />
      ))}
    </div>,
    <Image key="c" src={calendar} alt="" className="h-full w-full object-cover object-top" sizes="360px" />,
    <Image key="t" src={tracker} alt="" className="h-full w-full object-cover object-left-top" sizes="360px" />,
    <div key="d" className="grid h-full grid-cols-3 gap-1 bg-ink p-1">
      {[design1, design3, design4].map((d, i) => (
        <Image key={i} src={d} alt="" className="h-full w-full object-cover" sizes="120px" />
      ))}
    </div>,
    <div key="i" className="flex h-full flex-col items-center justify-center gap-2 bg-pink font-pixel text-sm">
      INFLUENCER<span className="text-xs">★ ★ ★</span>
    </div>,
    <div key="a" className="flex h-full items-center justify-center bg-sky text-center font-pixel text-sm leading-relaxed">
      META +<br />TIKTOK ADS
    </div>,
  ];
  const workTargets: (GalleryTab | "case" | null)[] = ["videos", "calendar", "tracker", "designs", null, null];

  return (
    <>
      {/* ===== Hero ===== */}
      <section className="pb-20 pt-8 md:pb-24 md:pt-12">
        <div className="container-page grid items-center gap-14 lg:grid-cols-[1.15fr_1fr]">
          <div>
            <span className="inline-block bg-ink px-2.5 py-2 font-pixel text-[9px] uppercase text-sun sm:text-[10px]">
              ▶ {t.hero.tag}
            </span>
            <h1 className="px-title mt-6 text-[34px] sm:text-5xl lg:text-[58px]">
              {t.hero.line1}
              <span className="mt-2 block text-green [text-shadow:4px_4px_0_#17402f]">{t.hero.line2}</span>
            </h1>
            <p className="mt-6 max-w-lg text-xl leading-snug">{t.hero.lead}</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#work" className="btn-px">
                {t.hero.start}
              </a>
              <a href="#contact" className="btn-px alt">
                {t.hero.connect}
              </a>
            </div>
            <div className="mt-8 flex flex-wrap gap-3 font-pixel text-[9px] uppercase">
              <a className="border-[3px] border-ink bg-paper px-2 py-2 hover:bg-sun" href={contact.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a className="border-[3px] border-ink bg-paper px-2 py-2 hover:bg-sun" href={contact.lemon8} target="_blank" rel="noopener noreferrer">Lemon8</a>
              <a className="border-[3px] border-ink bg-paper px-2 py-2 hover:bg-sun" href={`mailto:${contact.email}`}>Email</a>
            </div>
          </div>

          {/* character card + folders */}
          <div className="relative mx-auto h-[400px] w-[320px] sm:h-[470px] sm:w-[440px]">
            <div className="box absolute left-[30px] top-[36px] w-[260px] sm:left-[40px] sm:w-[360px]">
              <div className="win-bar">
                <span>boat.png</span>
                <span aria-hidden><i /><i /></span>
              </div>
              <Image src={profilePixel} alt="Thanate Janyaswasdi (Boat)" priority className="pixelated block h-[230px] w-full object-cover sm:h-[320px]" sizes="360px" />
              <div className="border-t-4 border-ink bg-sun py-2.5 text-center font-pixel text-[10px] sm:text-[11px]">
                THANATE (BOAT)
              </div>
            </div>
            <button type="button" onClick={() => document.getElementById("case-study")?.scrollIntoView({ behavior: "smooth" })} className="folder -left-8 -top-2 sm:-left-10">
              <i className="bg-pink" />
              <em>{t.hero.folders.campaigns}</em>
            </button>
            <button type="button" onClick={() => openGallery("calendar")} className="folder -right-4 top-16 sm:-right-10">
              <i className="bg-sun" />
              <em>{t.hero.folders.calendar}</em>
            </button>
            <button type="button" onClick={() => openGallery("videos")} className="folder -left-6 top-56 sm:-left-12 sm:top-60">
              <i className="bg-sky" />
              <em>{t.hero.folders.videos}</em>
            </button>
            <button type="button" onClick={() => openGallery("designs")} className="folder -right-6 top-64 sm:-right-12 sm:top-72">
              <i className="bg-grape" />
              <em>{t.hero.folders.designs}</em>
            </button>
            <span aria-hidden className="absolute bottom-2 left-8 h-7 w-7 border-4 border-ink bg-sun shadow-[inset_-4px_-4px_0_#e0a800]" />
            <span aria-hidden className="absolute bottom-0 left-20 h-7 w-7 border-4 border-ink bg-sun shadow-[inset_-4px_-4px_0_#e0a800]" />
          </div>
        </div>
      </section>

      {/* ===== Intro + work ===== */}
      <section id="work" className="section-band scroll-mt-16 py-16 md:py-20">
        <div className="container-page">
          <div className="grid items-center gap-10 md:grid-cols-[300px_1fr]">
            <WinBox title="profile.jpg" className="mx-auto w-full max-w-[300px]">
              <Image src={profile} alt="Thanate Janyaswasdi" className="block aspect-square w-full object-cover" sizes="300px" />
            </WinBox>
            <div className="box p-6 sm:p-8">
              <h2 className="px-title text-xl sm:text-2xl">{t.intro.title}</h2>
              <p className="mt-4 text-lg leading-relaxed">{t.intro.p1}</p>
              <p className="mt-3 text-lg leading-relaxed text-muted">{t.intro.p2}</p>
            </div>
          </div>

          <h2 className="section-title mt-20">{t.work.title}</h2>
          <p className="section-sub">
            <span className="bg-sun px-1.5 text-ink">{t.work.sub}</span> ↓
          </p>
          <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {t.work.cards.map((c, i) => {
              const target = workTargets[i];
              const inner = (
                <>
                  <div className="h-40 overflow-hidden border-b-4 border-ink bg-white">{workThumbs[i]}</div>
                  <div className="p-4">
                    <p className="font-pixel text-[9px] text-green">LV.0{i + 1}</p>
                    <h3 className="mt-1.5 font-pixel text-[11px] uppercase leading-relaxed">{c.title}</h3>
                    <p className="mt-2 leading-snug text-muted">{c.body}</p>
                  </div>
                </>
              );
              return target ? (
                <button
                  key={c.title}
                  type="button"
                  onClick={() => openGallery(target as GalleryTab)}
                  className="box text-left transition-transform hover:-translate-y-1"
                >
                  {inner}
                </button>
              ) : (
                <div key={c.title} className="box">
                  {inner}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== Experience ===== */}
      <section id="experience" className="scroll-mt-16 py-16 md:py-20">
        <div className="container-page">
          <h2 className="section-title">{t.experience.title}</h2>
          <p className="section-sub">{t.experience.sub}</p>
          <QuestLog />
        </div>
      </section>

      {/* ===== Case study ===== */}
      <section id="case-study" className="section-band scroll-mt-16 py-16 md:py-20">
        <div className="container-page grid items-start gap-10 lg:grid-cols-2">
          <WinBox title="case_study_01/">
            <div className="grid grid-cols-3 gap-2.5 p-3">
              {[design2, design1, design3, design4, design5, design6].map((d, i) => (
                <a key={i} href={d.src} target="_blank" rel="noopener noreferrer" className="block border-[3px] border-ink">
                  <Image src={d} alt={`Grow Together ${i + 1}`} placeholder="blur" className="aspect-[4/5] w-full object-cover" sizes="(min-width: 1024px) 180px, 30vw" />
                </a>
              ))}
            </div>
          </WinBox>
          <div>
            <span className="inline-block border-[3px] border-ink bg-pink px-2 py-1.5 font-pixel text-[9px] uppercase sm:text-[10px]">
              ★ {t.caseStudy.label}
            </span>
            <h2 className="px-title mt-4 text-2xl sm:text-3xl">{t.caseStudy.title}</h2>
            <p className="mt-2 font-pixel text-[10px] uppercase text-green">{t.caseStudy.brand}</p>
            <div className="box mt-5 p-4">
              <p className="font-pixel text-[10px] uppercase">
                <span className="text-green">!</span> {t.caseStudy.quest}
              </p>
              <p className="mt-2 text-lg leading-snug">{t.caseStudy.questBody}</p>
            </div>
            <div className="box mt-5 p-4">
              <p className="font-pixel text-[10px] uppercase">
                <span className="text-green">⚔</span> {t.caseStudy.strategy}
              </p>
              <p className="mt-2 text-lg leading-snug">{t.caseStudy.strategyBody}</p>
            </div>
            <ol className="mt-5 grid grid-cols-4 gap-2.5">
              {t.caseStudy.steps.map((s, i) => (
                <li key={s} className={`border-4 border-ink px-1 py-3 text-center font-pixel text-[8px] uppercase sm:text-[9px] ${stepColors[i]}`}>
                  {i + 1} {s}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* ===== Gallery ===== */}
      <section id="gallery" className="scroll-mt-16 py-16 md:py-20">
        <div className="container-page">
          <h2 className="section-title">{t.gallery.title}</h2>
          <p className="section-sub !mb-8">{t.gallery.sub}</p>

          <div role="tablist" aria-label={t.gallery.title} className="mb-6 grid grid-cols-2 gap-3 sm:flex sm:flex-wrap sm:justify-center">
            {(Object.keys(t.gallery.tabs) as GalleryTab[]).map(k => (
              <button
                key={k}
                type="button"
                role="tab"
                id={`tab-${k}`}
                aria-selected={tab === k}
                aria-controls="gallery-panel"
                onClick={() => setTab(k)}
                className={`border-4 border-ink px-3 py-2.5 font-pixel text-[9px] uppercase transition-transform sm:text-[10px] ${
                  tab === k ? "translate-x-1 translate-y-1 bg-ink text-sun" : "bg-paper shadow-px-sm hover:bg-sun"
                }`}
              >
                {t.gallery.tabs[k]}
              </button>
            ))}
          </div>

          <div id="gallery-panel" role="tabpanel" aria-labelledby={`tab-${tab}`}>
            <p className="mx-auto mb-8 max-w-2xl text-center text-muted">{t.gallery.desc[tab]}</p>

            {tab === "videos" && (
              <>
                <Carousel label={t.gallery.tabs.videos}>
                  {facebookVideos.map((url, i) => (
                    <div key={url} className={`${slide} relative overflow-hidden`}>
                      {playing === i ? (
                        <iframe
                          title={`${t.gallery.tabs.videos} ${i + 1}`}
                          src={`https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(url)}&show_text=false&width=360&autoplay=true`}
                          allowFullScreen
                          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                          className="aspect-[9/12] w-full bg-ink"
                        />
                      ) : (
                        <button
                          type="button"
                          onClick={() => setPlaying(i)}
                          aria-label={`${t.gallery.play} ${i + 1}`}
                          className="group flex aspect-[9/12] w-full flex-col items-center justify-center gap-5 bg-ink text-paper [background-image:repeating-linear-gradient(0deg,rgba(255,255,255,0.04)_0_2px,transparent_2px_4px)]"
                        >
                          <span className="border-4 border-paper bg-sun p-4 text-ink shadow-[4px_4px_0_#3fa66b] transition-transform group-hover:scale-110 group-active:translate-x-1 group-active:translate-y-1">
                            <PlayIcon className="h-8 w-8" />
                          </span>
                          <span className="font-pixel text-[10px] uppercase">
                            {t.gallery.play} {String(i + 1).padStart(2, "0")}
                          </span>
                        </button>
                      )}
                    </div>
                  ))}
                </Carousel>
                <p className="mt-3 text-center">
                  <a href={contact.brandFacebook} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 font-pixel text-[10px] uppercase text-green hover:underline">
                    {t.gallery.watchOn} <ArrowUpRightIcon className="h-3.5 w-3.5" />
                  </a>
                </p>
              </>
            )}

            {tab === "designs" && (
              <Carousel label={t.gallery.tabs.designs}>
                {designs.map((d, i) => (
                  <div key={i} className={slide}>
                    <ZoomImage src={d} alt={`${t.gallery.tabs.designs} ${i + 1}`} hint={t.gallery.open} imgClass="aspect-[4/5] w-full object-cover" />
                  </div>
                ))}
              </Carousel>
            )}

            {tab === "calendar" && (
              <WinBox title="content_calendar.xlsx" className="mx-auto max-w-4xl">
                <ZoomImage src={calendar} alt={t.gallery.tabs.calendar} hint={t.gallery.open} />
              </WinBox>
            )}

            {tab === "tracker" && (
              <WinBox title="performance_tracker.xlsx" className="mx-auto max-w-4xl">
                <ZoomImage src={tracker} alt={t.gallery.tabs.tracker} hint={t.gallery.open} />
              </WinBox>
            )}
          </div>
        </div>
      </section>

      {/* ===== Inventory ===== */}
      <section id="inventory" className="section-band scroll-mt-16 py-16 md:py-20">
        <div className="container-page">
          <h2 className="section-title">{t.inventory.title}</h2>
          <p className="section-sub">{t.inventory.sub}</p>
          <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            <WinBox title={t.inventory.skills}>
              <div className="flex flex-wrap gap-2 p-5">
                {marketingSkills.map(s => (
                  <span key={s} className="chip">{s}</span>
                ))}
              </div>
            </WinBox>
            <WinBox title={t.inventory.tools}>
              <div className="flex flex-wrap gap-2 p-5">
                {tools.map(s => (
                  <span key={s} className="chip">{s}</span>
                ))}
              </div>
            </WinBox>
            <WinBox title={t.inventory.eduFile} className="md:col-span-2 lg:col-span-1">
              <div className="p-5 leading-snug">
                <span className="block font-pixel text-[8px] uppercase text-green">{t.inventory.education}</span>
                <p className="mt-1">{t.inventory.degree}</p>
                <p className="mt-4 text-muted">{t.inventory.languages}</p>
              </div>
            </WinBox>
          </div>
        </div>
      </section>

      {/* ===== Contact ===== */}
      <section id="contact" className="scroll-mt-16 border-t-4 border-ink bg-ink py-20 text-center text-paper md:py-24">
        <div className="container-page">
          <h2 className="px-title text-3xl leading-snug sm:text-5xl">
            {t.contactSection.line1}
            <span className="block text-sun">{t.contactSection.line2}</span>
          </h2>
          <p className="mt-5 font-pixel text-[10px] uppercase text-green sm:text-xs">{t.contactSection.continue}</p>
          <p className="mx-auto mt-5 max-w-xl text-lg text-paper/80">{t.contactSection.body}</p>
          <a href={`mailto:${contact.email}`} className="btn-px mt-8 inline-flex items-center gap-2 !normal-case shadow-[6px_6px_0_#3fa66b]">
            <EnvelopeIcon className="h-4 w-4" /> {contact.email}
          </a>
          <div className="mt-10 flex flex-wrap justify-center gap-4 font-pixel text-[10px] uppercase">
            <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-sun">LinkedIn</a>
            <a href={contact.lemon8} target="_blank" rel="noopener noreferrer" className="hover:text-sun">Lemon8</a>
            <a href={contact.github} target="_blank" rel="noopener noreferrer" className="hover:text-sun">GitHub</a>
          </div>
          <p className="mt-8 text-sm text-paper/60">{t.contactSection.location}</p>
        </div>
      </section>
    </>
  );
}
