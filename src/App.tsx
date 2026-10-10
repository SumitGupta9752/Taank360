import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout'
import { ScrollToTop } from './components/ScrollToTop'
import { About } from './pages/About'
import { Contact } from './pages/Contact'
import { Admin } from './pages/Admin'
import { Disclaimer } from './pages/Disclaimer'
import { Home } from './pages/Home'
import { NotFound } from './pages/NotFound'
import { Partnership } from './pages/Partnership'
import { Portfolio } from './pages/Portfolio'
import { PrivacyPolicy } from './pages/PrivacyPolicy'
import { RefundPolicy } from './pages/RefundPolicy'
import { ServiceCategory } from './pages/ServiceCategory'
import { Services } from './pages/Services'
import { StartupProgram } from './pages/StartupProgram'
import { TermsAndConditions } from './pages/TermsAndConditions'
import { WomenEntrepreneurSupport } from './pages/WomenEntrepreneurSupport'
import { ThemeApplier } from './components/ThemeApplier'
import { ADMIN_ENABLED } from './config'

function App() {
  return <BrowserRouter><ThemeApplier /><ScrollToTop /><Routes><Route element={<Layout />}>
    <Route path="/" element={<Home />} /><Route path="/about" element={<About />} />
    <Route path="/services" element={<Services />} />
    <Route path="/services/digital-marketing" element={<ServiceCategory category="Digital Marketing" />} />
    <Route path="/services/development" element={<ServiceCategory category="Development Solutions" />} />
    <Route path="/services/business-tools" element={<ServiceCategory category="Business & Marketing Tools" />} />
    <Route path="/startup-program" element={<StartupProgram />} />
    <Route path="/women-entrepreneur-support" element={<WomenEntrepreneurSupport />} />
    <Route path="/portfolio" element={<Portfolio />} /><Route path="/partnership" element={<Partnership />} />
    <Route path="/contact" element={<Contact />} /><Route path="/privacy-policy" element={<PrivacyPolicy />} />
    <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
    <Route path="/refund-policy" element={<RefundPolicy />} /><Route path="/disclaimer" element={<Disclaimer />} />
    <Route path="/admin" element={ADMIN_ENABLED ? <Admin /> : <NotFound />} /><Route path="*" element={<NotFound />} />
  </Route></Routes></BrowserRouter>
}

export default App
