# BRAIN.md — Taank360 Website (Project Memory)

> Single source of truth for this project. Keep it in the repo root.
> **Paste this file at the start of every new AI Studio session / chat** so the AI never loses context.
> Source: Taank360 PRD v1.0 (development-ready). Where this file and the PRD disagree, the PRD wins.

---

## 0. How to use this file

1. Start every AI session with: *"Read BRAIN.md fully. Follow it strictly. Then do the task below."*
2. After each phase is done and tested, update **Section 17 (Progress Tracker)** and commit.
3. If a decision changes (colors, contact details, routes), update this file first, then the code.
4. Never let the AI add anything listed under **Out of Scope (Section 4)** or break the **Content Integrity Rules (Section 3)**.

---

## 1. Project in one paragraph

A premium, responsive, SEO-friendly **static** company portfolio website for **Taank360 Marketing and Tech Solution**. It presents the company's marketing, development, business-tool and startup-support services, shows verified portfolio work and YouTube video testimonials, explains dealership/referral partnerships, collects enquiries through client-side email/WhatsApp actions, and includes a lightweight **local** content editor (browser drafts + JSON import/export). **No backend, no server, no database.**

## 2. Company & brand facts (use exactly; do not embellish)

| Item | Value |
|---|---|
| Company | Taank360 Marketing and Tech Solution |
| Brand | Taank360 |
| Founder & CEO | Sunil Gour |
| Primary slogan | Let's Make Your Brand Famous |
| Development slogan | Let's Build Your Brand |
| Startup slogan | Let's Build Your Startup |
| Supporting line | 360° Marketing, Technology & Startup Solutions to Help Your Business Build, Grow and Scale. |
| Qualification | B.Tech in Computer Science and Engineering, SAGE University Bhopal |
| Experience | 2+ years of business experience |
| Recognition | SAGE Best Entrepreneur Award recipient |
| Startup domains | Marketing, EdTech, software solutions, agriculture, carbon-based businesses, event management |

**Three pillars:** Marketing · Development · Startup Program

**Founder vision (write as ASPIRATION only):** build an Indian technology company with global-scale capabilities, supporting Aatmanirbhar Bharat, Indian talent, entrepreneurship and technology-led development across sectors. Never claim Taank360 currently matches established global companies.

**Key copy (Appendix A of PRD)**

| Use | Copy |
|---|---|
| Primary headline | Let's Make Your Brand Famous. |
| Development pillar | Let's Build Your Brand. |
| Startup pillar | Let's Build Your Startup. |
| Final CTA heading | Ready to Build, Grow or Scale Your Business? |
| Primary CTA | Start a Project |
| Secondary CTA | Explore Services |

**Tone:** concise, professional, easy for Indian business owners and startup founders to understand.

---

## 3. CONTENT INTEGRITY RULES (non-negotiable)

- Never fabricate clients, partner logos, testimonials, certifications, revenue, success rates, statistics, ratings, reviews, awards, addresses, or FAQ claims.
- Do not invent pricing, dealership fees, or guaranteed earnings.
- Referral commission: describe the **5%–10%** as *dependent on service, client and agreed terms*.
- Startup flexible payment: describe as **mutually agreed project installments — NOT a loan**, no guarantees.
- Women Entrepreneur Support: describe support, consultancy, webinars, seminars. **Do not invent discounts.**
- If real content is missing: **hide the section** or use a clearly editable neutral placeholder.
- Portfolio, testimonials, partners, offers ship as **empty arrays** until real data exists.
- Never guarantee leads, revenue, business growth or partnership income.
- Structured data (JSON-LD) only when backed by accurate business info.

## 4. Scope

**In scope**
- Responsive static website with all public pages
- Centralized, data-driven, typed content
- Local browser-based content editor (localStorage drafts)
- JSON import/export + restore defaults
- Portfolio and partner logo displays
- YouTube testimonial embeds (lazy, thumbnail-first)
- Client-side form validation + WhatsApp/mailto actions
- SEO metadata, sitemap.xml, robots.txt, accessibility, performance
- GitHub + Hostinger static deployment support

