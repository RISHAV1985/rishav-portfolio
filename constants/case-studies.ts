import { projects, type Project } from "./projects";
export type CaseStudy = Project & {
  slug: string; category: string; status: string; focus: string; scope: string; note: string;
  sections?: { title: string; body: string }[];
};
const details: Record<number,{slug:string;category:string;status:string;focus:string;scope:string;note:string}>={
 5:{slug:"enterprise-backend",category:"BACKEND ENGINEERING",status:"Professional work",focus:"Enterprise REST APIs",scope:"Developed REST APIs with Java and Spring Boot and optimized SQL queries in an enterprise environment at TCS.",note:"This is a high-level work summary. Employer source code and internal system details are not shared publicly."},
 2:{slug:"mask-recognition",category:"COMPUTER VISION",status:"Personal project",focus:"Real-time mask recognition",scope:"Built a face-mask recognition application using Python, OpenCV, TensorFlow, and Keras.",note:"A public repository and live demonstration are not currently linked. No benchmark or deployment claims are made here."},
 3:{slug:"developer-portfolio",category:"WEB DEVELOPMENT",status:"Live website",focus:"A home for my engineering work",scope:"Designed and developed this portfolio with Next.js, TypeScript, and Tailwind CSS, including responsive navigation, project pages, and resume access.",note:"The website itself is the live demonstration. The source repository is linked below."},
 1:{slug:"fingerprint-voting",category:"MACHINE LEARNING",status:"Academic project",focus:"Fingerprint-based voter verification",scope:"Developed a biometric voting project using Python, KNN, OpenCV, and SQLite to explore fingerprint authentication.",note:"This is an academic project, not a claim of certification or readiness for use in public elections."},
 4:{slug:"smart-agriculture",category:"RESEARCH",status:"Published · 2024",focus:"Technology for sustainable agriculture",scope:"Published a book chapter exploring AI, IoT, and robotics in sustainable agriculture, including irrigation and crop monitoring.",note:"Read the publisher’s chapter for the research context and supporting references."},
 6:{slug:"resume-analyzer",category:"AI APPLICATION",status:"In development",focus:"Connecting skills to opportunities",scope:"An in-development application intended to extract resume skills, compare them with job descriptions, and offer recommendations using NLP.",note:"This project is still in development. A public demo and evaluation results are not available."},
};
const existingStudies: CaseStudy[] = [5,2,3,1,4,6].map(id=>({...projects.find(p=>p.id===id)!,...details[id],featured:id===5}));

const newStudies: CaseStudy[] = [
  {
    "id": 7,
    "title": "TrustLens",
    "subtitle": "Explainable ML workspace",
    "description": "An end-to-end workspace for tabular machine learning: validate CSV data, compare classification or regression models, inspect explanations, and serve predictions through an authenticated API.",
    "image": "",
    "techStack": [
      "Python",
      "FastAPI",
      "Scikit-learn",
      "SHAP",
      "React",
      "TypeScript",
      "SQLite",
      "SQLAlchemy",
      "Alembic"
    ],
    "github": "https://github.com/RISHAV1985/TrustLens",
    "demo": "https://trustlens.duckdns.org/",
    "featured": true,
    "slug": "trustlens",
    "category": "EXPLAINABLE AI",
    "status": "Live report demo",
    "focus": "From tabular data to inspectable predictions.",
    "scope": "Built a Python/FastAPI backend and React dashboard for model comparison, SHAP explanations, experiment tracking, and authenticated predictions.",
    "note": "The public demo opens a saved report generated from synthetic data. New training and prediction require a private owner token.",
    "sections": [
      {
        "title": "The problem",
        "body": "A prediction alone does not explain how a model was selected, which inputs influenced its output, or whether incoming data has changed. TrustLens brings those questions into one inspectable workflow."
      },
      {
        "title": "Modeling and evaluation",
        "body": "CSV validation, data quality profiles, and SHA-256 fingerprints precede training. Classification and regression each use three fixed candidate models, pipeline-based preprocessing, three-fold cross-validation for selection, and an 80/20 holdout. Baselines and bootstrap intervals provide evaluation context."
      },
      {
        "title": "Explanations and diagnostics",
        "body": "Permutation importance offers a model-level view, while local SHAP explanations inspect individual predictions. The workspace also includes descriptive binary group metrics and on-demand input drift screening. These diagnostics do not establish causality or certify fairness."
      },
      {
        "title": "Application architecture",
        "body": "The React/TypeScript dashboard connects to FastAPI. SQLAlchemy and Alembic manage persistent experiment data; the backend also supports idempotent training submissions, model activation, and audit events. The documented live deployment uses SQLite, one Uvicorn process and a training thread on an Oracle Cloud Ubuntu VM, behind Nginx with systemd and HTTPS."
      },
      {
        "title": "Validation and boundaries",
        "body": "The repository records nine historical backend tests covering training, explanations, idempotency, authentication, prediction, activation, and diagnostics. This is a single-owner, bounded-data application. Multi-user access control, distributed workers, automated retraining, and production throughput guarantees are outside its current scope."
      }
    ]
  },
  {
    "id": 8,
    "title": "Orchestrix Order Service",
    "subtitle": "Transactional order API with idempotency",
    "description": "A Java order service focused on handling retried requests, maintaining order data transactionally, and enforcing valid order-state transitions.",
    "image": "",
    "techStack": [
      "Java 21",
      "Spring Boot",
      "PostgreSQL",
      "Spring Data JPA",
      "Flyway",
      "JUnit"
    ],
    "github": "https://github.com/RISHAV1985/orchestrix-order-service",
    "demo": "",
    "featured": true,
    "slug": "orchestrix-order-service",
    "category": "BACKEND SYSTEMS",
    "status": "Source available · In development",
    "focus": "One order, even when requests are retried.",
    "scope": "Built a Spring Boot order API with database-backed idempotency, request hashing, transactional persistence, and explicit status-transition rules.",
    "note": "Explore the source repository. No public deployment is linked; payment and inventory integrations are not presented as completed features.",
    "sections": [
      {
        "title": "The problem",
        "body": "Clients retry when a response is delayed or lost. Without an idempotency mechanism, an order-creation retry can create duplicate business records. Orchestrix focuses on detecting repeated requests and conflicting reuse of a key."
      },
      {
        "title": "Request handling",
        "body": "The service hashes the customer, normalized currency, and ordered item details with SHA-256, then attempts to reserve an idempotency key. A matching completed request returns the associated order; a changed payload raises a conflict. A reserved key without a linked order produces an in-progress error."
      },
      {
        "title": "Transactions and order lifecycle",
        "body": "Spring transactions wrap key reservation, order creation, and the link between them. BigDecimal calculates item totals. Explicit transition rules constrain order states, and listing supports customer/status filters with pagination. Flyway migrations manage the PostgreSQL schema and indexes."
      },
      {
        "title": "Verification in the repository",
        "body": "The source includes idempotency tests and a concurrency integration test that releases two requests with the same key together, then checks the database for one order and one idempotency record. These tests were inspected for this case study, not re-executed as part of the portfolio update."
      },
      {
        "title": "Current scope",
        "body": "The repository demonstrates the order-service core. Status names such as PAID and INVENTORY_UNAVAILABLE represent lifecycle states; they are not evidence of a connected payment provider or inventory-reservation service. No load-test or production availability claims are made."
      }
    ]
  }
];

export const caseStudies: CaseStudy[] = [...newStudies, ...existingStudies];
