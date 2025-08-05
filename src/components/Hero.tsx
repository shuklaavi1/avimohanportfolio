
import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail, Code } from "lucide-react";

export const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth"
      });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-background relative overflow-hidden">
      {/* Subtle Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-background/95"></div>
      
      {/* Minimal Grid */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(hsl(var(--primary) / 0.1) 1px, transparent 1px),
                             linear-gradient(90deg, hsl(var(--primary) / 0.1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center text-center space-y-12 max-w-4xl mx-auto">
          {/* Profile Picture - Centered at Top */}
          <div className="relative">
            <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 bg-gradient-to-br from-primary to-primary/80 rounded-full p-1">
              <div className="w-full h-full bg-card rounded-full overflow-hidden">
                <img 
                  src="https://i.postimg.cc/xCqbRs45/1000108570.jpg" 
                  alt="Avi Mohan Kumar Shuklaa"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Status Badge */}
          <div className="inline-flex items-center gap-3 bg-card/50 backdrop-blur-sm rounded-full px-4 py-2 border border-border">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-sm text-muted-foreground">Available for opportunities</span>
          </div>
          
          {/* Main Content */}
          <div className="space-y-6">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              <span className="text-foreground">Hello, I'm</span>
              <br />
              <span className="text-gradient">Avi Mohan Kumar Shuklaa</span>
            </h1>
            
            <div className="text-xl sm:text-2xl md:text-3xl font-medium text-muted-foreground">
              AI & Robotics Innovator
            </div>
            
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              High School Innovator | INSPIRE Awardee | NASA Citizen Scientist
              <br />
              Building the future through innovative technology solutions.
            </p>
          </div>

          {/* Resume Link */}
          <a
            href="https://drive.google.com/file/d/1ZsCmHtjMcPmvIXfaYxiMjR9hcZJyP2qL/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors font-medium"
          >
            View Resume
          </a>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              onClick={() => scrollToSection("projects")} 
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-3"
            >
              <Code className="mr-2" size={20} />
              View Projects
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              onClick={() => scrollToSection("contact")} 
              className="border-border text-foreground hover:bg-accent px-8 py-3"
            >
              <Mail className="mr-2" size={20} />
              Let's Talk
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex gap-4">
            <Button size="icon" variant="ghost" className="hover:bg-accent text-foreground" asChild>
              <a href="mailto:hustlewithavi1@gmail.com" aria-label="Email">
                <Mail size={20} />
              </a>
            </Button>
            <Button size="icon" variant="ghost" className="hover:bg-accent text-foreground" asChild>
              <a href="https://www.linkedin.com/in/avi-mohan-kr-shuklaa-235605282" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 pt-8">
            <div className="text-center space-y-2">
              <div className="text-2xl sm:text-3xl font-bold text-gradient">6+</div>
              <div className="text-sm text-muted-foreground">Projects</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-2xl sm:text-3xl font-bold text-gradient">6+</div>
              <div className="text-sm text-muted-foreground">Awards</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-2xl sm:text-3xl font-bold text-gradient">3+</div>
              <div className="text-sm text-muted-foreground">Programs</div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="flex flex-col items-center gap-2 animate-bounce">
            <span className="text-xs text-muted-foreground">Scroll to explore</span>
            <ArrowDown 
              size={20} 
              className="text-muted-foreground cursor-pointer hover:text-primary transition-colors" 
              onClick={() => scrollToSection("about")} 
            />
          </div>
        </div>
      </div>
    </section>
  );
};