**Out of scope (never build)**
- Backend, server-side processing, databases, API endpoints
- Server-backed CMS or multi-user admin
- Secure authentication / roles / user accounts
- Server-side storage of leads or applications
- Payment gateway, installment collection, financing, customer accounts
- Automatic live publishing from the browser editor
- Unverified testimonials, logos, statistics, awards or claims
- Guaranteed leads/revenue/income

---

## 5. Target audiences → destinations

| Audience | Need | Pages |
|---|---|---|
| Businesses and brands | Marketing, leads, digital presence, growth | Home, Services, Contact |
| Businesses needing technology | Websites, apps, CRM, software | Development, Business Tools |
| Early-stage startups | Affordable dev, marketing, consultancy | Startup Program |
| Women entrepreneurs | Support, consultancy, webinars, seminars | Women Entrepreneur Support |
| Clients checking credibility | Client work and testimonials | Portfolio |
| Potential channel partners | Dealership/referral info | Partnership |

---

## 6. Tech stack & decisions

| Layer | Decision |
|---|---|
| Frontend | React + TypeScript + Vite |
| Styling | Tailwind CSS if already in the project; else lightweight CSS with CSS variables |
| Routing | `react-router-dom` (BrowserRouter) + Apache `.htaccess` fallback for Hostinger |
| Content | One centralized typed object (`src/data/content.ts`, `types.ts`), read via `useContent()` |
| Local drafts | Browser `localStorage` |
| Content transfer | Validated JSON import/export |
| Media | Static assets; YouTube embeds for testimonials |
| Animation | CSS only (no framer-motion/GSAP) |
| Icons | Inline SVG or lucide-react only |
| Dev environment | Google AI Studio (Build mode) |
| Source control | GitHub |
| Hosting | Hostinger static hosting |
| Backend / DB | **None** |

**Dependency rule:** keep dependencies minimal. Add a package only if it clearly pays for itself.

### Folder structure (lean — add folders only for clarity)
```
src/
  components/   Header, Footer, Layout, PageBanner, Section, Button, Card, Seo, Reveal, ScrollToTop
  pages/        one file per route
  data/         content.ts, types.ts
  admin/        local content editor (Phase 4)
  hooks/        useContent.ts, useReveal.ts
  assets/
  styles/       globals.css
  App.tsx
  main.tsx
public/
  .htaccess     SPA fallback rewrite
  robots.txt
  sitemap.xml   (Phase 5)
  favicon
```
Do NOT create backend folders, API routes, database models, or unused abstractions.

---

## 7. Sitemap & navigation

| Page | Path | Purpose |
|---|---|---|
| Home | `/` | Positioning, pillars, services, startup program, portfolio, testimonials, partners, founder, final CTA |
| About Us | `/about` | Company story, mission, vision, founder profile |
| Services | `/services` | Overview of marketing, development, business tools |
| Digital Marketing | `/services/digital-marketing` | Marketing service details |
| Development Solutions | `/services/development` | Web, app, CRM, software, automation |
| Business & Marketing Tools | `/services/business-tools` | IVR, WhatsApp API, CRM, data extractor, related tools |
| Startup Program | `/startup-program` | Startup dev, marketing, consultancy, flexible payment concept |
| Women Entrepreneur Support | `/women-entrepreneur-support` | Support, consultancy, webinars, seminars |
| Portfolio | `/portfolio` | Client/project cards + video testimonials |
| Partnership | `/partnership` | Dealership, referral, partner logos, application form |
| Contact | `/contact` | Contact info + enquiry form |
| Privacy Policy | `/privacy-policy` | Editable content |
| Terms & Conditions | `/terms-and-conditions` | Editable content |
| Refund/Cancellation | `/refund-policy` | Editable content |
| Disclaimer | `/disclaimer` | Editable content |
| Admin (hidden) | `/admin` | Local editor — **not linked in public nav/footer** |
| 404 | `*` | Friendly not-found page |

