import React from "react";
import portfolioData from "../data/portfolioData";
import FadeInSection from "./FadeInSection";

const ExperienceSection = () => {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="min-h-screen px-16 py-20">
      <FadeInSection>
        <div className="flex items-center gap-3 mb-12">
          <span className="text-3xl">💼</span>
          <h2 className="text-3xl font-bold">Work Experience</h2>
        </div>
      </FadeInSection>

      <div className="max-w-4xl space-y-12">
        {experience.map((exp, index) => (
          <FadeInSection key={exp.id} delay={index * 100}>
            <div className="relative pl-8 border-l-2 border-white/10 group">
              <div
                className={`absolute -left-2 top-0 w-4 h-4 rounded-full ${
                  exp.current ? "bg-purple-500 animate-pulse" : "bg-gray-600"
                }`}
              />
              <h3 className="text-xl font-bold group-hover:text-purple-400">
                {exp.role}
              </h3>
              <p className="text-purple-400 font-medium">{exp.company}</p>
              <p className="text-sm text-gray-400">
                {exp.period} • {exp.location}
              </p>
              <p className="text-gray-300">{exp.description}</p>
            </div>
          </FadeInSection>
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;