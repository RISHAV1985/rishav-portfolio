const experiences = [
  {
    company: "Tata Consultancy Services",
    role: "System Engineer",
    duration: "Jul 2023 - Present",
    achievements: [
      "Developed 100+ enterprise REST APIs using Java and Spring Boot.",
      "Optimized 50+ SQL queries, improving database performance by ~35%.",
      "Worked with MySQL, Git, Postman and Agile methodologies.",
      "Collaborated with cross-functional teams to deliver scalable backend solutions."
    ],
    technologies: [
      "Java",
      "Spring Boot",
      "REST APIs",
      "MySQL",
      "Git",
      "Postman"
    ]
  },
  {
    company: "Argusoft",
    role: "Programmer Analyst Intern",
    duration: "Jan 2023 - Jun 2023",
    achievements: [
      "Worked on backend application development.",
      "Implemented RESTful services and database operations.",
      "Participated in debugging and performance improvements."
    ],
    technologies: [
      "Java",
      "Spring Boot",
      "SQL"
    ]
  },
  {
    company: "RecruitNXT",
    role: "Python Developer Intern",
    duration: "2022",
    achievements: [
      "Built Python-based automation utilities.",
      "Worked on backend scripts and data processing."
    ],
    technologies: [
      "Python",
      "Automation"
    ]
  },
  {
    company: "AICTE NEAT",
    role: "Data Analyst Intern",
    duration: "2022",
    achievements: [
      "Performed data analysis and visualization.",
      "Worked on data preprocessing and reporting."
    ],
    technologies: [
      "Python",
      "Pandas",
      "Excel"
    ]
  }
];

export default function Experience(){return <section id="experience" className="section shell"><div className="section-heading"><div><p className="eyebrow">02 / EXPERIENCE</p><h2>Real teams.<br/><span>Meaningful contributions.</span></h2></div><p>From internships to enterprise software engineering.</p></div><div className="timeline">{experiences.map((e,i)=><article key={e.company}><div className="timeline-meta"><span className="status">{e.duration}</span><h3>{e.company}</h3><p>{e.role}</p></div><div><ul>{e.achievements.map(a=><li key={a}>{a}</li>)}</ul><div className="tags">{e.technologies.map(t=><span key={t}>{t}</span>)}</div>{i===0&&<span className="experience-note">Professional experience · Tata Consultancy Services</span>}</div></article>)}</div></section>}