**Main nav:** Home, About, Services, Startup Program, Portfolio, Partnership, Contact. **Primary CTA:** Start a Project (→ `/contact`).
**Footer:** brand + description, quick links, services links, legal links, contact, socials (only ones that exist), current-year copyright.

---

## 8. Functional requirements

| ID | Feature | Requirement | Priority |
|---|---|---|---|
| FR-01 | Global navigation | Responsive nav, mobile menu, active page state, working internal links | Must |
| FR-02 | Page banners | Configurable heading, description, desktop/mobile image, overlay, CTA, visibility | Must |
| FR-03 | Services | Categorized marketing, development, business tools with descriptions + CTAs | Must |
| FR-04 | Startup Program | Services + mutually agreed installment-style payments, no loan implication | Must |
| FR-05 | Women Entrepreneur Support | Support, consultancy, webinars, seminars; no invented discounts | Must |
| FR-06 | Portfolio | Logo, name, description, industry, services, images, optional link | Must |
| FR-07 | Video testimonials | Accept YouTube URL / Shorts URL / embed URL / video ID; 9:16 cards in horizontal carousel | Must |
| FR-08 | Partner marquee | Continuous horizontal CSS marquee, reduced-motion support | Must |
| FR-09 | Partnership programs | Dealership + referral models, requirements, benefits, CTAs | Must |
| FR-10 | Partnership form | Validate fields; email/WhatsApp submission actions | Must |
| FR-11 | Contact | Configurable contact info + client-side enquiry form | Must |
| FR-12 | Local content editor | Edit content locally; preview, export/import JSON, restore defaults | Must |
| FR-13 | SEO | Per-page metadata, canonical, social meta, sitemap, robots, structured data | Must |
| FR-14 | Accessibility | Keyboard nav, focus indicators, alt text, accessible controls, reduced motion | Must |
| FR-15 | Responsive design | Mobile → large screens, no horizontal overflow | Must |
| FR-16 | Featured videos *(owner request)* | YouTube videos (16:9 or 9:16) can be placed on Home, About, Services and Startup pages from the `videos` content group; thumbnail-first, lazy, hidden when empty | Must |

---

## 9. Content model (typed, centralized)

| Group | Key fields |
|---|---|
| `general` | companyName, brandName, slogans, description, logo, favicon, theme |
| `founder` | name, photo, qualification, bio, experience, award, vision |
| `services` | id, name, category, description, features[], image/icon, cta, status, order |
| `tools` | id, name, description, logo/icon, features[], optional price/link, status, order |
| `portfolio` | id, clientName, logo, description, industry, services[], images[], link, status, order |
| `testimonials` | id, youtubeUrlOrId, client, company, designation, text, thumbnail, status, order |
| `partners` | id, name, logo, website, description, status, order |
| `banners` | page, desktopImage, mobileImage, heading, description, cta, overlay, status |
| `offers` | title, description, image, cta, validity, status |
| `contact` | phone, email, whatsapp, address, businessHours |
| `social` | platform, url, label |
| `seo` | route, title, description, canonical, ogTitle, ogDescription, ogImage, indexing |
| `videos` *(owner request, added in Phase 3)* | id, title, youtubeUrlOrId, aspect (`16:9` or `9:16`), placement (`home`/`about`/`services`/`startup`), caption, status, order |

Rules: no page may hardcode content that belongs here. Items support `status` (enabled/disabled) and `order`. Empty groups hide their sections.

---

## 10. Forms (all client-side; no backend)

**Behaviour for ALL forms:** client-side validation with clear, accessible error messages → build a **WhatsApp message or `mailto:`** from configurable contact details. **Never claim the enquiry was stored/sent to a server.** Sanitize/encode values before building links. An external form service may be added later only if explicitly configured.

