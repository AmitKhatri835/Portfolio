import { motion } from "framer-motion";
import { ArrowDown, Mail } from "lucide-react";
import { GitHubIcon } from "./SocialIcons";
import { PROFILE, LINKS } from "../data/resume";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-20"
    >
      <div
        className="gradient-orb bg-indigo-600"
        style={{ width: 400, height: 400, top: "10%", left: "10%" }}
      />
      <div
        className="gradient-orb bg-cyan-500"
        style={{ width: 350, height: 350, bottom: "15%", right: "10%" }}
      />
      <div
        className="gradient-orb bg-purple-600"
        style={{ width: 250, height: 250, top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}
      />

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-4 text-sm font-medium tracking-widest text-indigo-400 uppercase"
        >
          Portfolio
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl font-extrabold tracking-tight sm:text-6xl md:text-7xl"
        >
          Hi, I&apos;m{" "}
          <span className="gradient-text">{PROFILE.name}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-4 text-xl font-medium text-slate-300 sm:text-2xl"
        >
          {PROFILE.role}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-slate-400 sm:text-lg"
        >
          {PROFILE.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-indigo-500 to-cyan-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/25 transition-all hover:scale-105 hover:shadow-indigo-500/40"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition-all hover:scale-105 hover:border-indigo-400/50 hover:bg-white/10"
          >
            <Mail size={16} />
            Contact Me
          </a>
          <a
            href={LINKS.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition-all hover:scale-105 hover:border-indigo-400/50 hover:bg-white/10"
            aria-label="GitHub profile"
          >
            <GitHubIcon size={16} />
            GitHub
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16"
        >
          <a
            href="#about"
            className="inline-flex flex-col items-center gap-2 text-slate-500 transition-colors hover:text-indigo-400"
            aria-label="Scroll to about section"
          >
            <span className="text-xs tracking-widest uppercase">Scroll</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ArrowDown size={20} />
            </motion.div>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
