import { PageHero, Reveal } from "@/components/site/PageShell";
import { Star } from "lucide-react";

const REVIEWS = [
  {
    name: "Nithin",
    role: "Nizamabad",
    text: "My Sony 65\" OLED came back like new in two days. Genuinely impressed by the professionalism.",
    rating: 5,
  },
  {
    name: "Umesh",
    role: "Armoor",
    text: "Honest pricing, no upselling, and the technician explained exactly what was wrong. Highly recommended.",
    rating: 5,
  },
  {
    name: "Rohan",
    role: "Kamareddy",
    text: "Bought a new 55\" Samsung from them and got free wall mounting. Service is on another level.",
    rating: 4,
  },
  {
    name: "Dileep",
    role: "Basara",
    text: "Same-day pickup, repaired the backlight, delivered next morning. Brilliant team.",
    rating: 5,
  },
  {
    name: "Karunakar",
    role: "Karimnagar",
    text: "I've used them three times across different TVs. Quality has never dropped.",
    rating: 4,
  },
  {
    name: "Tharun",
    role: "Jagtial",
    text: "Best place in the city for genuine spare parts. Saved me from buying a new TV.",
    rating: 3.9,
  },
  {
    name: "Maneesh",
    role: "Dichpally",
    text: "The technician was punctual, polite and very knowledgeable. Will definitely recommend.",
    rating: 4,
  },
  {
    name: "Suresh",
    role: "Nizamabad",
    text: "Got my old Panasonic plasma back to life. They actually found the parts!",
    rating: 4,
  },
  {
    name: "Hari",
    role: "Nirmal",
    text: "Smooth booking, transparent quote, fast delivery. Couldn't have asked for more.",
    rating: 5,
  },
];

function Testimonials() {
  return (
    <>
      <PageHero
        eyebrow="Testimonials"
        title="Loved by thousands across Telangana."
        subtitle="A small sample of recent reviews from real customers."
      />

      <section className="container-x py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {REVIEWS.map((r, i) => (
            <Reveal key={r.name + i} delay={(i % 6) * 0.05}>
              <div className="glass rounded-2xl p-6 h-full flex flex-col">
                <div className="flex gap-1 text-[color:var(--ember)]">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star
                      key={j}
                      className={`size-4 ${
                        j < Math.round(r.rating)
                          ? "fill-current"
                          : "opacity-30"
                      }`}
                    />
                  ))}
                </div>

                <p className="mt-3 text-sm text-foreground/90 leading-relaxed flex-1">
                  "{r.text}"
                </p>

                <div className="mt-5 flex items-center gap-3">
                  <div className="size-10 rounded-full bg-gradient-to-br from-[color:var(--ember)] to-[color:var(--ember-glow)] inline-flex items-center justify-center font-display font-bold text-[color:var(--primary-foreground)]">
                    {r.name[0]}
                  </div>

                  <div>
                    <div className="text-sm font-semibold">{r.name}</div>
                    <div className="text-xs text-muted-foreground">
                      {r.role}
                    </div>
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