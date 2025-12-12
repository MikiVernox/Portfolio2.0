import React from "react";
import portfolioData from "../data/portfolioData";
import FadeInSection from "./FadeInSection";
import { ExternalLink } from "lucide-react";

const ProjectsSection = () => {
  const { projects } = portfolioData;

  return (
    <section id="projects" className="min-h-screen px-16 py-20">
      <FadeInSection>
        <div className="flex items-center gap-3 mb-12">
          <span className="text-3xl">🎮</span>
          <h2 className="text-3xl font-bold">Featured Projects</h2>
        </div>
      </FadeInSection>

      <div className="grid gap-8 max-w-5xl">
        {projects.map((project, index) => (
          <FadeInSection key={project.id} delay={index * 100}>
            <div
              className={`group relative bg-gradient-to-br ${project.gradient} border border-white/10 rounded-2xl p-8 hover:border-${project.accentColor}-500/30 transition-all duration-500 cursor-pointer`}
            >
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-purple-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-400">{project.type}</p>
                </div>
                <ExternalLink className="text-gray-500 group-hover:text-purple-400 transition-all duration-300" />
              </div>
              <p className="text-gray-300 mb-6">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-xs font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </FadeInSection>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;