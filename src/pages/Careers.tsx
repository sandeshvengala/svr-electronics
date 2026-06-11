
import { PageHero, Reveal } from "@/components/site/PageShell";
import { Briefcase, MapPin } from "lucide-react";


const ROLES = [
  { title: "Senior TV Technician", location: "Colombo", type: "Full-time" },
  { title: "Apprentice Technician", location: "Colombo", type: "Full-time" },
  { title: "Customer Service Associate", location: "Colombo", type: "Full-time" },
  { title: "Logistics & Pickup Driver", location: "Western Province", type: "Full-time" },
];

function Careers() {
  return (
    <>
      <PageHero eyebrow="Careers" title="Build a career in premium electronics." subtitle="We're hiring craftspeople, communicators and problem solvers who care about doing things properly." />
      <section className="container-x py-12 max-w-3xl">
        <div className="space-y-4">
          {ROLES.map((r, i) => (
            <Reveal key={r.title} delay={i * 0.06}>
              <div className="glass rounded-2xl p-6 flex flex-col sm:flex-row sm:items-center gap-4 sm:justify-between hover:bg-[color:var(--card)] transition">
                <div className="flex items-start gap-4">
                  <div className="inline-flex size-11 items-center justify-center rounded-xl bg-gradient-to-br from-[color:var(--ember)] to-[color:var(--ember-glow)] text-[color:var(--primary-foreground)] glow-ember"><Briefcase className="size-5" /></div>
                  <div>
                    <h3 className="font-semibold">{r.title}</h3>
                    <div className="mt-1 text-xs text-muted-foreground flex items-center gap-3">
                      <span className="inline-flex items-center gap-1"><MapPin className="size-3" />{r.location}</span>
                      <span>•</span>
                      <span>{r.type}</span>
                    </div>
                  </div>
                </div>
                <a href="mailto:careers@svrelectronics.com" className="rounded-xl bg-gradient-to-r from-[color:var(--ember)] to-[color:var(--ember-glow)] px-5 py-2.5 text-sm font-semibold text-[color:var(--primary-foreground)]">Apply</a>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal>
          <p className="mt-10 text-sm text-muted-foreground">Don't see your role? Email <a className="text-[color:var(--ember)]" href="mailto:careers@svrelectronics.com">careers@svrelectronics.com</a> — we read every CV.</p>
        </Reveal>
      </section>
    </>
  );
}
export default Careers;
