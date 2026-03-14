import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { projects } from "@/data/portfolio";

const ProjectsSection = () => (
  <section id="projects" className="py-20 px-6 bg-muted/50">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-4xl font-light text-center mb-16 tracking-tight">
        Featured <span className="font-semibold">Work</span>
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">{project.description}</p>
              <div className="mb-4">
                <p className="text-sm font-medium text-primary mb-1">Tech Stack:</p>
                <p className="text-sm text-muted-foreground">{project.tech}</p>
              </div>
              {project.role && (
                <p className="text-sm text-muted-foreground mb-4">{project.role}</p>
              )}
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-primary hover:text-primary/80 font-medium transition-colors"
                >
                  Visit Project
                  <ArrowRight className="ml-1 h-4 w-4" />
                </a>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsSection;
