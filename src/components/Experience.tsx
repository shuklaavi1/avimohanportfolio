import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const Experience = () => {
  const experiences = [
    {
      year: "2024",
      title: "NASA Citizen Scientist",
      organization: "NASA - IASC",
      description: "Led a pan-India student team in the International Asteroid Search Collaboration (IASC), coordinating asteroid discovery efforts. Analyzed real astronomical data from the Pan-STARRS satellite and contributed to successful asteroid hunting and reporting.",
      type: "Research",
    },
    {
      year: "2024",
      title: "Active Member & Volunteer",
      organization: "Google Developers Group Ranchi",
      description: "Actively contributed to GDG Ranchi as a volunteer at DevFest 2024, Jharkhand's largest tech conference. Showcased a humanoid robot to 1000+ attendees and supported event logistics, community engagement, and technical demonstrations throughout the event.",
      type: "Volunteer",
      duration: "Jan 2024 – Present"
    },
    {
      year: "2024",
      title: "Young Changemaker Programme",
      organization: "IIM Ranchi",
      description: "Selected among the Top 100 from 3000+ global applicants for a changemaker program. Completed 25+ hours of community service, collaborated with like-minded peers, and led initiatives focused on leadership, innovation, and real-world problem-solving.",
    },
    {
      year: "2024",
      title: "Google Cloud Arcade",
      organization: "Google",
      description: "Built AI tools, managed databases, and explored real-world cloud solutions using Google Cloud Platform services",
      type: "Tech Programme",
    },
    {
      year: "2025",
      title: "Stanford Code in Place",
      organization: "Stanford University",
      description: "Selected from 66,000+ applicants for Stanford's Code in Place 2025. Learning Python and CS fundamentals through CS106A, with hands-on projects and global collaboration.",
      type: "Education",
    },
    {
      year: "2024",
      title: "Campus Ambassador",
      organization: "IIT Delhi - Tryst",
      description: "Selected as a high school student among thousands of campus ambassadors for North India's largest tech event, securing Rank 2 for outstanding performance. Contributed to promotion by designing creative merchandise and proposing innovative ideas to boost student engagement.",
      type: "Competition",
    },
    {
      year: "2024",
      title: "College Ambassador- Techfest",
      organization: "IIT Bombay - Techfest",
      description: "Ranked among the top Campus Ambassadors for Techfest IIT Bombay, Asia's largest science and technology festival. Recognized for outstanding outreach, engagement, and promotional contributions.",
      type: "Competition",
    },
  ];

  const awards = [
    {
      title: "Best Budding Entrepreneur of the Year 2025",
      organization: "Startup Jharkhand",
      description: "Youngest awardee and only high schooler recognized at Jharkhand's largest startup summit. Founded Innobotix – a robotics platform with its own AI Mentor (www.innobotix.in).",
      year: "2025",
    },
    {
      title: "INSPIRE Award Awardee",
      organization: "Government of India - Department of Sci & Tech",
      description: "Recognition and Rupees 10 thousand funds for River-Cleaning Robot innovation",
      year: "2023",
    },
    {
      title: "AIR 5 - Cybernation Olympiad",
      organization: "LKCRMS",
      description: "All India Rank 5 in National Cybernation Olympiad",
      year: "2023",
    },
    {
      title: "Oxford Scholars Programme",
      organization: "Oxford Scholars",
      description: "Selected among top 100 global students for AI & Programming",
      year: "2025",
    },
  ];

  return (
    <section id="experience" className="veda-section-padding bg-background">
      <div className="veda-container">
        <h2 className="text-4xl lg:text-5xl font-bold text-center mb-16">Experience & Awards</h2>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Experience Timeline */}
          <div>
            <h3 className="text-2xl font-semibold mb-8 text-primary">Experience</h3>
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <Card key={index} className="veda-card border-l-4 border-l-primary">
                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                      <CardTitle className="text-lg">{exp.title}</CardTitle>
                      <Badge variant="outline">{exp.year}</Badge>
                    </div>
                    <p className="text-primary font-medium">{exp.organization}</p>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-3">{exp.description}</p>
                    {exp.type && <Badge variant="secondary">{exp.type}</Badge>}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Awards & Recognition */}
          <div>
            <h3 className="text-2xl font-semibold mb-8 text-primary">Awards & Recognition</h3>
            <div className="space-y-6">
              {awards.map((award, index) => (
                <Card key={index} className="veda-card bg-gradient-to-r from-primary/5 to-primary/10 border-primary/20">
                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                      <CardTitle className="text-lg">{award.title}</CardTitle>
                      <Badge variant="default">{award.year}</Badge>
                    </div>
                    <p className="text-primary font-medium">{award.organization}</p>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{award.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Academic Info */}
            <Card className="veda-card mt-8 bg-muted/50">
              <CardHeader>
                <CardTitle className="text-lg">Current Education</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-2">
                  <strong>Class 12 CBSE Student</strong> at LKCRMS
                </p>
                <p className="text-muted-foreground">
                  Pursuing Science stream with focus on Mathematics, Physics, and Chemistry |
                  Academic House Captain | Zonal Yoga Player 
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};