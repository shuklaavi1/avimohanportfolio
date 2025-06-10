
export const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">About Me</h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
                I'm a high school student from India with an insatiable passion for technology and innovation. 
                My journey began with curiosity about how things work, which led me to build my first robot 
                and develop AI-powered solutions.
              </p>
              
              <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
                As a Class 11 student at LKCRMS, I've had the privilege of participating in prestigious 
                programs including the Oxford Scholars Programme, Young Changemaker at IIM Ranchi, 
                and Stanford's CS106A Code in Place.
              </p>
              
              <p className="text-lg text-foreground/80 leading-relaxed">
                My goal is to pursue higher education at top universities in the US, UK, and Hong Kong, 
                where I can further develop my skills in AI and robotics while contributing to 
                groundbreaking research and innovation.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3 text-primary">Education Goals</h3>
                <p className="text-foreground/80">
                  Targeting top-tier universities for Computer Science and AI research
                </p>
              </div>
              
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3 text-primary">Specializations</h3>
                <ul className="text-foreground/80 space-y-1">
                  <li>• Artificial Intelligence</li>
                  <li>• Robotics & Automation</li>
                  <li>• Cloud Computing</li>
                  <li>• Machine Learning</li>
                </ul>
              </div>
              
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3 text-primary">Leadership</h3>
                <p className="text-foreground/80">
                  Active participant in tech communities and innovation programs
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
