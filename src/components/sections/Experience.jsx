import React from "react";
import { BriefcaseBusiness } from "lucide-react";
import { experience } from "../../data/profile";
import FadeIn from "../animations/FadeIn";

export default function Experience() {
  return (
    <section id="experience" className="relative py-20 bg-black overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-6">
              <BriefcaseBusiness className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary font-medium tracking-wider uppercase">
                Experience
              </span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-normal text-white">
              Research & Professional Experience
            </h2>
          </div>
        </FadeIn>

        <div className="max-w-4xl mx-auto space-y-5">
          {experience.map((item, index) => (
            <FadeIn key={item.id} delay={index * 100}>
              <article className="relative bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 hover:border-primary/30 transition-colors">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-4">
                  <div>
                    <h3 className="text-2xl font-medium text-white">{item.role}</h3>
                    <p className="text-primary mt-1">{item.organization}</p>
                  </div>
                  <span className="text-sm text-white/50">{item.period}</span>
                </div>
                <p className="text-white/60 leading-relaxed">{item.description}</p>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
