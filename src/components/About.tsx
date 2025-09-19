
import { Card, CardContent } from "@/components/ui/card";
import { Brain, Rocket, Trophy } from "lucide-react";

export const About = () => {
  const highlights = [
    {
      icon: <Trophy className="text-primary" size={32} />,
      title: "Education Goals",
      description: "Targeting top-tier universities for Computer Science and AI research in US, UK, and Hong Kong"
    },
    {
      icon: <Brain className="text-cyan-400" size={32} />,
      title: "Specializations",
      description: "AI, Robotics & Automation, Cloud Computing, Machine Learning"
    },
    {
      icon: <Rocket className="text-purple-400" size={32} />,
      title: "Leadership",
      description: "Oxford Scholars Programme, Young Changemaker at IIM Ranchi, Stanford Code in Place"
    }
  ];

  return (
    <section id="about" className="py-20 bg-black relative">
      {/* Background Effects */}
      <div className="absolute inset-0 hero-bg opacity-50"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              About <span className="text-gradient">Me</span>
            </h2>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              A passionate innovator bridging the gap between imagination and reality through technology
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
            <div className="space-y-6">
              <p className="text-lg text-white/80 leading-relaxed">
                I'm a high school student from India with an insatiable passion for technology and innovation. 
                My journey began with curiosity about how things work, which led me to build my first robot 
                and develop AI-powered solutions.
              </p>
              
              <p className="text-lg text-white/80 leading-relaxed">
                As a Class 12 student at LKCRMS, I've been fortunate to engage in globally recognized academic experiences that have expanded my problem-solving, innovation, and leadership skills—ranging from intensive coding courses to changemaker initiatives and international scholar programmes.
              </p>
              
              <p className="text-lg text-white/80 leading-relaxed">
                My goal is to pursue higher education at top universities where I can further develop 
                my skills in AI and robotics while contributing to groundbreaking research and innovation.
              </p>

              <div className="flex flex-wrap gap-3 pt-6">
                {["Python", "AI/ML", "Robotics", "Cloud Computing", "Arduino", "Computer Vision"].map((skill) => (
                  <span key={skill} className="glass-effect rounded-full px-4 py-2 text-sm text-white/80 border border-white/10">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="space-y-6">
              {highlights.map((item, index) => (
                <Card key={index} className="glass-effect border-white/10 card-hover bg-white/5">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">{item.icon}</div>
                      <div>
                        <h3 className="text-xl font-semibold mb-3 text-white">{item.title}</h3>
                        <p className="text-white/70 leading-relaxed">{item.description}</p>
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
