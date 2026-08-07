import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { featuredWork } from "@/lib/content";
import { ProjectPreview } from "@/components/portfolio/ProjectPreview";

export async function generateStaticParams() {
  return featuredWork.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = featuredWork.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: `${project.title} — Case Study | Lumora`,
    description: project.summary,
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = featuredWork.find((p) => p.slug === slug);
  if (!project) notFound();

  const otherProjects = featuredWork.filter((p) => p.slug !== slug);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-[#F5F3FF] to-[#EEF2FF]">
      {/* ── Top bar ─────────────────────────────────────── */}
      <header className="sticky top-0 z-50 border-b border-slate-200/60 bg-white/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 sm:px-8">
          <Link
            href="/"
            className="text-xl font-black tracking-[0.18em] bg-gradient-to-r from-[#7C5CFF] via-[#9A7CFF] to-[#C7B8FF] bg-clip-text text-transparent"
          >
            LUMORA
          </Link>
          <Link
            href="/#portfolio"
            className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:border-[#7C5CFF]/40 hover:text-[#7C5CFF]"
          >
            <span>←</span> Back to work
          </Link>
        </div>
      </header>

      {/* ── Hero ────────────────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-6 py-16 sm:px-8 sm:py-20 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          {/* Left: project info */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#7C5CFF]">
              {project.category}
            </p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              {project.title}
            </h1>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              {project.summary}
            </p>

            <div className="mt-8 flex flex-wrap gap-6">
              {project.resultMetrics.map((m) => (
                <div key={m.label} className="min-w-[110px]">
                  <p className="text-3xl font-bold text-[#7C5CFF]">{m.value}</p>
                  <p className="mt-1 text-sm text-slate-500">{m.label}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 flex items-center gap-6 text-sm text-slate-500">
              <div>
                <span className="font-semibold text-slate-700">Client</span>
                <p className="mt-0.5">{project.clientName}</p>
                <p className="text-xs text-slate-400">{project.clientRole}</p>
              </div>
              <div className="h-10 w-px bg-slate-200" />
              <div>
                <span className="font-semibold text-slate-700">Delivered</span>
                <p className="mt-0.5">{project.timeline}</p>
              </div>
            </div>
          </div>

          {/* Right: website preview */}
          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-[#7C5CFF]/10 to-[#C7B8FF]/10 blur-2xl" />
            <div className="relative">
              <ProjectPreview project={project} />
            </div>
          </div>
        </div>
      </section>

      {/* ── Divider ─────────────────────────────────────── */}
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <div className="h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
      </div>

      {/* ── The Brief ───────────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-6 py-16 sm:px-8 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#7C5CFF]">
              The Brief
            </p>
            <h2 className="mt-4 text-2xl font-bold text-slate-950 sm:text-3xl">
              What the client needed
            </h2>
            <p className="mt-4 leading-7 text-slate-600">
              {project.clientName} came to Lumora with a clear goal but no clear
              path. Here is exactly what was on the brief:
            </p>
          </div>

          <ul className="space-y-4">
            {project.requirements.map((req, i) => (
              <li
                key={i}
                className="flex items-start gap-4 rounded-2xl border border-slate-100 bg-white/70 px-6 py-4 shadow-sm backdrop-blur"
              >
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#7C5CFF]/10 text-xs font-bold text-[#7C5CFF]">
                  {i + 1}
                </span>
                <p className="leading-6 text-slate-700">{req}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Challenge ───────────────────────────────────── */}
      <section className="bg-slate-950 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#9A7CFF]">
                The Challenge
              </p>
              <h2 className="mt-4 text-2xl font-bold text-white sm:text-3xl">
                What stood in the way
              </h2>
            </div>
            <p className="text-lg leading-8 text-slate-300">{project.challenge}</p>
          </div>
        </div>
      </section>

      {/* ── Our Approach ────────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-6 py-16 sm:px-8 sm:py-20">
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#7C5CFF]">
          Our Approach
        </p>
        <h2 className="mt-4 text-2xl font-bold text-slate-950 sm:text-3xl">
          How Lumora solved it
        </h2>
        <p className="mt-4 max-w-2xl leading-7 text-slate-600">{project.solution}</p>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {project.approach.map((step, i) => (
            <div
              key={i}
              className="rounded-2xl border border-slate-100 bg-white/80 p-6 shadow-sm backdrop-blur"
            >
              <span className="text-3xl font-black text-[#7C5CFF]/20">
                0{i + 1}
              </span>
              <p className="mt-3 leading-6 text-slate-700">{step}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Results ─────────────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-6 pb-16 sm:px-8 sm:pb-20">
        <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-[#7C5CFF] via-[#9A7CFF] to-[#C7B8FF] p-px shadow-2xl">
          <div className="rounded-[calc(1.5rem-1px)] bg-gradient-to-br from-[#0B0A14] to-[#1A1530] px-8 py-12 text-white sm:px-12">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#C7B8FF]">
              The Outcome
            </p>
            <h2 className="mt-4 text-2xl font-bold sm:text-3xl">
              Results that speak for themselves
            </h2>
            <p className="mt-4 max-w-2xl leading-7 text-slate-300">
              {project.result}
            </p>
            <div className="mt-10 grid gap-8 sm:grid-cols-3">
              {project.resultMetrics.map((m) => (
                <div key={m.label} className="border-t border-white/10 pt-6">
                  <p className="text-4xl font-black text-white">{m.value}</p>
                  <p className="mt-2 text-sm text-slate-400">{m.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Other projects ──────────────────────────────── */}
      {otherProjects.length > 0 && (
        <section className="border-t border-slate-200/60 bg-white/50 py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-6 sm:px-8">
            <h2 className="text-xl font-bold text-slate-950">
              More work from Lumora
            </h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              {otherProjects.map((p) => (
                <Link
                  key={p.slug}
                  href={`/portfolio/${p.slug}`}
                  className="group block overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md"
                >
                  <ProjectPreview project={p} />
                  <div className="p-6">
                    <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
                      {p.category}
                    </p>
                    <h3 className="mt-1 text-lg font-bold text-slate-900">
                      {p.title}
                    </h3>
                    <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-[#6D5EF9]">
                      View case study <span>→</span>
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

    </div>
  );
}
