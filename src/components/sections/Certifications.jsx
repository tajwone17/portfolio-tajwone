import React from "react";
import { Award } from "lucide-react";
import { certifications } from "../../data/profile";
import FadeIn from "../animations/FadeIn";

export default function Certifications() {
  return (
    <section id="certifications" className="relative py-20 bg-black overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-6">
              <Award className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary font-medium tracking-wider uppercase">
                Professional Training
              </span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-normal text-white">
              Certifications
            </h2>
          </div>
        </FadeIn>

        <div className="max-w-3xl mx-auto space-y-5">
          {certifications.map((certification, index) => (
            <FadeIn key={certification.id} delay={index * 100}>
              <article className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-4">
                  <div>
                    <h3 className="text-2xl font-medium text-white">
                      {certification.title}
                    </h3>
                    <p className="text-primary mt-1">{certification.organization}</p>
                  </div>
                  <span className="text-sm text-white/50">{certification.period}</span>
                </div>
                <p className="text-white/60 leading-relaxed">
                  {certification.description}
                </p>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
