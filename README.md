# Crafted Creations — Jekyll Website

This website runs on **GitHub Pages** with the **free Midnight Jekyll theme** (`jekyll-theme-midnight`), plus the custom Crafted Creations workshop design.

## How to edit the site

| To change | Edit |
| --- | --- |
| Homepage text, project tiles, and sections | `index.html` |
| Saw blade projects, photos, and Shorts | `saw-blades.html` |
| Wood projects, photos, and Shorts | `wood-projects.html` |
| Navigation, logo, footer, and Buy Me a Coffee link across all pages | `_layouts/default.html` |
| Colors, fonts, layout and responsive styles | `assets/site.css` |
| Shared menu, category filters and inquiry interactions | `assets/site.js` |
| Page title, theme and site URL settings | `_config.yml` |
| Images | `assets/` |

**Keep the YAML front matter at the top of each page** (the lines between `---`). It tells Jekyll to wrap the page in the shared design. Main page content remains ordinary HTML.

## Preview and publish

1. Open the repository in GitHub.
2. Make edits on a branch and create a pull request.
3. Merge into `main` to publish (if GitHub Pages is set to deploy `main`).
4. In **Settings → Pages**, ensure the site is published with **Deploy from a branch → main / (root)** (or an Actions workflow that builds Jekyll).
5. Wait for GitHub Pages deployment to show **Success**, then refresh the published site.

The theme's base styles are imported in `assets/css/style.scss` and the Crafted Creations styling is layered on top via `assets/site.css`. Because the pages have a shared layout, update navigation, social links, and footer once.

## Adding photos and Shorts

Upload project photos to `assets/` and link them in the appropriate HTML page. When replacing a YouTube Short, update both its `youtube-nocookie.com/embed/VIDEO_ID` player URL and its `youtube.com/shorts/VIDEO_ID` link.

## Local preview

Install Ruby, Bundler, and Jekyll; then run `bundle exec jekyll serve` with a matching Gemfile or rely on GitHub Pages' remote build. The built page should be previewed through a web server because Jekyll's `{{ ... }}` and `{% ... %}` tags are processed at build time.
