import { motion } from "framer-motion";
import { PageTransition } from "@/components/PageTransition";
import { ParticlesBackground } from "@/components/ParticlesBackground";

const Projects = () => {
  const projects = [
    {
      title: "Mental Health Prediction using ML",
      description: "Built a machine learning model to analyze survey data and predict mental health conditions. Applied data preprocessing, feature engineering, and classification algorithms to improve prediction accuracy.",
      tech: ["Python", "Scikit-learn", "Pandas", "Machine Learning"],
      image: "🧠",
      gradient: "from-primary to-secondary",
    },
    {
      title: "Stock Price Notifier",
      description: "Built an automated notifier that monitors stock prices and sends real-time alerts (email/SMS) based on user-defined thresholds using Python and APIs.",
      tech: ["Python", "APIs", "Email/SMS Integration"],
      image: "📈",
      gradient: "from-secondary to-accent",
    },
    {
      title: "Recruitment & Selection Process using NLP",
      description: "Developed an NLP-based system to screen resumes and match candidates with job descriptions. Implemented text preprocessing, keyword extraction, and similarity measures to automate candidate shortlisting.",
      tech: ["Python", "NLP", "Text Processing", "Machine Learning"],
      image: "📄",
      gradient: "from-accent to-primary",
    },
    {
      title: "Retail Store Management System",
      description: "Designed a Python and SQL-based application to manage inventory, sales, billing, and customer records, improving store operations and data handling efficiency.",
      tech: ["Python", "SQL", "Database Management"],
      image: "🛒",
      gradient: "from-primary to-accent",
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
                    
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary border border-primary/20"
                        >
                          {tech}
                        </span>
                      ))}
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
