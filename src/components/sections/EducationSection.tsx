import { Card, CardContent } from "@/components/ui/card";
import { education } from "@/data/portfolio";

const EducationSection = () => (
  <section className="py-20 px-6">
    <div className="max-w-4xl mx-auto">
      <h2 className="text-4xl font-light text-center mb-16 tracking-tight">
        <span className="font-semibold">Education</span>
      </h2>
      <div className="grid md:grid-cols-2 gap-8">
        {education.map((edu, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-primary/10 rounded-full flex items-center justify-center">
                🎓
              </div>
              <h3 className="text-xl font-semibold mb-2">{edu.degree}</h3>
              <p className="text-muted-foreground mb-2">{edu.school}</p>
              <p className="text-muted-foreground/70">{edu.period}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  </section>
);

export default EducationSection;
