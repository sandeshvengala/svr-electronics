import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, Sun, Moon, Tv } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { NAV, SITE } from "@/lib/site";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dark, setDark] = useState(true);
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    const root = document.documentElement;
    if (dark) root.classList.add("dark");
    else root.classList.remove("dark");
  }, [dark]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <motion.div
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`mx-auto mt-3 transition-all duration-500 ${
          scrolled ? "max-w-6xl" : "max-w-7xl"
        }`}
        style={{ paddingInline: "1rem" }}
      >
        <div className={`glass-strong rounded-2xl flex items-center justify-between gap-4 px-4 md:px-6 transition-all ${scrolled ? "py-2.5" : "py-3.5"}`}>
          <Link to="/" className="flex items-center gap-2.5 group">
            <span className="relative inline-flex size-9 items-center justify-center rounded-xl bg-gradient-to-br from-[color:var(--ember)] to-[color:var(--ember-glow)] text-[color:var(--primary-foreground)] glow-ember">
              <Tv className="size-4.5" />
            </span>
            <span className="font-display font-bold text-base md:text-lg tracking-tight">
              SVR <span className="text-gradient-ember">Electronics</span>
            </span>
          </Link>

          {/* <nav className="hidden lg:flex items-center gap-1">
            {NAV.map((item) => {
              const active = pathname === item.to;
              return (
                <Link
                  key={item.to}
                  to={item.to}
                  className={`relative px-3 py-1.5 rounded-lg text-sm transition-colors ${
                    active ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {active && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-lg bg-[color:var(--ember)]/10 ring-1 ring-[color:var(--ember)]/30"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span className="relative">{item.label}</span>
                </Link>
              );
            })}
          </nav> */}

          <div className="flex items-center gap-2">
            <button
              onClick={() => setDark((v) => !v)}
              aria-label="Toggle theme"
              className="hidden sm:inline-flex items-center justify-center size-9 rounded-lg glass hover:bg-[color:var(--ember)]/10 transition"
            >
              {dark ? <Sun className="size-4" /> : <Moon className="size-4" />}
            </button>
            <a
              href={SITE.phoneHref}
              className="hidden md:inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[color:var(--ember)] to-[color:var(--ember-glow)] px-4 py-2 text-sm font-semibold text-[color:var(--primary-foreground)] glow-ember hover:brightness-110 transition"
            >
              <Phone className="size-4" /> Call Now
            </a>
            <button
              className="lg:hidden inline-flex size-9 items-center justify-center rounded-lg glass"
              onClick={() => setOpen((v) => !v)}
              aria-label="Menu"
            >
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              className="lg:hidden mt-2 glass-strong rounded-2xl p-3 grid grid-cols-2 gap-1"
            >
              {NAV.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className="px-3 py-2.5 rounded-lg text-sm hover:bg-[color:var(--ember)]/10"
                >
                  {item.label}
                </Link>
              ))}
              <a href={SITE.phoneHref} className="col-span-2 mt-1 text-center rounded-lg bg-gradient-to-r from-[color:var(--ember)] to-[color:var(--ember-glow)] px-3 py-2.5 text-sm font-semibold text-[color:var(--primary-foreground)]">
                <Phone className="inline size-4 mr-2" />Call {SITE.phone}
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </header>
  );
}
export default Header;