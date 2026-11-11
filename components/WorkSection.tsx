import { ReactNode, useRef, useState } from "react";
import Image, { StaticImageData } from "next/image";
import {
  ArrowUpRightIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  PlayIcon,
} from "@heroicons/react/24/outline";
import { useLanguage } from "./LanguageContext";
import { contact } from "@/lib/content";

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

type TabKey = "calendar" | "tracker" | "design" | "video";

function ExternalLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1 font-medium text-accent underline-offset-4 hover:underline"
    >
      {children}
      <ArrowUpRightIcon className="h-3.5 w-3.5" />
    </a>
  );
}

function ZoomImage({
  src,
  alt,
  hint,
  imgClass = "h-auto w-full",
}: {
  src: StaticImageData;
  alt: string;
  hint: string;
  imgClass?: string;
}) {
  return (
    <a
      href={src.src}
      target="_blank"
      rel="noopener noreferrer"
      title={hint}
      className="group block overflow-hidden rounded-xl border border-line bg-white"
    >
      <Image
        src={src}
        alt={alt}
        placeholder="blur"
        className={`${imgClass} transition-transform duration-500 group-hover:scale-[1.02]`}
        sizes="(min-width: 1024px) 66vw, 100vw"
      />
    </a>
  );
}

/** Horizontal, swipeable strip with arrow buttons on larger screens. */
function Carousel({ children, label }: { children: ReactNode; label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const scroll = (dir: 1 | -1) => {
    const el = ref.current;
    if (el) el.scrollBy({ left: dir * el.clientWidth * 0.8, behavior: "smooth" });
  };
  return (
    <div className="relative">
      <div
        ref={ref}
        role="region"
        aria-label={label}
        className="-mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth px-5 pb-4 sm:-mx-8 sm:px-8 [scrollbar-width:thin]"
      >
        {children}
      </div>
      <button
        type="button"
        onClick={() => scroll(-1)}
        aria-label="Previous"
        className="absolute -left-4 top-1/2 hidden -translate-y-1/2 rounded-full border border-line bg-white p-2 shadow-md transition hover:text-accent md:block"
      >
        <ChevronLeftIcon className="h-5 w-5" />
      </button>
      <button
        type="button"
        onClick={() => scroll(1)}
        aria-label="Next"
        className="absolute -right-4 top-1/2 hidden -translate-y-1/2 rounded-full border border-line bg-white p-2 shadow-md transition hover:text-accent md:block"
      >
        <ChevronRightIcon className="h-5 w-5" />
      </button>
    </div>
  );
}

const slide = "w-[75%] shrink-0 snap-start sm:w-[45%] lg:w-[30%]";

export default function WorkSection() {
  const { t } = useLanguage();
  const [tab, setTab] = useState<TabKey>("calendar");

  const tabs: { key: TabKey; label: string }[] = [
    { key: "calendar", label: t.work.calendar.title },
    { key: "tracker", label: t.work.tracker.title },
    { key: "design", label: t.work.design.title },
    { key: "video", label: t.work.video.title },
  ];
  const active = t.work[tab];

  return (
    <section id="work" className="scroll-mt-20 bg-white py-16 md:py-24">
      <div className="container-page">
        <h2 className="section-title">{t.work.title}</h2>
        <p className="-mt-6 mb-8 max-w-2xl text-lg text-muted">{t.work.intro}</p>

        <div
          role="tablist"
          aria-label={t.work.title}
          className="mb-8 grid grid-cols-2 gap-2 sm:flex sm:flex-wrap"
        >
          {tabs.map((tb, i) => (
            <button
              key={tb.key}
              type="button"
              role="tab"
              id={`tab-${tb.key}`}
              aria-selected={tab === tb.key}
              aria-controls="work-panel"
              onClick={() => setTab(tb.key)}
              className={`rounded-full border px-4 py-2 text-left text-sm font-semibold transition-colors sm:text-center ${
                tab === tb.key
                  ? "border-forest bg-forest text-white"
                  : "border-line bg-paper text-muted hover:border-accent hover:text-ink"
              }`}
            >
              <span className={tab === tb.key ? "text-mint" : "text-accent"}>0{i + 1}</span>{" "}
              {tb.label}
            </button>
          ))}
        </div>

        <div id="work-panel" role="tabpanel" aria-labelledby={`tab-${tab}`}>
          <p className="mb-6 max-w-2xl text-muted">{active.body}</p>

          {tab === "calendar" && (
            <div className="max-w-4xl">
              <ZoomImage src={calendar} alt={t.work.calendar.title} hint={t.work.open} />
            </div>
          )}

          {tab === "tracker" && (
            <div className="max-w-4xl">
              <ZoomImage src={tracker} alt={t.work.tracker.title} hint={t.work.open} />
            </div>
          )}

          {tab === "design" && (
            <Carousel label={t.work.design.title}>
              {designs.map((d, i) => (
                <div key={i} className={slide}>
                  <ZoomImage
                    src={d}
                    alt={`${t.work.design.title} ${i + 1}`}
                    hint={t.work.open}
                    imgClass="aspect-[4/5] w-full object-cover"
                  />
                </div>
              ))}
            </Carousel>
          )}

          {tab === "video" && (
            <>
              <Carousel label={t.work.video.title}>
                {videoThumbs.map((v, i) => (
                  <a
                    key={`thumb-${i}`}
                    href={contact.brandFacebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${slide} group relative block overflow-hidden rounded-xl border border-line`}
                  >
                    <Image
                      src={v}
                      alt={`${t.work.video.title} ${i + 1}`}
                      placeholder="blur"
                      className="aspect-[9/12] h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(min-width: 1024px) 30vw, 75vw"
                    />
                    <span className="absolute inset-0 flex items-center justify-center bg-ink/0 transition-colors group-hover:bg-ink/25">
                      <span className="rounded-full bg-white/90 p-3 shadow">
                        <PlayIcon className="h-6 w-6 text-forest" />
                      </span>
                    </span>
                  </a>
                ))}
                {facebookVideos.map(url => (
                  <div
                    key={url}
                    className={`${slide} overflow-hidden rounded-xl border border-line bg-paper`}
                  >
                    <iframe
                      title={url}
                      src={`https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(url)}&show_text=false`}
                      loading="lazy"
                      allowFullScreen
                      allow="encrypted-media; picture-in-picture"
                      className="aspect-[9/12] w-full"
                    />
                  </div>
                ))}
              </Carousel>
              <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm">
                <span className="text-muted">{t.work.video.brandLinks}:</span>
                <ExternalLink href={contact.brandFacebook}>Facebook · chongnomst</ExternalLink>
                <span className="text-muted">{t.work.video.personal}:</span>
                <ExternalLink href={contact.lemon8}>Lemon8 · @boattheblur</ExternalLink>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
