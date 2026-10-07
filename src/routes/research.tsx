import { createFileRoute } from "@tanstack/react-router";
import { FileText } from "lucide-react";
import { Page, H2, Tags, seo } from "@/components/site/layout";
import { POSTER_URL, SKILL_GROUPS } from "@/lib/site-data";

export const Route = createFileRoute("/research")({
  head: () =>
    seo(
      "Research — Yassine Ferhi",
      "AI for quantum experiments on ultracold ytterbium, quantum cellular automata, quantum image processing and computational photonics.",
    ),
  component: Research,
});

function Block({ label, title, children }: { label: string; title: string; children: React.ReactNode }) {
  return (
    <section className="grid gap-4 border-t border-ink/10 py-12 md:grid-cols-[220px_1fr] md:gap-10">
      <p className="text-[11px] uppercase tracking-[0.2em] text-accent-quantum">{label}</p>
      <div>
        <H2>{title}</H2>
        <div className="mt-4 space-y-4 text-ink/80">{children}</div>
      </div>
    </section>
  );
}

function Research() {
  const metrics = [
    ["1.5×", "increase in CMOT atomic density vs. manual tuning"],
    ["< 1 h", "automated optimization vs. ~2 h of manual tuning"],
    ["Weeks", "of laser-lock stability vs. recalibration every 3–4 days"],
  ];
  return (
    <Page eyebrow="Research" title="Research directions.">
      <Block label="University of Trieste / CNR-INO · 2026" title="AI for Quantum Experiments">
        <p>
          On an ultracold ytterbium experiment (ArQuS Lab), I implemented Python-based experimental automation and used
          gradient-descent optimization to tune MOT, CMOT and optical-trap parameters, evaluated through fluorescence
          imaging. I also developed a machine-learning-based laser-frequency stabilization loop.
        </p>
        <div className="grid gap-px overflow-hidden rounded-xl bg-ink/10 sm:grid-cols-3">
          {metrics.map(([v, l]) => (
            <div key={v} className="bg-paper p-5">
              <p className="font-serif text-3xl text-ink">{v}</p>
              <p className="mt-1 text-xs text-ink/65">{l}</p>
            </div>
          ))}
        </div>
        <div className="rounded-lg border border-ink/10 p-5 text-sm">
          <p className="font-medium text-ink">Related project — Adaptive Frequency Stabilization of Yb-174</p>
          <p className="mt-1 text-ink/70">
            Gradient-descent-based optimization with active pressure compensation for long-term stabilization of a laser
            locked to the ytterbium-174 atomic resonance.
          </p>
        </div>
      </Block>

      <Block label="ENS Paris-Saclay · 2026–2027 · ongoing" title="Quantum Dynamics & Machine Learning">
        <p>
          ARIA project: <span className="italic">Quantum Cellular Automata & Learning of Local Dynamics.</span> I am
          investigating whether local Quantum Cellular Automata can learn and exploit quantum dynamics and quantum
          interference for computational tasks, using quantum simulation and machine learning, and comparing against
          classical dynamical models.
        </p>
        <Tags items={["Local QCA", "Quantum interference", "Quantum simulation", "Machine learning", "Hybrid quantum-classical methods"]} />
      </Block>

      <Block label="Fraunhofer ITWM · 2025" title="Quantum Computing & Quantum Image Processing">
        <p>
          I developed and benchmarked QSVM-based pattern matching with sliding windows and QFT-based approximations of
          image convolutions in Qiskit, with validation on IBM quantum hardware. This work led to a peer-reviewed
          publication (QUEST-IS 2025, Springer).
        </p>
        <Tags items={["QSVM", "Sliding windows", "QFT", "Qiskit", "Quantum hardware"]} />
      </Block>

      <Block label="Charles Fabry Laboratory · 2025" title="Photonics & Scientific Computing">
        <p>
          I developed a numerical electromagnetic method for periodic photonic structures combining Fourier expansion,
          finite-difference discretization and model-order reduction by Proper Orthogonal Decomposition.
        </p>
        <Tags items={["Periodic photonic structures", "Fourier expansion", "Finite differences", "POD", "Model-order reduction"]} />
      </Block>

      <Block label="Engineering projects · IOGS" title="Optics & quantum communication projects">
        <ul className="space-y-3 text-sm">
          <li>
            <span className="font-medium text-ink">Quantum Key Distribution channel</span> — polarization encoding of
            single photons; eavesdropping detected by statistical analysis at the receiver.
          </li>
          <li>
            <span className="font-medium text-ink">Laser amplification chain</span> — design, alignment and
            characterization of a multi-stage amplifier.{" "}
            <a href={POSTER_URL} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-ink/70 underline hover:text-accent-quantum">
              <FileText className="h-3.5 w-3.5" /> Poster
            </a>
          </li>
          <li>
            <span className="font-medium text-ink">Stable cooling system</span> for sensitive laser experiments.
          </li>
        </ul>
      </Block>

      <section className="border-t border-ink/10 py-12">
        <H2>Technical skills</H2>
        <div className="mt-6 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {SKILL_GROUPS.map((g) => (
            <div key={g.title}>
              <p className="font-medium text-ink">{g.title}</p>
              <ul className="mt-3 space-y-1.5 text-sm text-ink/70">
                {g.items.map((i) => (
                  <li key={i}>{i}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </Page>
  );
}
