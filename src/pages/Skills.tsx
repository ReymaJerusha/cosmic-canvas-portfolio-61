import { motion } from "framer-motion";
import { PageTransition } from "@/components/PageTransition";
import { ParticlesBackground } from "@/components/ParticlesBackground";
import { Code2, Database, Brain, BarChart3, Zap } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming & Tools",
      icon: Code2,
      color: "text-primary",
      skills: [
        { name: "Python", level: 95 },
        { name: "SQL", level: 90 },
        { name: "Git", level: 88 },
        { name: "Jupyter", level: 92 },
        { name: "VS Code", level: 90 },
      ],
    },
    {
      title: "Data Analysis",
      icon: BarChart3,
      color: "text-secondary",
      skills: [
        { name: "Data Cleaning", level: 93 },
        { name: "Exploratory Data Analysis", level: 90 },
        { name: "Statistical Analysis", level: 88 },
        { name: "Data Visualization", level: 92 },
        { name: "Reporting", level: 90 },
      ],
    },
    {
      title: "Machine Learning",
      icon: Brain,
      color: "text-accent",
      skills: [
        { name: "Supervised Learning", level: 90 },
        { name: "Unsupervised Learning", level: 85 },
        { name: "Model Development", level: 88 },
        { name: "Hyperparameter Tuning", level: 86 },
        { name: "Model Evaluation", level: 90 },
      ],
    },
    {
      title: "Deep Learning & NLP",
      icon: Zap,
      color: "text-primary",
      skills: [
        { name: "Neural Networks", level: 85 },
        { name: "TensorFlow", level: 88 },
        { name: "PyTorch", level: 82 },
        { name: "NLP", level: 87 },
      ],
    },
    {
      title: "Databases & BI Tools",
      icon: Database,
      color: "text-secondary",
      skills: [
        { name: "MySQL", level: 92 },
        { name: "Power BI", level: 90 },
        { name: "Tableau", level: 88 },
      ],
    },
  ];

  return (
    <PageTransition>
      <div className="relative min-h-screen overflow-hidden py-20">
        <ParticlesBackground />
        
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 via-background to-primary/10" />
        
        <div className="container mx-auto px-4 z-10 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                Technical Skills
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A comprehensive overview of my technical expertise and proficiency levels
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, catIndex) => {
              const Icon = category.icon;
              return (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: catIndex * 0.1 }}
                  className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-glow-cyan"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className={`${category.color} p-3 rounded-lg bg-background`}>
                      <Icon size={24} />
                    </div>
                    <h2 className="text-xl font-bold text-foreground">{category.title}</h2>
                  </div>

                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: catIndex * 0.1 + skillIndex * 0.1 }}
                      >
                        <div className="flex justify-between mb-2">
                          <span className="text-sm font-medium text-foreground">{skill.name}</span>
                          <span className="text-sm text-muted-foreground">{skill.level}%</span>
                        </div>
                        <div className="h-2 bg-muted rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${skill.level}%` }}
                            transition={{ duration: 1, delay: catIndex * 0.1 + skillIndex * 0.1 + 0.3 }}
                            className="h-full bg-gradient-to-r from-primary to-secondary rounded-full shadow-glow-cyan"
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Additional Skills */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-16 text-center"
          >
            <h3 className="text-2xl font-bold mb-6 text-foreground">Additional Expertise</h3>
            <div className="flex flex-wrap gap-3 justify-center max-w-4xl mx-auto">
              {[
                "Scikit-learn",
                "Pandas",
                "NumPy",
                "Matplotlib",
                "Seaborn",
                "Feature Engineering",
                "Data Preprocessing",
                "A/B Testing",
              ].map((skill, index) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1 + index * 0.1 }}
                  whileHover={{ scale: 1.1 }}
                  className="px-4 py-2 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 border border-primary/30 text-foreground font-medium hover:shadow-glow-cyan transition-all duration-300"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Skills;
