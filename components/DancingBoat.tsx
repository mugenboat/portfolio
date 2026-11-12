import { useEffect, useState } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import sprite from "@/assets/boat-wai.png";
import { useLanguage } from "./LanguageContext";

const FRAMES = 12;
const HIDE_KEY = "boat-dancer-hidden";

/** Small pixel Boat doing a Thai wai (สวัสดี) in the bottom-right corner. */
export default function DancingBoat() {
  const { t } = useLanguage();
  const [hidden, setHidden] = useState(true); // start hidden to avoid a flash before storage is read
  const [bubble, setBubble] = useState(false);

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

  if (hidden) return null;

  return (
    <div className="fixed bottom-3 right-3 z-40 flex flex-col items-end sm:bottom-5 sm:right-5">
      {bubble && (
        <div className="relative mb-2 border-4 border-ink bg-paper px-3 py-2 shadow-px-sm">
          <button
            type="button"
            onClick={hide}
            aria-label={t.dancer.hide}
            title={t.dancer.hide}
            className="absolute -right-3 -top-3 border-2 border-ink bg-pink p-0.5"
          >
            <XMarkIcon className="h-3 w-3" />
          </button>
          <p className="font-pixel text-[10px] uppercase">{t.dancer.hi}</p>
          <a
            href="#contact"
            onClick={() => setBubble(false)}
            className="mt-1.5 block font-pixel text-[10px] uppercase text-green hover:underline"
          >
            {t.dancer.cta}
          </a>
          <span
            aria-hidden
            className="absolute -bottom-[10px] right-8 h-3 w-3 rotate-45 border-b-4 border-r-4 border-ink bg-paper"
          />
        </div>
      )}
      <button
        type="button"
        onClick={() => setBubble(b => !b)}
        aria-label={t.dancer.hi}
        aria-expanded={bubble}
        className="boat-dancer pixelated block"
        style={{ backgroundImage: `url(${sprite.src})`, ["--frames" as string]: FRAMES }}
      />
    </div>
  );
}
