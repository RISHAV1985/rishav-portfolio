import type { MetadataRoute } from "next";
import { caseStudies } from "@/constants/case-studies";
import { profile } from "@/constants/profile";
export default function sitemap():MetadataRoute.Sitemap{return [{url:profile.url},...caseStudies.map(p=>({url:`${profile.url}/projects/${p.slug}`}))]}
