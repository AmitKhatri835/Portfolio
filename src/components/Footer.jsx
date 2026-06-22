import { ArrowUp } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 px-6 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
        <a
          href="#"
          className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-400 transition-all hover:border-indigo-400/40 hover:text-indigo-300"
          aria-label="Back to top"
        >
          <ArrowUp size={16} />
          Back to top
        </a>
      </div>
    </footer>
  );
}
