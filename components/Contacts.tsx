"use client";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import {
  Mail,
  MapPin,
  Download,
  Briefcase,
} from "lucide-react";
import {
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
export default function Contact() {
  const [form, setForm] = useState({
  name: "",
  email: "",
  message: "",
});

const [loading, setLoading] = useState(false);
const [status, setStatus] = useState("");

const handleChange = (
  e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
) => {
  setForm({
    ...form,
    [e.target.name]: e.target.value,
  });
};

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  setLoading(true);
  setStatus("");
console.log(process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID);
console.log(process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID);
console.log(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY);
  try {
    await emailjs.send(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
      {
        from_name: form.name,
        from_email: form.email,
        message: form.message,
      },
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
    );

    setStatus("success");

    setForm({
      name: "",
      email: "",
      message: "",
    });
  } catch (err) {
    console.error(err);
    setStatus("error");
  }

  setLoading(false);
};
  return (
    <section
      id="contact"
      className="bg-[#050816] py-24 text-white"
    >
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-5xl font-bold">
            Let's <span className="text-cyan-400">Connect</span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-gray-400 leading-8">
            I'm currently open to Backend Engineering, AI/ML and Data Science
            opportunities. If you're looking for someone who enjoys solving
            challenging engineering problems, I'd love to connect.
          </p>

          <div className="mt-6 inline-flex items-center rounded-full border border-green-500/30 bg-green-500/10 px-5 py-2 text-green-400">
            <Briefcase size={18} className="mr-2" />
            Open to Work
          </div>
        </motion.div>

        {/* Contact Cards */}
        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

          <a
            href="mailto:rishav.itengineer@gmail.com"
            className="rounded-2xl border border-cyan-500/20 bg-white/5 p-6 text-center transition hover:border-cyan-400 hover:-translate-y-2"
          >
            <Mail className="mx-auto text-cyan-400" size={34} />
            <h3 className="mt-4 text-xl font-semibold">Email</h3>
            <p className="mt-2 text-sm text-gray-400 break-all">
              rishav.itengineer@gmail.com
            </p>
          </a>

          <a
            href="https://www.linkedin.com/in/rishavyadav-itengineer/"
            target="_blank"
            className="rounded-2xl border border-cyan-500/20 bg-white/5 p-6 text-center transition hover:border-cyan-400 hover:-translate-y-2"
          >
            <FaLinkedin className="mx-auto text-cyan-400" size={34} />
            <h3 className="mt-4 text-xl font-semibold">LinkedIn</h3>
            <p className="mt-2 text-sm text-gray-400">
              Connect with me
            </p>
          </a>

          <a
            href="https://github.com/RISHAV1985"
            target="_blank"
            className="rounded-2xl border border-cyan-500/20 bg-white/5 p-6 text-center transition hover:border-cyan-400 hover:-translate-y-2"
          >
            <FaGithub className="mx-auto text-cyan-400" size={34} />
            <h3 className="mt-4 text-xl font-semibold">GitHub</h3>
            <p className="mt-2 text-sm text-gray-400">
              View my repositories
            </p>
          </a>

          <div className="rounded-2xl border border-cyan-500/20 bg-white/5 p-6 text-center">
            <MapPin className="mx-auto text-cyan-400" size={34} />
            <h3 className="mt-4 text-xl font-semibold">Location</h3>
            <p className="mt-2 text-sm text-gray-400">
              India
            </p>
          </div>

        </div>
<div className="mx-auto mt-20 max-w-3xl rounded-2xl border border-cyan-500/20 bg-white/5 p-8">

  <h3 className="mb-8 text-center text-3xl font-bold">
    Send Me a Message
  </h3>

  <form
    onSubmit={handleSubmit}
    className="space-y-6"
  >
    <input
      type="text"
      name="name"
      placeholder="Your Name"
      value={form.name}
      onChange={handleChange}
      required
      className="w-full rounded-xl border border-white/10 bg-[#0b1020] px-5 py-4 outline-none focus:border-cyan-400"
    />

    <input
      type="email"
      name="email"
      placeholder="Your Email"
      value={form.email}
      onChange={handleChange}
      required
      className="w-full rounded-xl border border-white/10 bg-[#0b1020] px-5 py-4 outline-none focus:border-cyan-400"
    />

    <textarea
      name="message"
      rows={6}
      placeholder="Your Message"
      value={form.message}
      onChange={handleChange}
      required
      className="w-full rounded-xl border border-white/10 bg-[#0b1020] px-5 py-4 outline-none focus:border-cyan-400"
    />

    <button
      type="submit"
      disabled={loading}
      className="w-full rounded-xl bg-cyan-500 py-4 font-bold text-black transition hover:bg-cyan-400 disabled:opacity-60"
    >
      {loading ? "Sending..." : "Send Message"}
    </button>

    {status === "success" && (
      <p className="text-center text-green-400">
        ✅ Your message has been sent successfully!
      </p>
    )}

    {status === "error" && (
      <p className="text-center text-red-400">
        ❌ Something went wrong. Please try again.
      </p>
    )}
  </form>

</div>
        {/* CTA Buttons */}
        <div className="mt-16 flex flex-wrap justify-center gap-6">

          <a
            href="/resume.pdf"
            download
            className="flex items-center gap-2 rounded-xl bg-cyan-500 px-8 py-4 font-semibold text-black transition hover:bg-cyan-400"
          >
            <Download size={20} />
            Download Resume
          </a>

          <a
            href="mailto:rishavyadav1985@gmail.com"
            className="rounded-xl border border-cyan-500 px-8 py-4 font-semibold text-cyan-300 transition hover:bg-cyan-500/10"
          >
            Hire Me
          </a>

        </div>

      </div>
    </section>
  );
}