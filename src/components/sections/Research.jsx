import React, { useState } from "react";
import * as Icons from "lucide-react";
import {
  otherResearchFields,
  researchExpertise,
  researchWorks,
} from "../../data/research";
import { SOCIAL_LINKS } from "../../utils/constants";
import FadeIn from "../animations/FadeIn";

const statuses = ["All", "Accepted", "Presented", "Published"];

const statusStyles = {
  Accepted: "text-amber-300 bg-amber-400/10 border-amber-300/30",
  Presented: "text-sky-300 bg-sky-400/10 border-sky-300/30",
  Published: "text-primary bg-primary/10 border-primary/30",
};

export default function Research() {
  const [activeStatus, setActiveStatus] = useState("All");
  const filteredWorks =
    activeStatus === "All"
      ? researchWorks
      : researchWorks.filter((work) => work.statuses.includes(activeStatus));

  return (
    <section id="research" className="relative py-20 bg-black overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-50" />
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-50" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-6">
              <Icons.BookOpen className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary font-medium tracking-wider uppercase">
                Research & Publications
              </span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-normal text-white mb-4">
              Curiosity that becomes useful work.
            </h2>
            <p className="text-lg text-white/60 max-w-2xl mx-auto">
              Exploring machine learning and language technologies for
              low-resource communities while building practical software.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={100}>
          <div className="bg-primary/10 border border-primary/30 rounded-2xl p-6 md:p-8 mb-12">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-5">
              <div>
                <p className="text-primary text-sm font-medium tracking-wider uppercase mb-2">
                  Current Research Role
                </p>
                <h3 className="text-2xl font-medium text-white mb-2">
                  Student Researcher · ELITE Research Lab
                </h3>
                <p className="text-white/60">
                  North East University Bangladesh · Exploring AI, ML, NLP,
                  computer vision, and data-driven systems
                </p>
              </div>
              <span className="text-white/70 text-sm border border-white/20 rounded-full px-4 py-2 w-fit">
                November 1, 2026 – Present
              </span>
            </div>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-16">
          {researchExpertise.map((item, index) => {
            const Icon = Icons[item.icon] || Icons.Lightbulb;
            return (
              <FadeIn key={item.id} delay={index * 100}>
                <article className="h-full bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-primary/30 transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-5">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-medium text-white mb-3">
                    {item.title}
                  </h3>
                  <p className="text-white/60 leading-relaxed">
                    {item.description}
                  </p>
                </article>
              </FadeIn>
            );
          })}
        </div>

        <FadeIn delay={150}>
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 mb-16">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
              <div>
                <p className="text-primary text-sm font-medium tracking-wider uppercase mb-2">
                  Future research directions
                </p>
                <h3 className="text-2xl font-normal text-white mb-2">
                  Other fields I want to explore
                </h3>
                <p className="text-white/60">
                  Expanding my work toward intelligent systems and real-world
                  computational applications.
                </p>
              </div>
              <div className="flex flex-wrap gap-2 lg:max-w-xl lg:justify-end">
                {otherResearchFields.map((field) => (
                  <span
                    key={field}
                    className="text-sm text-white/70 bg-white/5 border border-white/10 rounded-full px-4 py-2"
                  >
                    {field}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={200}>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
            <div>
              <p className="text-primary text-sm font-medium tracking-wider uppercase mb-3">
                Publication tracker
              </p>
              <h3 className="text-3xl font-normal text-white">
                Research work & publications
              </h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {statuses.map((status) => (
                <button
                  key={status}
                  onClick={() => setActiveStatus(status)}
                  className={`px-4 py-2 rounded-full text-sm border transition-all duration-300 ${
                    activeStatus === status
                      ? "bg-primary text-black border-primary"
                      : "text-white/60 border-white/10 hover:text-white hover:border-white/30"
                  }`}
                >
                  {status}
                </button>
              ))}
            </div>
          </div>
        </FadeIn>

        {filteredWorks.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {filteredWorks.map((work, index) => (
              <FadeIn key={work.id} delay={250 + index * 100}>
                <article className="group h-full flex flex-col bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-primary/30 transition-all duration-300">
                  <div className="flex items-center justify-between gap-3 mb-5">
                    <div className="flex flex-wrap gap-2">
                      {work.statuses.map((status) => (
                        <span
                          key={status}
                          className={`px-3 py-1 rounded-full border text-xs font-medium ${statusStyles[status]}`}
                        >
                          {status}
                        </span>
                      ))}
                    </div>
                    <span className="text-sm text-white/40">{work.year}</span>
                  </div>
                  <h4 className="text-xl font-medium text-white mb-3 group-hover:text-primary transition-colors">
                    {work.title}
                  </h4>
                  <p className="text-sm text-primary/80 mb-4">{work.venue}</p>
                  <p className="text-xs text-white/40 leading-relaxed mb-4">
                    {work.authors}
                  </p>
                  <p className="text-xs text-white/40 leading-relaxed mb-4">
                    {work.details}
                  </p>
                  <p className="text-white/60 text-sm leading-relaxed flex-1">
                    {work.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-6 pt-5 border-t border-white/10">
                    {work.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs text-white/50 bg-white/5 rounded-full px-3 py-1"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </article>
              </FadeIn>
            ))}
          </div>
        ) : (
          <div className="border border-dashed border-white/15 rounded-2xl p-10 text-center text-white/50">
            No {activeStatus.toLowerCase()} research works listed yet.
          </div>
        )}

        <FadeIn delay={300}>
          <div className="flex flex-wrap justify-center gap-3 mt-10">
            <a
              href={SOCIAL_LINKS.researchGate}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-white/15 text-white/70 hover:text-primary hover:border-primary/40 transition-colors"
            >
              <Icons.ExternalLink className="w-4 h-4" />
              ResearchGate Profile
            </a>
            <a
              href={SOCIAL_LINKS.orcid}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-white/15 text-white/70 hover:text-primary hover:border-primary/40 transition-colors"
            >
              <Icons.ExternalLink className="w-4 h-4" />
              ORCID: 0009-0008-1199-7797
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
