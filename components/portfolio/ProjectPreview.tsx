import type { featuredWork } from "@/lib/content";

type Project = (typeof featuredWork)[number];

export function ProjectPreview({ project }: { project: Project }) {
  const isNova = project.title === "Nova Tech Solutions";
  const isBloom = project.title === "Bloom Wellness";

  return (
    <div className="container overflow-hidden rounded-[clamp(0.35rem,1.5cqw,0.75rem)] border border-white/60 bg-white shadow-xl">
      <div className="flex items-center gap-1 border-b border-slate-200 bg-slate-50 px-[clamp(0.5rem,2cqw,0.75rem)] py-[clamp(0.35rem,1.5cqw,0.5rem)]">
        <span className="h-1.5 w-1.5 rounded-full bg-rose-300" />
        <span className="h-1.5 w-1.5 rounded-full bg-amber-300" />
        <span className="h-1.5 w-1.5 rounded-full bg-emerald-300" />
        <div className="ml-1.5 flex h-4 flex-1 items-center rounded-full bg-white px-2 text-[7px] text-slate-400 shadow-sm">
          {project.title.toLowerCase().replaceAll(" ", "")}.com
        </div>
      </div>

      {isNova ? (
        <div className="bg-[#0B1020] p-[clamp(0.6rem,3cqw,1.25rem)] text-white">
          <div className="flex items-center justify-between text-[8px] font-semibold">
            <span className="tracking-[0.14em] text-[#AFC4CE]">NOVATECH</span>
            <div className="hidden gap-3 text-slate-400 sm:flex">
              <span>Platform</span><span>Solutions</span><span>Resources</span>
            </div>
          </div>
          <div className="mt-[clamp(0.75rem,3cqw,1.5rem)] grid gap-[clamp(0.5rem,2.5cqw,1rem)] @min-[28rem]:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="text-[8px] font-semibold uppercase tracking-[0.12em] text-[#DCE7EA]">AI operations platform</p>
              <h3 className="mt-2 text-lg font-bold leading-tight sm:text-xl">{project.previewHeadline}</h3>
              <p className="mt-2 max-w-xs text-[10px] leading-[1.4] text-slate-300">One workspace for faster, more confident operations.</p>
              <div className="mt-3 inline-flex rounded-md bg-[#806C5D] px-3 py-1.5 text-[9px] font-bold">Book a demo</div>
            </div>
            <div className="rounded-lg border border-white/10 bg-white/5 p-2.5 shadow-lg">
              <div className="flex items-center justify-between text-[7px] text-slate-400">
                <span>Workflow overview</span><span className="text-emerald-300">+24.8%</span>
              </div>
              <div className="mt-3 flex h-14 items-end gap-1.5">
                {[35, 52, 44, 72, 58, 88, 76].map((height, index) => (
                  <span key={index} style={{ height: `${height}%` }} className="flex-1 rounded-t bg-gradient-to-t from-[#806C5D] to-[#AFC4CE]" />
                ))}
              </div>
              <div className="mt-3 grid grid-cols-2 gap-1.5">
                <div className="rounded bg-white/10 p-1.5 text-[7px] text-slate-300">Tasks<br /><strong className="text-white">1,284</strong></div>
                <div className="rounded bg-white/10 p-1.5 text-[7px] text-slate-300">Automation<br /><strong className="text-white">94%</strong></div>
              </div>
            </div>
          </div>
        </div>
      ) : isBloom ? (
        <div className="bg-[#FFF9F6] p-[clamp(0.6rem,3cqw,1.25rem)] text-[#46384D]">
          <div className="flex items-center justify-between text-[8px] font-semibold">
            <span className="font-serif text-sm tracking-wide">bloom</span>
            <div className="hidden gap-3 text-[#8F7E89] sm:flex"><span>Care</span><span>Services</span><span>Journal</span></div>
            <span className="rounded-full border border-[#CFAEBA] px-2.5 py-0.5 text-[8px]">Book now</span>
          </div>
          <div className="mt-5 grid gap-4 sm:grid-cols-[1fr_0.9fr]">
            <div className="pt-1">
              <p className="text-[8px] uppercase tracking-[0.16em] text-[#B88496]">Your wellbeing, considered</p>
              <h3 className="mt-2 font-serif text-xl leading-none sm:text-2xl">{project.previewHeadline}</h3>
              <p className="mt-2.5 text-[10px] leading-[1.4] text-[#765F6B]">Thoughtful care designed around your body, your time, and your goals.</p>
              <div className="mt-3 inline-flex rounded-full bg-[#B86E86] px-3 py-1.5 text-[9px] font-bold text-white">Explore care</div>
            </div>
            <div className="relative min-h-32 overflow-hidden rounded-t-full bg-gradient-to-br from-[#E7C5D0] via-[#F6DDD1] to-[#C8DED7]">
              <div className="absolute inset-x-5 bottom-0 h-24 rounded-t-[4rem] bg-white/45" />
              <div className="absolute bottom-4 left-1/2 h-12 w-12 -translate-x-1/2 rounded-full border-[5px] border-white/80 bg-[#B9879B]/60" />
            </div>
          </div>
          <div className="mt-4 grid grid-cols-3 gap-2 text-center text-[7px] text-[#765F6B]">
            <div className="rounded-lg bg-white p-2 shadow-sm">Personalised plans</div>
            <div className="rounded-lg bg-white p-2 shadow-sm">Expert practitioners</div>
            <div className="rounded-lg bg-white p-2 shadow-sm">Easy booking</div>
          </div>
        </div>
      ) : (
        <div className="bg-[#F2F0EC] p-[clamp(0.6rem,3cqw,1.25rem)] text-[#292522]">
          <div className="flex items-center justify-between text-[8px] font-semibold uppercase tracking-[0.12em]">
            <span>RK Interiors</span>
            <div className="hidden gap-3 text-[#786F68] sm:flex"><span>Projects</span><span>Studio</span><span>Contact</span></div>
          </div>
          <div className="mt-[clamp(0.75rem,3cqw,1.5rem)] grid gap-[clamp(0.5rem,2.5cqw,1rem)] @min-[28rem]:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-[8px] uppercase tracking-[0.16em] text-[#9B8270]">Residential interiors</p>
              <h3 className="mt-2 font-serif text-xl leading-none sm:text-2xl">{project.previewHeadline}</h3>
              <p className="mt-2.5 text-[10px] leading-[1.4] text-[#786F68]">Layered spaces shaped by material, light, and everyday life.</p>
              <div className="mt-3 text-[9px] font-bold underline underline-offset-4">View projects</div>
            </div>
            <div className="grid h-36 grid-cols-[1.1fr_0.9fr] gap-1.5">
              <div className="rounded-sm bg-[linear-gradient(135deg,#B69B86_0%,#DED4C7_50%,#756354_50%,#756354_100%)]" />
              <div className="grid gap-1.5">
                <div className="rounded-sm bg-[#D4C4B0]" />
                <div className="rounded-sm bg-[#806D5A]" />
              </div>
            </div>
          </div>
          <div className="mt-3 flex items-center justify-between border-t border-[#D9D1C8] pt-2.5 text-[8px] text-[#786F68]">
            <span>Featured project · Noida residence</span>
            <span>01 / 12</span>
          </div>
        </div>
      )}
    </div>
  );
}
