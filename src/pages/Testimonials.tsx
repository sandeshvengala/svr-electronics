import { PageHero, Reveal } from "@/components/site/PageShell";
import { Star } from "lucide-react";

({
  head: () => ({
    meta: [
      { title: "Customer Testimonials | SVR Electronics" },
      { name: "description", content: "Read what thousands of customers across Telangana say about our TV repair, spare parts and sales service." },
    ],
    links: [{ rel: "canonical", href: "/testimonials" }],
  }),
  component: Testimonials,
});

const REVIEWS = [
  { name: "Nimal Perera", role: "Nizamabad", text: "My Sony 65\" OLED came back like new in two days. Genuinely impressed by the professionalism.", rating: 5 },
  { name: "Ayesha F.", role: "Armoor", text: "Honest pricing, no upselling, and the technician explained exactly what was wrong. Highly recommended.", rating: 5 },
  { name: "Roshan Silva", role: "Kamareddy", text: "Bought a new 55\" Samsung from them and got free wall mounting. Service is on another level.", rating: 5 },
  { name: "Dilani Wijesinghe", role: "Basara", text: "Same-day pickup, repaired the backlight, delivered next morning. Brilliant team.", rating: 5 },
  { name: "Kasun Bandara", role: "Karimnagar", text: "I've used them three times across different TVs. Quality has never dropped.", rating: 5 },
  { name: "Tharindu R.", role: "Nizamabad", text: "Best place in the city for genuine spare parts. Saved me from buying a new TV.", rating: 5 },
  { name: "Manel S.", role: "Nizamabad", text: "The technician was punctual, polite and very knowledgeable. Will definitely recommend.", rating: 5 },
  { name: "Suresh K.", role: "Nizamabad", text: "Got my old Panasonic plasma back to life. They actually found the parts!", rating: 5 },
  { name: "Hashini D.", role: "Nirmal", text: "Smooth booking, transparent quote, fast delivery. Couldn't have asked for more.", rating: 5 },
];

function Testimonials() {
  return (
    <>
      <PageHero eyebrow="Testimonials" title="Loved by thousands across Sri Lanka." subtitle="A small sample of recent reviews from real customers." />
      <section className="container-x py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {REVIEWS.map((r, i) => (
            <Reveal key={r.name + i} delay={(i % 6) * 0.05}>
              <div className="glass rounded-2xl p-6 h-full flex flex-col">
                <div className="flex gap-0.5 text-[color:var(--ember)]">
                  {Array.from({ length: r.rating }).map((_, j) => <Star key={j} className="size-4 fill-current" />)}
                </div>
                <p className="mt-3 text-sm text-foreground/90 leading-relaxed flex-1">"{r.text}"</p>
                <div className="mt-5 flex items-center gap-3">
                  <div className="size-10 rounded-full bg-gradient-to-br from-[color:var(--ember)] to-[color:var(--ember-glow)] inline-flex items-center justify-center font-display font-bold text-[color:var(--primary-foreground)]">{r.name[0]}</div>
                  <div>
                    <div className="text-sm font-semibold">{r.name}</div>
                    <div className="text-xs text-muted-foreground">{r.role}</div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
export default Testimonials;