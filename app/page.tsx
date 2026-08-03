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
import FadeIn from "@/components/animations/FadeIn";
export default function Home() {
  return (
    <>
  <ScrollProgress />
  <Background />
  <Navbar />
<FadeIn>
  <Hero />
</FadeIn> 
<FadeIn delay={0.1}>
  <About />
</FadeIn>
  <FadeIn delay={0.2}>
  <TechStack />
</FadeIn>
  <FadeIn delay={0.3}>
  <Projects />
</FadeIn>
  <FadeIn delay={0.4}>
  <Experience />
</FadeIn>
  <FadeIn delay={0.5}>
  <Research />
</FadeIn>
  <FadeIn delay={0.6}>
  <Certifications />
</FadeIn>
  <FadeIn delay={0.7}>
  <Github />
</FadeIn>
  <FadeIn delay={0.8}>
  <Contacts />
</FadeIn>
  <BackToTop />
  <FadeIn delay={0.9}>
  <Footer />
</FadeIn>
</>
  );
}