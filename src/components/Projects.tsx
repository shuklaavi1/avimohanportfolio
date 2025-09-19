import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Code, Zap, Award } from "lucide-react";

export const Projects = () => {
  const projects = [
    {
      title: "Humanoid Robot",
      emoji: "🤖",
      description: "Full-featured humanoid robot with advanced movement capabilities and AI integration. Features voice recognition, object detection, and autonomous navigation.",
      technologies: ["Arduino", "Python", "Computer Vision", "Servo Motors"],
      status: "Completed",
      featured: true,
    },
    {
      title: "Jarvis AI Assistant",
      emoji: "🧠",
      description: "Python-based voice assistant inspired by Iron Man's Jarvis. Capable of voice commands, task automation, and smart home integration.",
      technologies: ["Python", "Speech Recognition", "NLP", "IoT"],
      status: "Active",
      featured: true,
    },
    {
      title: "River-Cleaning Robot",
      emoji: "🌊",
      description: "Award-winning autonomous robot designed to clean river pollution. Recognized by the Government of India under the INSPIRE Award program.",
      technologies: ["Robotics", "Environmental Tech", "Automation", "Sensors"],
      status: "Award Winner",
      featured: true,
    },
    {
      title: "Google Cloud Projects",
      emoji: "☁️",
      description: "Various cloud-based applications and services built using Google Cloud Platform. Includes web applications, data analysis, and ML models.",
      technologies: ["Google Cloud", "Cloud Functions", "BigQuery", "ML APIs"],
      status: "Ongoing",
      featured: false,
    },
    {
      title: "NASA Asteroid Data Analysis",
      emoji: "🛰️",
      description: "Contributing to NASA's citizen science projects by analyzing asteroid tracking data and identifying patterns in celestial movements.",
      technologies: ["Data Science", "Python", "Astronomy", "Visualization"],
      status: "Contributing",
      featured: false,
    },
    {
      title: "Tech Innovation Hub",
      emoji: "🎯",
      description: "Leading tech innovation initiatives in local community, organizing workshops and mentoring students in programming and robotics.",
      technologies: ["Community Building", "Teaching", "Workshop Design", "Mentoring"],
      status: "Leadership",
      featured: false,
    },
  ];

  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-black to-gray-900 relative">
      {/* Background Effects */}
      <div className="absolute inset-0 hero-bg opacity-30"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Featured <span className="text-gradient">Projects</span>
            </h2>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              Innovative solutions and creative implementations that showcase my passion for technology
            </p>
          </div>
          
          {/* Featured Projects */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {featuredProjects.map((project, index) => (
              <Card key={index} className="group card-hover glass-effect border-white/10 overflow-hidden bg-white/5">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-4xl">{project.emoji}</div>
                    <Badge variant="secondary" className="bg-primary/20 text-primary border-primary/30">
                      {project.status}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors text-white">
                    {project.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-white/70 leading-relaxed text-sm">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 3).map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className="text-xs border-white/20 text-white/80 bg-white/5">
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 3 && (
                      <Badge variant="outline" className="text-xs border-white/20 text-white/80 bg-white/5">
                        +{project.technologies.length - 3}
                      </Badge>
                    )}
                  </div>
                  
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="w-full group-hover:bg-primary/10 group-hover:text-primary transition-colors text-white border border-white/10"
                  >
                    <Code className="mr-2" size={14} />
                    Learn More
                    <ExternalLink size={14} className="ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Other Projects */}
          <div className="space-y-6">
            <h3 className="text-3xl font-semibold text-center mb-8 text-white">Other Notable Projects</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {otherProjects.map((project, index) => (
                <Card key={index} className="glass-effect border-white/10 hover:border-primary/30 transition-colors bg-white/5">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="text-3xl">{project.emoji}</div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-3">
                          <h4 className="font-semibold text-white text-lg">{project.title}</h4>
                          <Badge variant="outline" className="text-xs border-white/20 text-white/80 bg-white/5">
                            {project.status}
                          </Badge>
                        </div>
                        <p className="text-sm text-white/70 mb-4 leading-relaxed">
                          {project.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.slice(0, 2).map((tech, techIndex) => (
                            <Badge key={techIndex} variant="outline" className="text-xs border-white/20 text-white/80 bg-white/5">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
