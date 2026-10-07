import { createFileRoute } from "@tanstack/react-router";
import { Page, H2, seo } from "@/components/site/layout";
import { CV_URL, EDUCATION, EMAIL, GITHUB_URL, LINKEDIN_URL, PORTRAIT_URL, SCHOLAR_URL } from "@/lib/site-data";

export const Route = createFileRoute("/about")({
  head: () =>
    seo(
      "About — Yassine Ferhi",
      "Engineering student in optics and photonics at Institut d'Optique, on a research year in AI at ENS Paris-Saclay. Education and background.",
    ),
  component: About,
});

function About() {
  return (
    <Page eyebrow="About" title="About.">
      <div className="grid gap-10 md:grid-cols-[1fr_220px]">
        <div className="space-y-4 leading-relaxed text-ink/80 md:text-lg">
          <p>
            I am an engineering student in optics and photonics at Institut d'Optique Graduate School. In 2026–2027 I
            am taking a one-year research leave from my engineering degree to follow the ARIA programme (Année de
            Recherche en Intelligence Artificielle) at ENS Paris-Saclay.
          </p>
          <p>
            My work so far spans ultracold-atom experiments and laser control, quantum algorithms for image processing,
            and computational photonics. I am interested in machine learning, experimental quantum technologies,
            photonics and quantum control.
          </p>
          <div className="flex flex-wrap gap-4 pt-2 text-sm">
            <a href={`mailto:${EMAIL}`} className="underline hover:text-accent-quantum">Email</a>
            <a href={SCHOLAR_URL} target="_blank" rel="noreferrer" className="underline hover:text-accent-quantum">Google Scholar</a>
            <a href={GITHUB_URL} target="_blank" rel="noreferrer" className="underline hover:text-accent-quantum">GitHub</a>
            <a href={LINKEDIN_URL} target="_blank" rel="noreferrer" className="underline hover:text-accent-quantum">LinkedIn</a>
            <a href={CV_URL} target="_blank" rel="noreferrer" className="underline hover:text-accent-quantum">CV</a>
          </div>
        </div>
        <img src={PORTRAIT_URL} alt="Portrait of Yassine Ferhi" className="aspect-[4/5] w-full max-w-[220px] rounded-xl object-cover ring-1 ring-ink/10" />
      </div>

      <section className="mt-14 border-t border-ink/10 py-10">
        <H2>Education</H2>
        <ul className="mt-6">
          {EDUCATION.map((ed) => (
            <li key={ed.school + ed.period} className="grid gap-1 border-b border-ink/10 py-4 last:border-0 md:grid-cols-[180px_1fr] md:gap-8">
              <span className="text-sm text-ink/55">{ed.period}</span>
              <div>
                <p className="font-serif text-lg">{ed.school}</p>
                <p className="text-sm text-ink/70">{ed.detail}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section className="border-t border-ink/10 py-10 text-sm">
        <H2>Other</H2>
        <ul className="mt-4 space-y-1.5 text-ink/75">
          <li>Baccalauréat — Mention Très Bien, Félicitations du Jury</li>
          <li>Head of Prospecting — Forum de la Photonique</li>
          <li>Vice Treasurer — LaserWave</li>
        </ul>
      </section>
    </Page>
  );
}
