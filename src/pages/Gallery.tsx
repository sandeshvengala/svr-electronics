
import { PageHero } from "@/components/site/PageShell";
import { motion } from "framer-motion";
import hero from "@/assets/hero-tv.jpg";
import workshop from "@/assets/workshop.jpg";
import parts from "@/assets/parts.jpg";
import repair from "@/assets/repair-hands.jpg";

({
  head: () => ({
    meta: [
      { title: "Gallery — Inside the SVR Electronics Workshop" },
      { name: "description", content: "A look inside our workshop, recent repair projects and the craft that goes into every television we service." },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
  component: Gallery,
});

function Gallery() {
  const imgs = [hero, workshop, parts, repair, hero, workshop, parts, repair, hero];
  const heights = ["h-64", "h-80", "h-56", "h-72", "h-64", "h-96", "h-72", "h-56", "h-80"];
  return (
    <>
      <PageHero eyebrow="Gallery" title="A look inside the craft." subtitle="Workshop moments, repair projects and the people behind every job." />
      <section className="container-x py-12">
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 [column-fill:_balance]">
          {imgs.map((src, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.94 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: (i % 6) * 0.06, duration: 0.6 }}
              className={`mb-4 group relative overflow-hidden rounded-2xl glass break-inside-avoid ${heights[i % heights.length]}`}
            >
              <img src={src} alt="" loading="lazy" className="size-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}
export default Gallery;