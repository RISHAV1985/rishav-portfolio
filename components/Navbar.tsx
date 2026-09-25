"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
const links = [["projects","Work"],["experience","Experience"],["about","About"],["contact","Contact"]];
export default function Navbar(){const [open,setOpen]=useState(false);const [active,setActive]=useState("");const toggle=useRef<HTMLButtonElement>(null);
 useEffect(()=>{const observer=new IntersectionObserver(entries=>{for(const entry of entries)if(entry.isIntersecting)setActive(entry.target.id)},{rootMargin:"-15% 0px -55% 0px"});links.forEach(([id])=>{const e=document.getElementById(id);if(e)observer.observe(e)});return()=>observer.disconnect()},[]);
 useEffect(()=>{function key(e:KeyboardEvent){if(e.key==="Escape"){setOpen(false);toggle.current?.focus()}}if(open)document.addEventListener("keydown",key);return()=>document.removeEventListener("keydown",key)},[open]);
 return <header className="site-header"><nav className="shell nav" aria-label="Main navigation"><Link href="/#home" className="brand" aria-label="Rishav Yadav home">ry<span>.</span></Link><button className="menu-toggle" ref={toggle} aria-expanded={open} aria-controls="nav-links" aria-label={open?"Close navigation":"Open navigation"} onClick={()=>setOpen(!open)}>{open?<X/>:<Menu/>}</button><div id="nav-links" className={`nav-links ${open?"is-open":""}`}>{links.map(([id,name])=><a key={id} href={`/#${id}`} aria-current={active===id?"location":undefined} onClick={()=>setOpen(false)}>{name}</a>)}<a className="nav-resume" href="/resume.pdf" target="_blank" rel="noopener noreferrer" onClick={()=>setOpen(false)}>Resume <ArrowUpRight size={15}/></a></div></nav></header>}
