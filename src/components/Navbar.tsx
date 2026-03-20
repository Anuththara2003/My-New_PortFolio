import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { profile } from "@/data/portfolio";

const links = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Achievements", href: "#achievements" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
      <motion.nav
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.6 }}
          className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
              scrolled
                  ? "py-3 bg-background/40 backdrop-blur-md border-b border-white/5"
                  : "py-5 bg-transparent"
          }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">

          {/* --- Logo (Left) --- */}
          <a href="#" className="flex items-center gap-3 group z-10 shrink-0">
            <div className="relative w-10 h-10 overflow-hidden rounded-full border-2 border-primary/20 group-hover:border-primary transition-colors duration-300">
              <img
                  src="/img.png"
                  alt="SP"
                  className="w-full h-full object-cover"
              />
            </div>
            <span className="text-lg font-bold tracking-tighter text-white group-hover:text-primary transition-colors duration-300 mono uppercase">
            {profile.firstName} <span className="text-primary">{profile.lastName}</span>
          </span>
          </a>

          {/* --- Desktop Links (Shifted to Right) --- */}
          {/* ml-auto මගින් links ටික දකුණු පැත්තට තල්ලු කරයි */}
          <div className="hidden md:flex ml-auto items-center gap-2 bg-white/5 p-1.5 rounded-full border border-white/10 backdrop-blur-sm mr-4">
            {links.map((l) => (
                <a
                    key={l.href}
                    href={l.href}
                    className="px-4 py-1.5 text-[12px] font-semibold text-muted-foreground hover:text-white hover:bg-white/10 rounded-full transition-all duration-300 uppercase tracking-wider"
                >
                  {l.label}
                </a>
            ))}
          </div>

          {/* --- Mobile Menu Button --- */}
          <button
              onClick={() => setOpen(!open)}
              className="md:hidden p-2 rounded-xl bg-white/5 border border-white/10 text-foreground z-10"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* --- Mobile Dropdown Menu --- */}
        <AnimatePresence>
          {open && (
              <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-xl border-b border-white/5 shadow-2xl"
              >
                <div className="px-6 py-8 flex flex-col items-center gap-6">
                  {links.map((l) => (
                      <a
                          key={l.href}
                          href={l.href}
                          onClick={() => setOpen(false)}
                          className="text-lg font-semibold text-muted-foreground hover:text-primary transition-colors uppercase tracking-[0.2em]"
                      >
                        {l.label}
                      </a>
                  ))}
                </div>
              </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
  );
};

export default Navbar;