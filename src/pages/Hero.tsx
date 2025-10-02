import { motion } from "framer-motion";
import { PageTransition } from "@/components/PageTransition";
import { ParticlesBackground } from "@/components/ParticlesBackground";
import { Scene3D } from "@/components/Scene3D";
import { SocialLinks } from "@/components/SocialLinks";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <PageTransition>
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <ParticlesBackground />
        
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10 animate-glow-pulse" />
        
        <div className="container mx-auto px-4 z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h1 className="text-5xl md:text-7xl font-bold mb-4">
                  <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent animate-slide-in">
                    Hi, I'm
                  </span>
                  <br />
                  <span className="text-foreground">Reyma Jerusha M</span>
                </h1>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-xl md:text-2xl text-muted-foreground"
              >
                Data Analyst & AI/ML Engineer
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="space-y-4"
              >
                <p className="text-foreground/80 leading-relaxed">
                  Passionate about building innovative solutions with cutting-edge technologies.
                  Specialized in React, Node.js, and modern web development frameworks.
                </p>
                
                <div className="flex flex-wrap gap-4 pt-4">
                  <Link to="/cta">
                    <Button
                      size="lg"
                      className="bg-gradient-to-r from-primary to-secondary hover:shadow-glow-cyan transition-all duration-300 group"
                    >
                      Hire Me
                      <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                    </Button>
                  </Link>
                  <Link to="/projects">
                    <Button
                      variant="outline"
                      size="lg"
                      className="border-primary/50 hover:bg-primary/10 hover:shadow-glow-cyan transition-all duration-300"
                    >
                      View Projects
                    </Button>
                  </Link>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="pt-8"
              >
                <SocialLinks />
              </motion.div>
            </div>

            {/* 3D Scene */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="h-[400px] md:h-[600px] relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-3xl animate-float" />
              <Scene3D />
            </motion.div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Hero;
