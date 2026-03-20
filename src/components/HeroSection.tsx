import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, Linkedin, Mail, Download, ArrowDown, Sparkles } from "lucide-react";
import { profile } from "@/data/portfolio";

const heroImages = [
  "/hero4.JPG",


  "/hero3.jpg",
  "/hero1.jpg",
  "/hero2.jpg",

];

const HeroSection = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % heroImages.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">

        {/* --- Background Image Slider --- */}
        <div className="absolute inset-0 z-0">
          <AnimatePresence mode="wait">
            <motion.img
                key={index}
                src={heroImages[index]}
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 1.5 }}
                className="absolute inset-0 w-full h-full object-cover"
                // මුහුණ පේන්න පින්තූරය පල්ලෙහාට ගන්න මෙන්න මේ පේළිය දැම්මා
                style={{ objectPosition: "center 20%" }}
            />
          </AnimatePresence>

          <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/80 to-background z-10" />
          <div className="absolute inset-0 bg-black/30 z-10" />
        </div>

        {/* Animated Particles */}
        <div className="absolute inset-0 z-10 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-glow" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/10 rounded-full blur-3xl animate-pulse-glow" />
        </div>

        <div className="section-container relative z-20 text-center">
          <div className="max-w-4xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="flex items-center justify-center gap-2 mb-6"
            >
              <span className="text-primary mono text-sm tracking-[0.3em] uppercase font-bold">
              Welcome to my portfolio
            </span>
            </motion.div>

            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-5xl sm:text-7xl md:text-8xl font-extrabold mb-6 tracking-tighter"
            >
              <span className="text-white">I'm</span>{" "}
              <span className="gradient-text">{profile.firstName} {profile.lastName}</span>
            </motion.h1>

            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-xl sm:text-2xl md:text-3xl text-white/90 font-medium mb-8"
            >
              {profile.role}
            </motion.h2>

            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed"
            >
              {profile.intro}
            </motion.p>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="flex flex-wrap justify-center gap-4 mb-16"
            >
              <a href="#projects" className="px-7 py-4 rounded-2xl bg-primary text-primary-foreground font-bold flex items-center gap-2 shadow-[0_0_20px_rgba(var(--primary),0.3)] hover:scale-105 transition-all">
                <ArrowDown size={18} />
                View Projects
              </a>

              {/* CV Download Button */}
              <a
                  href="/Sandaru%20Anuththara%20CV%20.pdf"
                  target="_blank"
                  download
                  className="px-7 py-4 rounded-2xl bg-white/10 border border-white/20 text-white font-bold backdrop-blur-md hover:bg-primary/20 hover:border-primary/50 transition-all flex items-center gap-2"
              >
                <Download size={18} className="text-primary" />
                Download CV
              </a>

              <a href="#contact" className="px-7 py-4 rounded-2xl bg-white/5 border border-white/10 text-white font-bold backdrop-blur-md hover:bg-white/10 transition-all">
                Contact Me
              </a>
            </motion.div>

            {/* Social Icons */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="flex justify-center gap-6"
            >
              {[
                { icon: Github, href: profile.github, label: "GitHub" },
                { icon: Linkedin, href: profile.linkedin, label: "LinkedIn" },
                { icon: Mail, href: `mailto:${profile.email}`, label: "Email" },
              ].map(({ icon: Icon, href, label }) => (
                  <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-2xl border border-white/10 bg-white/5 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 transition-all duration-300 backdrop-blur-sm"
                      aria-label={label}
                  >
                    <Icon size={22} />
                  </a>
              ))}
            </motion.div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-20" />
      </section>
  );
};

export default HeroSection;