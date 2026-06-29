import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import {
  Cpu,
  CircuitBoard,
  Wrench,
  Tv,
  ShieldCheck,
  Zap,
  Clock,
  Star,
  ArrowRight,
  Sparkles,
  Phone,
  MessageSquare,
  CheckCircle2,
  MonitorSmartphone,
  Microscope,
} from "lucide-react";
import heroTv from "@/assets/hero-tv.jpg";
import workshop from "@/assets/workshop.jpg";
import parts from "@/assets/parts.jpg";
import { AnimatedCounter } from "@/components/site/AnimatedCounter";
import { Reveal } from "@/components/site/PageShell";
import { SITE } from "@/lib/site";
import AutoScrollCarousel from "@/components/AutoScrollCarousel";


function Home() {
  return (
    <>
      <Hero />
      {/* <Partners /> */}
      <Intro />
      <AdvancedLab />
      <Services />
      <Brands />
      {/* <Process /> */}
      <Reviews />
      <GalleryPreview />
      <CTA />
    </>
  );
}

function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);

  const words = "Professional Television Solutions for Every Home".split(" ");

  return (
    <section ref={ref} className="relative min-h-[100svh] flex items-center pt-28 pb-16 overflow-hidden">
      <div className="container-x relative z-10 grid lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-6">
          <motion.span
            initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs uppercase tracking-[0.18em] text-[color:var(--ember)]"
          >
            <Sparkles className="size-3" /> Trusted by 25,000+ homes
          </motion.span>
          <h1 className="mt-5 text-[2.6rem] sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.02] tracking-tight">
            {words.map((w, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.06, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className={`inline-block mr-[0.25em] ${i >= words.length - 2 ? "text-gradient-ember" : ""}`}
              >{w}</motion.span>
            ))}
          </h1>
          <motion.p
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8, duration: 0.7 }}
            className="mt-6 text-lg text-muted-foreground max-w-xl leading-relaxed"
          >
            Expert repairs, certified spare parts and the latest televisions — all from one premium electronics partner. Same-day diagnostics. 
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.95, duration: 0.6 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <Link
              to="/request-service"
              className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[color:var(--ember)] to-[color:var(--ember-glow)] px-6 py-3.5 text-sm font-semibold text-[color:var(--primary-foreground)] glow-ember hover:brightness-110 transition"
            >
              Request a service <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
  to="/contact"
  className="inline-flex items-center gap-2 rounded-xl glass-strong px-6 py-3.5 text-sm font-semibold hover:bg-[color:var(--ember)]/10 transition"
>
  <MessageSquare className="size-4" /> Contact Us
</Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }}
            className="mt-10 flex flex-wrap gap-x-7 gap-y-3 text-xs text-muted-foreground"
          >
            {["Genuine parts", "Doorstep pickup", "Senior technicians", "Transparent pricing"].map((t) => (
              <span key={t} className="inline-flex items-center gap-1.5"><CheckCircle2 className="size-3.5 text-[color:var(--ember)]" />{t}</span>
            ))}
          </motion.div>
        </div>

        <motion.div className="lg:col-span-6 relative" style={{ y, scale }}>
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, ease: "easeOut" }}
            className="relative animate-float-slow"
          >
            <div className="absolute -inset-10 rounded-full blur-3xl opacity-60" style={{ background: "radial-gradient(circle, color-mix(in oklab, var(--ember-glow) 40%, transparent), transparent 70%)" }} />
            <div className="relative rounded-3xl overflow-hidden glass-strong glow-ember">
              <img src={heroTv} alt="Premium OLED television" width={1536} height={1024} className="w-full h-auto" />
            </div>
          </motion.div>
          {/* floating stat chip */}
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.1 }}
            className="absolute -left-3 sm:-left-6 bottom-6 glass-strong rounded-2xl px-4 py-3 flex items-center gap-3"
          >
            <div className="inline-flex size-9 items-center justify-center rounded-lg bg-[color:var(--ember)]/15 text-[color:var(--ember)]"><Clock className="size-4.5" /></div>
            <div>
              <div className="text-sm font-semibold">24h turnaround</div>
              <div className="text-xs text-muted-foreground">on most repairs</div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.2 }}
            className="absolute -right-2 top-6 glass-strong rounded-2xl px-4 py-3 flex items-center gap-3"
          >
            <div className="inline-flex size-9 items-center justify-center rounded-lg bg-[color:var(--ember)]/15 text-[color:var(--ember)]"><Star className="size-4.5 fill-current" /></div>
            <div>
              <div className="text-sm font-semibold">4.9 / 5.0</div>
              <div className="text-xs text-muted-foreground">2,100+ reviews</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function Intro() {
  const stats = [
    { value: 25000, suffix: "+", label: "TVs repaired" },
    { value: 10, suffix: "+", label: "Trusted Partners" },
    { value: 24, suffix: "h", label: "Average turnaround" },
    { value: 98, suffix: "%", label: "Customer satisfaction" },
  ];
  return (
    <section className="container-x py-24 md:py-32">
      <div className="grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-5">
          <Reveal>
            <span className="text-xs uppercase tracking-[0.2em] text-[color:var(--ember)]">About SVR</span>
            <h2 className="mt-3 text-3xl md:text-5xl font-bold tracking-tight">
              An <span className="text-gradient-ember">engineering-grade</span> approach to home entertainment.
            </h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              For over 15 years SVR Electronics has been the quiet name behind perfect picture quality in thousands of homes. Our master technicians service every major brand — from entry-level LEDs to flagship OLED panels.
            </p>
            <div className="mt-6 flex gap-3">
              <Link to="/about" className="rounded-xl glass px-5 py-2.5 text-sm font-semibold hover:bg-[color:var(--ember)]/10">Our story</Link>
              <Link to="/services" className="rounded-xl bg-gradient-to-r from-[color:var(--ember)] to-[color:var(--ember-glow)] px-5 py-2.5 text-sm font-semibold text-[color:var(--primary-foreground)] glow-ember">Our services</Link>
            </div>
          </Reveal>
        </div>
        <div className="lg:col-span-7">
          <Reveal delay={0.15}>
            <div className="relative rounded-3xl overflow-hidden glass-strong">
              <img src={workshop} alt="SVR Electronics workshop" loading="lazy" width={1536} height={1024} className="w-full h-72 md:h-96 object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" />
            </div>
          </Reveal>
          <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-3">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={0.05 * i}>
                <div className="glass rounded-2xl p-5">
                  <div className="text-3xl font-display font-bold text-gradient-ember">
                    <AnimatedCounter value={s.value} suffix={s.suffix} />
                  </div>
                  <div className="mt-1 text-xs text-muted-foreground">{s.label}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


// function Partners() {
//   const partners = [
//     "Amazon",
//     "Flipkart",
//     "ResQ",
//     "EkranFix",
//     "Jeeves",
//     "Amazon",
//     "Flipkart",
//     "ResQ",
//     "EkranFix",
//     "Jeeves",
//   ];

//   return (
//     <section className="py-24 md:py-32 border-y border-border/60 bg-[color:var(--card)]/30">
//       <div className="container-x">
//         <Reveal>
//           <div className="text-center">
//             <span className="text-xs uppercase tracking-[0.2em] text-[color:var(--ember)]">
//               Trusted Partners
//             </span>

//             <h2 className="mt-3 text-3xl md:text-5xl font-bold tracking-tight">
//               Official Service Partner Network
//             </h2>

//             <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
//               Proudly associated with India's leading electronics retailers,
//               e-commerce platforms and service providers.
//             </p>
//           </div>
//         </Reveal>

//         <div
//           className="relative mt-1 overflow-hidden"
//           style={{
//             maskImage:
//               "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
//           }}
//         >
//           <div
//             className="flex gap-5 animate-marquee w-max"
//             style={{ animationDuration: "25s" }}
//           >
//             {partners.map((partner, i) => (
//               <div
//                 key={i}
//                 className="shrink-0 glass-strong rounded-2xl px-10 py-6 min-w-[220px] text-center hover:bg-[color:var(--ember)]/10 transition-all duration-300"
//               >
//                 <h3 className="font-display text-xl font-bold">
//                   {partner}
//                 </h3>

//                 <p className="mt-12 text-xs text-muted-foreground">
//                   Authorized Partner
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


function AdvancedLab() {
  const features = [
    {
      icon: MonitorSmartphone,
      title: "Bonding Machine Technology",
      desc: "Advanced COF/TAB bonding machine solutions for display line issues, panel faults and screen restoration.",
    },
    {
      icon: CircuitBoard,
      title: "Chip Level Repair",
      desc: "Motherboard and power supply repairs using professional diagnostic tools and precision soldering stations.",
    },
    {
      icon: Microscope,
      title: "LED Backlight Testing",
      desc: "Accurate backlight analysis and replacement using dedicated LED strip testing equipment.",
    },
    {
      icon: Cpu,
      title: "Smart TV Software Solutions",
      desc: "Android TV, Google TV, WebOS and Tizen software installation, updates and troubleshooting.",
    },
  ];

  return (
    <section className="container-x py-24 md:py-32">
      <Reveal>
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-xs uppercase tracking-[0.2em] text-[color:var(--ember)]">
            Advanced Technology
          </span>

          <h2 className="mt-3 text-3xl md:text-5xl font-bold tracking-tight">
            Advanced Repair Laboratory
          </h2>

          <p className="mt-4 text-muted-foreground">
            Equipped with modern diagnostic systems, bonding machines and
            precision repair equipment for advanced television servicing.
          </p>
        </div>
      </Reveal>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5 mt-12">
        {features.map((item, index) => (
          <Reveal key={item.title} delay={index * 0.1}>
            <div className="glass rounded-2xl p-6 h-full hover:bg-[color:var(--card)] transition-all">
              <div className="inline-flex size-12 items-center justify-center rounded-xl bg-gradient-to-br from-[color:var(--ember)] to-[color:var(--ember-glow)] text-white">
                <item.icon className="size-5" />
              </div>

              <h3 className="mt-4 text-lg font-semibold">
                {item.title}
              </h3>

              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                {item.desc}
              </p>
            </div>
          </Reveal>
        ))}
      </div>

      <div className="mt-10 glass-strong rounded-3xl p-8 text-center">
        <h3 className="text-2xl font-bold">
          Specialized Bonding Machine Services
        </h3>

        <p className="mt-3 text-muted-foreground max-w-3xl mx-auto">
          SVR Electronics is equipped with advanced bonding machine technology
          for repairing display line issues, panel faults, screen flickering,
          dead lines and COF-related display problems that many repair centers
          cannot handle.
        </p>
      </div>
    </section>
  );
}

const SERVICES = [
  { icon: Wrench, title: "TV Repairs", desc: "Panel, board, backlight and software repairs for every brand and model.", to: "/repairs" },
  { icon: CircuitBoard, title: "Genuine Spare Parts", desc: "OEM-grade boards, panels, LED strips and accessories in stock.", to: "/parts" },
  { icon: Tv, title: "New TV Sales", desc: "Latest OLED, QLED and 4K UHD models from authorised brands.", to: "/sales" },
  { icon: ShieldCheck, title: "Extended Warranty", desc: "30-day workmanship warranty on all repairs and spare parts.", to: "/warranty" },
  { icon: Zap, title: "Doorstep Service", desc: "Pickup, diagnose and return — anywhere in the western province.", to: "/services" },
  { icon: Cpu, title: "Smart TV Setup", desc: "Wall-mounting, smart configuration and signal calibration done right.", to: "/services" },
];

function Services() {
  return (
    <section className="container-x py-24 md:py-32">
      <Reveal>
        <div className="max-w-2xl">
          <span className="text-xs uppercase tracking-[0.2em] text-[color:var(--ember)]">What we do</span>
          <h2 className="mt-3 text-3xl md:text-5xl font-bold tracking-tight">Featured services, engineered for reliability.</h2>
          <p className="mt-4 text-muted-foreground">Six core services, one consistent standard — premium components, certified technicians, transparent pricing.</p>
        </div>
      </Reveal>
      <div className="mt-12 grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-5">
        {SERVICES.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ delay: i * 0.07, duration: 0.55 }}
            whileHover={{ y: -6 }}
            className="group relative glass rounded-2xl p-7 hover:bg-[color:var(--card)] transition-colors"
          >
            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"
              style={{ boxShadow: "0 0 0 1px color-mix(in oklab, var(--ember) 40%, transparent), 0 20px 60px -20px color-mix(in oklab, var(--ember) 50%, transparent)" }} />
            <div className="relative">
              <div className="inline-flex size-12 items-center justify-center rounded-xl bg-gradient-to-br from-[color:var(--ember)] to-[color:var(--ember-glow)] text-[color:var(--primary-foreground)] glow-ember">
                <s.icon className="size-5.5" />
              </div>
              <h3 className="mt-5 text-xl font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              <Link to={s.to} className="mt-5 inline-flex items-center gap-1.5 text-sm text-[color:var(--ember)] hover:gap-2 transition-all">
                Learn more <ArrowRight className="size-3.5" />
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function Brands() {
  const brands = [
    "Samsung",
    "LG",
    "Sony",
    "Mi",
    "OnePlus",
    "TCL",
    "Panasonic",
    "Kodak",
    "Acer",
    "Motorola",
    "Realme",
    "Samsung",
    "LG",
    "Sony",
    "Mi",
    "OnePlus",
    "TCL",
  ];

  return (
    <section className="py-24 md:py-32 border-y border-border/60 bg-[color:var(--card)]/30">
      <div className="container-x">
        <Reveal>
          <div className="text-center">
            <span className="text-xs uppercase tracking-[0.2em] text-[color:var(--ember)]">
              Trusted TV Repair Across Leading Brands
            </span>

            <h2 className="mt-3 text-3xl md:text-5xl font-bold tracking-tight">
              We Repair All Leading Television Brands
            </h2>

            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              From LED and Smart TVs to OLED and QLED models, our technicians
              are experienced with every major television manufacturer.
            </p>
          </div>
        </Reveal>

        <div
          className="relative mt-12"
          style={{
            maskImage:
              "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
          }}
        >
          <AutoScrollCarousel speed={0.12}>
            {brands.map((brand, i) => (
              <div
                key={i}
                className="shrink-0 glass rounded-2xl px-7 py-5 min-w-[180px] text-center font-display font-semibold text-lg hover:bg-[color:var(--ember)]/10 hover:text-[color:var(--ember)] transition"
              >
                {brand}
              </div>
            ))}
          </AutoScrollCarousel>
        </div>
      </div>
    </section>
  );
}


const STEPS = [
  { n: "01", title: "Book", desc: "Tell us the issue via form, call or WhatsApp." },
  { n: "02", title: "Diagnose", desc: "Book a slot and complete fault diagnosis." },
  { n: "03", title: "Repair", desc: "Transparent quote, genuine parts, master technicians." },
  { n: "04", title: "Deliver", desc: "Quality-tested, warrantied and delivered to your door." },
];

// function Process() {
//   return (
//     <section className="container-x py-24 md:py-32">
//       <Reveal>
//         <div className="max-w-2xl">
//           <span className="text-xs uppercase tracking-[0.2em] text-[color:var(--ember)]">How it works</span>
//           <h2 className="mt-3 text-3xl md:text-5xl font-bold tracking-tight">A repair process you can actually trust.</h2>
//         </div>
//       </Reveal>
//       <div className="relative mt-14 grid md:grid-cols-4 gap-5">
//         <div className="hidden md:block absolute top-9 left-[8%] right-[8%] h-px bg-gradient-to-r from-transparent via-[color:var(--ember)]/40 to-transparent" />
//         {STEPS.map((s, i) => (
//           <motion.div
//             key={s.n}
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true, margin: "-60px" }}
//             transition={{ delay: i * 0.12, duration: 0.6 }}
//             className="relative glass rounded-2xl p-6"
//           >
//             <div className="inline-flex size-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[color:var(--ember)] to-[color:var(--ember-glow)] text-[color:var(--primary-foreground)] font-display font-bold text-lg glow-ember">
//               {s.n}
//             </div>
//             <h3 className="mt-4 text-lg font-semibold">{s.title}</h3>
//             <p className="mt-1.5 text-sm text-muted-foreground">{s.desc}</p>
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// }

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
    role: "Nizamabad",
    text: "Best place in the city for genuine spare parts. Saved me from buying a new TV.",
    rating: 3.9,
  },
  {
    name: "Maneesh",
    role: "Nizamabad",
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

function Reviews() {
  return (
    <section className="py-24 md:py-32 border-y border-border/60 bg-[color:var(--card)]/30">
      <Reveal>
        <div className="container-x text-center max-w-2xl mx-auto">
          <span className="text-xs uppercase tracking-[0.2em] text-[color:var(--ember)]">
            Customer reviews
          </span>

          <h2 className="mt-3 text-3xl md:text-5xl font-bold tracking-tight">
            Loved by thousands across Telangana.
          </h2>
        </div>
      </Reveal>

      <div
        className="relative mt-12 overflow-hidden"
        style={{
          maskImage:
            "linear-gradient(to right, transparent, black 6%, black 94%, transparent)",
        }}
      >
        <AutoScrollCarousel speed={0.12}>
          {REVIEWS.map((r, i) => (
            <div
              key={i}
              className="shrink-0 w-[340px] glass-strong rounded-2xl p-6"
            >
              <div className="flex gap-0.5 text-[color:var(--ember)]">
                {Array.from({
                  length: Math.floor(r.rating),
                }).map((_, j) => (
                  <Star key={j} className="size-4 fill-current" />
                ))}
              </div>

              <p className="mt-3 text-sm text-foreground/90 leading-relaxed">
                "{r.text}"
              </p>

              <div className="mt-4 flex items-center gap-3">
                <div className="size-9 rounded-full bg-gradient-to-br from-[color:var(--ember)] to-[color:var(--ember-glow)] inline-flex items-center justify-center font-display font-bold text-[color:var(--primary-foreground)]">
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
          ))}
        </AutoScrollCarousel>
      </div>
    </section>
  );
}

function GalleryPreview() {
  const imgs = [heroTv, workshop, parts, heroTv, workshop];
  const heights = ["h-56", "h-72", "h-64", "h-80", "h-56"];
  return (
    <section className="container-x py-24 md:py-32">
      <Reveal>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 max-w-4xl">
          <div>
            <span className="text-xs uppercase tracking-[0.2em] text-[color:var(--ember)]">Inside the workshop</span>
            <h2 className="mt-3 text-3xl md:text-5xl font-bold tracking-tight">A glimpse at the craft.</h2>
          </div>
          <Link to="/gallery" className="inline-flex items-center gap-1.5 text-sm text-[color:var(--ember)] hover:gap-2 transition-all">Explore full gallery <ArrowRight className="size-4" /></Link>
        </div>
      </Reveal>
      <div className="mt-12 columns-2 md:columns-3 gap-4 [column-fill:_balance]">
        {imgs.map((src, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ delay: i * 0.08, duration: 0.55 }}
            className={`mb-4 overflow-hidden rounded-2xl glass ${heights[i % heights.length]} relative group cursor-pointer break-inside-avoid`}
          >
            <img src={src} alt="" loading="lazy" className="size-full object-cover transition-transform duration-700 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="container-x py-24 md:py-32">
      <Reveal>
        <div className="relative overflow-hidden rounded-3xl glass-strong p-10 md:p-16">
          <div className="absolute -top-24 -right-24 size-[420px] rounded-full blur-3xl opacity-50"
            style={{ background: "radial-gradient(circle, var(--ember-glow), transparent 70%)" }} />
          <div className="absolute -bottom-32 -left-16 size-[360px] rounded-full blur-3xl opacity-40"
            style={{ background: "radial-gradient(circle, var(--ember), transparent 70%)" }} />
          <div className="relative grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight">
                Ready to bring your <span className="text-gradient-ember">picture back to life?</span>
              </h2>
              <p className="mt-4 text-muted-foreground max-w-lg">Book a slot today. Our master technicians will diagnose, quote and repair — with no obligation.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 lg:justify-end">
              <Link to="/request-service" className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[color:var(--ember)] to-[color:var(--ember-glow)] px-7 py-4 text-sm font-semibold text-[color:var(--primary-foreground)] glow-ember">
                Request service <ArrowRight className="size-4" />
              </Link>
              <a href={SITE.phoneHref} className="inline-flex items-center justify-center gap-2 rounded-xl glass px-7 py-4 text-sm font-semibold hover:bg-[color:var(--ember)]/10">
                <Phone className="size-4" /> {SITE.phone}
              </a>
              <a href={SITE.phoneHref1} className="inline-flex items-center justify-center gap-2 rounded-xl glass px-7 py-4 text-sm font-semibold hover:bg-[color:var(--ember)]/10">
                <Phone className="size-4" /> {SITE.phone1}
              </a>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
export default Home;