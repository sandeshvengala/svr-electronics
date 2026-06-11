import type { ReactNode } from "react";
import { motion } from "framer-motion";

export function PageHero({ eyebrow, title, subtitle, children }: { eyebrow?: string; title: string; subtitle?: string; children?: ReactNode }) {
  return (
    <section className="relative pt-32 md:pt-40 pb-12 md:pb-16">
      <div className="container-x">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-3xl"
        >
          {eyebrow && (
            <span className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs uppercase tracking-[0.18em] text-[color:var(--ember)]">
              <span className="size-1.5 rounded-full bg-[color:var(--ember)] animate-pulse" />
              {eyebrow}
            </span>
          )}
          <h1 className="mt-4 text-4xl md:text-6xl font-bold tracking-tight">
            {title.split(" ").map((w, i, arr) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.05, duration: 0.6 }}
                className={`inline-block mr-[0.25em] ${i === arr.length - 1 ? "text-gradient-ember" : ""}`}
              >
                {w}
              </motion.span>
            ))}
          </h1>
          {subtitle && <p className="mt-5 text-lg text-muted-foreground max-w-2xl">{subtitle}</p>}
          {children && <div className="mt-7">{children}</div>}
        </motion.div>
      </div>
    </section>
  );
}

export function Reveal({ children, delay = 0 }: { children: ReactNode; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
