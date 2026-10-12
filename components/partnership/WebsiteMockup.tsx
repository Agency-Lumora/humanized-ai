import Image from "next/image";

type WebsiteMockupProps = {
  brand: string;
  navItems: readonly string[];
  ctaLabel: string;
  headline: string;
  body?: string;
  actionLabel: string;
  imageSrc: string;
  imageAlt: string;
  accentColor?: string;
  className?: string;
};

/**
 * A small, reusable "browser chrome" website preview card — used for the
 * hero's floating mockup and the portfolio showcase's three previews. Built
 * entirely from HTML/CSS (not a flattened screenshot), so each preview can
 * carry its own brand, headline, and image while staying visually
 * consistent across the page.
 */
export function WebsiteMockup({
  brand,
  navItems,
  ctaLabel,
  headline,
  body,
  actionLabel,
  imageSrc,
  imageAlt,
  accentColor = "#2A211D",
  className = "",
}: WebsiteMockupProps) {
  return (
    <div
      className={`overflow-hidden rounded-xl border border-[#806C5D]/20 bg-white shadow-[0_24px_60px_rgba(42,33,29,0.14)] ${className}`}
    >
      {/* Browser chrome */}
      <div className="flex items-center gap-3 border-b border-[#806C5D]/10 bg-[#FBF7F0] px-3.5 py-2.5">
        <div className="flex gap-1.5" aria-hidden="true">
          <span className="h-2 w-2 rounded-full bg-[#E3B7A0]" />
          <span className="h-2 w-2 rounded-full bg-[#E8D29A]" />
          <span className="h-2 w-2 rounded-full bg-[#A9C9A4]" />
        </div>
        <span className="font-serif text-[11px] tracking-wide text-[#2A211D]">{brand}</span>
        <nav className="ml-auto hidden items-center gap-2.5 sm:flex" aria-hidden="true">
          {navItems.map((item) => (
            <span key={item} className="font-mono text-[7px] uppercase tracking-[0.1em] text-[#2A211D]/45">
              {item}
            </span>
          ))}
        </nav>
        <span className="hidden shrink-0 rounded-full bg-[#2A211D] px-2.5 py-1 font-mono text-[7px] uppercase tracking-[0.1em] text-white sm:inline-block">
          {ctaLabel}
        </span>
      </div>

      {/* Body */}
      <div className="grid grid-cols-2 gap-3 p-4">
        <div className="flex flex-col justify-center">
          <h4 className="font-serif text-[14px] leading-[1.15] text-[#2A211D] sm:text-[15px]">{headline}</h4>
          {body && (
            <p className="mt-1.5 text-[8px] leading-[1.45] text-[#6B584B]">{body}</p>
          )}
          <span
            className="mt-2.5 inline-block w-fit rounded-full px-2.5 py-1 font-mono text-[7px] uppercase tracking-[0.1em] text-white"
            style={{ backgroundColor: accentColor }}
          >
            {actionLabel}
          </span>
        </div>
        <div className="relative aspect-[4/3] overflow-hidden rounded-md">
          <Image src={imageSrc} alt={imageAlt} fill sizes="220px" className="object-cover" />
        </div>
      </div>
    </div>
  );
}

export default WebsiteMockup;
