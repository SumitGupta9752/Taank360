# Taank360 Content Workflow

The `/admin` editor is a local browser tool, not a server CMS. Drafts are stored only in this browser and device. They do not sync, are not secure, and must never contain confidential information.

1. Edit content in `/admin`. Changes are saved in this browser only.
2. Click **Preview draft** and check the public pages. Visitors cannot see the preview draft.
3. Click **Export JSON**.
4. Copy any new image files into `public/images/`. Paths must match the values entered in the editor.
5. Rename the exported file to `published-content.json` and replace `src/data/published-content.json`.
6. Commit and push the project to GitHub.
7. Run `npm run build` and upload the `dist` output to Hostinger.
8. Check the live site in a private/incognito window. A normal window may show a cached version.

The published JSON is merged at group level with built-in defaults. Groups omitted from the file continue to use defaults. Local drafts are used only while preview mode is active.
