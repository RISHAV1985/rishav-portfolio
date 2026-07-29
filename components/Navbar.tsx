export default function Navbar() {
  return (
    <nav className="fixed w-full top-0 z-50 bg-[#050816]/70 backdrop-blur-lg border-b border-white/10">

      <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-5">

        <h1 className="text-3xl font-black text-cyan-400">
          Rishav
        </h1>

        <div className="hidden md:flex gap-10 text-gray-300">

          <a href="#about" className="hover:text-cyan-400">
            About
          </a>

          <a href="#experience" className="hover:text-cyan-400">
            Experience
          </a>

          <a href="#projects" className="hover:text-cyan-400">
            Projects
          </a>

          <a href="#contact" className="hover:text-cyan-400">
            Contact
          </a>

        </div>

      </div>

    </nav>
  );
}