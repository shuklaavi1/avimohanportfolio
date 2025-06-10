
import { Card, CardContent } from "@/components/ui/card";

export const About = () => {
  const highlights = [
    {
      icon: "🎓",
      title: "Education Goals",
      description: "Targeting top-tier universities for Computer Science and AI research in US, UK, and Hong Kong"
    },
    {
      icon: "🤖",
      title: "Specializations",
      description: "AI, Robotics & Automation, Cloud Computing, Machine Learning"
    },
    {
      icon: "🏆",
      title: "Leadership",
      description: "Oxford Scholars Programme, Young Changemaker at IIM Ranchi, Stanford Code in Place"
    }
  ];

  return (
    <section id="about" className="py-20 bg-background relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              About <span className="text-gradient">Me</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A passionate innovator bridging the gap between imagination and reality through technology
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <p className="text-lg text-foreground/90 leading-relaxed">
                I'm a high school student from India with an insatiable passion for technology and innovation. 
                My journey began with curiosity about how things work, which led me to build my first robot 
                and develop AI-powered solutions.
              </p>
              
              <p className="text-lg text-foreground/90 leading-relaxed">
                As a Class 11 student at LKCRMS, I've had the privilege of participating in prestigious 
                programs including the Oxford Scholars Programme, Young Changemaker at IIM Ranchi, 
                and Stanford's CS106A Code in Place.
              </p>
              
              <p className="text-lg text-foreground/90 leading-relaxed">
                My goal is to pursue higher education at top universities where I can further develop 
                my skills in AI and robotics while contributing to groundbreaking research and innovation.
              </p>

              <div className="flex flex-wrap gap-3 pt-4">
                {["Python", "AI/ML", "Robotics", "Cloud Computing", "Arduino", "Computer Vision"].map((skill) => (
                  <span key={skill} className="bg-card border border-primary/20 rounded-full px-3 py-1 text-sm text-muted-foreground">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="space-y-6">
              {highlights.map((item, index) => (
                <Card key={index} className="bg-card/50 border-primary/10 card-hover">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="text-2xl">{item.icon}</div>
                      <div>
                        <h3 className="text-lg font-semibold mb-2 text-primary">{item.title}</h3>
                        <p className="text-muted-foreground leading-relaxed">{item.description}</p>
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
