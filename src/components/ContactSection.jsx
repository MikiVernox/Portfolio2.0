import React from "react";
import portfolioData from "../data/portfolioData";
import FadeInSection from "./FadeInSection";
import { Mail, ArrowUpRight } from "lucide-react";

const ContactSection = () => {
  const { profile } = portfolioData;

  return (
    <section id="contact" className="px-16 py-32">
      <FadeInSection>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let's Work Together
          </h2>
          <p className="text-xl text-gray-400 mb-10">
            Hai un progetto in mente? Sono sempre aperto a nuove collaborazioni e opportunità interessanti.
          </p>
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-purple-500 to-fuchsia-500 rounded-xl font-bold text-lg hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105"
          >
            <Mail size={24} />
            Get in Touch
            <ArrowUpRight size={24} />
          </a>
        </div>
      </FadeInSection>
    </section>
  );
};

export default ContactSection;