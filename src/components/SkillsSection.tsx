import { motion } from "framer-motion";
import { flatSkills } from "@/data/portfolio";
import SkillIcon from "./SkillIcon";
import { Sparkles } from "lucide-react";

const SkillsSection = () => {
    // Grid එකේ items එකින් එක මතු වීමට අවශ්‍ය Variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1, // එක skill එකක් සහ අනෙක අතර පරතරය
            },
        },
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.5, ease: "easeOut" },
        },
    };

    return (
        <section id="skills" className="relative py-24 overflow-hidden">
            {/* පසුබිම් අලංකරණය - Background Decoration */}
            <div className="absolute top-0 right-0 -z-10 w-72 h-72 bg-primary/5 blur-[120px] rounded-full" />
            <div className="absolute bottom-0 left-0 -z-10 w-72 h-72 bg-blue-500/5 blur-[120px] rounded-full" />

            <div className="section-container">
                {/* --- Title Section --- */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-20"
                >
                    <div className="flex items-center justify-center gap-2 mb-4">
                        {/*<Sparkles size={18} className="text-primary animate-pulse" />*/}
                        <span className="text-primary mono text-sm tracking-[0.3em] uppercase font-bold">
              My Stack
            </span>
                        {/*<Sparkles size={18} className="text-primary animate-pulse" />*/}
                    </div>

                    <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight">
                        Technologies & <span className="text-primary">Tools</span>
                    </h2>

                    <div className="w-24 h-1.5 bg-primary/20 mx-auto rounded-full relative overflow-hidden">
                        <motion.div
                            animate={{ x: [-100, 100] }}
                            transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
                            className="absolute inset-0 bg-primary w-1/2 rounded-full"
                        />
                    </div>
                </motion.div>

                {/* --- Skills Grid --- */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6"
                >
                    {flatSkills.map((skill) => (
                        <motion.div
                            key={skill.name}
                            variants={itemVariants}
                            whileHover={{
                                y: -10,
                                scale: 1.02,
                                transition: { duration: 0.2 }
                            }}
                            className="relative group"
                        >
                            {/* Card එක වටේට එන Glow Effect එක */}
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/50 to-blue-500/50 rounded-2xl blur opacity-0 group-hover:opacity-30 transition duration-500" />

                            <div className="relative glass-card p-8 flex flex-col items-center justify-center gap-5 border border-white/5 bg-white/5 backdrop-blur-sm rounded-2xl transition-all duration-500 group-hover:border-primary/40 group-hover:bg-primary/5 h-full">

                                {/* Inner Hover Glow */}
                                <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-500" />

                                {/* Icon Animation */}
                                <motion.div
                                    whileHover={{ rotate: [0, -10, 10, 0] }}
                                    transition={{ duration: 0.5 }}
                                    className="relative z-10 text-primary group-hover:drop-shadow-[0_0_8px_rgba(var(--primary),0.8)] transition-all duration-300"
                                >
                                    <SkillIcon name={skill.icon} />
                                </motion.div>

                                {/* Skill Name */}
                                <span className="text-xs md:text-sm font-bold tracking-wider text-muted-foreground group-hover:text-white transition-colors relative z-10 uppercase">
                  {skill.name}
                </span>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default SkillsSection;