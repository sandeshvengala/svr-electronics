import { PageHero } from "@/components/site/PageShell";

({
  head: () => ({
    meta: [
      { title: "Privacy Policy | SVR Electronics" },
      { name: "description", content: "How SVR Electronics collects, uses and protects your personal information." },
    ],
    links: [{ rel: "canonical", href: "/privacy" }],
  }),
  component: Privacy,
});

function Privacy() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Privacy Policy" subtitle="Last updated: January 2026" />
      <section className="container-x py-12">
        <article className="glass-strong rounded-3xl p-8 md:p-12 max-w-3xl prose prose-invert prose-sm">
          <Section title="Information we collect">
            <p>We collect information you provide directly when booking a service: your name, contact details, address, and details about your television and the fault.</p>
          </Section>
          <Section title="How we use it">
            <p>To schedule pickups, communicate updates, deliver service, issue invoices, and where applicable send service reminders. We do not sell personal data.</p>
          </Section>
          <Section title="Data sharing">
            <p>We share information only with trusted couriers and authorised brand partners strictly to fulfil your service request.</p>
          </Section>
          <Section title="Retention">
            <p>Service records are retained for warranty and accounting purposes for a maximum of 7 years.</p>
          </Section>
          <Section title="Your rights">
            <p>You may request access, correction or deletion of your personal data by contacting us at hello@svrelectronics.com.</p>
          </Section>
        </article>
      </section>
    </>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-8">
      <h2 className="text-lg font-semibold text-foreground">{title}</h2>
      <div className="mt-2 text-muted-foreground leading-relaxed text-sm">{children}</div>
    </div>
  );
}
export default Privacy;