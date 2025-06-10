
import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

export const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-background pt-16 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent"></div>
      <div className="absolute top-20 right-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-48 h-48 bg-primary/5 rounded-full blur-2xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 bg-card border border-primary/20 rounded-full px-4 py-2">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                <span className="text-sm text-muted-foreground">Available for opportunities</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Hello, I'm{" "}
                <span className="text-gradient">Avi Mohan</span>
                <br />
                <span className="text-2xl md:text-4xl text-muted-foreground font-medium">
                  AI & Robotics Innovator
                </span>
              </h1>
              
              <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
                High School Innovator | INSPIRE Awardee | NASA Citizen Scientist
                <br />
                Building the future through innovative technology solutions.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button 
                size="lg" 
                onClick={() => scrollToSection("projects")}
                className="bg-primary hover:bg-primary/90 glow-effect"
              >
                View Projects
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                onClick={() => scrollToSection("contact")}
                className="border-primary/20 hover:bg-primary/10"
              >
                Let's Talk
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              <Button size="icon" variant="ghost" className="hover:bg-primary/10" asChild>
                <a href="mailto:hustlewithavi1@gmail.com">
                  <Mail size={20} />
                </a>
              </Button>
              <Button size="icon" variant="ghost" className="hover:bg-primary/10" asChild>
                <a href="https://www.linkedin.com/in/avi-mohan-kr-shuklaa-235605282" target="_blank" rel="noopener noreferrer">
                  <Linkedin size={20} />
                </a>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">6+</div>
                <div className="text-sm text-muted-foreground">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">5+</div>
                <div className="text-sm text-muted-foreground">Awards</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">3+</div>
                <div className="text-sm text-muted-foreground">Programs</div>
              </div>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 bg-gradient-to-br from-primary to-primary/60 rounded-full profile-glow flex items-center justify-center">
                <div className="w-72 h-72 bg-card rounded-full flex items-center justify-center text-6xl font-bold text-primary">
                  AMS
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 bg-card border border-primary/20 rounded-lg p-3 shadow-lg">
                <div className="w-6 h-6 bg-primary/20 rounded"></div>
              </div>
              <div className="absolute -bottom-6 -left-6 bg-card border border-primary/20 rounded-lg p-4 shadow-lg">
                <div className="text-xs text-muted-foreground">🤖 AI Enthusiast</div>
              </div>
              <div className="absolute top-1/2 -right-8 bg-card border border-primary/20 rounded-lg p-3 shadow-lg transform -translate-y-1/2">
                <div className="text-xs text-muted-foreground">🏆 INSPIRE Winner</div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown 
            size={24} 
            className="text-muted-foreground cursor-pointer hover:text-primary transition-colors"
            onClick={() => scrollToSection("about")}
          />
        </div>
      </div>
    </section>
  );
};
