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
                  <p>• B.E in Computer Science and Engineering</p>
                  <p>• Anna University, 2019-2023</p>
                  <p>• CGPA: 9.1/10</p>
                </div>
              </div>

              {/* Experience */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <Briefcase className="text-secondary" size={24} />
                  <h2 className="text-2xl font-bold text-foreground">Experience</h2>
                </div>
                <div className="space-y-4 text-muted-foreground">
                  <div>
                    <p className="font-semibold text-foreground">AI/ML Intern</p>
                    <p className="text-sm">Luminor Technolab | Apr 2025 – Present</p>
                    <ul className="mt-2 space-y-1 list-disc list-inside">
                      <li>Assisted in building and optimizing ML models using Python, Scikit-learn, and TensorFlow</li>
                      <li>Performed data preprocessing, EDA, and feature engineering to improve model performance</li>
                      <li>Contributed to real-world AI projects and reported insights through visualizations</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Projects */}
              <div>
                <h2 className="text-2xl font-bold mb-4 text-foreground">Projects</h2>
                <div className="space-y-4 text-muted-foreground">
                  <div>
                    <p className="font-semibold text-foreground">Mental Health Prediction using ML</p>
                    <p className="text-sm">Built a machine learning model to analyze survey data and predict mental health conditions. Applied data preprocessing, feature engineering, and classification algorithms to improve prediction accuracy.</p>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Stock Price Notifier (Python)</p>
                    <p className="text-sm">Built an automated notifier that monitors stock prices and sends real-time alerts (email/SMS) based on user-defined thresholds using Python and APIs.</p>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Recruitment & Selection Process using NLP</p>
                    <p className="text-sm">Developed an NLP-based system to screen resumes and match candidates with job descriptions. Implemented text preprocessing, keyword extraction, and similarity measures to automate candidate shortlisting.</p>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Retail Store Management System</p>
                    <p className="text-sm">Designed a Python and SQL-based application to manage inventory, sales, billing, and customer records, improving store operations and data handling efficiency.</p>
                  </div>
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
