
import { Button } from "@/components/ui/button";
import { ArrowDown, Linkedin, Mail, Code } from "lucide-react";

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
      {/* Clean Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background to-background/95"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center text-center space-y-8 max-w-3xl mx-auto">
          
          {/* Profile Picture - Clean and Responsive */}
          <div className="relative">
            <div className="w-36 h-36 sm:w-44 sm:h-44 md:w-52 md:h-52 lg:w-60 lg:h-60 relative">
              <div className="w-full h-full bg-gradient-to-r from-primary/80 to-primary rounded-full p-1">
                <div className="w-full h-full bg-background rounded-full overflow-hidden">
                  <img 
                    src="https://i.postimg.cc/xCqbRs45/1000108570.jpg" 
                    alt="Avi Mohan Kumar Shuklaa"
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="space-y-6">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              <span className="text-foreground">Hello, I'm </span>
              <span className="text-gradient">Avi Mohan Kumar Shuklaa</span>
            </h1>
            
            <div className="text-lg sm:text-xl md:text-2xl text-muted-foreground font-medium">
              AI & Robotics Innovator | High School Tech Founder | INSPIRE Awardee
            </div>
            
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              A passionate high school innovator exploring AI, robotics, and space technology through 
              global fellowships and real-world projects. Founder of Innobotix robotics platform.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-6">
            <Button 
              size="lg" 
              onClick={() => scrollToSection("projects")} 
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-3 transition-all duration-300"
            >
              <Code className="mr-2" size={20} />
              View Projects
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              onClick={() => scrollToSection("contact")} 
              className="border-border text-foreground hover:bg-accent px-8 py-3 transition-all duration-300"
            >
              <Mail className="mr-2" size={20} />
              Let's Connect
            </Button>
          </div>

          {/* Resume Link */}
          <div className="pt-4">
            <a
              href="https://drive.google.com/file/d/1ZsCmHtjMcPmvIXfaYxiMjR9hcZJyP2qL/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors"
            >
              View Resume →
            </a>
          </div>

          {/* Social Links */}
          <div className="flex gap-4 pt-4">
            <Button size="icon" variant="ghost" className="hover:bg-accent text-foreground hover:text-primary transition-colors" asChild>
              <a href="mailto:hustlewithavi1@gmail.com" aria-label="Email">
                <Mail size={20} />
              </a>
            </Button>
            <Button size="icon" variant="ghost" className="hover:bg-accent text-foreground hover:text-primary transition-colors" asChild>
              <a href="https://www.linkedin.com/in/avi-mohan-kr-shuklaa-235605282" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
            </Button>
          </div>

          {/* Status Badge */}
          <div className="inline-flex items-center gap-3 bg-card/50 backdrop-blur-sm rounded-full px-4 py-2 border border-border mt-8">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-sm text-muted-foreground">Available for opportunities</span>
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
