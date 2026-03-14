import { Badge } from "@/components/ui/badge";
import { skills } from "@/data/portfolio";

const AboutSection = () => (
  <section className="py-20 px-6 bg-muted/50">
    <div className="max-w-6xl mx-auto">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div className="space-y-6">
          <h2 className="text-4xl font-light tracking-tight">
            A Developer Who <span className="font-semibold">Builds With Purpose</span>
          </h2>
          <p className="text-lg leading-relaxed text-muted-foreground">
            I'm a Full Stack Developer with 5.5+ years of experience building high-performance mobile and web applications.
            My expertise spans Flutter, React, Kotlin, Node.js, and scalable cloud services.
          </p>
          <p className="text-lg leading-relaxed text-muted-foreground">
            I've worked on cross-platform insurance platforms, real-time courier systems, and data integration pipelines,
            always focused on performance and clean architecture.
          </p>
          <p className="text-lg leading-relaxed text-muted-foreground">
            I thrive in agile teams and fast-moving environments, turning requirements into reliable digital products.
          </p>
        </div>
        <div>
          <h3 className="text-2xl font-semibold mb-6 text-center">Skills & Technologies</h3>
          <div className="flex flex-wrap gap-3 justify-center">
            {skills.map((skill) => (
              <Badge
                key={skill}
                variant="secondary"
                className="px-4 py-2 text-sm font-medium bg-background border border-border hover:border-primary/50 hover:bg-primary/5 transition-colors duration-200"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;
