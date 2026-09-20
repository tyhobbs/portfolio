import { ICON_SPRITE } from "@/data/icon-sprite";

// One inline SVG sprite for every brand icon, so the page makes no
// external requests for icons.
export function IconSprite() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      style={{ display: "none" }}
      aria-hidden="true"
      dangerouslySetInnerHTML={{ __html: ICON_SPRITE }}
    />
  );
}
