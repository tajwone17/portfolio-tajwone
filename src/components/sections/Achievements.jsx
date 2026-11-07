import React from "react";
import { Trophy } from "lucide-react";
import { achievements } from "../../data/profile";
import FadeIn from "../animations/FadeIn";

export default function Achievements() {
  return (
    <section id="achievements" className="relative py-20 bg-black overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-6">
              <Trophy className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary font-medium tracking-wider uppercase">
                Problem Solving
              </span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-normal text-white">
              Achievements
            </h2>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {achievements.map((achievement, index) => (
            <FadeIn key={achievement.id} delay={index * 75}>
              <article className="h-full bg-white/5 border border-white/10 rounded-2xl p-6 text-center hover:border-primary/30 transition-colors">
                <p className="text-3xl font-normal text-primary font-mono mb-3">
                  {achievement.value}
                </p>
                <h3 className="text-white font-medium mb-2">{achievement.title}</h3>
                <p className="text-sm text-white/50">{achievement.description}</p>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
