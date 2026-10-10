import { lazy, Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout'
import { ScrollToTop } from './components/ScrollToTop'
import { Home } from './pages/Home'
import { ThemeApplier } from './components/ThemeApplier'
import { ADMIN_ENABLED } from './config'

const About = lazy(() => import('./pages/About').then((module) => ({ default: module.About })))
const Contact = lazy(() => import('./pages/Contact').then((module) => ({ default: module.Contact })))
const Admin = lazy(() => import('./pages/Admin').then((module) => ({ default: module.Admin })))
const Disclaimer = lazy(() => import('./pages/Disclaimer').then((module) => ({ default: module.Disclaimer })))
const NotFound = lazy(() => import('./pages/NotFound').then((module) => ({ default: module.NotFound })))
const Partnership = lazy(() => import('./pages/Partnership').then((module) => ({ default: module.Partnership })))
const Portfolio = lazy(() => import('./pages/Portfolio').then((module) => ({ default: module.Portfolio })))
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy').then((module) => ({ default: module.PrivacyPolicy })))
const RefundPolicy = lazy(() => import('./pages/RefundPolicy').then((module) => ({ default: module.RefundPolicy })))
const ServiceCategory = lazy(() => import('./pages/ServiceCategory').then((module) => ({ default: module.ServiceCategory })))
const Services = lazy(() => import('./pages/Services').then((module) => ({ default: module.Services })))
const StartupProgram = lazy(() => import('./pages/StartupProgram').then((module) => ({ default: module.StartupProgram })))
const TermsAndConditions = lazy(() => import('./pages/TermsAndConditions').then((module) => ({ default: module.TermsAndConditions })))
const WomenEntrepreneurSupport = lazy(() => import('./pages/WomenEntrepreneurSupport').then((module) => ({ default: module.WomenEntrepreneurSupport })))

function App() {
  return <BrowserRouter><ThemeApplier /><ScrollToTop /><Suspense fallback={<div className="route-loading" aria-hidden="true" />}><Routes><Route element={<Layout />}>
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
  </Route></Routes></Suspense></BrowserRouter>
}

export default App
