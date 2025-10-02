import { motion } from "framer-motion";
import { Github, Linkedin, Instagram } from "lucide-react";

export const SocialLinks = () => {
  const socials = [
    { icon: Github, href: "#", label: "GitHub", color: "hover:text-foreground" },
    { icon: Linkedin, href: "#", label: "LinkedIn", color: "hover:text-primary" },
    { icon: Instagram, href: "#", label: "Instagram", color: "hover:text-accent" },
  ];

  return (
    <div className="flex items-center gap-4">
      {socials.map((social, index) => {
        const Icon = social.icon;
        return (
          <motion.a
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.2, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
            className={`p-3 rounded-full bg-card border border-border ${social.color} transition-all duration-300 shadow-lg hover:shadow-glow-cyan`}
            aria-label={social.label}
          >
            <Icon size={20} />
          </motion.a>
        );
      })}
    </div>
  );
};
