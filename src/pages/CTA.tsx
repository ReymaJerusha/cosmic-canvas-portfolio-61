import { motion } from "framer-motion";
import { PageTransition } from "@/components/PageTransition";
import { ParticlesBackground } from "@/components/ParticlesBackground";
import { Mail, MessageSquare, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <PageTransition>
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <ParticlesBackground />
        
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 via-background to-accent/20" />
        
        <div className="container mx-auto px-4 z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <Sparkles className="w-20 h-20 mx-auto text-primary animate-float" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Let's Build Something
            </span>
            <br />
            <span className="text-foreground">Amazing Together</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto"
          >
            Ready to turn your vision into reality? I'm here to help you create 
            innovative digital solutions that make an impact.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <Link to="/contact">
              <Button
                size="lg"
                className="bg-gradient-to-r from-primary to-secondary hover:shadow-glow-cyan transition-all duration-300 group text-lg px-8 py-6"
              >
                <Mail className="mr-2 group-hover:scale-110 transition-transform" size={24} />
                Get In Touch
              </Button>
            </Link>
            
            <Button
              size="lg"
              variant="outline"
              className="border-primary/50 hover:bg-primary/10 hover:shadow-glow-purple transition-all duration-300 text-lg px-8 py-6"
            >
              <MessageSquare className="mr-2" size={24} />
              Schedule a Call
            </Button>
          </motion.div>

          {/* Features Grid */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-20 grid md:grid-cols-3 gap-8 max-w-5xl mx-auto"
          >
            {[
              {
                title: "Fast Delivery",
                description: "Quick turnaround times without compromising quality",
                icon: "⚡",
              },
              {
                title: "Modern Tech",
                description: "Using the latest frameworks and best practices",
                icon: "🚀",
              },
              {
                title: "24/7 Support",
                description: "Always available to help and maintain your project",
                icon: "💬",
              },
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 + index * 0.2 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="p-8 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-glow-cyan"
              >
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
};

export default CTA;
