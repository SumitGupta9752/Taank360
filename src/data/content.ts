import type { SiteContent } from './types'
import { siteDefaults } from './site-defaults'
import { seoDefaults } from './seo-defaults'
import { routes } from '../routes'

const contact = { phone: siteDefaults.phone, email: siteDefaults.email, whatsapp: '918966068380', address: siteDefaults.address, businessHours: '' }
const seo = routes.map((route) => ({ route: route.path, title: seoDefaults[route.path]?.title || `${route.label} | Taank360`, description: seoDefaults[route.path]?.description || siteDefaults.description, canonical: '', ogTitle: seoDefaults[route.path]?.title || `${route.label} | Taank360`, ogDescription: seoDefaults[route.path]?.description || siteDefaults.description, ogImage: '', indexing: route.indexable ? 'index, follow' as const : 'noindex, nofollow' as const }))
const legal = { privacy: { title: 'Privacy Policy', lastUpdated: '', status: 'draft' as const, sections: [{ heading: 'Information you may share', body: 'You may choose to share details such as your name, email, phone number, company, location, project requirements or partnership information when you use an enquiry form.' }, { heading: 'How information is used', body: 'Information you choose to share is used to respond to your enquiry. The website prepares a WhatsApp message or an email on your own device and does not store form data.' }, { heading: 'Third parties', body: 'WhatsApp, your email provider and YouTube may process information under their own policies. YouTube videos load only after you click play and are served from youtube-nocookie.com.' }, { heading: 'Your choices', body: 'You can choose whether to use an enquiry form or an external contact method. You can also contact us directly using the details on this website.' }, { heading: 'Contact and changes', body: `For questions about this page, contact ${siteDefaults.email}. This policy may change when the website or its practices change.` }] }, terms: { title: 'Terms & Conditions', lastUpdated: '', status: 'draft' as const, sections: [{ heading: 'Use of this website', body: 'This website is provided for general information about Taank360 Marketing and Tech Solution and its services.' }, { heading: 'General information', body: 'Information on this website is general and may not fit every business or project requirement.' }, { heading: 'Separate project terms', body: 'Services are provided under separate project terms, quotations or agreements discussed and agreed with the client.' }, { heading: 'Third-party links', body: 'External links are provided for convenience. Taank360 does not control external websites or their policies.' }, { heading: 'Changes and contact', body: `These terms may change. Questions may be sent to ${siteDefaults.email}.` }] }, refund: { title: 'Refund & Cancellation Policy', lastUpdated: '', status: 'draft' as const, sections: [{ heading: 'Project-specific terms', body: 'Refund and cancellation terms depend on the service and are agreed in writing for each project through the relevant quotation or agreement.' }, { heading: 'Discuss your requirement', body: `Contact ${siteDefaults.email} if you need to discuss a refund or cancellation question.` }] }, disclaimer: { title: 'Disclaimer', lastUpdated: '', status: 'draft' as const, sections: [{ heading: 'General information', body: 'Information on this website is general and may change. It is not professional legal or financial advice.' }, { heading: 'No guarantees', body: 'Taank360 does not guarantee leads, revenue, growth, business outcomes or partnership income.' }, { heading: 'External information', body: 'External links are outside Taank360 control. Testimonials, if shown, reflect individual experiences and are not guarantees.' }] } }

