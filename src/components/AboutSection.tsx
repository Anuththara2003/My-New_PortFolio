import { motion } from "framer-motion";
import { User, Code2, Smartphone, Server } from "lucide-react";
import { about, images, profile } from "@/data/portfolio";

const iconMap = [Code2, Smartphone, Server];

const AboutSection = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
      <section id="about" className="relative py-24 overflow-hidden">
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-primary/5 blur-[100px] rounded-full -z-10" />

        <div className="section-container">
          <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              variants={fadeInUp}
              className="text-center mb-20"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-10 h-[2px] bg-primary/50" />
              <span className="text-primary mono text-sm tracking-widest uppercase">About Me</span>
              <div className="w-10 h-[2px] bg-primary/50" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Get to <span className="text-primary">know me</span>
            </h2>
            <div className="w-24 h-1.5 bg-primary/20 mx-auto rounded-full relative overflow-hidden">
              <motion.div
                  animate={{ x: [-100, 100] }}
                  transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                  className="absolute inset-0 bg-primary w-1/2 rounded-full"
              />
            </div>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative flex justify-center"
            >
              <motion.div
                  animate={{ y: [0, -15, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  className="relative group"
              >
                <div className="absolute -inset-4 bg-primary/10 blur-2xl rounded-[2.5rem] group-hover:bg-primary/20 transition-all duration-700" />

                <div className="relative w-72 h-80 md:w-80 md:h-[400px] rounded-[2.5rem] overflow-hidden border-2 border-white/10 glass-card p-2">
                  <div className="w-full h-full rounded-[2rem] overflow-hidden relative">
                    <img
                        src="/my2.jpg"
                        alt={`${profile.name} profile`}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                  </div>
                </div>
              </motion.div>
            </motion.div>

            <div className="space-y-8">
              <div className="space-y-6">
                {about.paragraphs.map((text, i) => (
                    <motion.p
                        key={i}
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 + i * 0.2 }}
                        className="text-muted-foreground text-lg leading-relaxed [&_strong]:text-white [&_strong]:font-bold [&_strong]:bg-primary/5 [&_strong]:px-1 [&_strong]:rounded"
                        dangerouslySetInnerHTML={{ __html: text }}
                    />
                ))}
              </div>

              {/* --- Updated Highlights Grid --- */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6">
                {about.highlights.map(({ label }, i) => {
                  const Icon = iconMap[i] || Code2;
                  return (
                      <motion.div
                          key={label}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: 0.6 + i * 0.1 }}
                          whileHover={{ y: -10 }}
                          className="group relative flex" // flex එකක් දැම්මා card එක stretch වෙන්න
                      >
                        <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 blur-xl transition-opacity rounded-2xl" />

                        <div className="relative glass-card p-6 flex flex-col items-center justify-center gap-4 text-center border border-white/5 bg-white/5 rounded-2xl transition-all duration-300 group-hover:border-primary/40 group-hover:bg-primary/5 w-full min-h-[160px]">
                          {/* min-h-[160px] මගින් සියලුම කොටු එකම උසකට ගෙන එයි */}
                          <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center transition-all duration-500 group-hover:bg-primary group-hover:text-black">
                            <Icon size={24} className="text-primary group-hover:text-inherit" />
                          </div>
                          <span className="text-xs font-bold text-foreground uppercase tracking-tight leading-tight">{label}</span>
                        </div>
                      </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
  );
};

export default AboutSection;