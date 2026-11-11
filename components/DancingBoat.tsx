import { CSSProperties, useEffect, useState } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import waiSheet from "@/assets/boat-wai.png";
import swordSheet from "@/assets/boat-sword.png";
import { useLanguage } from "./LanguageContext";

const HIDE_KEY = "boat-dancer-hidden";

/**
 * Pixel Boat in the bottom-right corner: loops a Thai wai (สวัสดี);
 * clicking him plays a big-sword slash once, then shows a speech bubble.
 * Both sprite sheets use 112x96 frames with the character at the same spot.
 */
export default function DancingBoat() {
  const { t } = useLanguage();
  const [hidden, setHidden] = useState(true); // start hidden to avoid a flash before storage is read
  const [bubble, setBubble] = useState(false);
  const [attacking, setAttacking] = useState(false);

  useEffect(() => {
    let wasHidden = false;
    try {
      wasHidden = window.sessionStorage.getItem(HIDE_KEY) === "1";
    } catch {
      // storage unavailable
    }
    setHidden(wasHidden);
  }, []);

  const hide = () => {
    setHidden(true);
    try {
      window.sessionStorage.setItem(HIDE_KEY, "1");
    } catch {
      // ignore
    }
  };

  const onClick = () => {
    const reduce = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setBubble(b => !b);
      return;
    }
    setBubble(false);
    setAttacking(true);
  };

  if (hidden) return null;

  const vars = {
    "--wai": `url(${waiSheet.src})`,
    "--sword": `url(${swordSheet.src})`,
  } as CSSProperties;

  return (
    <div className="boat-wrap fixed bottom-2 right-0 z-40 flex flex-col items-end" style={vars}>
      {bubble && (
        <div className="boat-bubble relative mb-1 border-4 border-ink bg-paper px-3 py-2 shadow-px-sm">
          <button
            type="button"
            onClick={hide}
            aria-label={t.dancer.hide}
            title={t.dancer.hide}
            className="absolute -right-3 -top-3 border-2 border-ink bg-pink p-0.5"
          >
            <XMarkIcon className="h-3 w-3" />
          </button>
          <p className="font-pixel text-[9px] uppercase">{t.dancer.hi}</p>
          <a
            href="#contact"
            onClick={() => setBubble(false)}
            className="mt-1.5 block font-pixel text-[9px] uppercase text-green hover:underline"
          >
            {t.dancer.cta}
          </a>
          <span
            aria-hidden
            className="absolute -bottom-[10px] right-8 h-3 w-3 rotate-45 border-b-4 border-r-4 border-ink bg-paper"
          />
        </div>
      )}
      <div
        className={`boat-sprite pixelated ${attacking ? "is-attacking" : ""}`}
        onAnimationEnd={e => {
          if (e.animationName === "boat-sword") {
            setAttacking(false);
            setBubble(true);
          }
        }}
      >
        <button
          type="button"
          onClick={onClick}
          aria-label={t.dancer.hi}
          title={t.dancer.tap}
          className="boat-hit"
        />
      </div>
    </div>
  );
}
