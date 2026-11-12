type Variant = "grass" | "bricks" | "coins" | "castle";

/** Repeating pixel-art strip used between page sections. */
export default function PixelDivider({ variant }: { variant: Variant }) {
  return <div aria-hidden className={`pdiv pdiv-${variant}`} />;
}
