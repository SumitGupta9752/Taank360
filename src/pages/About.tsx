import { useContent } from '../hooks/useContent'
import { PageBanner } from '../components/PageBanner'
import { Reveal } from '../components/Reveal'
import { Section } from '../components/Section'
import { Seo } from '../components/Seo'
import { StatsBar } from '../components/StatsBar'
import { FeatureCard } from '../components/FeatureCard'
import { CtaBanner } from '../components/CtaBanner'
import { Play, Award, Rocket, CheckCircle, Quote } from 'lucide-react'

export function About() {
  const content = useContent()
  const banner = content.banners.find((item) => item.page === 'about')

  return (
    <>
      <Seo entry={content.seo.find((item) => item.route === '/about')} />

      {/* Hero Banner with Animated Slides & Centered Text */}
      <PageBanner
        banner={banner}
        align="center"
        secondaryCtaText="Our Services"
        secondaryCtaLink="/services"
      />

      {/* Stats Counter Ribbon */}
      <StatsBar stats={content.stats} placement="about" />

      {/* Our Story & Interactive Video Showcase Grid */}
      <Reveal>
        <Section title="Our Story" description={content.about.story}>
          <div className="about-story-grid">
            <div className="about-story-text">
              <p className="lead-paragraph">
                <strong>Taank360</strong> is a specialized marketing, technology, and startup enablement powerhouse. We empower businesses, growth brands, and ambitious founders to build resilient digital products, generate measurable market traction, and scale seamlessly with end-to-end guidance.
              </p>
              <div className="story-highlights">
                <div className="story-pill">
                  <Rocket size={18} className="story-icon" />
                  <div>
                    <strong>Tech & Product Engineering</strong>
                    <span>Web, Mobile Apps & Enterprise Systems</span>
                  </div>
                </div>
                <div className="story-pill">
                  <Award size={18} className="story-icon" />
                  <div>
                    <strong>360° Growth Marketing</strong>
                    <span>Performance Branding & Lead Generation</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Video Showcase Card */}
            <div className="about-video-card">
              <img
                src="/images/about-hero.jpg"
                alt="Watch Our Story"
                className="about-video-thumbnail"
              />
              <div className="about-video-overlay">
                <button
                  type="button"
                  className="play-story-btn"
                  onClick={() => window.open('https://www.youtube.com', '_blank')}
                  aria-label="Watch Our Story Video"
                >
                  <Play size={24} fill="currentColor" />
                </button>
                <span className="play-story-text">Watch Our Story</span>
              </div>
            </div>
          </div>
        </Section>
      </Reveal>

      {/* Our Mission, Vision & Values */}
      <Reveal>
        <Section title="Our Mission, Vision & Values" description="The core principles that shape our work every single day.">
          <div className="card-grid card-grid--three">
            <FeatureCard
              title="Our Mission"
              description={content.about.mission}
              icon="target"
              tint="blue"
            />
            <FeatureCard
              title="Our Vision"
              description={content.about.vision}
              icon="trending-up"
              tint="orange"
            />
            <FeatureCard
              title="Our Values"
              description="Innovation, relentless execution, client-first transparency, and creating tangible value for Indian entrepreneurs."
              icon="award"
              tint="purple"
            />
          </div>
        </Section>
      </Reveal>

      {/* Founder & CEO Profile Block matching mockup */}
      <Reveal>
        <Section title="Founder & CEO" description="Leadership with vision, technology acumen, and entrepreneurial drive.">
          <div className="founder-card-mockup">
            <div className="founder-card-photo-wrap">
              <img
                src={content.founder.photo || '/images/founder.jpg'}
                alt={content.founder.name}
                className="founder-card-photo"
              />
            </div>
            <div className="founder-card-content">
              <div className="founder-header">
                <div>
                  <h3 className="founder-name">{content.founder.name}</h3>
                  <p className="founder-designation">Founder & CEO, Taank360</p>
                </div>
                <div className="founder-quote-mark">
                  <Quote size={40} />
                </div>
              </div>

              <p className="founder-bio">
                I am a B.Tech CSE graduate from SAGE University Bhopal and a passionate entrepreneur. With 2+ years of business experience, I have spearheaded impactful initiatives in marketing, EdTech, software solutions, agriculture, and event management. My goal is to build an Indian technology company with global capabilities, supporting Aatmanirbhar Bharat, Indian talent and entrepreneurship.
              </p>

              <div className="founder-metrics-pills">
                <span className="founder-pill">
                  <CheckCircle size={14} /> SAGE Best Entrepreneur Award recipient
                </span>
                <span className="founder-pill">
                  <CheckCircle size={14} /> B.Tech CSE, SAGE University Bhopal
                </span>
                <span className="founder-pill">
                  <CheckCircle size={14} /> 2+ Years Business Experience
                </span>
              </div>

              <div className="founder-domains-wrap">
                <span className="domains-label">Startup domains:</span>
                <div className="chip-list">
                  {content.about.domains.map((domain) => (
                    <span className="chip" key={domain}>{domain}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Section>
      </Reveal>

      {/* Our Journey Timeline */}
      <Reveal>
        <Section title="Our Journey" description="Milestones achieved as we scale across technology and marketing.">
          <div className="journey-timeline">
            {content.timeline.map((item, idx) => (
              <div className="journey-step" key={item.id}>
                <span className="journey-year">{item.year}</span>
                <div className="journey-node">
                  <span className="journey-dot" />
                  {idx < content.timeline.length - 1 && <span className="journey-line" />}
                </div>
                <div className="journey-info">
                  <strong>{item.title}</strong>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </Section>
      </Reveal>

      {/* Call to Action Band */}
      <CtaBanner
        title="Be a Part of Our Journey"
        subtitle="Let's Build a Better Tomorrow Together."
        buttonText="Work with Us"
        secondaryButtonText="Contact Us"
      />
    </>
  )
}
