import { motion } from "framer-motion";
import { Mail, Linkedin, Github, MapPin, MessageCircle, Send, ExternalLink } from "lucide-react";
import { profile } from "@/data/portfolio";

const contactLinks = [
  {
    icon: Mail,
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
    color: "group-hover:border-primary/50 group-hover:bg-primary/5",
    iconColor: "text-blue-400",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "Chat on WhatsApp",
    href: profile.whatsapp,
    color: "group-hover:border-green-500/50 group-hover:bg-green-500/5",
    iconColor: "text-green-400",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "Connect on LinkedIn",
    href: profile.linkedin,
    color: "group-hover:border-blue-600/50 group-hover:bg-blue-600/5",
    iconColor: "text-blue-500",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "Follow on GitHub",
    href: profile.github,
    color: "group-hover:border-white/40 group-hover:bg-white/5",
    iconColor: "text-foreground",
  },
];

const ContactSection = () => {
  return (
      <section id="contact" className="relative py-24 overflow-hidden">
        {/* Background Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl bg-primary/5 blur-[120px] rounded-full -z-10" />

        <div className="section-container">
          <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto"
          >
            {/* Header */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-widest mb-6">
              <Send size={12} /> Contact Me
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Get In <span className="text-primary">Touch</span>
            </h2>

            <p className="text-muted-foreground text-lg mb-12 leading-relaxed">
              I'm currently looking for new opportunities. Whether you have a question
              or just want to say hi, feel free to reach out!
            </p>

            {/* Main CTA Buttons */}
            <div className="flex flex-wrap justify-center gap-5 mb-16">
              <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href={`mailto:${profile.email}`}
                  className="px-8 py-4 rounded-2xl bg-primary text-primary-foreground font-bold flex items-center gap-3 shadow-[0_0_20px_rgba(var(--primary),0.3)] hover:shadow-[0_0_30px_rgba(var(--primary),0.5)] transition-all duration-300"
              >
                <Mail size={20} />
                Say Hello
              </motion.a>

              <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href={profile.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 rounded-2xl bg-[#25D366]/10 text-[#25D366] border border-[#25D366]/30 font-bold flex items-center gap-3 hover:bg-[#25D366]/20 transition-all duration-300"
              >
                <MessageCircle size={20} />
                WhatsApp
              </motion.a>
            </div>

            {/* Contact Information Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
              {contactLinks.map(({ icon: Icon, label, value, href, color, iconColor }) => (
                  <motion.a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      whileHover={{ y: -5 }}
                      className={`group glass-card p-5 flex items-center gap-4 border border-white/5 bg-white/5 rounded-2xl transition-all duration-500 ${color}`}
                  >
                    <div className={`w-12 h-12 rounded-2xl bg-muted/40 flex items-center justify-center shrink-0 transition-all duration-500 group-hover:scale-110 ${iconColor} bg-opacity-10`}>
                      <Icon size={22} />
                    </div>

                    <div className="text-left min-w-0 flex-1"> {/* min-w-0 helps truncation work */}
                      <p className="text-[10px] uppercase tracking-wider text-muted-foreground font-bold mb-0.5">{label}</p>
                      <p className="text-sm font-medium text-foreground truncate group-hover:text-primary transition-colors">
                        {value}
                      </p>
                    </div>

                    <ExternalLink size={14} className="text-muted-foreground/30 group-hover:text-primary transition-colors" />
                  </motion.a>
              ))}
            </div>

            {/* Footer Location */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="flex items-center justify-center gap-2 mt-12 text-sm text-muted-foreground/60 font-medium"
            >
              <MapPin size={16} className="text-primary/50" />
              <span className="tracking-wide">{profile.location}</span>
            </motion.div>
          </motion.div>
        </div>
      </section>
  );
};

export default ContactSection;