import { createFileRoute, Link } from "@tanstack/react-router";
import { Mail, Github, Linkedin, GraduationCap, FileText, ArrowRight } from "lucide-react";
import { seo, H2 } from "@/components/site/layout";
import { CV_URL, EMAIL, GITHUB_URL, LINKEDIN_URL, PORTRAIT_URL, SCHOLAR_URL, TAGLINE } from "@/lib/site-data";

export const Route = createFileRoute("/")({
  head: () =>
    seo(
      "Yassine Ferhi — Optics & Photonics Engineering Student, Quantum Technologies & AI",
      "Engineering student at Institut d'Optique, on ARIA research year at ENS Paris-Saclay. Experimental quantum technologies, photonics and machine learning.",
    ),
  component: Home,
});

const AREAS = [
  { title: "AI for Quantum Experiments", items: ["Experimental optimization", "Machine learning", "Automated control"] },
  { title: "Quantum Technologies", items: ["Quantum computing", "Quantum sensing", "Quantum optics"] },
  { title: "Experimental Physics", items: ["Cold atoms", "Laser systems", "Photonics"] },
];

const WORK = [
  {
    title: "AI-driven control of ultracold-atom experiments",
    where: "University of Trieste / CNR-INO · 2026",
    text: "Automated optimization of MOT/CMOT loading (1.5× CMOT density) and an adaptive laser-frequency lock stable for several weeks.",
  },
  {
    title: "Quantum Computing & Quantum Image Processing",
    where: "Fraunhofer ITWM · 2025",
    text: "QSVM-based pattern matching and QFT-based convolutions in Qiskit, validated on IBM hardware. Peer-reviewed publication.",
  },
  {
    title: "Quantum Cellular Automata & Learning of Local Dynamics",
    where: "ENS Paris-Saclay · 2026–2027",
    text: "Ongoing project on whether local QCA can learn and exploit quantum dynamics for computational tasks.",
  },
];

function Btn({ href, icon, children, primary }: { href: string; icon: React.ReactNode; children: React.ReactNode; primary?: boolean }) {
  return (
    <a
      href={href}
      target={href.startsWith("http") || href.endsWith(".pdf") ? "_blank" : undefined}
      rel="noreferrer"
      className={
        primary
          ? "inline-flex items-center gap-2 rounded-full bg-ink px-4 py-2 text-paper transition-transform hover:-translate-y-0.5"
          : "inline-flex items-center gap-2 rounded-full border border-ink/15 px-4 py-2 text-ink/80 transition-colors hover:border-ink/40 hover:text-ink"
      }
    >
      {icon}
      {children}
    </a>
  );
}

function Home() {
  return (
    <main className="mx-auto max-w-5xl px-6">
      <section className="grid items-center gap-10 pt-16 pb-16 md:grid-cols-[1fr_240px] md:pt-24">
        <div className="fade-up">
          <h1 className="font-serif text-5xl tracking-tight md:text-7xl">Yassine Ferhi</h1>
          <p className="mt-4 text-sm font-medium tracking-wide text-ink/70 md:text-base">{TAGLINE}</p>
          <p className="mt-6 max-w-xl leading-relaxed text-ink/75 md:text-lg">
            I work at the intersection of experimental quantum technologies, photonics and machine learning, with a
            particular interest in computational methods for quantum experiments.
          </p>
          <div className="mt-8 flex flex-wrap gap-2.5 text-sm">
            <Link
              to="/research"
              className="inline-flex items-center gap-2 rounded-full bg-ink px-4 py-2 text-paper transition-transform hover:-translate-y-0.5"
            >
              Research <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/publications"
              className="inline-flex items-center gap-2 rounded-full border border-ink/15 px-4 py-2 text-ink/80 hover:border-ink/40 hover:text-ink"
            >
              Publications
            </Link>
            <Btn href={CV_URL} icon={<FileText className="h-4 w-4" />}>CV</Btn>
            <Btn href={GITHUB_URL} icon={<Github className="h-4 w-4" />}>GitHub</Btn>
            <Btn href={SCHOLAR_URL} icon={<GraduationCap className="h-4 w-4" />}>Scholar</Btn>
            <Btn href={LINKEDIN_URL} icon={<Linkedin className="h-4 w-4" />}>LinkedIn</Btn>
            <Btn href={`mailto:${EMAIL}`} icon={<Mail className="h-4 w-4" />}>Email</Btn>
          </div>
        </div>
        <img
          src={PORTRAIT_URL}
          alt="Portrait of Yassine Ferhi"
          className="mx-auto aspect-[4/5] w-full max-w-[240px] rounded-xl object-cover ring-1 ring-ink/10 fade-up"
        />
      </section>

      <section className="border-t border-ink/10 py-12">
        <p className="mb-4 text-[11px] uppercase tracking-[0.22em] text-accent-quantum">Current position</p>
        <div className="grid gap-2 md:grid-cols-[180px_1fr] md:gap-8">
          <p className="text-sm text-ink/55">2026 – 2027</p>
          <div>
            <p className="font-serif text-2xl">ENS Paris-Saclay — ARIA</p>
            <p className="text-sm text-ink/70">Année de Recherche en Intelligence Artificielle</p>
            <p className="mt-2 text-sm text-ink/75">
              Research project: <span className="italic">Quantum Cellular Automata & Learning of Local Dynamics</span>
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-ink/10 py-12">
        <p className="mb-6 text-[11px] uppercase tracking-[0.22em] text-accent-quantum">Research areas</p>
        <div className="grid gap-px overflow-hidden rounded-xl bg-ink/10 md:grid-cols-3">
          {AREAS.map((a) => (
            <div key={a.title} className="bg-paper p-6">
              <p className="font-serif text-xl">{a.title}</p>
              <ul className="mt-3 space-y-1 text-sm text-ink/70">
                {a.items.map((i) => (
                  <li key={i}>{i}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-ink/10 py-12">
        <div className="mb-6 flex items-end justify-between">
          <H2>Selected work</H2>
          <Link to="/research" className="text-sm text-ink/65 hover:text-accent-quantum">
            All research →
          </Link>
        </div>
        <ul>
          {WORK.map((w) => (
            <li key={w.title} className="grid gap-2 border-b border-ink/10 py-5 last:border-0 md:grid-cols-[1fr_1.3fr] md:gap-8">
              <div>
                <Link to="/research" className="font-serif text-xl hover:text-accent-quantum">
                  {w.title}
                </Link>
                <p className="mt-1 text-xs text-ink/55">{w.where}</p>
              </div>
              <p className="text-sm leading-relaxed text-ink/75">{w.text}</p>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
