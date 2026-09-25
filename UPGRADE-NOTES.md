# Portfolio refresh

## Run and deploy
Use Node.js 20.9+ (Node 22 LTS recommended). Run `npm ci`, `npm run lint`, and `npm run build`. Use `npm run dev` for local preview. Replace the source in your existing Git checkout; keep its `.git` folder and `.env.local`. Commit and push to the branch connected to your existing Vercel project. This archive does not deploy or change the live site automatically.

## What changed
- Responsive project-first homepage, local Space Grotesk font, new typography and original CSS project cover treatments.
- Working About section, one consistent contact email, navigation highlighting, mobile menu with Escape support, keyboard focus and reduced-motion support.
- Eight project overview routes, three selected projects, additional-project disclosure, accurate status labels and no placeholder repo links.
- Accessible contact labels, copy email, submission lock, cooldown and honeypot, email fallback when EmailJS is not configured.
- Canonical metadata, sitemap and robots route. Removed duplicate resume panels and third-party GitHub image widgets from the homepage.
- Existing resume and original project/experience content retained. Older unused components and images remain available in source.

## Configuration and content to finalize
- Primary email is `rishav.itengineer@gmail.com`, matching the original contact card. Edit `constants/profile.ts` if desired.
- Reuse your three existing public EmailJS variables from Vercel or local environment (see `.env.example`). No credentials are included in this archive. Match template variables `from_name`, `from_email`, `reply_to`, and `message` and configure the intended recipient in EmailJS.
- Enable EmailJS allowed-origin restrictions and provider-side anti-abuse controls. The browser honeypot/cooldown are basic deterrents, not server-side rate limiting. Delivery has not been tested by sending a real email.
- Replace `public/resume.pdf` if a newer resume is required.
- Add verified repository/demo links, architecture details, screenshots and benchmark evidence to `constants/case-studies.ts` before claiming additional functionality or measurements.
- TrustLens and Orchestrix now have repository-grounded case studies. CLAF is excluded; InsightForge is deferred at the owner’s request.
- Analytics and certification verification links are not configured; no tracking credentials or credential URLs were supplied.

## Validation
- Next.js 16.2.12 production build passed with the default Turbopack builder.
- ESLint passed with no errors or warnings.
- Generated HTML checked for valid home-page section anchors, one primary heading, a download link, email fallback, and all eight project routes.
- Bundled resume PDF signature checked.
- Interactive browser/viewport testing could not be completed because the review browser cannot access this local preview. Actual EmailJS delivery and live deployment remain unverified.

## Featured-project update
TrustLens and Orchestrix now lead the selected-work section, followed by Enterprise Backend APIs. Existing projects remain in the expandable section. TrustLens links to its public saved-report demo and repository; Orchestrix links to source only.

Evidence inspected with the GitHub connector:
- TrustLens `README.md` and `docs/VALIDATION.md` on `main`. The live SQLite/Oracle architecture is distinguished from optional PostgreSQL/Docker deployment.
- Orchestrix `pom.xml`, `OrderService.java`, migration/test file listing, and `OrderServiceConcurrencyIntegrationTest.java` on `master`.

The supplied TrustLens HTTPS URL could not be independently opened in this environment. It is linked as provided by the owner and documented in the repository. No project-backend tests or demo mutations were performed.
