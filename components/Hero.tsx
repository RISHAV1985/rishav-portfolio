import Image from "next/image";
import { ArrowUpRight, ArrowDown } from "lucide-react";
import { FaGithub as Github, FaLinkedin as Linkedin } from "react-icons/fa";
import { profile } from "@/constants/profile";
export default function Hero(){return <section id="home" className="hero shell">
 <div className="hero-copy"><span className="availability"><i/> Open to opportunities</span>
 <p className="eyebrow hero-intro">SOFTWARE ENGINEER · TCS · INDIA</p>
 <h1>Rishav Yadav<span>Backend systems.<br/><em>Intelligent applications.</em></span></h1>
 <p className="hero-description">I build Java and Spring Boot services for enterprise applications, and explore what’s possible with Python and AI.</p>
 <div className="actions"><a className="btn primary" href="#projects">Explore my work <ArrowDown size={17}/></a><a className="btn" href="/resume.pdf" target="_blank" rel="noopener noreferrer">View resume <ArrowUpRight size={17}/></a><a className="text-link" href="/resume.pdf" download="Rishav-Yadav-Resume.pdf">Download PDF ↓</a></div>
 <div className="socials"><a href={profile.github} target="_blank" rel="noopener noreferrer"><Github size={17}/> GitHub</a><a href={profile.linkedin} target="_blank" rel="noopener noreferrer"><Linkedin size={17}/> LinkedIn</a></div></div>
 <div className="portrait-wrap"><div className="portrait"><Image src="/images/profile.jpeg" alt="Rishav Yadav beside a mountain lake" fill priority sizes="(max-width: 760px) 85vw, 400px"/></div><div className="portrait-caption"><span>ENGINEERING WITH INTENT</span><p>From a useful idea<br/>to a working system.</p></div></div>
 <div className="metrics">{[["3+","years in engineering"],["100+","REST APIs developed"],["50+","SQL queries optimized"],["~35%","database performance improvement"]].map(([n,l])=><div key={n}><strong>{n}</strong><span>{l}</span></div>)}</div>
 </section>}
