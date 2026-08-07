import type { featuredWork } from "@/lib/content";

type Project = (typeof featuredWork)[number];

export function ProjectPreview({ project }: { project: Project }) {
  const isNova = project.title === "Nova Tech Solutions";
  const isBloom = project.title === "Bloom Wellness";

  return (
    <div className="overflow-hidden rounded-[18px] border border-white/60 bg-white shadow-2xl">
      <div className="flex items-center gap-2 border-b border-slate-200 bg-slate-50 px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-rose-300" />
        <span className="h-2.5 w-2.5 rounded-full bg-amber-300" />
        <span className="h-2.5 w-2.5 rounded-full bg-emerald-300" />
        <div className="ml-2 flex h-5 flex-1 items-center rounded-full bg-white px-3 text-[8px] text-slate-400 shadow-sm">
          {project.title.toLowerCase().replaceAll(" ", "")}.com
        </div>
      </div>

      {isNova ? (
        <div className="bg-[#0B1020] p-5 text-white sm:p-7">
          <div className="flex items-center justify-between text-[9px] font-semibold">
            <span className="tracking-[0.16em] text-violet-200">NOVATECH</span>
            <div className="flex gap-4 text-slate-400">
              <span>Platform</span><span>Solutions</span><span>Resources</span>
            </div>
          </div>
          <div className="mt-8 grid gap-5 sm:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="text-[9px] font-semibold uppercase tracking-[0.14em] text-violet-300">AI operations platform</p>
              <h3 className="mt-3 text-2xl font-bold leading-tight sm:text-3xl">{project.previewHeadline}</h3>
              <p className="mt-3 max-w-xs text-xs leading-5 text-slate-300">One workspace for faster, more confident operations.</p>
              <div className="mt-5 inline-flex rounded-md bg-violet-500 px-4 py-2 text-[10px] font-bold">Book a demo</div>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-3 shadow-xl">
              <div className="flex items-center justify-between text-[8px] text-slate-400">
                <span>Workflow overview</span><span className="text-emerald-300">+24.8%</span>
              </div>
              <div className="mt-4 flex h-20 items-end gap-2">
                {[35, 52, 44, 72, 58, 88, 76].map((height, index) => (
                  <span key={index} style={{ height: `${height}%` }} className="flex-1 rounded-t bg-gradient-to-t from-violet-500 to-cyan-300" />
                ))}
              </div>
              <div className="mt-4 grid grid-cols-2 gap-2">
                <div className="rounded bg-white/10 p-2 text-[8px] text-slate-300">Tasks<br /><strong className="text-white">1,284</strong></div>
                <div className="rounded bg-white/10 p-2 text-[8px] text-slate-300">Automation<br /><strong className="text-white">94%</strong></div>
              </div>
            </div>
          </div>
        </div>
      ) : isBloom ? (
        <div className="bg-[#FFF9F6] p-5 text-[#46384D] sm:p-7">
          <div className="flex items-center justify-between text-[9px] font-semibold">
            <span className="font-serif text-base tracking-wide">bloom</span>
            <div className="flex gap-4 text-[#8F7E89]"><span>Care</span><span>Services</span><span>Journal</span></div>
            <span className="rounded-full border border-[#CFAEBA] px-3 py-1">Book now</span>
          </div>
          <div className="mt-8 grid gap-5 sm:grid-cols-[1fr_0.9fr]">
            <div className="pt-2">
              <p className="text-[9px] uppercase tracking-[0.18em] text-[#B88496]">Your wellbeing, considered</p>
              <h3 className="mt-3 font-serif text-3xl leading-none sm:text-4xl">{project.previewHeadline}</h3>
              <p className="mt-4 text-xs leading-5 text-[#765F6B]">Thoughtful care designed around your body, your time, and your goals.</p>
              <div className="mt-5 inline-flex rounded-full bg-[#B86E86] px-4 py-2 text-[10px] font-bold text-white">Explore care</div>
            </div>
            <div className="relative min-h-44 overflow-hidden rounded-t-full bg-gradient-to-br from-[#E7C5D0] via-[#F6DDD1] to-[#C8DED7]">
              <div className="absolute inset-x-6 bottom-0 h-32 rounded-t-[5rem] bg-white/45" />
              <div className="absolute bottom-5 left-1/2 h-16 w-16 -translate-x-1/2 rounded-full border-[7px] border-white/80 bg-[#B9879B]/60" />
            </div>
          </div>
          <div className="mt-6 grid grid-cols-3 gap-3 text-center text-[8px] text-[#765F6B]">
            <div className="rounded-xl bg-white p-3 shadow-sm">Personalised plans</div>
            <div className="rounded-xl bg-white p-3 shadow-sm">Expert practitioners</div>
            <div className="rounded-xl bg-white p-3 shadow-sm">Easy booking</div>
          </div>
        </div>
      ) : (
        <div className="bg-[#F2F0EC] p-5 text-[#292522] sm:p-7">
          <div className="flex items-center justify-between text-[9px] font-semibold uppercase tracking-[0.14em]">
            <span>RK Interiors</span>
            <div className="flex gap-4 text-[#786F68]"><span>Projects</span><span>Studio</span><span>Contact</span></div>
          </div>
          <div className="mt-8 grid gap-5 sm:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-[9px] uppercase tracking-[0.18em] text-[#9B8270]">Residential interiors</p>
              <h3 className="mt-3 font-serif text-3xl leading-none sm:text-4xl">{project.previewHeadline}</h3>
              <p className="mt-4 text-xs leading-5 text-[#786F68]">Layered spaces shaped by material, light, and everyday life.</p>
              <div className="mt-5 text-[10px] font-bold underline underline-offset-4">View projects</div>
            </div>
            <div className="grid h-48 grid-cols-[1.1fr_0.9fr] gap-2">
              <div className="rounded-sm bg-[linear-gradient(135deg,#B69B86_0%,#DED4C7_50%,#756354_50%,#756354_100%)]" />
              <div className="grid gap-2">
                <div className="rounded-sm bg-[#D4C4B0]" />
                <div className="rounded-sm bg-[#806D5A]" />
              </div>
            </div>
          </div>
          <div className="mt-5 flex items-center justify-between border-t border-[#D9D1C8] pt-4 text-[9px] text-[#786F68]">
            <span>Featured project · Noida residence</span>
            <span>01 / 12</span>
          </div>
        </div>
      )}
    </div>
  );
}
