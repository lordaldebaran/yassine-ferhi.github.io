import { createFileRoute } from "@tanstack/react-router";
import { Page, Tags, seo } from "@/components/site/layout";
import { EXPERIENCE } from "@/lib/site-data";

export const Route = createFileRoute("/experience")({
  head: () =>
    seo(
      "Experience — Yassine Ferhi",
      "Research experience at ENS Paris-Saclay, University of Trieste / CNR-INO (ArQuS Lab), Fraunhofer ITWM and the Charles Fabry Laboratory.",
    ),
  component: ExperiencePage,
});

function ExperiencePage() {
  return (
    <Page eyebrow="Experience" title="Research experience.">
      <ol>
        {EXPERIENCE.map((e) => (
          <li key={e.org} className="grid gap-3 border-t border-ink/10 py-10 md:grid-cols-[180px_1fr] md:gap-10">
            <div>
              <p className="text-sm text-ink/70">{e.dates}</p>
              {e.location && <p className="mt-1 text-xs text-ink/50">{e.location}</p>}
            </div>
            <div>
              <h2 className="font-serif text-2xl leading-snug">{e.org}</h2>
              <p className="mt-1 text-sm text-ink/60">{e.team}</p>
              <p className="mt-4 max-w-3xl leading-relaxed text-ink/80">{e.focus}</p>
              <div className="mt-4">
                <Tags items={e.tags} />
              </div>
            </div>
          </li>
        ))}
      </ol>
    </Page>
  );
}
