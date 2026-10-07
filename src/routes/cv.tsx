import { createFileRoute } from "@tanstack/react-router";
import { Download, ExternalLink } from "lucide-react";
import { Page, seo } from "@/components/site/layout";
import { CV_URL } from "@/lib/site-data";

export const Route = createFileRoute("/cv")({
  head: () => seo("CV — Yassine Ferhi", "Download the CV of Yassine Ferhi (PDF)."),
  component: CvPage,
});

function CvPage() {
  return (
    <Page eyebrow="CV" title="Curriculum vitae.">
      <div className="flex flex-wrap gap-3 text-sm">
        <a href={CV_URL} download="CV_Ferhi.pdf" className="inline-flex items-center gap-2 rounded-full bg-ink px-4 py-2 text-paper">
          <Download className="h-4 w-4" /> Download PDF
        </a>
        <a href={CV_URL} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-ink/15 px-4 py-2 text-ink/80 hover:border-ink/40">
          <ExternalLink className="h-4 w-4" /> Open in new tab
        </a>
      </div>
      <iframe src={CV_URL} title="CV of Yassine Ferhi" className="mt-8 h-[80vh] w-full rounded-xl border border-ink/10" />
    </Page>
  );
}
