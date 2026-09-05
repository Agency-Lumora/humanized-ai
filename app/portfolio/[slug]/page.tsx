import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { featuredWork } from "@/lib/content";
import { ProjectPreview } from "@/components/portfolio/ProjectPreview";
import { Footer } from "@/components/home/Footer";

export async function generateStaticParams() {
  return featuredWork.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = featuredWork.find((p) => p.slug === slug);
  if (!project) return {};
  return { title: `${project.title} — Case Study | Lumora`, description: project.summary };
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = featuredWork.find((p) => p.slug === slug);
  if (!project) notFound();
  const otherProjects = featuredWork.filter((p) => p.slug !== slug);

  return (
    <div className="min-h-screen bg-[#F4EFE7] text-[#2A211D]">
      <header className="sticky top-0 z-50 border-b border-[#806C5D]/25 bg-[#F4EFE7]/95 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 sm:px-8 lg:px-12">
          <Link href="/" className="font-serif text-xl tracking-[0.2em]">LUMORA</Link>
          <Link href="/#portfolio" className="inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.16em] transition hover:text-[#806C5D]"><ArrowLeft className="h-4 w-4" /> Back to work</Link>
        </div>
      </header>

      <main>
        <section className="border-b border-[#806C5D]/20 py-[clamp(4rem,8vw,7rem)]">
          <div className="mx-auto grid max-w-[80rem] gap-[clamp(2rem,5vw,4rem)] px-[clamp(1rem,3vw,3rem)] min-[960px]:grid-cols-[0.85fr_1.15fr] min-[960px]:items-center">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#806C5D]">{project.category} · Case study</p>
              <h1 className="mt-6 font-serif text-[clamp(2.75rem,5.5vw,5.25rem)] leading-[0.88] tracking-[-0.05em]">{project.title}</h1>
              <p className="mt-7 max-w-xl text-base leading-8 text-[#2A211D]/68">{project.summary}</p>
              <div className="mt-10 grid grid-cols-2 border-l border-t border-[#806C5D]/25">
                <div className="border-b border-r border-[#806C5D]/25 p-4"><span className="text-[9px] uppercase tracking-[0.18em] text-[#806C5D]">Client</span><p className="mt-2 text-sm font-semibold">{project.clientName}</p><p className="mt-1 text-xs text-[#2A211D]/55">{project.clientRole}</p></div>
                <div className="border-b border-r border-[#806C5D]/25 p-4"><span className="text-[9px] uppercase tracking-[0.18em] text-[#806C5D]">Delivered</span><p className="mt-2 text-sm font-semibold">{project.timeline}</p></div>
              </div>
            </div>
            <div className="bg-[#DCE7EA] p-3 shadow-[0_28px_70px_rgba(42,33,29,0.15)] sm:p-6"><ProjectPreview project={project} /></div>
          </div>
        </section>

        <section className="border-b border-[#806C5D]/20 py-16 sm:py-24">
          <div className="mx-auto grid max-w-[80rem] gap-[clamp(2rem,5vw,4rem)] px-[clamp(1rem,3vw,3rem)] min-[960px]:grid-cols-[0.7fr_1.3fr]">
            <div><p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#806C5D]">The brief</p><h2 className="mt-5 font-serif text-[clamp(2.25rem,4vw,4rem)] leading-tight">What the client needed</h2><p className="mt-5 max-w-md text-sm leading-7 text-[#2A211D]/65">{project.clientName} came to Lumora with a clear goal but no clear path. Here is exactly what was on the brief:</p></div>
            <ol className="border-l border-t border-[#806C5D]/25">{project.requirements.map((requirement, index) => <li key={requirement} className="grid grid-cols-[3.5rem_1fr] border-b border-r border-[#806C5D]/25"><span className="border-r border-[#806C5D]/25 p-5 font-serif text-lg">0{index + 1}</span><p className="p-5 text-sm leading-7 text-[#2A211D]/72">{requirement}</p></li>)}</ol>
          </div>
        </section>

        <section className="bg-[#2A211D] py-[clamp(4rem,8vw,6rem)] text-[#F4EFE7]">
          <div className="mx-auto grid max-w-[80rem] gap-[clamp(2rem,5vw,4rem)] px-[clamp(1rem,3vw,3rem)] min-[960px]:grid-cols-[0.7fr_1.3fr] min-[960px]:items-start">
            <div><p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#AFC4CE]">The challenge</p><h2 className="mt-5 font-serif text-[clamp(2.25rem,4vw,4rem)] leading-tight">What stood in the way</h2></div>
            <p className="font-serif text-[clamp(1.35rem,2.4vw,2rem)] leading-[1.45] text-[#F4EFE7]/75">{project.challenge}</p>
          </div>
        </section>

        <section className="border-b border-[#806C5D]/20 py-16 sm:py-24">
          <div className="mx-auto max-w-[80rem] px-[clamp(1rem,3vw,3rem)]">
            <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr]"><div><p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#806C5D]">Our approach</p><h2 className="mt-5 font-serif text-[clamp(2.25rem,4vw,4rem)] leading-tight">How Lumora solved it</h2></div><p className="text-base leading-8 text-[#2A211D]/68">{project.solution}</p></div>
            <div className="mt-12 grid border-l border-t border-[#806C5D]/25 sm:grid-cols-2 lg:grid-cols-3">{project.approach.map((step, index) => <article key={step} className="border-b border-r border-[#806C5D]/25 bg-[#DCE7EA]/45 p-6"><span className="font-serif text-2xl text-[#806C5D]">0{index + 1}</span><p className="mt-8 text-sm leading-7 text-[#2A211D]/70">{step}</p></article>)}</div>
          </div>
        </section>

        <section className="bg-[#AFC4CE] py-[clamp(4rem,8vw,6rem)]">
          <div className="mx-auto max-w-[80rem] px-[clamp(1rem,3vw,3rem)]">
            <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#806C5D]">The outcome</p><div className="mt-5 grid gap-8 lg:grid-cols-[0.8fr_1.2fr]"><h2 className="font-serif text-[clamp(2.25rem,4vw,4rem)] leading-tight">Results that speak for themselves</h2><p className="text-base leading-8 text-[#2A211D]/70">{project.result}</p></div>
            <div className="mt-12 grid border-l border-t border-[#2A211D]/20 sm:grid-cols-3">{project.resultMetrics.map((metric) => <div key={metric.label} className="border-b border-r border-[#2A211D]/20 p-6"><p className="font-serif text-4xl sm:text-5xl">{metric.value}</p><p className="mt-3 text-xs uppercase tracking-[0.12em] text-[#2A211D]/62">{metric.label}</p></div>)}</div>
          </div>
        </section>

        {otherProjects.length > 0 && <section className="py-[clamp(4rem,8vw,6rem)]"><div className="mx-auto max-w-[80rem] px-[clamp(1rem,3vw,3rem)]"><div className="flex items-end justify-between"><div><p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#806C5D]">Continue exploring</p><h2 className="mt-4 font-serif text-4xl">More work from Lumora</h2></div></div><div className="mt-10 grid gap-8 sm:grid-cols-2">{otherProjects.map((other) => <Link key={other.slug} href={`/portfolio/${other.slug}`} className="group block border border-[#806C5D]/25 bg-[#DCE7EA]/35 p-4 transition hover:-translate-y-1 sm:p-6"><ProjectPreview project={other} /><div className="mt-5 flex items-end justify-between"><div><p className="text-[9px] uppercase tracking-[0.2em] text-[#806C5D]">{other.category}</p><h3 className="mt-2 font-serif text-2xl">{other.title}</h3></div><ArrowUpRight className="h-5 w-5 transition group-hover:translate-x-1 group-hover:-translate-y-1" /></div></Link>)}</div></div></section>}
      </main>
      <Footer />
    </div>
  );
}
