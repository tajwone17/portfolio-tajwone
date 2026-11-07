import React from "react";
import { BookOpen, GraduationCap } from "lucide-react";
import { education } from "../../data/profile";
import FadeIn from "../animations/FadeIn";

export default function Education() {
  return (
    <section id="education" className="relative py-20 bg-black overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-6">
              <GraduationCap className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary font-medium tracking-wider uppercase">
                Academic Background
              </span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-normal text-white mb-4">
              Education
            </h2>
          </div>
        </FadeIn>

        <FadeIn delay={100}>
          <article className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8">
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-5">
              <div>
                <h3 className="text-2xl font-medium text-white mb-2">
                  {education.degree}
                </h3>
                <p className="text-primary mb-2">{education.institution}</p>
                <p className="text-white/50 text-sm">{education.location}</p>
              </div>
              <div className="text-left lg:text-right">
                <p className="text-white/70">{education.period}</p>
                <p className="text-primary font-medium mt-1">{education.result}</p>
              </div>
            </div>
            <div className="mt-8 pt-6 border-t border-white/10">
              <div className="flex items-center gap-2 text-white mb-4">
                <BookOpen className="w-4 h-4 text-primary" />
                <span className="font-medium">Relevant coursework</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {education.coursework.map((course) => (
                  <span
                    key={course}
                    className="text-sm text-white/60 bg-white/5 border border-white/10 rounded-full px-4 py-2"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </article>
        </FadeIn>
      </div>
    </section>
  );
}
