import { useEffect, useRef } from "react";

/**
 * Layered premium background: animated mesh gradient, drifting orbs,
 * subtle grid, particles and an interactive mouse-follow glow.
 */
export function Background() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onMove = (e: MouseEvent) => {
      el.style.setProperty("--mx", `${e.clientX}px`);
      el.style.setProperty("--my", `${e.clientY}px`);
    };
    window.addEventListener("pointermove", onMove);
    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
      style={{ ["--mx" as never]: "50vw", ["--my" as never]: "30vh" }}
    >
      {/* base mesh gradient */}
      <div
        className="absolute inset-0 opacity-90"
        style={{
          background:
            "radial-gradient(900px 600px at 15% 10%, color-mix(in oklab, var(--ember) 18%, transparent), transparent 60%), radial-gradient(700px 500px at 85% 30%, color-mix(in oklab, var(--ember-glow) 14%, transparent), transparent 65%), radial-gradient(800px 700px at 50% 90%, color-mix(in oklab, var(--ember) 10%, transparent), transparent 70%)",
        }}
      />
      {/* drifting orbs */}
      <div className="absolute -top-32 -left-24 size-[420px] rounded-full blur-3xl opacity-50 animate-orb-drift"
        style={{ background: "radial-gradient(circle, color-mix(in oklab, var(--ember) 55%, transparent), transparent 65%)" }} />
      <div className="absolute top-1/3 -right-32 size-[520px] rounded-full blur-3xl opacity-40 animate-orb-drift"
        style={{ background: "radial-gradient(circle, color-mix(in oklab, var(--ember-glow) 45%, transparent), transparent 70%)", animationDelay: "-6s" }} />
      <div className="absolute -bottom-40 left-1/3 size-[600px] rounded-full blur-3xl opacity-30 animate-orb-drift"
        style={{ background: "radial-gradient(circle, color-mix(in oklab, var(--ember) 40%, transparent), transparent 70%)", animationDelay: "-12s" }} />

      {/* grid */}
      <div className="absolute inset-0 grid-bg opacity-40" />

      {/* particles */}
      <div className="absolute inset-0">
        {Array.from({ length: 28 }).map((_, i) => (
          <span
            key={i}
            className="absolute block size-[3px] rounded-full bg-[color:var(--ember-glow)] opacity-60"
            style={{
              top: `${(i * 53) % 100}%`,
              left: `${(i * 37) % 100}%`,
              animation: `float-slow ${5 + (i % 6)}s ease-in-out ${i * 0.2}s infinite`,
              boxShadow: "0 0 8px var(--ember-glow)",
            }}
          />
        ))}
      </div>

      {/* mouse follow */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(400px 400px at var(--mx) var(--my), color-mix(in oklab, var(--ember-glow) 18%, transparent), transparent 60%)",
          transition: "background 60ms linear",
        }}
      />
      {/* vignette */}
      <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at center, transparent 40%, color-mix(in oklab, var(--background) 70%, transparent))" }} />
    </div>
  );
}
