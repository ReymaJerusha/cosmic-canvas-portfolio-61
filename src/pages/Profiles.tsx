import { motion } from "framer-motion";
import { PageTransition } from "@/components/PageTransition";
import { ParticlesBackground } from "@/components/ParticlesBackground";
import { ExternalLink, Trophy, Code, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const Profiles = () => {
  const profiles = [
    {
      name: "GitHub",
      username: "@yourusername",
      description: "Open source contributions and personal projects",
      stats: [
        { label: "Repositories", value: "50+" },
        { label: "Stars", value: "1.2K" },
        { label: "Followers", value: "500+" },
      ],
      icon: "🐙",
      gradient: "from-primary to-secondary",
      url: "https://github.com",
    },
    {
      name: "LeetCode",
      username: "@yourusername",
      description: "Problem solving and algorithm practice",
      stats: [
        { label: "Problems Solved", value: "350+" },
        { label: "Rating", value: "1850" },
        { label: "Ranking", value: "Top 5%" },
      ],
      icon: "💻",
      gradient: "from-secondary to-accent",
      url: "https://leetcode.com",
    },
    {
      name: "SkillRack",
      username: "@yourusername",
      description: "Competitive programming challenges",
      stats: [
        { label: "Challenges", value: "200+" },
        { label: "Score", value: "2500" },
        { label: "Rank", value: "#50" },
      ],
      icon: "🏆",
      gradient: "from-accent to-primary",
      url: "https://skillrack.com",
    },
    {
      name: "HackerRank",
      username: "@yourusername",
      description: "Coding certifications and contests",
      stats: [
        { label: "Badges", value: "15" },
        { label: "Points", value: "5000+" },
        { label: "Certificates", value: "8" },
      ],
      icon: "⭐",
      gradient: "from-primary to-accent",
      url: "https://hackerrank.com",
    },
    {
      name: "CodeChef",
      username: "@yourusername",
      description: "Competitive programming and contests",
      stats: [
        { label: "Rating", value: "1700" },
        { label: "Problems", value: "150+" },
        { label: "Stars", value: "3★" },
      ],
      icon: "👨‍🍳",
      gradient: "from-secondary to-primary",
      url: "https://codechef.com",
    },
    {
      name: "Stack Overflow",
      username: "@yourusername",
      description: "Community contributions and reputation",
      stats: [
        { label: "Reputation", value: "2.5K" },
        { label: "Answers", value: "100+" },
        { label: "Badges", value: "25" },
      ],
      icon: "📚",
      gradient: "from-accent to-secondary",
      url: "https://stackoverflow.com",
    },
  ];

  return (
    <PageTransition>
      <div className="relative min-h-screen overflow-hidden py-20">
        <ParticlesBackground />
        
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 via-background to-accent/10" />
        
        <div className="container mx-auto px-4 z-10 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <Trophy className="w-20 h-20 mx-auto mb-6 text-primary animate-float" />
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                Coding Profiles
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              My journey across various coding platforms and competitive programming sites
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {profiles.map((profile, index) => (
              <motion.div
                key={profile.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <div className="bg-card border border-border rounded-xl overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-glow-cyan h-full flex flex-col">
                  <div className={`h-32 bg-gradient-to-br ${profile.gradient} flex items-center justify-center relative overflow-hidden`}>
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 10 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className="text-6xl"
                    >
                      {profile.icon}
                    </motion.div>
                  </div>
                  
                  <div className="p-6 flex-1 flex flex-col">
                    <h2 className="text-2xl font-bold mb-1 text-foreground">{profile.name}</h2>
                    <p className="text-sm text-primary mb-3">{profile.username}</p>
                    <p className="text-muted-foreground mb-6 flex-1">{profile.description}</p>
                    
                    <div className="grid grid-cols-3 gap-4 mb-6">
                      {profile.stats.map((stat) => (
                        <div key={stat.label} className="text-center">
                          <div className="text-lg font-bold text-primary">{stat.value}</div>
                          <div className="text-xs text-muted-foreground">{stat.label}</div>
                        </div>
                      ))}
                    </div>
                    
                    <Button
                      className="w-full bg-primary/20 hover:bg-primary/30 border border-primary/30 group-hover:shadow-glow-cyan transition-all"
                      onClick={() => window.open(profile.url, '_blank')}
                    >
                      Visit Profile
                      <ExternalLink className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Achievement Summary */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-16 grid md:grid-cols-3 gap-6 max-w-5xl mx-auto"
          >
            {[
              { icon: Code, label: "Total Problems Solved", value: "1000+", color: "text-primary" },
              { icon: Trophy, label: "Contests Won", value: "25+", color: "text-secondary" },
              { icon: Star, label: "Total Reputation", value: "10K+", color: "text-accent" },
            ].map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <motion.div
                  key={achievement.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 + index * 0.1 }}
                  className="text-center p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-glow-cyan"
                >
                  <Icon className={`w-12 h-12 mx-auto mb-4 ${achievement.color}`} />
                  <div className="text-3xl font-bold mb-2 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    {achievement.value}
                  </div>
                  <div className="text-sm text-muted-foreground">{achievement.label}</div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Profiles;
