import { motion } from "framer-motion";
import { PageTransition } from "@/components/PageTransition";
import { ParticlesBackground } from "@/components/ParticlesBackground";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects = [
    {
      title: "AI-Powered Analytics Platform",
      description: "A comprehensive analytics dashboard with machine learning predictions and real-time data visualization.",
      tech: ["React", "Python", "TensorFlow", "PostgreSQL"],
      image: "🤖",
      gradient: "from-primary to-secondary",
    },
    {
      title: "E-Commerce Marketplace",
      description: "Full-stack marketplace with payment integration, inventory management, and admin dashboard.",
      tech: ["Next.js", "Node.js", "Stripe", "MongoDB"],
      image: "🛍️",
      gradient: "from-secondary to-accent",
    },
    {
      title: "Real-Time Chat Application",
      description: "Scalable chat platform with video calling, file sharing, and end-to-end encryption.",
      tech: ["React", "WebRTC", "Socket.io", "Redis"],
      image: "💬",
      gradient: "from-accent to-primary",
    },
    {
      title: "Project Management Tool",
      description: "Collaborative workspace with kanban boards, time tracking, and team analytics.",
      tech: ["Vue.js", "Express", "GraphQL", "PostgreSQL"],
      image: "📊",
      gradient: "from-primary to-accent",
    },
    {
      title: "IoT Smart Home System",
      description: "Connected home automation system with mobile app and voice control integration.",
      tech: ["React Native", "MQTT", "AWS IoT", "Firebase"],
      image: "🏠",
      gradient: "from-secondary to-primary",
    },
    {
      title: "Blockchain Wallet",
      description: "Secure cryptocurrency wallet with multi-chain support and DeFi integration.",
      tech: ["React", "Web3.js", "Solidity", "Ethereum"],
      image: "💰",
      gradient: "from-accent to-secondary",
    },
  ];

  return (
    <PageTransition>
      <div className="relative min-h-screen overflow-hidden py-20">
        <ParticlesBackground />
        
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10" />
        
        <div className="container mx-auto px-4 z-10 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                Featured Projects
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Explore my portfolio of innovative solutions and creative implementations
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <div className="bg-card border border-border rounded-xl overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-glow-cyan h-full flex flex-col">
                  <div className={`h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center text-7xl relative overflow-hidden`}>
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 10 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      {project.image}
                    </motion.div>
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-all duration-300" />
                  </div>
                  
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-xl font-bold mb-2 text-foreground">{project.title}</h3>
                    <p className="text-muted-foreground mb-4 flex-1">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary border border-primary/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex gap-3">
                      <Button
                        size="sm"
                        variant="outline"
                        className="flex-1 border-primary/30 hover:bg-primary/10"
                      >
                        <Github className="mr-2" size={16} />
                        Code
                      </Button>
                      <Button
                        size="sm"
                        className="flex-1 bg-primary/20 hover:bg-primary/30"
                      >
                        <ExternalLink className="mr-2" size={16} />
                        Demo
                      </Button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Projects;