1. **General contact form:** Name, Email, Phone, Company, Service required, Budget, Timeline, Message
2. **Project enquiry form:** Name, Email, Phone, Company, Project type, Service required, Budget range, Timeline, Message
3. **Partnership form:** Full name, Email, Phone, City, State, Partnership type, Company/current business, Team size, Office availability, Website, Experience, Message, **Consent**
4. **Startup application form:** Founder name, Startup name, Email, Phone, Industry, Startup stage, Website, Services required, Estimated budget, Funding situation, Project requirements, Message

---

## 11. Local content editor (`/admin`)

**Purpose:** local editing + preparing content for redeploy. NOT a secure CMS.

**Editable areas:** general settings (names, logo, favicon, slogans, description, theme colors) · founder · services & tools (create/edit/delete/reorder/enable/disable) · portfolio · testimonials · partners · banners · offers · contact/social · SEO · homepage sections (toggle/reorder where practical).

**Workflow**
1. Load defaults from central content config
2. Save edits as localStorage drafts
3. Preview edited content
4. Export to JSON
5. Validate imported JSON before replacing the draft (reject malformed safely)
6. Reset to default with confirmation
7. Document how to apply exported JSON to the project and redeploy via GitHub → Hostinger

**Hard rules:** never show "saved to server". localStorage is per-browser/per-device and does not publish for visitors. Do not call the local gate "secure authentication". No secrets/passwords/API keys/sensitive personal data in code or localStorage.

---

## 12. Design system

- **Direction:** premium, minimal, modern, technology-focused, entrepreneurial.
- Clear typography, generous whitespace, consistent spacing, subtle borders, reusable cards/buttons.
- **Avoid:** excessive gradients, glassmorphism, random icons, oversized paragraphs, fake stats, unnecessary stock images.
- **Brand colors:** use supplied Taank360 logo/colors; until then configurable CSS variables only:
  `--color-primary, --color-primary-dark, --color-accent, --color-bg, --color-surface, --color-text, --color-muted, --color-border`
  Every color in the UI must come from these variables.
- **Brand colors (sampled from the supplied logo):** primary navy-blue `#003C90` · accent red `#FF3030` · bg `#FFFFFF` · text dark navy/ink (derive from primary, e.g. `#0B1B33`). Logo is a wordmark: "Taank" in blue + "360" in red (Poppins-style bold geometric sans). Logo PNG is transparent (750×750, lots of padding — crop before use).

### Animation (CSS only, restrained)
- Hero entrance + scroll reveals (fire once, no layout shift)
- Fade/slide section transitions
- Card/button hover feedback
- Animated mobile nav
- Smooth anchor scroll where appropriate
- Continuous partner marquee
- Horizontal touch-scroll testimonial carousel
- **Everything must respect `prefers-reduced-motion`**

### Page-specific UX
- **Home:** hero, three pillars, services, startup program, portfolio, testimonials, partners, founder, final CTA
- **Portfolio:** responsive client grid + 9:16 testimonial cards
- **Partnership:** clear dealership vs referral comparison, partner marquee, application form
- **Contact:** clear contact methods + accessible form
- **Admin:** simple navigation, validation, preview, import/export, reset

---

## 13. SEO, performance, accessibility

**SEO:** semantic HTML, one H1 per page with logical H2/H3, unique title + meta description per route, canonical URLs, Open Graph/social meta, `sitemap.xml`, `robots.txt`, descriptive alt text, structured data only if accurate, no fake reviews/ratings/awards/addresses/FAQs.

**Performance:** lazy-load non-critical images, responsive sizes, WebP/AVIF where practical, YouTube iframes only on demand (thumbnail-first), minimal JS/dependencies, CSS for animations and marquee, no unnecessary third-party scripts. Test the real production build; don't promise a perfect Lighthouse score.

**Accessibility:** keyboard-operable nav and carousel controls, visible focus states, adequate contrast, labeled form fields + accessible error messages, meaningful alt text and ARIA labels, skip-to-content link, `<main id="main">` landmark, reduced-motion support.

---

## 14. Security & privacy rules

