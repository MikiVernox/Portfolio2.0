import React from "react";
import portfolioData from "../data/portfolioData";
import FadeInSection from "./FadeInSection";

const EducationSection = () => {
  const { education } = portfolioData;

  return (
    <section id="education" className="min-h-screen px-16 py-20">
      <FadeInSection>
        <div className="flex items-center gap-3 mb-12">
          <span className="text-3xl">🎓</span>
          <h2 className="text-3xl font-bold">Education</h2>
        </div>
      </FadeInSection>

      <div className="max-w-4xl space-y-8">
        {education.map((edu, index) => (
          <FadeInSection key={edu.id} delay={index * 100}>
            <div className="p-8 bg-white/5 border border-white/10 rounded-2xl group hover:bg-white/10">
              <h3 className="text-xl font-bold group-hover:text-purple-400">
                {edu.degree}
              </h3>
              <p className="text-purple-400 font-medium">{edu.school}</p>
              <p className="text-sm text-gray-400">
                {edu.period} • {edu.location}
              </p>
              <p className="text-gray-300">{edu.description}</p>
            </div>
          </FadeInSection>
        ))}
      </div>
    </section>
  );
};

export default EducationSection;