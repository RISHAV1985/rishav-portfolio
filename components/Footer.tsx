import Link from "next/link";
import { profile } from "@/constants/profile";
export default function Footer(){return <footer className="shell footer"><Link className="brand" href="/#home">ry<span>.</span></Link><p>© {new Date().getFullYear()} Rishav Yadav</p><a href={profile.github} target="_blank" rel="noopener noreferrer">Built with curiosity. And Next.js. ↗</a></footer>}
