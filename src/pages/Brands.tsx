import { PageHero, Reveal } from "@/components/site/PageShell";
import { Tv, ShieldCheck } from "lucide-react";

const BRANDS = [
  "Samsung",
  "Sony",
  "LG",
  "Panasonic",
  "TCL",
  "Mi / Xiaomi",
  "OnePlus",
  "Vu",
  "Haier",
  "Toshiba",
  "Sharp",
  "Philips",
  "Kodak",
  "Motorola",
  "Realme",
  "Acer",
  "Hisense",
  "BPL",
];

function Brands() {
  return (
    <>
      <PageHero
        eyebrow="Supported Brands"
        title="Expert Service for All Major TV Brands"
        subtitle="Our technicians repair and service televisions from leading global manufacturers using professional tools and genuine spare parts."
      />

      <section className="container-x py-16">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
              We Repair All Leading Television Brands
            </h2>

            <p className="mt-5 text-muted-foreground leading-relaxed">
              Whether you own a Smart TV, Android TV, LED, OLED, QLED, UHD, 4K,
              or 8K television, our experienced technicians can diagnose and
              repair problems quickly and professionally.
            </p>
          </div>
        </Reveal>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-14">
          {BRANDS.map((brand, index) => (
            <Reveal key={brand} delay={index * 0.03}>
              <div className="glass rounded-2xl p-6 text-center hover:bg-[color:var(--card)] transition">
                <div className="inline-flex size-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[color:var(--ember)] to-[color:var(--ember-glow)] text-[color:var(--primary-foreground)] glow-ember">
                  <Tv className="size-6" />
                </div>

                <h3 className="mt-4 text-lg font-semibold">
                  {brand}
                </h3>

                <p className="mt-2 text-sm text-muted-foreground">
                  Repair & Service Support
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="container-x pb-20">
        <Reveal>
          <div className="glass-strong rounded-3xl p-8 md:p-12">
            <div className="flex items-start gap-4">
              <div className="inline-flex size-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[color:var(--ember)] to-[color:var(--ember-glow)] text-[color:var(--primary-foreground)]">
                <ShieldCheck className="size-7" />
              </div>

              <div>
                <h3 className="text-2xl font-bold">
                  Genuine Parts & Professional Repairs
                </h3>

                <p className="mt-3 text-muted-foreground leading-relaxed">
                  We use high-quality replacement parts and industry-standard
                  repair procedures to ensure long-lasting performance.
                  From display issues and motherboard repairs to backlight
                  replacement and software problems, SVR Electronics provides
                  reliable solutions for all supported TV brands.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}

export default Brands;