export const defaultContent: SiteContent = {
  general: { companyName: siteDefaults.companyName, brandName: siteDefaults.brandName, slogans: { primary: "Let's Make Your Brand Famous", development: "Let's Build Your Brand", startup: "Let's Build Your Startup" }, supportingLine: '360° Marketing, Technology & Startup Solutions to Help Your Business Build, Grow and Scale.', description: siteDefaults.description, logo: siteDefaults.logoPath, favicon: '/favicon.png', theme: { primary: '#003C90', primaryDark: '#002A66', accent: '#FF3030', bg: '#FFFFFF', surface: '#F5F7FB', text: '#0B1B33', muted: '#5B6B82', border: '#E2E8F2' } },
  founder: { name: 'Sunil Gour', photo: '/images/founder.jpg', qualification: 'B.Tech in Computer Science and Engineering, SAGE University Bhopal', bio: 'Founder & CEO of Taank360 Marketing and Tech Solution.', experience: '2+ years of business experience', award: 'SAGE Best Entrepreneur Award recipient', vision: 'To build an Indian technology company with global-scale capabilities, support Aatmanirbhar Bharat, and create meaningful opportunities for Indian talent and entrepreneurship across marketing, EdTech, software solutions, agriculture, carbon-based businesses and event management.' },
  home: { heroHighlight: 'Famous', pillarDescriptions: { marketing: 'Build visibility and meaningful connections with the right audience.', development: 'Plan and create useful digital products around your business needs.', startup: 'Bring development, marketing and consultancy together for your idea.' }, toolsIntro: 'Simple tools for communication, lead handling and everyday operations.', startupTeaser: 'Development, marketing and consultancy for ideas taking their next step.', finalCtaDescription: 'Tell us what you are building and we will discuss a practical next step.' },
  about: { story: 'Taank360 Marketing and Tech Solution works with businesses and founders on marketing, technology and startup needs. Our approach is practical: understand the requirement, shape the scope and build useful solutions.', mission: 'To make capable marketing and technology support more accessible to Indian businesses and entrepreneurs.', vision: 'To grow into an Indian technology company with global-scale capabilities while supporting Indian talent, entrepreneurship and technology-led development.', domains: ['Marketing', 'EdTech', 'software solutions', 'agriculture', 'carbon-based businesses', 'event management'] },
  homeSections: ['hero', 'pillars', 'services', 'tools', 'featuredVideos', 'startup', 'offers', 'portfolio', 'testimonials', 'partners', 'founder', 'finalCta'].map((id, index) => ({ id, enabled: true, order: index + 1 })),
  startupProgram: { slogan: "Let's Build Your Startup.", description: 'A practical support path combining startup development, marketing and consultancy.', offerings: ['Startup development', 'Startup marketing', 'Business consultancy'], flexiblePayment: 'Project fees can be paid in installments that are mutually agreed for each project. This is not a loan, there is no financing, and terms depend on the project scope and agreement.', steps: ['Share your idea', 'Discuss requirements', 'Agree scope and terms', 'Build and launch'] },
  womenSupport: { description: 'Support for women entrepreneurs through business consultancy, webinars and seminars.', offerings: ['Business support', 'Business consultancy', 'Webinars', 'Seminars'] },
  formOptions: { budgets: ['Not sure yet', 'Under ₹25,000', '₹25,000–₹75,000', '₹75,000–₹1,50,000', 'Above ₹1,50,000'], timelines: ['Not sure yet', 'Within 1 month', '1–3 months', '3–6 months', 'More than 6 months'], projectTypes: ['New business idea', 'Website or web app', 'Mobile app', 'Business software', 'Marketing support', 'Other'] },
  partnership: { intro: 'Taank360 works with dealership and referral partners under terms discussed directly with each partner.', dealership: { title: 'Dealership Partner', description: 'Offer Taank360 services in your city or region under mutually agreed terms.', requirements: ['Owner to confirm partnership requirements.'], benefits: ['Owner to confirm dealership support and benefits.'] }, referral: { title: 'Referral Partner', description: 'Introduce clients to Taank360 and earn a commission on successful work.', requirements: ['Terms discussed directly.'], benefits: ['5%-10% commission, depending on the service, the client and the agreed terms.'] }, comparison: { suits: ['A partner building a local service presence.', 'A person or business with relevant client introductions.'], work: ['Offer services in an agreed region.', 'Introduce potential clients to Taank360.'], earn: ['Terms discussed directly.', '5%-10% commission, depending on the service, the client and the agreed terms.'], requirements: ['Terms discussed directly.', 'Terms discussed directly.'], support: ['Terms discussed directly.', 'Terms discussed directly.'] } },
  services: [
    { id: 'digital-marketing', name: 'Digital Marketing', category: 'Digital Marketing', description: 'Editable digital marketing services for modern brands.', features: ['Social media marketing', 'SEO', 'Paid ads', 'Content and brand creative', 'Lead-generation campaigns'], image: '', icon: 'megaphone', cta: 'Explore services', status: 'visible', order: 1 },
    { id: 'websites', name: 'Websites', category: 'Development Solutions', description: 'Websites designed around clear business goals.', features: ['Responsive interfaces', 'Content structure', 'Technical foundation'], image: '', icon: 'globe', cta: 'Explore development', status: 'visible', order: 1 },
    { id: 'mobile-apps', name: 'Mobile Apps', category: 'Development Solutions', description: 'Mobile application foundations for useful products.', features: ['Product planning', 'Interface development', 'Release preparation'], image: '', icon: 'smartphone', cta: 'Explore development', status: 'visible', order: 2 },
    { id: 'crm', name: 'CRM', category: 'Development Solutions', description: 'Customer relationship workflows and software foundations.', features: ['Workflow mapping', 'Data structure', 'Process visibility'], image: '', icon: 'users', cta: 'Explore development', status: 'visible', order: 3 },
    { id: 'software', name: 'Software', category: 'Development Solutions', description: 'Custom software solutions shaped to operating needs.', features: ['Requirement mapping', 'System design', 'Implementation support'], image: '', icon: 'code', cta: 'Explore development', status: 'visible', order: 4 },
    { id: 'automation', name: 'Automation', category: 'Development Solutions', description: 'Automation support for repeatable business processes.', features: ['Process review', 'Integration planning', 'Operational support'], image: '', icon: 'workflow', cta: 'Explore development', status: 'visible', order: 5 },
    { id: 'business-tools', name: 'Business & Marketing Tools', category: 'Business & Marketing Tools', description: 'Editable tools that support business communication and operations.', features: ['IVR', 'WhatsApp API', 'CRM', 'Data extractor'], image: '', icon: 'tool', cta: 'Explore tools', status: 'visible', order: 1 },
  ],
  tools: [
    { id: 'ivr', name: 'IVR', description: 'Voice-based call flows for business communication.', logo: '', icon: 'phone', features: ['Call routing', 'Greeting flows'], status: 'visible', order: 1 },
    { id: 'whatsapp-api', name: 'WhatsApp API', description: 'Structured WhatsApp communication for business workflows.', logo: '', icon: 'message', features: ['Message workflows', 'Enquiry handling'], status: 'visible', order: 2 },
    { id: 'crm-tool', name: 'CRM', description: 'A clearer way to organize customer and enquiry information.', logo: '', icon: 'users', features: ['Contact organization', 'Process visibility'], status: 'visible', order: 3 },
    { id: 'data-extractor', name: 'Data Extractor', description: 'A tool for collecting relevant business data from suitable sources.', logo: '', icon: 'database', features: ['Data collection', 'Structured output'], status: 'visible', order: 4 },
  ], portfolio: [
    {
      id: 'greentech',
      clientName: 'GreenTech Solutions',
      logo: '',
      description: 'Complete digital presence and B2B lead generation for polyhouse and greenhouse solutions company.',
      industry: 'Agriculture',
      category: 'Websites',
      tags: ['Website', 'Branding', 'Lead Generation'],
      services: ['Web Development', 'Digital Marketing', 'B2B Lead Generation'],
      images: ['/images/greentech.jpg'],
      link: '/contact?tab=project',
      metrics: [
        { label: 'Traffic Growth', value: '250%' },
        { label: 'B2B Leads Generated', value: '200+' },
        { label: 'New Dealerships', value: '3' }
      ],
      status: 'visible',
      order: 1
    },
    {
      id: 'wowkids',
      clientName: 'Wow Kids Preschool',
      logo: '',
      description: 'Complete digital marketing growth, social media branding, and local admission campaigns for pre-schools.',
      industry: 'Education',
      category: 'Marketing',
      tags: ['Website', 'Marketing', 'Branding'],
      services: ['Social Media Marketing', 'Performance Ads', 'Brand Identity'],
      images: ['/images/wowkids.jpg'],
      link: '/contact?tab=project',
      metrics: [
        { label: 'Website Traffic', value: '300%' },
        { label: 'Direct Enquiries', value: '4x' },
        { label: 'Admission Growth', value: '60%' }
      ],
      status: 'visible',
      order: 2
    },
    {
      id: 'tevent',
      clientName: 'Tevent Platform',
      logo: '',
      description: 'Custom event ticketing, artist booking, and interactive live audience platform development.',
      industry: 'Event',
      category: 'Websites',
      tags: ['App', 'Marketing', 'Brand'],
      services: ['Full Stack Development', 'Event Management', 'Payment Gateway'],
      images: ['/images/tevent.jpg'],
      link: '/contact?tab=project',
      metrics: [
        { label: 'Active Users', value: '10K+' },
        { label: 'Event Bookings', value: '500+' },
        { label: 'Revenue Growth', value: '3x' }
      ],
      status: 'visible',
      order: 3
    },
    {
      id: 'higrow',
      clientName: 'Hi-Grow Smart Irrigation',
      logo: '',
      description: 'Smart automated agricultural irrigation monitoring system and digital B2B lead acquisition.',
      industry: 'Agriculture',
      category: 'IoT Solutions',
      tags: ['Website', 'Lead Generation', 'IoT'],
      services: ['IoT Integration', 'Dashboard Software', 'Marketing Support'],
      images: ['/images/higrow.jpg'],
      link: '/contact?tab=project',
      metrics: [
        { label: 'Website Traffic', value: '220%' },
        { label: 'B2B Leads', value: '150+' },
        { label: 'Sales Inquiries', value: '4x' }
      ],
      status: 'visible',
      order: 4
    },
    {
      id: 'interntak',
      clientName: 'Interntak EdTech',
      logo: '',
      description: 'Comprehensive student internship and EdTech university career network portal.',
      industry: 'Career',
      category: 'Mobile Apps',
      tags: ['Website', 'Community', 'Platform'],
      services: ['Web Platform', 'Student Community', 'Mobile Experience'],
      images: ['/images/interntak.jpg'],
      link: '/contact?tab=project',
      metrics: [
        { label: 'Student Signups', value: '5K+' },
        { label: 'Engagement Rate', value: '60%' },
        { label: 'Partner Colleges', value: '100+' }
      ],
      status: 'visible',
      order: 5
    },
    {
      id: 'agrikarbo',
      clientName: 'AgriKarbo Carbon Solutions',
      logo: '',
      description: 'Branding, investor pitch deck design, and market validation for sustainable agriculture carbon credits.',
      industry: 'Carbon',
      category: 'Branding',
      tags: ['Branding', 'Pitch Deck', 'Research'],
      services: ['Brand Strategy', 'Investor Deck', 'Ecosystem Outreach'],
      images: ['/images/agrikarbo.jpg'],
      link: '/contact?tab=project',
      metrics: [
        { label: 'Investor Interest', value: '3x' },
        { label: 'Network Connections', value: '200+' },
        { label: 'Research Completed', value: 'Primary' }
      ],
      status: 'visible',
      order: 6
    }
  ], testimonials: [], partners: [
    { id: 'sage', name: 'SAGE', logo: '', website: '', description: 'Academic & Entrepreneurial Partner', status: 'visible', order: 1 },
    { id: 'greentech', name: 'GreenTech', logo: '', website: '', description: 'Sustainable Agri & Tech Partner', status: 'visible', order: 2 },
    { id: 'grow', name: 'HiGrow', logo: '', website: '', description: 'Digital Marketing Growth Network', status: 'visible', order: 3 },
    { id: 'agrikarbo', name: 'AgriKarbo', logo: '', website: '', description: 'Agriculture & Carbon Solutions', status: 'visible', order: 4 },
    { id: 'tevent', name: 'Tevent', logo: '', website: '', description: 'Event Management & Solutions', status: 'visible', order: 5 },
    { id: 'interntak', name: 'Interntak', logo: '', website: '', description: 'EdTech & Talent Ecosystem', status: 'visible', order: 6 },
  ], stats: [
    { id: 'port-cases', value: '50+', label: 'Case Studies', icon: 'award', placement: 'portfolio', status: 'enabled', order: 1 },
    { id: 'port-ind', value: '8+', label: 'Industries', icon: 'lightbulb', placement: 'portfolio', status: 'enabled', order: 2 },
    { id: 'port-growth', value: '300%', label: 'Avg. Client Growth', icon: 'trending-up', placement: 'portfolio', status: 'enabled', order: 3 },
    { id: 'port-sat', value: '95%', label: 'Client Satisfaction', icon: 'heart', placement: 'portfolio', status: 'enabled', order: 4 },
    { id: 'ideas', value: '100+', label: 'Startup Ideas Guided', icon: 'lightbulb', placement: 'startup', status: 'enabled', order: 1 },
    { id: 'startups', value: '20+', label: 'Startups Supported', icon: 'rocket', placement: 'startup', status: 'enabled', order: 2 },
    { id: 'revenue', value: '₹50L+', label: 'Client Revenue Facilitated', icon: 'trending-up', placement: 'startup', status: 'enabled', order: 3 },
    { id: 'rate', value: '80%', label: 'Project Success Rate', icon: 'award', placement: 'startup', status: 'enabled', order: 4 },
    { id: 'about-exp', value: '2+', label: 'Years of Experience', icon: 'award', placement: 'about', status: 'enabled', order: 1 },
    { id: 'about-clients', value: '100+', label: 'Clients Guided', icon: 'users', placement: 'about', status: 'enabled', order: 2 },
    { id: 'about-projects', value: '20+', label: 'Projects Completed', icon: 'check-circle', placement: 'about', status: 'enabled', order: 3 },
    { id: 'about-satisfaction', value: '95%', label: 'Client Satisfaction', icon: 'heart', placement: 'about', status: 'enabled', order: 4 },
    { id: 'part-opp', value: 'High Growth', label: 'Business Opportunity', icon: 'trending-up', placement: 'partnership', status: 'enabled', order: 1 },
    { id: 'part-comm', value: 'Attractive', label: 'Referral Margins (5-10%)', icon: 'percent', placement: 'partnership', status: 'enabled', order: 2 },
    { id: 'part-mktg', value: 'Full Stack', label: 'Marketing Support', icon: 'megaphone', placement: 'partnership', status: 'enabled', order: 3 },
    { id: 'part-rel', value: 'Long Term', label: 'Trusted Partnership', icon: 'handshake', placement: 'partnership', status: 'enabled', order: 4 }
  ], faqs: [], timeline: [
    { id: '2023', year: '2023', title: 'Founded', description: 'Started the journey working with initial businesses and founders.', status: 'enabled', order: 1 },
    { id: '2024', year: '2024', title: 'Expanded', description: 'Scaled marketing solutions, business tools and software offerings.', status: 'enabled', order: 2 },
    { id: '2025', year: '2025', title: 'Startup Program', description: 'Empowered diverse early-stage startups with flexible support.', status: 'enabled', order: 3 },
    { id: '2026', year: '2026', title: 'Nationwide Expansion', description: 'Building dealership and referral network across India.', status: 'enabled', order: 4 },
    { id: 'beyond', year: 'Beyond', title: 'Global Vision', description: 'Aspiring to build a world-class Indian technology company.', status: 'enabled', order: 5 }
  ], banners: [
    { page: '/', desktopImage: '', mobileImage: '', heading: 'Build what moves your business forward.', description: 'Marketing, technology and startup solutions from Taank360.', cta: 'Start a Project', overlay: false, status: 'visible' },
    { page: 'about', desktopImage: '/images/about-hero.jpg', mobileImage: '/images/about-hero.jpg', heading: 'About Taank360', headingHighlight: 'Taank360', description: 'Marketing, Technology and Startup Solutions for a Better Tomorrow. We help businesses, brands and startups build, grow and scale.', cta: 'Start a Project', overlay: true, status: 'visible' },
    { page: 'services', desktopImage: '', mobileImage: '', heading: 'Services for your next step', description: 'Explore marketing, development and business tools shaped around your requirement.', cta: 'Discuss your requirement', overlay: false, status: 'visible' },
    { page: 'services/digital-marketing', desktopImage: '', mobileImage: '', heading: 'Digital Marketing Services', description: 'Editable marketing support for brands that want a clearer digital presence.', cta: 'Start a Project', overlay: false, status: 'visible' },
    { page: 'services/development', desktopImage: '', mobileImage: '', heading: 'Development Solutions', description: 'Websites, apps, CRM and custom software for useful business systems.', cta: 'Start a Project', overlay: false, status: 'visible' },
    { page: 'services/business-tools', desktopImage: '', mobileImage: '', heading: 'Business & Marketing Tools', description: 'Tools that support communication, customer handling and operations.', cta: 'Start a Project', overlay: false, status: 'visible' },
    { page: 'startup-program', desktopImage: '/images/startup-hero.jpg', mobileImage: '/images/startup-hero.jpg', heading: "Let's Build Your Startup", headingHighlight: 'Startup', description: 'From Idea to Impact. We help early-stage startups with technology, marketing and consultancy to turn ideas into real businesses.', cta: 'Apply for Startup Support', overlay: true, status: 'visible' },
    { page: 'women-entrepreneur-support', desktopImage: '', mobileImage: '', heading: 'Women Entrepreneur Support', description: 'Support, consultancy, webinars and seminars for women entrepreneurs.', cta: 'Discuss your requirement', overlay: false, status: 'visible' },
    { page: 'contact', desktopImage: '', mobileImage: '', heading: 'Let’s talk about your requirement', description: 'Choose a contact method or share a few details through the form.', cta: '', overlay: false, status: 'visible' },
    { page: 'portfolio', desktopImage: '/images/portfolio-hero.jpg', mobileImage: '/images/portfolio-hero.jpg', heading: 'Projects That Create Real Impact', headingHighlight: 'Real Impact', description: 'A showcase of our work in marketing, development, business tools and startup support. Real projects, real businesses, real results.', cta: 'Start a Project', ctaLink: '/contact?tab=project', overlay: true, status: 'visible' },
    { page: 'partnership', desktopImage: '/images/partner-hero.jpg', mobileImage: '/images/partner-hero.jpg', heading: 'Partner with Taank360', headingHighlight: 'Taank360', description: 'Grow Together, Create Bigger Opportunities. Join us as a dealership partner or referral partner and be a part of our growth journey.', cta: 'Become a Partner', overlay: true, status: 'visible' },
    { page: 'privacy-policy', desktopImage: '', mobileImage: '', heading: 'Privacy Policy', description: 'How Taank360 handles information shared through this website.', cta: '', overlay: false, status: 'visible' },
    { page: 'terms-and-conditions', desktopImage: '', mobileImage: '', heading: 'Terms & Conditions', description: 'Terms for using the Taank360 website and enquiring about services.', cta: '', overlay: false, status: 'visible' },
    { page: 'refund-policy', desktopImage: '', mobileImage: '', heading: 'Refund & Cancellation Policy', description: 'General information about project-specific refund and cancellation terms.', cta: '', overlay: false, status: 'visible' },
    { page: 'disclaimer', desktopImage: '', mobileImage: '', heading: 'Disclaimer', description: 'General information about the Taank360 website.', cta: '', overlay: false, status: 'visible' },
    { page: 'admin', desktopImage: '', mobileImage: '', heading: 'Local Content Editor', description: 'Edit local content drafts in this browser.', cta: '', overlay: false, status: 'visible' },
  ], offers: [], contact, social: [], videos: [], seo, legal,
}
