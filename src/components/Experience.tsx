
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const Experience = () => {
  const experiences = [
    {
      year: "2024",
      title: "NASA Citizen Scientist",
      organization: "NASA",
      description: "Contributing to asteroid tracking and data analysis projects as part of NASA's citizen science initiatives.",
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
      title: "Young Changemaker",
      organization: "IIM Ranchi",
      description: "Selected for leadership and innovation program focusing on social impact through technology.",
      type: "Leadership",
    },
    {
      year: "2024",
      title: "Oxford Scholars Programme",
      organization: "Oxford University",
      description: "Top 100 selection for prestigious academic and leadership development program.",
      type: "Academic",
    },
    {
      year: "2023",
      title: "Stanford Code in Place",
      organization: "Stanford University",
      description: "Completed CS106A programming course with distinction, learning Python and computer science fundamentals.",
      type: "Education",
    },
    {
      year: "2023",
      title: "IIT Delhi Tryst Participant",
      organization: "IIT Delhi",
      description: "Participated in India's largest technical festival, showcasing innovative projects.",
      type: "Competition",
    },
  ];

  const awards = [
    {
      title: "INSPIRE Award Winner",
      organization: "Government of India",
      description: "Recognition for River-Cleaning Robot innovation",
      year: "2024",
    },
    {
      title: "AIR 5 - Cyber Olympiad",
      organization: "Science Olympiad Foundation",
      description: "All India Rank 5 in National Cyber Olympiad",
      year: "2023",
    },
    {
      title: "Google Cloud Arcade",
      organization: "Google Cloud",
      description: "Completed advanced cloud computing challenges",
      year: "2024",
    },
  ];

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Experience & Awards</h2>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Experience Timeline */}
            <div>
              <h3 className="text-2xl font-semibold mb-8 text-primary">Experience</h3>
              <div className="space-y-6">
                {experiences.map((exp, index) => (
                  <Card key={index} className="border-l-4 border-l-primary">
                    <CardHeader>
                      <div className="flex justify-between items-start mb-2">
                        <CardTitle className="text-lg">{exp.title}</CardTitle>
                        <Badge variant="outline">{exp.year}</Badge>
                      </div>
                      <p className="text-primary font-medium">{exp.organization}</p>
                    </CardHeader>
                    <CardContent>
                      <p className="text-foreground/80 mb-3">{exp.description}</p>
                      <Badge variant="secondary">{exp.type}</Badge>
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
                  <Card key={index} className="bg-gradient-to-r from-primary/5 to-primary/10 border-primary/20">
                    <CardHeader>
                      <div className="flex justify-between items-start mb-2">
                        <CardTitle className="text-lg">{award.title}</CardTitle>
                        <Badge variant="default">{award.year}</Badge>
                      </div>
                      <p className="text-primary font-medium">{award.organization}</p>
                    </CardHeader>
                    <CardContent>
                      <p className="text-foreground/80">{award.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Academic Info */}
              <Card className="mt-8 bg-muted/50">
                <CardHeader>
                  <CardTitle className="text-lg">Current Education</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground/80 mb-2">
                    <strong>Class 11 Student</strong> at LKCRMS
                  </p>
                  <p className="text-foreground/80">
                    Pursuing Science stream with focus on Mathematics, Physics, and Computer Science
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
