import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { GitHubIcon } from "./SocialIcons";
import SectionHeading from "./SectionHeading";
import { PROJECTS } from "../data/resume";

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.15 },
  }),
};

function ProjectCard({ project, index }) {
  const { title, description, highlights, tech, links } = project;

  return (
    <motion.article
      custom={index}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{ y: -6 }}
      className="glass-card group flex flex-col rounded-2xl p-6 transition-all duration-300 hover:border-indigo-500/30 hover:shadow-lg hover:shadow-indigo-500/10 sm:p-8"
    >
      <h3 className="text-xl font-bold text-white transition-colors group-hover:text-indigo-300">
        {title}
      </h3>
      <p className="mt-3 text-sm leading-relaxed text-slate-400">
        {description}
      </p>

      <ul className="mt-5 flex-1 space-y-2">
        {highlights.map((point) => (
          <li
            key={point}
            className="flex items-start gap-2 text-sm text-slate-400"
          >
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-400" />
            {point}
          </li>
        ))}
      </ul>

      <div className="mt-5 flex flex-wrap gap-2">
        {tech.map((t) => (
          <span
            key={t}
            className="rounded-md bg-indigo-500/10 px-2.5 py-1 text-xs font-medium text-indigo-300"
          >
            {t}
          </span>
        ))}
      </div>

      <div className="mt-6 flex gap-3">
        <a
          href={links.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-slate-300 transition-all hover:border-indigo-400/40 hover:text-white"
        >
          <GitHubIcon size={16} />
          Code
        </a>
        {links.live && (
          <a
            href={links.live}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-indigo-500 to-cyan-500 px-4 py-2 text-sm font-medium text-white transition-all hover:opacity-90"
          >
            <ExternalLink size={16} />
            Live Demo
          </a>
        )}
      </div>
    </motion.article>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          title="Projects"
          subtitle="Things I've built with the MERN stack"
        />

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
