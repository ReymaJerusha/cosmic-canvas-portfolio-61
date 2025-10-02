import { motion } from "framer-motion";
import { PageTransition } from "@/components/PageTransition";
import { ParticlesBackground } from "@/components/ParticlesBackground";
import { Download, FileText, Award, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const Resume = () => {
  const handleDownload = () => {
    toast.success("Resume downloaded successfully!");
    // Add actual resume download logic here
  };

  return (
    <PageTransition>
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <ParticlesBackground />
        
        <div className="absolute inset-0 bg-gradient-to-br from-accent/20 via-background to-primary/20" />
        
        <div className="container mx-auto px-4 z-10 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <FileText className="w-20 h-20 mx-auto mb-6 text-primary animate-float" />
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                My Resume
              </span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Download my complete professional experience and qualifications
            </p>
          </motion.div>

          {/* Resume Preview Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-card border-2 border-primary/30 rounded-2xl p-8 md:p-12 mb-8 shadow-2xl hover:shadow-glow-cyan transition-all duration-300"
          >
            <div className="space-y-8">
              {/* Education */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <Award className="text-primary" size={24} />
                  <h2 className="text-2xl font-bold text-foreground">Education</h2>
                </div>
                <div className="space-y-3 text-muted-foreground">
                  <p>• Bachelor of Technology in Computer Science</p>
                  <p>• University Name, 2018-2022</p>
                  <p>• GPA: 3.8/4.0</p>
                </div>
              </div>

              {/* Experience */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <Briefcase className="text-secondary" size={24} />
                  <h2 className="text-2xl font-bold text-foreground">Experience</h2>
                </div>
                <div className="space-y-3 text-muted-foreground">
                  <p>• Senior Full Stack Developer at Tech Corp (2022-Present)</p>
                  <p>• Frontend Developer at StartupXYZ (2020-2022)</p>
                  <p>• Intern at Innovation Labs (2019-2020)</p>
                </div>
              </div>

              {/* Key Skills */}
              <div>
                <h2 className="text-2xl font-bold mb-4 text-foreground">Key Skills</h2>
                <div className="flex flex-wrap gap-3">
                  {[
                    "React.js",
                    "Node.js",
                    "TypeScript",
                    "Python",
                    "AWS",
                    "Docker",
                    "MongoDB",
                    "PostgreSQL",
                  ].map((skill, index) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.4 + index * 0.1 }}
                      className="px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-medium"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Download Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center"
          >
            <Button
              size="lg"
              onClick={handleDownload}
              className="bg-gradient-to-r from-primary via-secondary to-accent hover:shadow-glow-cyan transition-all duration-300 group text-lg px-8 py-6"
            >
              <Download className="mr-2 group-hover:animate-bounce" size={24} />
              Download Full Resume (PDF)
            </Button>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Resume;
