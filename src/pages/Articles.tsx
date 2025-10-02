import { motion } from "framer-motion";
import { PageTransition } from "@/components/PageTransition";
import { ParticlesBackground } from "@/components/ParticlesBackground";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Articles = () => {
  const articles = [
    {
      title: "Building Scalable React Applications",
      excerpt: "Learn the best practices and patterns for building large-scale React applications that can grow with your business needs.",
      date: "2024-03-15",
      readTime: "8 min read",
      category: "React",
      gradient: "from-primary to-secondary",
    },
    {
      title: "Mastering TypeScript in 2024",
      excerpt: "A comprehensive guide to advanced TypeScript features and how to leverage them in your projects for better type safety.",
      date: "2024-03-10",
      readTime: "12 min read",
      category: "TypeScript",
      gradient: "from-secondary to-accent",
    },
    {
      title: "The Future of Web Development",
      excerpt: "Exploring emerging technologies and trends that are shaping the future of web development and what developers should learn.",
      date: "2024-03-05",
      readTime: "10 min read",
      category: "Web Dev",
      gradient: "from-accent to-primary",
    },
    {
      title: "Optimizing Web Performance",
      excerpt: "Deep dive into web performance optimization techniques, from code splitting to lazy loading and beyond.",
      date: "2024-02-28",
      readTime: "15 min read",
      category: "Performance",
      gradient: "from-primary to-accent",
    },
    {
      title: "Modern CSS Techniques",
      excerpt: "Discover modern CSS features like Grid, Flexbox, and CSS variables to create stunning and responsive designs.",
      date: "2024-02-20",
      readTime: "7 min read",
      category: "CSS",
      gradient: "from-secondary to-primary",
    },
    {
      title: "API Design Best Practices",
      excerpt: "Essential principles and patterns for designing RESTful APIs that are scalable, maintainable, and developer-friendly.",
      date: "2024-02-15",
      readTime: "11 min read",
      category: "Backend",
      gradient: "from-accent to-secondary",
    },
  ];

  return (
    <PageTransition>
      <div className="relative min-h-screen overflow-hidden py-20">
        <ParticlesBackground />
        
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10" />
        
        <div className="container mx-auto px-4 z-10 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                Featured Articles
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Insights, tutorials, and thoughts on web development and technology
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, index) => (
              <motion.article
                key={article.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <div className="bg-card border border-border rounded-xl overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-glow-cyan h-full flex flex-col">
                  <div className={`h-40 bg-gradient-to-br ${article.gradient} relative overflow-hidden`}>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        className="text-5xl"
                      >
                        📝
                      </motion.div>
                    </div>
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 rounded-full bg-background/80 backdrop-blur-sm text-xs font-medium text-foreground border border-border">
                        {article.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6 flex-1 flex flex-col">
                    <h2 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                      {article.title}
                    </h2>
                    <p className="text-muted-foreground mb-4 flex-1 line-clamp-3">
                      {article.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                      <div className="flex items-center gap-2">
                        <Calendar size={14} />
                        <span>{new Date(article.date).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock size={14} />
                        <span>{article.readTime}</span>
                      </div>
                    </div>
                    
                    <Button
                      variant="outline"
                      className="w-full border-primary/30 hover:bg-primary/10 group-hover:shadow-glow-cyan transition-all"
                    >
                      Read Article
                      <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
                    </Button>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Newsletter Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-16 max-w-3xl mx-auto text-center"
          >
            <div className="bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/30 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4 text-foreground">Stay Updated</h3>
              <p className="text-muted-foreground mb-6">
                Subscribe to my newsletter for the latest articles and updates
              </p>
              <div className="flex gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="flex-1 px-4 py-2 rounded-lg bg-background border border-border focus:border-primary focus:outline-none text-foreground"
                />
                <Button className="bg-primary hover:shadow-glow-cyan transition-all">
                  Subscribe
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Articles;
