import { Card } from "@/components/ui/card";
import { Linkedin, Mail } from "lucide-react";

const Team = () => {
  const team = [
    {
      name: "Dr. Sarah Chen",
      role: "Chief AI Scientist",
      bio: "PhD in Machine Learning from MIT. 15+ years experience in computer vision and autonomous systems.",
      email: "sarah.chen@aivehiclesafety.com"
    },
    {
      name: "Michael Rodriguez",
      role: "Lead Hardware Engineer",
      bio: "Former Tesla engineer specializing in sensor fusion and embedded systems design.",
      email: "michael.r@aivehiclesafety.com"
    },
    {
      name: "Dr. Priya Patel",
      role: "Director of Research",
      bio: "Published researcher in predictive analytics and behavioral modeling with 50+ peer-reviewed papers.",
      email: "priya.patel@aivehiclesafety.com"
    },
    {
      name: "James Thompson",
      role: "IoT Systems Architect",
      bio: "Expert in distributed sensor networks and edge computing with background in aerospace engineering.",
      email: "james.t@aivehiclesafety.com"
    },
    {
      name: "Dr. Li Wei",
      role: "Data Science Lead",
      bio: "Specialist in big data analytics and real-time processing pipelines for transportation systems.",
      email: "li.wei@aivehiclesafety.com"
    },
    {
      name: "Emily Foster",
      role: "Product Manager",
      bio: "10 years in automotive tech industry, driving user-centered design and product strategy.",
      email: "emily.foster@aivehiclesafety.com"
    }
  ];

  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Meet Our <span className="text-gradient">Expert Team</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            World-class researchers, engineers, and innovators dedicated to making roads safer through AI technology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {team.map((member, index) => (
            <Card 
              key={index}
              className="p-6 bg-card/50 backdrop-blur-sm border-border hover:border-primary card-hover group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-4">
                <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center glow-box">
                  <span className="text-3xl font-bold">{member.name.split(' ').map(n => n[0]).join('')}</span>
                </div>
                <h3 className="text-xl font-bold text-center mb-1">{member.name}</h3>
                <p className="text-primary text-center text-sm font-semibold mb-3">{member.role}</p>
              </div>
              <p className="text-muted-foreground text-sm text-center mb-4 leading-relaxed">
                {member.bio}
              </p>
              <div className="flex justify-center gap-4">
                <a
                  href={`mailto:${member.email}`}
                  className="text-muted-foreground hover:text-primary transition-smooth"
                  aria-label="Email"
                >
                  <Mail size={20} />
                </a>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-primary transition-smooth"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} />
                </a>
              </div>
            </Card>
          ))}
        </div>

        {/* Research Section */}
        <Card className="p-8 bg-card/50 backdrop-blur-sm border-border">
          <h2 className="text-3xl font-bold mb-6 text-center">Our Research Background</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-3 text-primary">Academic Foundations</h3>
              <p className="text-muted-foreground leading-relaxed">
                Our team's research spans prestigious institutions including MIT, Stanford, and Carnegie Mellon. 
                We've published over 100 peer-reviewed papers in AI, computer vision, and intelligent transportation systems. 
                Our work has been cited thousands of times and has influenced industry standards for vehicle safety technology.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3 text-primary">Industry Partnerships</h3>
              <p className="text-muted-foreground leading-relaxed">
                We collaborate with leading automotive manufacturers, tech giants, and transportation agencies worldwide. 
                Our research has been funded by grants from the National Highway Traffic Safety Administration (NHTSA), 
                European Commission, and private sector partners committed to advancing road safety through innovation.
              </p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Team;
