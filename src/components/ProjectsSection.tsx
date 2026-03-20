import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, ExternalLink, X, FolderOpen } from "lucide-react";
import { projects, projectFilters, type Project } from "@/data/portfolio";

const ProjectsSection = () => {
  const [active, setActive] = useState("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const filtered = active === "All" ? projects : projects.filter((p) => p.category === active);

  // සෑම තත්පර 3කට වරක් Project 2 බැගින් මාරු වීමට අවශ්‍ය Logic එක
  useEffect(() => {
    setCurrentIndex(0); // Filter එක මාරු කරන විට මුලට යන්න
  }, [active]);

  useEffect(() => {
    if (filtered.length <= 2) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const nextIndex = prevIndex + 2;
        return nextIndex >= filtered.length ? 0 : nextIndex;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [filtered.length]);

  // දැනට පෙන්විය යුතු Project දෙක වෙන් කර ගැනීම
  const visibleProjects = filtered.slice(currentIndex, currentIndex + 2);

  return (
      <section id="projects" className="relative py-24 overflow-hidden">
        <div className="section-container">

          {/* --- Title Section (Centered) --- */}
          <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-10 h-[2px] bg-primary/50" />
              <span className="text-primary mono text-sm tracking-widest uppercase flex items-center gap-2">
               <FolderOpen size={18} /> Projects
            </span>
              <div className="w-10 h-[2px] bg-primary/50" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Featured <span className="text-primary">Work</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A selection of projects showcasing my skills across different domains.
            </p>
          </motion.div>

          {/* --- Filters (Centered) --- */}
          <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="flex flex-wrap justify-center gap-3 mb-12"
          >
            {projectFilters.map((f) => (
                <button
                    key={f}
                    onClick={() => setActive(f)}
                    className={`px-5 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                        active === f
                            ? "bg-primary text-primary-foreground shadow-[0_0_15px_rgba(var(--primary),0.4)]"
                            : "text-muted-foreground border border-white/10 hover:border-primary/40 hover:text-white"
                    }`}
                >
                  {f}
                </button>
            ))}
          </motion.div>

          {/* --- Projects Display (2 at a time slider) --- */}
          <div className="min-h-[450px]">
            <div className="grid md:grid-cols-2 gap-8">
              <AnimatePresence mode="wait">
                {visibleProjects.map((p) => (
                    <motion.div
                        key={`${active}-${p.id}-${currentIndex}`} // Unique key for animation
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.6 }}
                        className="glass-card-hover overflow-hidden flex flex-col cursor-pointer group border border-white/5 bg-white/5 rounded-[2rem]"
                        onClick={() => setSelectedProject(p)}
                    >
                      {/* Thumbnail */}
                      <div className="relative h-60 overflow-hidden m-3 rounded-[1.5rem]">
                        <img
                            src={p.image}
                            alt={p.title}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                        {/* Action Buttons */}
                        <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <a
                              href={p.github}
                              onClick={(e) => e.stopPropagation()}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="w-10 h-10 rounded-xl bg-background/80 backdrop-blur-md border border-white/10 flex items-center justify-center text-white hover:text-primary transition-all"
                          >
                            <Github size={18} />
                          </a>
                        </div>
                      </div>

                      <div className="p-8 pt-2 flex flex-col flex-1">
                        <div className="mb-4">
                          <h3 className="text-2xl font-bold text-white group-hover:text-primary transition-colors">{p.title}</h3>
                          <p className="text-sm text-primary/70 mono font-medium">{p.subtitle}</p>
                        </div>
                        <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-1 line-clamp-2">
                          {p.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {p.stack.slice(0, 3).map((t) => (
                              <span key={t} className="px-3 py-1 rounded-lg bg-primary/10 border border-primary/20 text-primary text-[10px] font-bold uppercase tracking-wider">
                          {t}
                        </span>
                          ))}
                          {p.stack.length > 3 && <span className="text-[10px] text-muted-foreground self-center">+{p.stack.length - 3} more</span>}
                        </div>
                      </div>
                    </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {/* Slider Indicators (Pagination Dots) */}
            {filtered.length > 2 && (
                <div className="flex justify-center gap-2 mt-12">
                  {Array.from({ length: Math.ceil(filtered.length / 2) }).map((_, i) => (
                      <div
                          key={i}
                          className={`h-1.5 rounded-full transition-all duration-300 ${
                              Math.floor(currentIndex / 2) === i ? "bg-primary w-8" : "bg-white/10 w-2"
                          }`}
                      />
                  ))}
                </div>
            )}
          </div>
        </div>

        {/* --- Project Detail Modal --- */}
        <AnimatePresence>
          {selectedProject && (
              <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-background/90 backdrop-blur-md"
                  onClick={() => setSelectedProject(null)}
              >
                <motion.div
                    initial={{ scale: 0.9, y: 20, opacity: 0 }}
                    animate={{ scale: 1, y: 0, opacity: 1 }}
                    exit={{ scale: 0.9, y: 20, opacity: 0 }}
                    className="glass-card max-w-3xl w-full max-h-[90vh] overflow-y-auto border border-white/10 rounded-[2.5rem]"
                    onClick={(e) => e.stopPropagation()}
                >
                  <div className="relative h-72 overflow-hidden rounded-t-[2.5rem]">
                    <img
                        src={selectedProject.image}
                        alt={selectedProject.title}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                    <button
                        onClick={() => setSelectedProject(null)}
                        className="absolute top-6 right-6 w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white hover:text-primary transition-colors"
                    >
                      <X size={20} />
                    </button>
                  </div>

                  <div className="p-10">
                    <h3 className="text-3xl font-bold text-white mb-2">{selectedProject.title}</h3>
                    <p className="text-primary mono text-sm mb-6 uppercase tracking-widest font-semibold">{selectedProject.subtitle}</p>

                    <div className="space-y-6">
                      <div>
                        <h4 className="text-white text-sm font-bold uppercase tracking-wider mb-2">Description</h4>
                        <p className="text-muted-foreground leading-relaxed">
                          {selectedProject.longDescription || selectedProject.description}
                        </p>
                      </div>

                      <div>
                        <h4 className="text-white text-sm font-bold uppercase tracking-wider mb-3">Technologies</h4>
                        <div className="flex flex-wrap gap-2">
                          {selectedProject.stack.map((t) => (
                              <span key={t} className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-muted-foreground text-xs">
                          {t}
                        </span>
                          ))}
                        </div>
                      </div>

                      <div className="flex gap-4 pt-4">
                        <a href={selectedProject.github} target="_blank" rel="noopener noreferrer" className="flex-1 px-6 py-3 rounded-2xl border border-white/10 text-white font-bold flex items-center justify-center gap-2 hover:bg-white/5 transition-all">
                          <Github size={18} /> View Code
                        </a>
                        {selectedProject.demo !== "#" && (
                            <a href={selectedProject.demo} target="_blank" rel="noopener noreferrer" className="flex-1 px-6 py-3 rounded-2xl bg-primary text-primary-foreground font-bold flex items-center justify-center gap-2 shadow-lg shadow-primary/20 hover:scale-[1.02] transition-all">
                              <ExternalLink size={18} /> Live Demo
                            </a>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
          )}
        </AnimatePresence>
      </section>
  );
};

export default ProjectsSection;