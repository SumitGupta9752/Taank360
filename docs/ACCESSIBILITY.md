# Accessibility Audit

| Item | Status | Notes |
|---|---|---|
| Landmarks and skip link | Fixed | Header, labelled navigation groups, `main#main`, footer and skip link are present. |
| One heading per page | Confirmed | Route banners provide the page `h1`; legal pages use one banner heading. |
| Route focus and announcement | Fixed | Layout focuses the new `h1` and announces `document.title`. |
| Moving marquee control | Fixed | Partner marquee has a visible Pause/Play button and reduced-motion behavior. |
| Carousel and tabs | Fixed | Testimonials use scroll-snap, labelled controls and keyboard arrows; contact tabs use tab roles and arrows. |
| New-tab links | Needs manual check | External links use `target="_blank"` and `rel="noopener noreferrer"`; audit visual hidden context on final content. |
| Forms | Fixed | Labels, required indicators, field errors, descriptions, input types and focus behavior are implemented. |
| Focus visibility | Fixed | Global focus ring uses the brand accent. Test on every final content state. |
| Contrast | Fixed | Brand palette is configured with editor contrast warnings; verify custom themes manually. |
| Zoom and reflow | Needs manual check | Test 320px width and 200% zoom on Home, Contact, Portfolio and Admin. |
| Reduced motion | Fixed | Reveal, navigation, marquee, carousel scrolling and smooth scroll honor the media query. |
| Language | Fixed | HTML language is `en-IN` in source and generated route documents. |

Automated build and lint checks pass. Screen-reader, browser zoom, axe and Lighthouse checks remain manual tasks for the production domain and final content.
