import { Card } from "@/components/ui/card";
import { Target, Eye, Zap } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-center animate-fade-in">
            About <span className="text-gradient">Our Mission</span>
          </h1>
          <p className="text-xl text-muted-foreground text-center mb-16 animate-fade-in">
            Pioneering the future of road safety through artificial intelligence
          </p>

          <div className="space-y-12">
            <Card className="p-8 bg-card/50 backdrop-blur-sm border-border animate-fade-in">
              <div className="flex items-start gap-4">
                <div className="text-primary mt-1">
                  <Target className="w-8 h-8" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold mb-4">Our Purpose</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    The AI-Powered Vehicle Safety and Monitoring System was developed to address the critical challenge of road safety in an increasingly connected world. Every year, millions of accidents occur due to driver fatigue, distracted driving, and delayed hazard detection. Our system integrates cutting-edge artificial intelligence, IoT sensors, and cloud computing to create a comprehensive safety ecosystem that monitors, analyzes, and responds to potential dangers in real-time.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-8 bg-card/50 backdrop-blur-sm border-border animate-fade-in">
              <div className="flex items-start gap-4">
                <div className="text-primary mt-1">
                  <Eye className="w-8 h-8" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    We envision a future where intelligent systems work seamlessly with human drivers to eliminate preventable accidents and save lives. By leveraging machine learning algorithms and advanced sensor networks, we're creating vehicles that don't just transport people—they protect them.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Our platform provides fleet managers, individual drivers, and transportation companies with unprecedented visibility into vehicle health, driver behavior, and road conditions, enabling proactive safety measures before incidents occur.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-8 bg-card/50 backdrop-blur-sm border-border animate-fade-in">
              <div className="flex items-start gap-4">
                <div className="text-primary mt-1">
                  <Zap className="w-8 h-8" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold mb-4">Key Objectives</h2>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Reduce traffic accidents through real-time driver behavior analysis and fatigue detection</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Provide instant collision warnings using advanced obstacle detection algorithms</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Enable comprehensive fleet monitoring with GPS tracking and performance analytics</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Create actionable insights through AI-powered data analysis and predictive modeling</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Establish new standards for intelligent transportation safety systems</span>
                    </li>
                  </ul>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
