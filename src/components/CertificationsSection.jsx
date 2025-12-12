import React from "react";
import portfolioData from "../data/portfolioData";
import FadeInSection from "./FadeInSection";

const CertificationsSection = () => {
  const { certifications } = portfolioData;

  return (
    <section id="certifications" className="min-h-screen px-16 py-20">
      <FadeInSection>
        <div className="flex items-center gap-3 mb-12">
          <span className="text-3xl">🏆</span>
          <h2 className="text-3xl font-bold">Certifications</h2>
        </div>
      </FadeInSection>

      <div className="grid md:grid-cols-2 gap-6 max-w-5xl">
        {certifications.map((cert, index) => (
          <FadeInSection key={cert.id} delay={index * 50}>
            <div className="p-6 bg-white/5 border border-white/10 rounded-xl group hover:bg-white/10">
              <h3 className="font-bold group-hover:text-purple-400">
                {cert.name}
              </h3>
              <p className="text-sm text-gray-400">{cert.issuer}</p>
              <span className="text-xs text-gray-500">{cert.year}</span>
            </div>
          </FadeInSection>
        ))}
      </div>
    </section>
  );
};

export default CertificationsSection;