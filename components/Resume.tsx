"use client";

import { FileText, Download, Eye } from "lucide-react";

export default function Resume() {
  return (
    <section className="bg-[#050816] py-16">
      <div className="mx-auto max-w-5xl px-6">

        <div className="rounded-3xl border border-cyan-500/20 bg-white/5 p-8 backdrop-blur-lg">

          <div className="flex flex-col items-center text-center">

            <FileText
              size={56}
              className="text-cyan-400"
            />

            <h2 className="mt-5 text-3xl font-bold text-white">
              Resume
            </h2>

            <p className="mt-3 max-w-xl text-gray-400">
              Download my latest resume or preview it directly in your browser.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">

              <a
                href="/resume.pdf"
                target="_blank"
                className="flex items-center gap-2 rounded-xl border border-cyan-500 px-6 py-3 text-cyan-300 transition hover:bg-cyan-500/10"
              >
                <Eye size={20} />
                Preview Resume
              </a>

              <a
                href="/resume.pdf"
                download
                className="flex items-center gap-2 rounded-xl bg-cyan-500 px-6 py-3 font-semibold text-black transition hover:bg-cyan-400"
              >
                <Download size={20} />
                Download Resume
              </a>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}