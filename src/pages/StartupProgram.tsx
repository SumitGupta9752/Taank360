import { useContent } from '../hooks/useContent'
import { PageBanner } from '../components/PageBanner'
import { Reveal } from '../components/Reveal'
import { Section } from '../components/Section'
import { Seo } from '../components/Seo'
import { StatsBar } from '../components/StatsBar'
import { FeatureCard } from '../components/FeatureCard'
import { ProcessSteps } from '../components/ProcessSteps'
import { StartupApplicationForm } from '../components/StartupApplicationForm'
import { CtaBanner } from '../components/CtaBanner'
import { FaqAccordion } from '../components/FaqAccordion'
import { Check, Award } from 'lucide-react'

export function StartupProgram() {
  const content = useContent()
  const banner = content.banners.find((item) => item.page === 'startup-program')

  return (
    <>
      <Seo entry={content.seo.find((item) => item.route === '/startup-program')} />

      {/* Hero Banner with Cinematic Graphic and CTAs */}
      <PageBanner
        banner={banner}
        badge="Taank360 Incubation & Tech"
        secondaryCtaText="Know More"
        secondaryCtaLink="#what-we-offer"
      />

      {/* Stats Counter Ribbon matching mockup */}
      <StatsBar stats={content.stats} placement="startup" />

      {/* What We Offer - 6 Grid Cards */}
      <section id="what-we-offer">
        <Reveal>
          <Section
            title="What We Offer"
            description="Complete support for early-stage startups at every phase of their journey."
          >
            <div className="card-grid card-grid--three">
              <FeatureCard
                title="Idea Validation"
                description="Market research, competitor analysis and feasibility study to validate product-market fit."
                icon="lightbulb"
                tint="orange"
              />
              <FeatureCard
                title="Product Development"
                description="Web, app, MVP and custom software solutions built with scalable architecture."
                icon="code"
                tint="blue"
              />
              <FeatureCard
                title="Marketing & Branding"
                description="Go-to-market strategy, social media campaigns, brand identity and digital presence."
                icon="megaphone"
                tint="pink"
              />
              <FeatureCard
                title="Business Consultancy"
                description="Business model design, unit economics, revenue strategy and pitch presentation preparation."
                icon="briefcase"
                tint="green"
              />
              <FeatureCard
                title="Funding Guidance"
                description="Investor deck readiness, pitch support and grant opportunity navigation."
                icon="trending-up"
                tint="blue"
              />
              <FeatureCard
                title="Ongoing Support"
                description="Mentorship, ecosystem networking, infrastructure support and continuous growth advice."
                icon="users"
                tint="purple"
              />
            </div>
          </Section>
        </Reveal>
      </section>

      {/* Who Can Apply? Showcase Block */}
      <Reveal>
        <Section title="Who Can Apply?" description="Open to ambitious visionaries ready to build real-world solutions.">
          <div className="who-can-apply-band">
            <div className="who-can-apply-content">
              <h3>Empowering Founders Across India</h3>
              <p>We believe in talent and execution. If you have the passion, Taank360 provides the technology and marketing backbone.</p>

              <ul className="eligibility-list">
                <li>
                  <span className="bullet-dot" />
                  <div>
                    <strong>Students with Innovative Ideas</strong>
                    <span>College & university creators ready to take their project live.</span>
                  </div>
                </li>
                <li>
                  <span className="bullet-dot" />
                  <div>
                    <strong>Early-stage Startups (Pre-Seed / Seed)</strong>
                    <span>Founders with an early MVP looking to scale and acquire customers.</span>
                  </div>
                </li>
                <li>
                  <span className="bullet-dot" />
                  <div>
                    <strong>Founders Looking for Tech & Marketing Support</strong>
                    <span>Non-technical domain experts needing a dedicated execution team.</span>
                  </div>
                </li>
                <li>
                  <span className="bullet-dot" />
                  <div>
                    <strong>Social Impact & Agri-Tech Startups</strong>
                    <span>Ventures building grassroot solutions for Bharat.</span>
                  </div>
                </li>
                <li>
                  <span className="bullet-dot" />
                  <div>
                    <strong>Women-Led Startups</strong>
                    <span>Special dedicated consultancy and ecosystem support.</span>
                  </div>
                </li>
              </ul>

              <a href="#apply" className="button button--primary" style={{ marginTop: '1.25rem' }}>
                Apply for Startup Support
              </a>
            </div>

            <div className="who-can-apply-media">
              <img
                src="/images/startup-hero.jpg"
                alt="Entrepreneurs Collaborating"
                className="eligibility-image"
              />
            </div>
          </div>
        </Section>
      </Reveal>

      {/* Our Process - 4-step workflow */}
      <Reveal>
        <Section title="Our Process" description="A structured, transparent pathway from application to execution.">
          <ProcessSteps
            steps={[
              'Submit your idea through our application form.',
              'We evaluate feasibility, tech stack, and growth goals.',
              'Co-create a custom MVP, tech timeline & marketing plan.',
              'Agile development, deployment, and go-to-market rollout.'
            ]}
          />
        </Section>
      </Reveal>

      {/* Application Form & Flexible Payment Section */}
      <Reveal>
        <Section
          title="Startup Application Form"
          description="Tell us about your venture and let's craft a practical next step."
        >
          <div className="startup-split" id="apply">
            <div className="card startup-form-card">
              <h3>Submit Your Startup Details</h3>
              <StartupApplicationForm />
            </div>

            <div className="startup-side-info">
              <div className="card startup-perk-card">
                <div className="perk-badge">Founder-First Model</div>
                <h4>Flexible Project Installments</h4>
                <p>
                  We understand cash flow constraints in early stages. Fees are structured in mutually agreed project milestones. <em>(Not a loan or financing; terms agreed per project scope).</em>
                </p>
                <ul className="perk-bullets">
                  <li><Check size={16} /> Milestone-based releases</li>
                  <li><Check size={16} /> Transparent deliverables</li>
                  <li><Check size={16} /> Direct guidance from Sunil Gour</li>
                </ul>
              </div>

              <div className="card startup-quote-card">
                <Award size={28} className="accent-mark" />
                <h4>Let's Build Your Startup</h4>
                <p>
                  "Every great company starts with a small, focused step. Let's build your brand with solid technology and real marketing."
                </p>
                <span className="quote-author">— Sunil Gour, Founder & CEO</span>
              </div>
            </div>
          </div>
        </Section>
      </Reveal>

      {/* FAQs */}
      <FaqAccordion faqs={content.faqs} placement="startup" />

      {/* Bottom CTA */}
      <CtaBanner
        title="Have a Startup Idea?"
        subtitle="Let's Discuss and Build It Together."
        buttonText="Apply Now"
        secondaryButtonText="Talk to Us"
      />
    </>
  )
}
