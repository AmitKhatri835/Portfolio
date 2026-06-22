import { motion } from "framer-motion";
import { GraduationCap, Mail, Phone, MapPin } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { PROFILE } from "../data/resume";

const infoChips = [
  { icon: GraduationCap, label: `${PROFILE.school} (${PROFILE.graduationYear})` },
  { icon: Mail, label: PROFILE.email, href: `mailto:${PROFILE.email}` },
  { icon: Phone, label: PROFILE.phone, href: `tel:${PROFILE.phone.replace(/\s/g, "")}` },
  { icon: MapPin, label: "Jodhpur, Rajasthan" },
];

export default function About() {
  return (
    <section id="about" className="px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <SectionHeading title="About Me" subtitle="Who I am and what drives me" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="glass-card rounded-2xl p-8 sm:p-10"
        >
          <p className="text-base leading-relaxed text-slate-300 sm:text-lg">
            {PROFILE.objective}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {infoChips.map((chip) => {
              const Icon = chip.icon;
              const content = (
                <>
                  <Icon size={16} className="shrink-0 text-indigo-400" />
                  <span>{chip.label}</span>
                </>
              );

              if (chip.href) {
                return (
                  <a
                    key={chip.label}
                    href={chip.href}
                    className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300 transition-colors hover:border-indigo-400/40 hover:text-white"
                  >
                    {content}
                  </a>
                );
              }

              return (
                <span
                  key={chip.label}
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300"
                >
                  {content}
                </span>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
