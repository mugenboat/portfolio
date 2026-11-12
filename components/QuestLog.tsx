import { useEffect, useRef, useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { useLanguage } from "./LanguageContext";

/** Work experience as a horizontal row of cards with prev/next buttons. */
export default function QuestLog() {
  const { t } = useLanguage();
  const jobs = t.experience.jobs;
  const track = useRef<HTMLOListElement>(null);
  const [active, setActive] = useState(0);

  // keep the counter in sync when the user swipes / scrolls manually (after scrolling settles)
  useEffect(() => {
    const el = track.current;
    if (!el) return;
    let timer: ReturnType<typeof setTimeout>;
    const settle = () => {
      const cards = Array.from(el.children) as HTMLElement[];
      const pad = parseFloat(getComputedStyle(el).paddingLeft) || 0;
      const pos = (c: HTMLElement) => c.offsetLeft - cards[0].offsetLeft;
      let best = 0;
      cards.forEach((c, i) => {
        if (Math.abs(pos(c) - el.scrollLeft) < Math.abs(pos(cards[best]) - el.scrollLeft)) best = i;
      });
      if (el.scrollLeft + el.clientWidth >= el.scrollWidth - pad - 4) best = cards.length - 1;
      setActive(best);
    };
    const onScroll = () => {
      clearTimeout(timer);
      timer = setTimeout(settle, 120);
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      clearTimeout(timer);
      el.removeEventListener("scroll", onScroll);
    };
  }, []);

  const goTo = (i: number) => {
    const el = track.current;
    if (!el) return;
    const next = Math.max(0, Math.min(jobs.length - 1, i));
    const cards = Array.from(el.children) as HTMLElement[];
    el.scrollTo({ left: cards[next].offsetLeft - cards[0].offsetLeft, behavior: "smooth" });
    setActive(next);
  };

  const btn =
    "border-4 border-ink bg-sun p-2.5 shadow-px-sm transition-transform hover:bg-paper active:translate-x-1 active:translate-y-1 active:shadow-none disabled:cursor-not-allowed disabled:bg-paper disabled:opacity-40";

  return (
    <div>
      <ol
        ref={track}
        className="-mx-5 flex snap-x snap-mandatory scroll-px-5 gap-6 overflow-x-auto px-5 pb-5 pt-1 sm:-mx-8 sm:scroll-px-8 sm:px-8 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {jobs.map((job, i) => (
          <li
            key={job.period + job.role}
            className="box flex w-[88%] shrink-0 snap-start flex-col sm:w-[70%] lg:w-[calc(50%-12px)]"
            aria-current={i === active ? "true" : undefined}
          >
            <div className="flex flex-wrap items-center justify-between gap-2 border-b-4 border-ink bg-forest px-4 py-2 text-white">
              <span className="font-pixel text-[10px] uppercase sm:text-[11px]">
                <span className="text-sun">LV.{String(jobs.length - i).padStart(2, "0")}</span> · {job.period}
              </span>
              {i === 0 && (
                <span className="border-2 border-ink bg-sun px-1.5 py-0.5 font-pixel text-[9px] uppercase text-ink">
                  ▶ Now playing
                </span>
              )}
            </div>
            <div className="flex-1 p-5 sm:p-6">
              <h3 className="px-title text-base sm:text-lg">{job.role}</h3>
              <p className="mt-1.5 text-muted">{job.company}</p>
              <ul className="mt-4 space-y-2 leading-snug">
                {job.bullets.map(b => (
                  <li key={b} className="flex gap-3">
                    <span aria-hidden className="mt-2 h-2 w-2 shrink-0 bg-green" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>

      <div className="mt-4 flex items-center justify-center gap-4">
        <button type="button" onClick={() => goTo(active - 1)} disabled={active === 0} aria-label="Previous" className={btn}>
          <ChevronLeftIcon className="h-5 w-5" />
        </button>
        <div className="flex items-center gap-2" role="tablist" aria-label={t.experience.title}>
          {jobs.map((job, i) => (
            <button
              key={job.period}
              type="button"
              role="tab"
              aria-selected={i === active}
              aria-label={`${job.role} (${job.period})`}
              onClick={() => goTo(i)}
              className={`h-3.5 w-3.5 border-[3px] border-ink transition-colors ${i === active ? "bg-green" : "bg-paper hover:bg-sun"}`}
            />
          ))}
        </div>
        <button type="button" onClick={() => goTo(active + 1)} disabled={active === jobs.length - 1} aria-label="Next" className={btn}>
          <ChevronRightIcon className="h-5 w-5" />
        </button>
      </div>
      <p className="mt-3 text-center font-pixel text-[10px] uppercase text-muted">
        {active + 1} / {jobs.length}
      </p>
    </div>
  );
}
