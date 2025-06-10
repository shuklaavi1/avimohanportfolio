
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export const Projects = () => {
  const projects = [
    {
      title: "🤖 Humanoid Robot",
      description: "Full-featured humanoid robot with advanced movement capabilities and AI integration. Features voice recognition, object detection, and autonomous navigation.",
      technologies: ["Arduino", "Python", "Computer Vision", "Servo Motors"],
      status: "Completed",
    },
    {
      title: "🧠 Jarvis AI Assistant",
      description: "Python-based voice assistant inspired by Iron Man's Jarvis. Capable of voice commands, task automation, and smart home integration.",
      technologies: ["Python", "Speech Recognition", "Natural Language Processing", "IoT"],
      status: "Active",
    },
    {
      title: "🌊 River-Cleaning Robot",
      description: "Award-winning autonomous robot designed to clean river pollution. Recognized by the Government of India under the INSPIRE Award program.",
      technologies: ["Robotics", "Environmental Tech", "Automation", "Sensors"],
      status: "Award Winner",
    },
    {
      title: "☁️ Google Cloud Projects",
      description: "Various cloud-based applications and services built using Google Cloud Platform. Includes web applications, data analysis, and machine learning models.",
      technologies: ["Google Cloud", "Cloud Functions", "BigQuery", "ML APIs"],
      status: "Ongoing",
    },
    {
      title: "🛰️ NASA Asteroid Data Analysis",
      description: "Contributing to NASA's citizen science projects by analyzing asteroid tracking data and identifying patterns in celestial object movements.",
      technologies: ["Data Science", "Python", "Astronomy", "Data Visualization"],
      status: "Contributing",
    },
    {
      title: "🎯 Tech Innovation Hub",
      description: "Leading tech innovation initiatives in local community, organizing workshops and mentoring students in programming and robotics.",
      technologies: ["Community Building", "Teaching", "Workshop Design", "Mentoring"],
      status: "Leadership",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Projects</h2>
          <p className="text-lg text-muted-foreground text-center mb-12">
            Innovative solutions and creative implementations
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <CardTitle className="text-xl mb-2">{project.title}</CardTitle>
                  <Badge variant="secondary" className="w-fit">
                    {project.status}
                  </Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground/80 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  
                  <Button variant="outline" size="sm" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
