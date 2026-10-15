import { useContent } from '../hooks/useContent'
import { PageBanner } from '../components/PageBanner'
import { Reveal } from '../components/Reveal'
import { Section } from '../components/Section'
import { Seo } from '../components/Seo'
import { StatsBar } from '../components/StatsBar'
import { PartnerMarquee } from '../components/PartnerMarquee'
import { PartnershipForm } from '../components/PartnershipForm'
import { FaqAccordion } from '../components/FaqAccordion'
import { CtaBanner } from '../components/CtaBanner'
import { Check, ShieldCheck, Layers, Megaphone, TrendingUp, Handshake, Briefcase } from 'lucide-react'

export function Partnership() {
  const content = useContent()
  const banner = content.banners.find((item) => item.page === 'partnership')

  return (
    <>
      <Seo entry={content.seo.find((item) => item.route === '/partnership')} />

      {/* Hero Banner with Cinematic Graphic and CTAs */}
      <PageBanner
        banner={banner}
        badge="Taank360 Partnership Ecosystem"
        secondaryCtaText="Download Brochure"
        secondaryCtaLink="/contact"
      />

      {/* Stats Counter Ribbon matching mockup */}
      <StatsBar stats={content.stats} placement="partnership" />

      {/* Partnership Models (Dealership vs Referral) */}
      <Reveal>
        <Section
          title="Partnership Models"
          description="Choose the right partnership opportunity as per your interest and goals."
        >
          <div className="partnership-models-grid">
            {/* Model 1: Dealership Partner */}
            <article className="card model-card model-card--dealership">
              <div className="model-card__header">
                <div className="model-icon-box model-icon-box--dealership">
                  <Briefcase size={22} />
                </div>
                <div>
                  <div className="model-badge-row">
                    <h3>Dealership Partner</h3>
                    <span className="popular-badge">Popular</span>
                  </div>
                  <p className="model-desc">
                    Offer Taank360 services in your city or region under mutually agreed terms.
                  </p>
                </div>
              </div>

              <ul className="model-features-list">
                <li>
                  <Check size={16} />
                  <span>Get official dealership for our services in your city/region</span>
                </li>
                <li>
                  <Check size={16} />
                  <span>Provide digital marketing and tech solutions under Taank360 brand</span>
                </li>
                <li>
                  <Check size={16} />
                  <span>Complete operational training, marketing collateral & technical support</span>
                </li>
                <li>
                  <Check size={16} />
                  <span>Higher earnings potential and long-term business equity</span>
                </li>
              </ul>

              <div className="model-footer">
                <a href="#apply" className="button button--primary w-full">
                  Apply for Dealership
                </a>
              </div>
            </article>

            {/* Model 2: Referral Partner */}
            <article className="card model-card model-card--referral">
              <div className="model-card__header">
                <div className="model-icon-box model-icon-box--referral">
                  <Handshake size={22} />
                </div>
                <div>
                  <div className="model-badge-row">
                    <h3>Referral Partner</h3>
                  </div>
                  <p className="model-desc">
                    Introduce potential clients to Taank360 and earn an agreed referral margin.
                  </p>
                </div>
              </div>

              <ul className="model-features-list">
                <li>
                  <Check size={16} />
                  <span>Refer businesses, creators, and brands to Taank360</span>
                </li>
                <li>
                  <Check size={16} />
                  <span>Earn attractive referral commission (5%–10% depending on service)</span>
                </li>
                <li>
                  <Check size={16} />
                  <span>Zero investment or upfront infrastructure required</span>
                </li>
                <li>
                  <Check size={16} />
                  <span>Work flexibly from anywhere in India with prompt payouts</span>
                </li>
              </ul>

              <div className="model-footer">
                <a href="#apply" className="button button--secondary w-full">
                  Apply as Referral Partner
                </a>
              </div>
            </article>
          </div>
        </Section>
      </Reveal>

      {/* Why Partner with Taank360? 4 Pillars */}
      <Reveal>
        <Section title="Why Partner with Taank360?" description="Built on trust, high-demand solutions, and collaborative growth.">
          <div className="card-grid card-grid--four">
            <div className="card why-card">
              <div className="why-icon-box why-icon-box--blue">
                <ShieldCheck size={22} />
              </div>
              <h4>Trusted Brand</h4>
              <p>Work with an emerging brand led by award-winning leadership and verified CSE engineering.</p>
            </div>

            <div className="card why-card">
              <div className="why-icon-box why-icon-box--orange">
                <Layers size={22} />
              </div>
              <h4>Wide Range of Services</h4>
              <p>Marketing, full-stack software, mobile apps, CRM, and WhatsApp automation under one roof.</p>
            </div>

            <div className="card why-card">
              <div className="why-icon-box why-icon-box--green">
                <Megaphone size={22} />
              </div>
              <h4>Marketing Support</h4>
              <p>Pitch presentations, client proposal templates, and co-branding marketing material provided.</p>
            </div>

            <div className="card why-card">
              <div className="why-icon-box why-icon-box--purple">
                <TrendingUp size={22} />
              </div>
              <h4>Attractive Earnings</h4>
              <p>Competitive commission structures with timely payouts upon successful milestone delivery.</p>
            </div>
          </div>
        </Section>
      </Reveal>

      {/* Comparison Table */}
      <Reveal>
        <Section title="Compare Partnership Paths" description="Detailed comparison between Dealership and Referral programs.">
          <div className="comparison-wrap">
            <table>
              <thead>
                <tr>
                  <th scope="col">Area</th>
                  <th scope="col">Dealership Partner</th>
                  <th scope="col">Referral Partner</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Who it suits</th>
                  <td>Entrepreneurs, agencies or founders building a local tech & marketing presence.</td>
                  <td>Freelancers, consultants, professionals with relevant client connections.</td>
                </tr>
                <tr>
                  <th scope="row">Scope of work</th>
                  <td>Represent Taank360 locally, close deals and deliver with our tech backline.</td>
                  <td>Introduce prospective business leads to Taank360 team.</td>
                </tr>
                <tr>
                  <th scope="row">How you earn</th>
                  <td>Direct client margins and territorial project revenue shares.</td>
                  <td>5%–10% commission based on project size, service and agreed terms.</td>
                </tr>
                <tr>
                  <th scope="row">Setup & Support</th>
                  <td>Complete marketing assets, dedicated account manager, tech team backup.</td>
                  <td>Standard referral tracking, quotation support, and client closing assistance.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Section>
      </Reveal>

      {/* Our Partners Marquee */}
      <Reveal>
        <Section title="Our Partners & Ecosystem" description="Collaborating with forward-looking organizations and institutions.">
          <PartnerMarquee />
        </Section>
      </Reveal>

      {/* Partnership Application Form */}
      <Reveal>
        <Section
          title="Partner Application Form"
          description="Submit your details to discuss regional dealership or referral alignment."
        >
          <div id="apply">
            <PartnershipForm />
          </div>
        </Section>
      </Reveal>

      {/* FAQs */}
      <FaqAccordion faqs={content.faqs} placement="partnership" />

      {/* Bottom CTA */}
      <CtaBanner
        title="Let's Grow Together"
        subtitle="Become a Taank360 Partner Today."
        buttonText="Apply Now"
        secondaryButtonText="Talk to Our Team"
      />
    </>
  )
}
