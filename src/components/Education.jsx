import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { EDUCATION } from "../data/data";

export default function Education() {
  return (
    <section id="education" className="px-6 py-24">
      <div className="mx-auto max-w-3xl">
        <SectionHeading title="Education" subtitle="My academic journey" />

        <div className="relative">
          <div className="absolute top-0 bottom-0 left-6 w-px bg-gradient-to-b from-indigo-500/50 via-cyan-500/30 to-transparent sm:left-8" />

          <div className="space-y-8">
            {EDUCATION.map((item, index) => (
              <motion.div
                key={item.degree}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative pl-16 sm:pl-20"
              >
                <div
                  className={`absolute left-3.5 flex h-6 w-6 items-center justify-center rounded-full sm:left-[22px] ${
                    item.primary
                      ? "bg-gradient-to-br from-indigo-500 to-cyan-500 shadow-lg shadow-indigo-500/30"
                      : "border border-white/20 bg-[#111827]"
                  }`}
                >
                  <GraduationCap
                    size={12}
                    className={item.primary ? "text-white" : "text-slate-400"}
                  />
                </div>

                <div
                  className={`glass-card rounded-xl p-6 ${
                    item.primary ? "border-indigo-500/20" : ""
                  }`}
                >
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <h3
                      className={`text-lg font-bold ${
                        item.primary ? "text-indigo-300" : "text-white"
                      }`}
                    >
                      {item.degree}
                    </h3>
                    <span className="rounded-full bg-indigo-500/10 px-3 py-1 text-xs font-semibold text-indigo-300">
                      {item.percentage}
                    </span>
                  </div>
                  <p className="mt-2 text-sm text-slate-400">
                    {item.institution}
                  </p>
                  <p className="mt-1 text-xs text-slate-500">{item.period}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
