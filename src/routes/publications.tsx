import { createFileRoute } from "@tanstack/react-router";
import { Page, H2, PublicationEntry, seo } from "@/components/site/layout";
import { MANUSCRIPTS, PEER_REVIEWED, PREPRINTS, SCHOLAR_URL } from "@/lib/site-data";

export const Route = createFileRoute("/publications")({
  head: () =>
    seo(
      "Publications — Yassine Ferhi",
      "Peer-reviewed paper, preprints and manuscripts on quantum pattern matching, quantum image encoding and computational photonics.",
    ),
  component: Publications,
});

function Group({ title, items }: { title: string; items: typeof PREPRINTS }) {
  return (
    <section className="border-t border-ink/10 py-10">
      <H2>{title}</H2>
      <ul className="mt-2">
        {items.map((p) => (
          <PublicationEntry key={p.title} pub={p} />
        ))}
      </ul>
    </section>
  );
}

function Publications() {
  return (
    <Page
      eyebrow="Publications"
      title="Papers & preprints."
      intro={
        <>
          Also on{" "}
          <a href={SCHOLAR_URL} target="_blank" rel="noreferrer" className="underline hover:text-accent-quantum">
            Google Scholar
          </a>
          .
        </>
      }
    >
      <Group title="Peer-reviewed" items={PEER_REVIEWED} />
      <Group title="Preprints" items={PREPRINTS} />
      <Group title="Manuscripts under review" items={MANUSCRIPTS} />
    </Page>
  );
}
