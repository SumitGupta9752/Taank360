# SEO Verification Checklist

After `npm run build`:

- Open `dist/services/development/index.html` and compare its title, description and canonical with `dist/index.html`.
- Confirm every public route has a static `index.html`; `/admin` is `noindex,nofollow`.
- Open `dist/sitemap.xml`: it should contain only indexable public routes with absolute URLs and build dates.
- Open `dist/robots.txt`: it should allow the site, disallow `/admin`, and reference the sitemap.
- Open `dist/404.html`: it should contain the noindex Page not found head.
- Parse each JSON-LD script with `JSON.parse` or validate it at validator.schema.org. It must contain only verified organization, website and breadcrumb facts.
- View source on the built pages to inspect static head tags. The page body is still rendered by JavaScript; this is not full prerendering.
- After launch, run Google's Rich Results Test, submit the sitemap in Google Search Console, and check social previews with the relevant platform debuggers.

The current build warns because `VITE_SITE_URL` still uses `https://YOUR-DOMAIN.com` and `public/og-default.png` has not been supplied. Set the real domain and add a 1200x630 share image before launch.
