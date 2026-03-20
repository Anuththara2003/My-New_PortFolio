import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Award, Calendar, Building2, Trophy, Sparkles } from "lucide-react";
import { achievements } from "@/data/portfolio";

// --- පින්තූර මාරු වන Slider Component එක ---
const ImageSlider = ({ images }: { images: string[] | string }) => {
  const [index, setIndex] = useState(0);
  const imgs = Array.isArray(images) ? images : [images];

  useEffect(() => {
    if (imgs.length <= 1) return;
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % imgs.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [imgs]);

  return (
      <div className="relative w-full h-full overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.img
              key={index}
              src={imgs[index]}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.8 }}
              className="w-full h-full object-cover"
          />
        </AnimatePresence>

        {/* Slider Indicators (පහළ තියෙන තිත්) */}
        {imgs.length > 1 && (
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
              {imgs.map((_, i) => (
                  <div
                      key={i}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                          index === i ? "bg-primary w-6" : "bg-white/20"
                      }`}
                  />
              ))}
            </div>
        )}
      </div>
  );
};

const AchievementsSection = () => {
  return (
      <section id="achievements" className="relative py-24 overflow-hidden">
        <div className="section-container flex flex-col items-center text-center">

          {/* --- Title Section (Centered) --- */}
          <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-16"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-10 h-[2px] bg-primary/50" />
              <span className="text-primary mono text-sm tracking-widest uppercase flex items-center gap-2">
               <Trophy size={18} /> Recognition
            </span>
              <div className="w-10 h-[2px] bg-primary/50" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Awards & <span className="text-primary">Achievements</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Milestones and recognition earned through hard work and excellence.
            </p>
          </motion.div>

          {/* --- Achievement Card (Centered) --- */}
          <div className="w-full flex justify-center">
            {achievements.map((item, i) => (
                <motion.div
                    key={item.title}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    whileHover={{ y: -10 }}
                    className="glass-card-hover overflow-hidden flex flex-col group border border-white/5 bg-white/5 rounded-[3rem] transition-all duration-500 hover:border-primary/30 max-w-lg w-full"
                >
                  {/* Image Container with Slider */}
                  <div className="relative h-72 overflow-hidden m-4 rounded-[2.5rem]">
                    <ImageSlider images={item.image} />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                    <div className="absolute top-5 left-5">
                  <span className="px-4 py-2 rounded-2xl text-[10px] font-bold tracking-wider uppercase backdrop-blur-md border bg-primary/20 text-primary border-primary/30 flex items-center gap-2">
                    <Sparkles size={14} /> Awarded
                  </span>
                    </div>
                  </div>

                  {/* Content Area */}
                  <div className="p-8 pt-2 flex flex-col items-center text-center relative">
                    <div className="w-16 h-16 rounded-3xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                      <Award size={32} className="text-primary" />
                    </div>

                    <h3 className="font-bold text-white text-2xl mb-4 group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>

                    <div className="flex flex-col items-center gap-2 mb-6 text-sm">
                      <div className="flex items-center gap-2 text-primary/80 font-medium">
                        <Building2 size={16} />
                        <span>{item.org}</span>
                      </div>
                      {item.date && (
                          <div className="flex items-center gap-2 text-muted-foreground">
                            <Calendar size={16} />
                            <span>{item.date}</span>
                          </div>
                      )}
                    </div>

                    <p className="text-muted-foreground text-sm leading-relaxed mb-4 italic opacity-90 max-w-sm">
                      "{item.description}"
                    </p>

                    {/* Background Decoration Icon */}
                    <div className="absolute -bottom-4 right-1/2 translate-x-1/2 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity">
                      <Trophy size={120} />
                    </div>
                  </div>
                </motion.div>
            ))}
          </div>

        </div>
      </section>
  );
};

export default AchievementsSection;