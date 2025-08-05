
import { Button } from "@/components/ui/button";
import { ArrowDown, Linkedin, Mail, Code, Download, ExternalLink } from "lucide-react";

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
      {/* Modern Tech Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-background/90"></div>
      
      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.8) 1px, transparent 0)`,
        backgroundSize: '50px 50px'
      }}></div>
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-12 lg:gap-16 max-w-7xl mx-auto">
          
          {/* Profile Picture - Modern Design */}
          <div className="flex-shrink-0 order-1 lg:order-1">
            <div className="relative group">
              <div className="w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 relative">
                {/* Animated Border Ring */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/60 via-blue-500/60 to-primary/60 rounded-full p-1 animate-pulse">
                  <div className="w-full h-full bg-background rounded-full overflow-hidden ring-2 ring-primary/20 group-hover:ring-primary/40 transition-all duration-500">
                    <img 
                      src="https://i.postimg.cc/xCqbRs45/1000108570.jpg" 
                      alt="Avi Mohan Kumar Shuklaa"
                      className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-primary/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-grow order-2 lg:order-2 text-center lg:text-left max-w-3xl">
            <div className="space-y-8">
              
              {/* Main Heading */}
              <div className="space-y-4">
                <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black leading-tight tracking-tight">
                  <span className="text-foreground block mb-2">Hello, I'm</span>
                  <span className="text-gradient bg-gradient-to-r from-primary via-blue-400 to-primary bg-clip-text text-transparent block">
                    Avi Mohan Kumar Shuklaa
                  </span>
                </h1>
                
                <div className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground font-semibold tracking-wide">
                  <span className="text-primary">AI & Robotics Innovator</span> | 
                  <span className="text-blue-400"> High School Tech Founder</span> | 
                  <span className="text-primary/80"> INSPIRE Awardee</span>
                </div>
              </div>
              
              <p className="text-lg sm:text-xl lg:text-2xl text-muted-foreground leading-relaxed font-light max-w-3xl">
                A passionate high school innovator exploring AI, robotics, and space technology through 
                global fellowships and real-world projects. Founder of <span className="text-primary font-semibold">Innobotix</span> robotics platform.
              </p>

              {/* Action Buttons - Enhanced Design */}
              <div className="flex flex-col sm:flex-row gap-6 pt-8">
                <Button 
                  size="lg" 
                  onClick={() => scrollToSection("projects")} 
                  className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-10 py-4 text-lg rounded-xl shadow-lg hover:shadow-primary/25 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl group"
                >
                  <Code className="mr-3 group-hover:rotate-12 transition-transform duration-300" size={24} />
                  View Projects
                </Button>
                
                <Button 
                  size="lg" 
                  variant="outline" 
                  onClick={() => scrollToSection("contact")} 
                  className="border-2 border-primary/30 text-foreground hover:bg-primary/10 hover:border-primary px-10 py-4 text-lg rounded-xl font-bold transition-all duration-300 transform hover:scale-105 backdrop-blur-sm group"
                >
                  <Mail className="mr-3 group-hover:rotate-12 transition-transform duration-300" size={24} />
                  Let's Connect
                </Button>
              </div>

              {/* Resume Link - Enhanced */}
              <div className="pt-6">
                <a
                  href="https://drive.google.com/file/d/1ZsCmHtjMcPmvIXfaYxiMjR9hcZJyP2qL/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 text-primary hover:text-primary/80 font-bold text-lg transition-all duration-300 group hover:scale-105"
                >
                  <Download className="group-hover:translate-y-1 transition-transform duration-300" size={20} />
                  View Resume
                  <ExternalLink className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" size={16} />
                </a>
              </div>

              {/* Social Links - Modern Design */}
              <div className="flex gap-6 pt-6 justify-center lg:justify-start">
                <Button 
                  size="icon" 
                  variant="ghost" 
                  className="w-14 h-14 hover:bg-primary/10 text-foreground hover:text-primary transition-all duration-300 rounded-full border border-primary/20 hover:border-primary/50 hover:scale-110 group" 
                  asChild
                >
                  <a href="mailto:hustlewithavi1@gmail.com" aria-label="Email">
                    <Mail size={24} className="group-hover:scale-110 transition-transform duration-300" />
                  </a>
                </Button>
                <Button 
                  size="icon" 
                  variant="ghost" 
                  className="w-14 h-14 hover:bg-primary/10 text-foreground hover:text-primary transition-all duration-300 rounded-full border border-primary/20 hover:border-primary/50 hover:scale-110 group" 
                  asChild
                >
                  <a href="https://www.linkedin.com/in/avi-mohan-kr-shuklaa-235605282" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                    <Linkedin size={24} className="group-hover:scale-110 transition-transform duration-300" />
                  </a>
                </Button>
              </div>

              {/* Status Badge - Enhanced */}
              <div className="inline-flex items-center gap-4 bg-card/80 backdrop-blur-md rounded-2xl px-6 py-3 border border-primary/20 mt-8 shadow-lg hover:shadow-primary/10 transition-all duration-300">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse shadow-lg shadow-green-400/50"></div>
                <span className="text-base text-muted-foreground font-medium">Available for opportunities</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator - Enhanced */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="flex flex-col items-center gap-3 animate-bounce group cursor-pointer" onClick={() => scrollToSection("about")}>
            <span className="text-sm text-muted-foreground font-medium group-hover:text-primary transition-colors duration-300">Scroll to explore</span>
            <div className="p-2 rounded-full border border-primary/30 group-hover:border-primary/60 group-hover:bg-primary/10 transition-all duration-300">
              <ArrowDown 
                size={20} 
                className="text-muted-foreground group-hover:text-primary transition-colors duration-300" 
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
