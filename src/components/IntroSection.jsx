import React from "react";
import portfolioData from "../data/portfolioData";
import FadeInSection from "./FadeInSection";

const IntroSection = () => {
  const { profile } = portfolioData;

  return (
    <section id="intro" className="min-h-screen flex items-center px-16 py-20">
      <div className="max-w-4xl">
        <FadeInSection>
          <div className="inline-block px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full text-sm text-purple-300 mb-8">
            👋 Available for freelance work
          </div>
        </FadeInSection>

        <FadeInSection delay={100}>
          <h2 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
            Let's build something amazing together.
            <span className="block bg-gradient-to-r from-purple-400 via-fuchsia-400 to-pink-400 bg-clip-text text-transparent">
              I can help you bring your ideas to life.
            </span>
          </h2>
        </FadeInSection>

        <FadeInSection delay={200}>
          <p className="text-xl text-gray-400 mb-6 leading-relaxed max-w-3xl">
            {profile.intro}
          </p>
        </FadeInSection>

        <FadeInSection delay={300}>
          <p className="text-lg text-gray-500 mb-10 leading-relaxed max-w-3xl">
            {profile.bio}
          </p>
        </FadeInSection>
      </div>
    </section>
  );
};

export default IntroSection;