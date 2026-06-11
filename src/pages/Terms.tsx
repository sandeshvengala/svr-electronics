import { PageHero } from "@/components/site/PageShell";

({
  head: () => ({
    meta: [
      { title: "Terms & Conditions | SVR Electronics" },
      { name: "description", content: "Terms governing the use of SVR Electronics services, repairs and purchases." },
    ],
    links: [{ rel: "canonical", href: "/terms" }],
  }),
  component: Terms,
});

function Terms() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Terms & Conditions" subtitle="Last updated: January 2026" />
      <section className="container-x py-12">
        <article className="glass-strong rounded-3xl p-8 md:p-12 max-w-3xl">
          {[
            ["1. Acceptance of terms", "By using our services you accept these terms in full."],
            ["2. Quotations", "All written quotes are valid for 7 days unless otherwise stated. Verbal estimates are indicative only."],
            ["3. Approval", "No repair work is carried out without your explicit approval of the written quotation."],
            ["4. Unclaimed units", "Repaired units not collected within 60 days of completion may incur storage charges or be disposed of."],
            ["5. Warranty", "Our 90-day workmanship warranty terms are detailed on the Warranty page and form part of these terms."],
            ["6. Liability", "Liability is limited to the value of the service paid. We are not liable for consequential loss."],
            ["7. Data on devices", "Customers are responsible for backing up any personal data prior to service."],
            ["8. Governing law", "These terms are governed by the laws of Sri Lanka."],
          ].map(([t, b]) => (
            <div key={t} className="mb-6">
              <h2 className="text-base font-semibold">{t}</h2>
              <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{b}</p>
            </div>
          ))}
        </article>
      </section>
    </>
  );
}
export default Terms;