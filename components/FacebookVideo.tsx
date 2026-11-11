import { useEffect, useRef, useState } from "react";

/**
 * Facebook video embed that always fills a fixed 3:4 box.
 * The plugin needs explicit pixel width/height to size its player (and show the
 * video's own cover), so we measure the box and pass them in. Facebook's player
 * shows the cover image and starts playing on a single click.
 */
export default function FacebookVideo({ url, title }: { url: string; title: string }) {
  const box = useRef<HTMLDivElement>(null);
  const [size, setSize] = useState<{ w: number; h: number } | null>(null);

  useEffect(() => {
    const el = box.current;
    if (!el) return;
    const measure = () => {
      const w = Math.round(el.clientWidth);
      const h = Math.round(el.clientHeight);
      // only re-size (and reload the iframe) on meaningful changes
      setSize(prev => (prev && Math.abs(prev.w - w) < 24 && Math.abs(prev.h - h) < 24 ? prev : { w, h }));
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  return (
    <div ref={box} className="aspect-[3/4] w-full overflow-hidden bg-black">
      {size && (
        <iframe
          title={title}
          src={`https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(url)}&show_text=false&width=${size.w}&height=${size.h}`}
          width={size.w}
          height={size.h}
          loading="lazy"
          allowFullScreen
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          className="block border-0"
          style={{ width: size.w, height: size.h }}
        />
      )}
    </div>
  );
}
