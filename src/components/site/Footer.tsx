import { Link } from "react-router-dom";
import {
  Tv,
  Mail,
  Phone,
  MapPin,
  Globe
} from "lucide-react";
import { SITE } from "@/lib/site";

const groups = [
  {
    title: "Company",
    links: [
      { to: "/about", label: "About Us" },
      { to: "/careers", label: "Careers" },
      { to: "/gallery", label: "Gallery" },
      { to: "/testimonials", label: "Testimonials" },
    ],
  },
  {
    title: "Services",
    links: [
      { to: "/repairs", label: "TV Repairs" },
      { to: "/parts", label: "Spare Parts" },
      { to: "/sales", label: "New TV Sales" },
      { to: "/warranty", label: "Warranty" },
    ],
  },
  {
    title: "Support",
    links: [
      { to: "/contact", label: "Contact" },
      { to: "/request-service", label: "Request Service" },
      { to: "/faq", label: "FAQ" },
      { to: "/brands", label: "Supported Brands" },
    ],
  },
  {
    title: "Legal",
    links: [
      { to: "/privacy", label: "Privacy Policy" },
      { to: "/terms", label: "Terms & Conditions" },
    ],
  },
] as const;

export function Footer() {
  return (
    <footer className="relative mt-32 border-t border-border/60">
      <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-[color:var(--ember)]/60 to-transparent" />
      <div className="container-x py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-6">
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2.5">
              <span className="inline-flex size-9 items-center justify-center rounded-xl bg-gradient-to-br from-[color:var(--ember)] to-[color:var(--ember-glow)] glow-ember">
                <Tv className="size-4.5 text-[color:var(--primary-foreground)]" />
              </span>
              <span className="font-display font-bold text-lg">SVR <span className="text-gradient-ember">Electronics</span></span>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground max-w-sm leading-relaxed">
              {SITE.description}
            </p>
            <div className="mt-5 space-y-2 text-sm">
              <a href={SITE.phoneHref} className="flex items-center gap-2 text-muted-foreground hover:text-foreground"><Phone className="size-4 text-[color:var(--ember)]" />{SITE.phone}</a>
              <a href={SITE.phoneHref1} className="flex items-center gap-2 text-muted-foreground hover:text-foreground"><Phone className="size-4 text-[color:var(--ember)]" />{SITE.phone1}</a>
              <a href={SITE.emailHref} className="flex items-center gap-2 text-muted-foreground hover:text-foreground"><Mail className="size-4 text-[color:var(--ember)]" />{SITE.email}</a>
              <div className="flex items-start gap-2 text-muted-foreground"><MapPin className="size-4 text-[color:var(--ember)] mt-0.5" />{SITE.address}</div>
            </div>
            <div className="mt-5 flex gap-2">
              {[Globe, Globe, Globe].map((Icon, i) => (
                <a key={i} href="#" className="inline-flex size-9 items-center justify-center rounded-lg glass hover:bg-[color:var(--ember)]/10 hover:text-[color:var(--ember)] transition"><Icon className="size-4" /></a>
              ))}
            </div>
          </div>
          {groups.map((g) => (
            <div key={g.title}>
              <h4 className="text-sm font-semibold tracking-wide uppercase text-foreground/80">{g.title}</h4>
              <ul className="mt-4 space-y-2.5">
                {g.links.map((l) => (
                  <li key={l.to}>
                    <Link to={l.to} className="text-sm text-muted-foreground hover:text-[color:var(--ember)] transition-colors">{l.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-14 pt-6 border-t border-border/60 flex flex-col md:flex-row gap-3 items-center justify-between text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} SVR Electronics. All rights reserved.</p>
          <p>Crafted with precision · Premium electronics service since 2010</p>
        </div>
      </div>
    </footer>
  );
}
export default Footer;