- Don't describe local frontend access control as secure auth.
- No secrets, API keys, passwords or sensitive personal info in code or localStorage.
- Validate + sanitize form values before building WhatsApp/mailto links.
- Validate imported JSON against the expected structure; reject malformed data.
- Never execute imported content as JS; never render arbitrary HTML (no `dangerouslySetInnerHTML` on user/imported content).
- Parse YouTube URLs safely (extract the video ID, build the embed URL yourself); never insert arbitrary embed code.
- Legal pages stay editable; final policy text must be reviewed against actual business practice.

---

## 15. Deployment (GitHub → Hostinger)

1. Develop/test in Google AI Studio
2. Maintain in GitHub (commit after every phase)
3. `npm run build` and fix all errors
4. Confirm static assets + nested routes work
5. Upload `dist/` output to Hostinger (public_html) via File Manager
6. Ensure `.htaccess` SPA fallback is deployed
7. Verify live site on mobile + desktop, including **refresh on nested routes** (e.g. `/services/development`)

Repo must include a concise **README**: install, local run, build, preview, GitHub, Hostinger deployment, and the editor's export → apply → redeploy workflow.

---

## 16. Acceptance criteria (definition of done)

| ID | Criterion |
|---|---|
| AC-01 | All required public pages exist and are reachable via working navigation |
| AC-02 | Major pages use consistent, configurable banners where specified |
| AC-03 | Service categories and CTAs render correctly from centralized data |
| AC-04 | Startup Program explains flexible payment accurately; no loan/guarantee claims |
| AC-05 | Portfolio cards show only configured client/project content |
| AC-06 | Supported YouTube URLs render valid, lazy-loaded embeds |
| AC-07 | Partner marquee loops smoothly and respects reduced motion |
| AC-08 | Dealership and referral programs are clearly distinguished |
| AC-09 | Forms validate and open configured email/WhatsApp without falsely claiming server storage |
| AC-10 | Editor can edit, preview, export/import JSON, reset defaults |
| AC-11 | Malformed JSON is rejected safely |
| AC-12 | SEO metadata, sitemap, robots.txt, structured data included |
| AC-13 | Works on mobile/tablet/desktop with no horizontal overflow |
| AC-14 | Animations restrained, accessible, respect reduced motion |
| AC-15 | Static production build succeeds with no backend/DB dependencies |
| AC-16 | Hostinger supports direct loading and refresh of configured routes |

## 16.1 Risks & mitigations

| Risk | Mitigation |
|---|---|
| Editor changes not shared across devices | Export JSON, apply to project, redeploy |
| No server-side lead storage | Email/WhatsApp actions; add a form provider later only if configured |
| No secure multi-user admin | Keep editor local; store nothing confidential |
| YouTube embeds hurt performance | Thumbnail-first + lazy loading |
| Route refresh fails on static host | `.htaccess` rewrite rules |
| Missing real client/partner data | Hide empty sections; never fabricate |

---

## 17. Build plan & progress tracker

Build with AI one prompt per phase. Test and commit after each.

| # | Phase | Deliverables | Status |
|---|---|---|---|
| 1 | Foundation | Setup, design tokens, typed content, routing (all routes as stubs), header/footer, shared components (PageBanner, Section, Button, Card, Seo, Reveal), `.htaccess` | ☑ Done and tested |
| 2 | Core pages | Home, About, Services (+3 sub-pages), Startup Program, Women Entrepreneur Support, Contact | ☑ Done and tested |
| 3 | Portfolio & Partnership | Portfolio grid, YouTube 9:16 carousel, partner marquee, partnership models + form, startup application form | ☑ Done and tested |
| 4 | Content editor | `/admin`, drafts, preview, JSON import/export, reset | ☑ Done and tested |
| 5 | SEO & accessibility | Per-route metadata, sitemap, robots, structured data, keyboard + reduced-motion audit | ☑ Implemented and build-tested; manual Lighthouse/axe and domain checks remain |
| 6 | QA & deployment | Responsive testing, build verification, route refresh test, README, GitHub, Hostinger | ☐ |

