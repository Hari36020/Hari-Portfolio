import { Card, CardContent } from "@/components/ui/card";
import { experiences } from "@/data/portfolio";

const ExperienceSection = () => (
  <section className="py-20 px-6">
    <div className="max-w-4xl mx-auto">
      <h2 className="text-4xl font-light text-center mb-16 tracking-tight">
        Professional <span className="font-semibold">Journey</span>
      </h2>
      <div className="space-y-12">
        {experiences.map((exp, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow duration-300 border-l-4 border-l-primary">
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <h3 className="text-2xl font-semibold text-primary">{exp.company}</h3>
                <span className="text-muted-foreground font-medium">{exp.period}</span>
              </div>
              <h4 className="text-xl font-medium mb-3">{exp.role}</h4>
              <p className="text-muted-foreground leading-relaxed">{exp.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  </section>
);

export default ExperienceSection;
