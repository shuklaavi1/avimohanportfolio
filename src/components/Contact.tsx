
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Linkedin } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-lg text-muted-foreground mb-12">
            Interested in collaboration, mentorship, or just want to connect? Let's chat!
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <Mail className="w-8 h-8 text-primary mx-auto mb-4" />
                <CardTitle>Email</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/80 mb-4">
                  For project collaborations, university applications, or general inquiries
                </p>
                <Button asChild className="w-full">
                  <a href="mailto:hustlewithavi1@gmail.com">
                    hustlewithavi1@gmail.com
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <Linkedin className="w-8 h-8 text-primary mx-auto mb-4" />
                <CardTitle>LinkedIn</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/80 mb-4">
                  Connect professionally and follow my latest updates
                </p>
                <Button asChild variant="outline" className="w-full">
                  <a 
                    href="https://www.linkedin.com/in/avi-mohan-kr-shuklaa-235605282" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    Connect on LinkedIn
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="bg-card border border-border rounded-lg p-8">
            <h3 className="text-xl font-semibold mb-4">Open to Opportunities</h3>
            <p className="text-foreground/80 mb-6">
              I'm actively seeking university admissions, research opportunities, internships, 
              and collaborative projects in AI, robotics, and cloud computing. I'm also available 
              for speaking engagements and tech community events.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="sm" variant="outline">University Applications</Button>
              <Button size="sm" variant="outline">Research Collaboration</Button>
              <Button size="sm" variant="outline">Tech Speaking</Button>
              <Button size="sm" variant="outline">Mentorship</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
