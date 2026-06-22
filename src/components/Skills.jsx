import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { TECHNICAL_SKILLS, SOFT_SKILLS } from "../data/resume";

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.04 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
};

function SkillPill({ skill, accent }) {
  return (
    <motion.span
      variants={itemVariants}
      whileHover={{ scale: 1.08, boxShadow: "0 0 20px rgba(99,102,241,0.3)" }}
      className={`inline-block rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
        accent
          ? "border-indigo-500/30 bg-indigo-500/10 text-indigo-300 hover:border-indigo-400/50"
          : "border-white/10 bg-white/5 text-slate-300 hover:border-white/20"
      }`}
    >
      {skill}
    </motion.span>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          title="Skills"
          subtitle="Technologies and strengths I bring to the table"
        />

        <div className="space-y-10">
          <div>
            <h3 className="mb-5 text-center text-sm font-semibold tracking-widest text-slate-500 uppercase">
              Technical
            </h3>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="flex flex-wrap justify-center gap-3"
            >
              {TECHNICAL_SKILLS.map((skill) => (
                <SkillPill key={skill} skill={skill} accent />
              ))}
            </motion.div>
          </div>

          <div>
            <h3 className="mb-5 text-center text-sm font-semibold tracking-widest text-slate-500 uppercase">
              Soft Skills
            </h3>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="flex flex-wrap justify-center gap-3"
            >
              {SOFT_SKILLS.map((skill) => (
                <SkillPill key={skill} skill={skill} />
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
