export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-8 mt-24">
      <div className="max-w-7xl mx-auto px-8 text-center">
        <h3 className="text-2xl font-bold text-cyan-400">
          Rishav Yadav
        </h3>

        <p className="text-gray-400 mt-3">
          Backend Engineer • AI & Machine Learning • Java • Spring Boot • Python
        </p>

        <p className="text-gray-500 text-sm mt-6">
          © {new Date().getFullYear()} Rishav Yadav. Built with Next.js, Tailwind CSS & Framer Motion.
        </p>
      </div>
    </footer>
  );
}