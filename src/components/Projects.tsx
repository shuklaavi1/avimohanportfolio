import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

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
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Featured <span className="text-gradient">Projects</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Innovative solutions and creative implementations that showcase my passion for technology
            </p>
          </div>
          
          {/* Featured Projects */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {featuredProjects.map((project, index) => (
              <Card key={index} className="group card-hover bg-card/50 border-primary/10 overflow-hidden">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className="text-3xl">{project.emoji}</div>
                    <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                      {project.status}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 3).map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className="text-xs border-primary/20">
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 3 && (
                      <Badge variant="outline" className="text-xs border-primary/20">
                        +{project.technologies.length - 3}
                      </Badge>
                    )}
                  </div>
                  
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="w-full group-hover:bg-primary/10 group-hover:text-primary transition-colors"
                  >
                    Learn More
                    <ExternalLink size={14} className="ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Other Projects */}
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-center mb-8">Other Notable Projects</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {otherProjects.map((project, index) => (
                <Card key={index} className="bg-card/30 border-primary/5 hover:border-primary/20 transition-colors">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="text-2xl">{project.emoji}</div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-semibold">{project.title}</h4>
                          <Badge variant="outline" className="text-xs">
                            {project.status}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground mb-3">
                          {project.description}
                        </p>
                        <div className="flex flex-wrap gap-1">
                          {project.technologies.slice(0, 2).map((tech, techIndex) => (
                            <Badge key={techIndex} variant="outline" className="text-xs">
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
