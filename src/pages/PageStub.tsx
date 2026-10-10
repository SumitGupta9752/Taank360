import { useContent } from '../hooks/useContent'
import { PageBanner } from '../components/PageBanner'
import { Reveal } from '../components/Reveal'
import { Section } from '../components/Section'
import { Seo } from '../components/Seo'
export function PageStub({ page }: { page: string }) { const content = useContent(); const banner = content.banners.find((item) => item.page === page); const seo = content.seo.find((item) => item.route === `/${page}`); return <><Seo entry={seo} /><PageBanner banner={banner} /><Reveal><Section title="Content coming soon" description="This branded page is ready for the next content phase." /></Reveal></> }
