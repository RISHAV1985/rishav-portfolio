import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import TechStack from "@/components/TechStack";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Research from "@/components/Research";
import Certifications from "@/components/Certifications";
import Contacts from "@/components/Contacts";
import Background from "@/components/Background";
import ScrollProgress from "@/components/ScrollProgress";
import BackToTop from "@/components/BackToTop";
import Github from "@/components/Github";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <>
  <ScrollProgress />
  <Background />
  <Navbar />
  <Hero />
  <About />
  <TechStack />
  <Projects />
  <Experience />
  <Research />
  <Certifications />
  <Github />
  <Contacts />
  <BackToTop />
  <Footer />
</>
  );
}