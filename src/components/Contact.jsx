import { motion } from "framer-motion";
import { Mail, Phone, Send } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "./SocialIcons";
import SectionHeading from "./SectionHeading";
import { PROFILE, LINKS } from "../data/resume";

const contactMethods = [
  {
    icon: Mail,
    label: "Email",
    value: PROFILE.email,
    href: `mailto:${PROFILE.email}`,
  },
  {
    icon: Phone,
    label: "Phone",
    value: PROFILE.phone,
    href: `tel:${PROFILE.phone.replace(/\s/g, "")}`,
  },
];

const socialLinks = [
  { icon: GitHubIcon, label: "GitHub", href: LINKS.github },
  { icon: LinkedInIcon, label: "LinkedIn", href: LINKS.linkedin },
];

export default function Contact() {
  return (
    <section id="contact" className="px-6 py-24">
      <div className="mx-auto max-w-3xl">
        <SectionHeading
          title="Get In Touch"
          subtitle="Let's work together on something great"
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="glass-card rounded-2xl p-8 text-center sm:p-12"
        >
          <p className="text-base leading-relaxed text-slate-400 sm:text-lg">
            I&apos;m open to new opportunities and collaborations. Whether you
            have a project in mind or just want to say hello, feel free to reach
            out!
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
            {contactMethods.map((method) => {
              const Icon = method.icon;
              return (
                <a
                  key={method.label}
                  href={method.href}
                  className="inline-flex items-center justify-center gap-3 rounded-xl border border-white/10 bg-white/5 px-6 py-4 text-sm font-medium text-slate-300 transition-all hover:border-indigo-400/40 hover:text-white"
                >
                  <Icon size={18} className="text-indigo-400" />
                  <div className="text-left">
                    <div className="text-xs text-slate-500">{method.label}</div>
                    <div>{method.value}</div>
                  </div>
                </a>
              );
            })}
          </div>

          <div className="mt-8 flex items-center justify-center gap-4">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-400 transition-all hover:scale-110 hover:border-indigo-400/40 hover:text-indigo-300"
                >
                  <Icon size={20} />
                </a>
              );
            })}
          </div>

          <a
            href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(PROFILE.email)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-indigo-500 to-cyan-500 px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/25 transition-all hover:scale-105 hover:shadow-indigo-500/40"
          >
            <Send size={16} />
            Send a Message
          </a>
        </motion.div>
      </div>
    </section>
  );
}
