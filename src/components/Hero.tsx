
import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail, Code, Zap, Award } from "lucide-react";

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
    <section id="home" className="min-h-screen flex items-center justify-center bg-black relative overflow-hidden">
      {/* Modern Background Effects */}
      <div className="absolute inset-0 hero-bg"></div>
      
      {/* Animated Grid */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
        backgroundImage: `linear-gradient(rgba(59, 130, 246, 0.3) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(59, 130, 246, 0.3) 1px, transparent 1px)`,
        backgroundSize: '50px 50px'
      }}></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-primary rounded-full animate-pulse"></div>
      <div className="absolute top-40 right-20 w-1 h-1 bg-cyan-400 rounded-full animate-pulse delay-1000"></div>
      <div className="absolute bottom-32 left-20 w-1.5 h-1.5 bg-purple-400 rounded-full animate-pulse delay-500"></div>
      
      <div className="container mx-auto px-4 relative z-10 pt-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-3 glass-effect rounded-full px-6 py-3">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-sm text-white/80">Available for opportunities</span>
              </div>
              
              <div className="space-y-4">
                <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                  <span className="text-white">Hello, I'm</span>
                  <br />
                  <span className="text-gradient text-4xl">Avi Mohan Kumar Shuklaa</span>
                </h1>
                
                <div className="text-2xl md:text-3xl font-medium text-white/80">
                  AI & Robotics Innovator
                </div>
                
                <p className="text-lg text-white/70 max-w-lg leading-relaxed">
                  High School Innovator | INSPIRE Awardee | NASA Citizen Scientist
                  <br />
                  Building the future through innovative technology solutions.
                </p>
              </div>
            </div>
<a
  href="/resume.pdf"
  download
  className="inline-block mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
>
  Download Resume
</a>

            <div className="flex flex-wrap gap-4">
              <Button size="lg" onClick={() => scrollToSection("projects")} className="bg-primary hover:bg-primary/90 glow-effect text-white font-semibold px-8 py-3">
                <Code className="mr-2" size={20} />
                View Projects
              </Button>
              <Button size="lg" variant="outline" onClick={() => scrollToSection("contact")} className="glass-effect border-white/20 text-white hover:bg-white/10 px-8 py-3">
                <Mail className="mr-2" size={20} />
                Let's Talk
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              <Button size="icon" variant="ghost" className="glass-effect hover:bg-white/10 text-white" asChild>
                <a href="mailto:hustlewithavi1@gmail.com">
                  <Mail size={20} />
                </a>
              </Button>
              <Button size="icon" variant="ghost" className="glass-effect hover:bg-white/10 text-white" asChild>
                <a href="https://www.linkedin.com/in/avi-mohan-kr-shuklaa-235605282" target="_blank" rel="noopener noreferrer">
                  <Linkedin size={20} />
                </a>
              </Button>
            </div>

            {/* Enhanced Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="text-center space-y-2">
                <div className="text-3xl font-bold text-gradient">6+</div>
                <div className="text-sm text-white/60">Projects</div>
              </div>
              <div className="text-center space-y-2">
                <div className="text-3xl font-bold text-gradient">5+</div>
                <div className="text-sm text-white/60">Awards</div>
              </div>
              <div className="text-center space-y-2">
                <div className="text-3xl font-bold text-gradient">3+</div>
                <div className="text-sm text-white/60">Programs</div>
              </div>
            </div>
          </div>

          {/* Right Content - Profile Picture */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Main Profile Circle with Image */}
              <div className="w-96 h-96 bg-gradient-to-br from-primary via-blue-500 to-cyan-400 rounded-full profile-glow flex items-center justify-center p-2">
                <div className="w-full h-full glass-effect rounded-full overflow-hidden">
                  <img 
                    src="https://i.postimg.cc/xCqbRs45/1000108570.jpg" 
                    alt="Avi Mohan Kumar Shuklaa"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              {/* Floating Achievement Cards */}
              <div className="absolute -bottom-8 -left-8 glass-effect rounded-xl p-4 shadow-2xl">
                <div className="flex items-center gap-2">
                  <Code className="text-cyan-400" size={20} />
                  <span className="text-xs text-white/80 font-medium">AI Enthusiast</span>
                </div>
              </div>

              {/* Orbiting Elements */}
              <div className="absolute top-8 left-8 w-4 h-4 bg-primary/60 rounded-full animate-ping"></div>
              <div className="absolute bottom-16 right-16 w-3 h-3 bg-cyan-400/60 rounded-full animate-ping delay-700"></div>
            </div>
          </div>
        </div>

        {/* Enhanced Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="flex flex-col items-center gap-2 animate-bounce">
            <span className="text-xs text-white/60">Scroll to explore</span>
            <ArrowDown size={24} className="text-white/60 cursor-pointer hover:text-primary transition-colors" onClick={() => scrollToSection("about")} />
          </div>
        </div>
      </div>
    </section>
  );
};
