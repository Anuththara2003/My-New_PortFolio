import { motion } from "framer-motion";
import { GraduationCap, Calendar, Building2 } from "lucide-react";
import { education } from "@/data/portfolio";

const EducationSection = () => {
  return (
      <section id="education" className="relative py-24 overflow-hidden">
        <div className="section-container">
          {/* Title Section */}
          <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-20 text-center"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-10 h-[2px] bg-primary/50" />
              <span className="text-primary mono text-sm tracking-widest uppercase">Education Journey</span>
              <div className="w-10 h-[2px] bg-primary/50" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Academic <span className="text-primary">Background</span>
            </h2>
          </motion.div>

          <div className="relative">
            {/* Central Vertical Line (Tree Trunk) */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-primary/50 to-transparent md:-translate-x-1/2" />

            <div className="space-y-12">
              {education.map((item, i) => {
                const isEven = i % 2 === 0;

                return (
                    <div key={item.title} className="relative">
                      {/* Timeline Dot (මැද තියෙන බෝලය) */}
                      <div className="absolute left-4 md:left-1/2 top-10 w-4 h-4 rounded-full border-2 border-primary bg-background z-10 md:-translate-x-1/2 shadow-[0_0_10px_rgba(var(--primary),0.8)]">
                        <div className="absolute inset-0 rounded-full bg-primary animate-ping opacity-20" />
                      </div>

                      <div className={`flex flex-col md:flex-row items-center ${isEven ? "md:flex-row-reverse" : ""}`}>
                        {/* Content Card Area */}
                        <motion.div
                            initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, delay: i * 0.1 }}
                            className={`w-full md:w-1/2 pl-12 md:pl-0 ${isEven ? "md:pr-12" : "md:pl-12"}`}
                        >
                          <div className="glass-card-hover group overflow-hidden border border-white/5 bg-white/5 rounded-3xl transition-all duration-500 hover:border-primary/40 p-1">

                            <div className="flex flex-col sm:flex-row">
                              {/* Image */}
                              <div className="relative w-full sm:w-40 h-32 sm:h-auto shrink-0 overflow-hidden rounded-2xl m-2">
                                <img
                                    src={item.image}
                                    alt={item.institute}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                              </div>

                              {/* Details */}
                              <div className="p-5 flex-1 text-left">
                                <div className="flex items-center gap-2 mb-3">
                              <span className="px-2 py-0.5 rounded-md text-[10px] font-bold uppercase border bg-primary/10 text-primary border-primary/20">
                                {item.date}
                              </span>
                                </div>

                                <h3 className="text-lg font-bold text-white mb-1 group-hover:text-primary transition-colors">
                                  {item.title}
                                </h3>

                                <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
                                  <Building2 size={14} className="text-primary/60" />
                                  <span>{item.institute}</span>
                                </div>

                                <p className="text-muted-foreground text-xs leading-relaxed line-clamp-3">
                                  {item.description}
                                </p>
                              </div>
                            </div>
                          </div>
                        </motion.div>

                        {/* Empty Space for the other side (Desktop only) */}
                        <div className="hidden md:block md:w-1/2" />
                      </div>
                    </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
  );
};

export default EducationSection;