export type Status = 'visible' | 'hidden'
export type SeoIndexing = 'index, follow' | 'noindex, nofollow'

export interface GeneralContent { companyName: string; brandName: string; slogans: { primary: string; development: string; startup: string }; supportingLine: string; description: string; logo: string; favicon: string; theme: string }
export interface FounderContent { name: string; photo: string; qualification: string; bio: string; experience: string; award: string; vision: string }
export interface ServiceItem { id: string; name: string; category: string; description: string; features: string[]; image: string; icon: string; cta: string; status: Status; order: number }
export interface ToolItem { id: string; name: string; description: string; logo: string; icon: string; features: string[]; price?: string; link?: string; status: Status; order: number }
export interface PortfolioItem { id: string; clientName: string; logo: string; description: string; industry: string; services: string[]; images: string[]; link: string; status: Status; order: number }
export interface Testimonial { id: string; youtubeUrlOrId: string; client: string; company: string; designation: string; text: string; thumbnail: string; status: Status; order: number }
export interface Partner { id: string; name: string; logo: string; website: string; description: string; status: Status; order: number }
export interface Banner { page: string; desktopImage: string; mobileImage: string; heading: string; description: string; cta: string; overlay: boolean; status: Status }
export interface Offer { title: string; description: string; image: string; cta: string; validity: string; status: Status }
export interface ContactContent { phone: string; email: string; whatsapp: string; address: string; businessHours: string }
export interface SocialLink { platform: string; url: string; label: string }
export interface SeoEntry { route: string; title: string; description: string; canonical: string; ogTitle: string; ogDescription: string; ogImage: string; indexing: SeoIndexing }
export interface HomeContent { heroHighlight: string; pillarDescriptions: { marketing: string; development: string; startup: string }; toolsIntro: string; startupTeaser: string; finalCtaDescription: string }
export interface AboutContent { story: string; mission: string; vision: string; domains: string[] }
export interface StartupContent { slogan: string; description: string; offerings: string[]; flexiblePayment: string; steps: string[] }
export interface WomenSupportContent { description: string; offerings: string[] }
export interface FormOptionContent { budgets: string[]; timelines: string[]; projectTypes: string[] }
export type VideoAspect = '16:9' | '9:16'
export type VideoPlacement = 'home' | 'about' | 'services' | 'startup'
export interface FeaturedVideo { id: string; title: string; youtubeUrlOrId: string; aspect: VideoAspect; placement: VideoPlacement; caption: string; status: Status; order: number }
export interface PartnershipProgram { title: string; description: string; requirements: string[]; benefits: string[] }
export interface PartnershipContent { intro: string; dealership: PartnershipProgram; referral: PartnershipProgram; comparison: { suits: string[]; work: string[]; earn: string[]; requirements: string[]; support: string[] } }
export interface SiteContent { general: GeneralContent; founder: FounderContent; home: HomeContent; about: AboutContent; startupProgram: StartupContent; womenSupport: WomenSupportContent; formOptions: FormOptionContent; partnership: PartnershipContent; services: ServiceItem[]; tools: ToolItem[]; portfolio: PortfolioItem[]; testimonials: Testimonial[]; partners: Partner[]; videos: FeaturedVideo[]; banners: Banner[]; offers: Offer[]; contact: ContactContent; social: SocialLink[]; seo: SeoEntry[] }