Legend: ☐ not done · ◐ in progress · ☑ done and committed

### Decisions made for Phase 3 (Portfolio, videos, partnership)
- All video uses ONE `YouTubeFacade` component: thumbnail first, iframe (youtube-nocookie.com) only after click, only one video plays at a time, safe URL parsing in `src/lib/youtube.ts`. Self-hosted video files are not used (keeps hosting light).
- Testimonial carousel is CSS scroll-snap (9:16 cards) with prev/next buttons. Partner marquee is pure CSS and stops for reduced motion.
- Partnership page compares Dealership vs Referral. Referral commission wording: "5%–10%, depending on service, client and agreed terms". No dealership fees or earnings are shown anywhere.
- Startup application form lives on `/startup-program` (`#apply`). Partnership form lives on `/partnership` (`#apply`). Both use `src/lib/forms.ts` (WhatsApp/mailto only).
- A DEV-only sample preview (`?preview=sample`) exists to test components while real data is empty. It is stripped from production builds and must never ship fake data.

### Decisions already made (Phase 1 prompt)
- Router: `react-router-dom` with BrowserRouter; `/admin` is a hidden route.
- Extra folder: `src/hooks/`.
- Contact values: Phase 1 used placeholders; Phase 2 replaces them with the real phone, WhatsApp, email and address from Section 18. Business hours and socials stay empty (hidden) until supplied.
- Services/tools ship with a few neutral editable placeholder items per category; portfolio/testimonials/partners/offers are empty.
- Colors are CSS-variable placeholders (deep navy/ink + one warm accent).

---

## 18. Assets & info the owner must supply

**Received so far (real data — use these)**
- Phone: `+91 89660 68380` (tel: `+918966068380`)
- WhatsApp: `918966068380` (assumed same as phone — **owner to confirm**)
- Email: `thetaank360@gmail.com`
- Address: Sage Suncity Phase 1, near SAGE University, Bhopal (Madhya Pradesh). No PIN code given — don't invent one.
- Logo: Taank360 wordmark PNG (transparent) · Brand colors: `#003C90` blue, `#FF3030` red
- Social profiles: being created — links coming. Until supplied, social icons are hidden.

**Still pending**
- [ ] Favicon (make from logo, e.g. realfavicongenerator.net → `public/favicon.png`)
- [ ] SVG version of logo (optional, nicer for sharp scaling)
- [ ] Sunil Gour's photo
- [ ] Business hours
- [ ] Confirm WhatsApp number
- [ ] Social links (LinkedIn, Instagram, YouTube, Facebook, X — whichever exist)
- [ ] Real client/project data + logos (with permission)
- [ ] Real partner logos (with permission)
- [ ] Real YouTube testimonial links + client names/designations
- [ ] Final service descriptions and tool lists
- [ ] Dealership requirements/benefits and referral terms (no invented fees)
- [ ] Startup Program details and installment wording
- [ ] Women Entrepreneur Support details (webinars/seminars)
- [ ] Legal page text (Privacy, Terms, Refund, Disclaimer) reviewed for actual practice
- [ ] Production domain (for canonical URLs and sitemap)

---

## 19. Master rules for any AI working on this repo

1. Read this file first, every session.
2. Frontend only. No backend, API, DB, or server code.
3. All content lives in the typed content object; pages render from it.
4. Hide empty sections; never invent facts, clients, numbers or prices.
5. Every color comes from CSS variables.
6. CSS-only animation; honor `prefers-reduced-motion`.
7. Accessible by default: semantic HTML, one H1, labels, focus states, alt text.
8. Validate all user input and imported JSON; never render arbitrary HTML.
9. Keep dependencies and abstractions minimal.
10. `npm run build` must pass before a phase is considered done.
11. Do only the current phase's scope; don't jump ahead.
12. At the end of each task, list the files changed and anything left undone.