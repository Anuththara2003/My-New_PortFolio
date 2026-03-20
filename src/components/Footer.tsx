import { Github, Linkedin, Mail, MessageCircle } from "lucide-react";
import { profile } from "@/data/portfolio";

const Footer = () => {
  return (
    <footer className="border-t border-border py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} {profile.name}. All rights reserved.
        </p>
        <div className="flex gap-4">
          {[
            { icon: Github, href: profile.github },
            { icon: Linkedin, href: profile.linkedin },
            { icon: Mail, href: `mailto:${profile.email}` },
            { icon: MessageCircle, href: profile.whatsapp },
          ].map(({ icon: Icon, href }) => (
            <a
              key={href}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Icon size={18} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
