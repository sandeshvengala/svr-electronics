
import { PageHero, Reveal } from "@/components/site/PageShell";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

({
  head: () => ({
    meta: [
      { title: "FAQ — Television Repair Questions Answered | SVR Electronics" },
      { name: "description", content: "Common questions about our TV repair, spare parts, warranty, pickup service and pricing." },
    ],
    links: [{ rel: "canonical", href: "/faq" }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: FAQS.map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
      }),
    }],
  }),
  component: FAQ,
});

const FAQS = [
  { q: "How long does a typical repair take?", a: "Most repairs are completed within 24 to 48 hours. Complex panel issues may take 3–5 days if parts must be sourced." },
  { q: "Do you charge for diagnosis?", a: "No. Diagnosis is free — you only pay if you approve the repair quote we provide upfront." },
  { q: "Do you offer pickup and delivery?", a: "Yes. Free pickup and delivery is available island-wide on qualifying repairs and purchases." },
  { q: "What warranty do you provide on repairs?", a: "All repairs come with a 90-day workmanship warranty. Genuine parts carry their own manufacturer warranty." },
  { q: "Which brands do you service?", a: "Every major brand including Samsung, Sony, LG, Panasonic, TCL, Hisense, Toshiba, Sharp, Innovex, Singer, Abans and more." },
  { q: "Can you repair OLED panels?", a: "Yes. Our senior technicians are trained on OLED, QLED and Neo QLED panel-level repairs." },
  { q: "Do you sell new TVs?", a: "Yes — we are authorised resellers for several major brands and offer free delivery and wall mounting on most purchases." },
  { q: "How do I book a service?", a: "Use our Request Service form, call us directly, or message us on WhatsApp — we typically respond within minutes during business hours." },
];

function FAQ() {
  return (
    <>
      <PageHero eyebrow="FAQ" title="Answers, straight up." subtitle="The questions we hear most often — answered clearly." />
      <section className="container-x py-12">
        <Reveal>
          <div className="glass-strong rounded-3xl p-6 md:p-10 max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              {FAQS.map((f, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="border-border/60">
                  <AccordionTrigger className="text-left text-base hover:text-[color:var(--ember)]">{f.q}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">{f.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </Reveal>
      </section>
    </>
  );
}
export default FAQ;