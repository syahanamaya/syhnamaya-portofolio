# Syahana Maya — UI/UX Designer Portfolio

A responsive, static portfolio built with HTML, CSS, and vanilla JavaScript. It is designed to run locally without a build step and can be published on GitHub Pages.

## Run locally

Open `index.html` in a browser, or serve the project directory with any static file server. For example:

```sh
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## Publish with GitHub Pages

Push this repository to GitHub. In **Settings → Pages**, choose the branch and `/ (root)` folder. The site uses relative asset paths and does not require a server-side runtime or build process.

## Update portfolio content

- Add verified project details to `window.portfolioProjects` in `js/projects.js`. Use the example schema there for case-study sections. Project categories should match the filter labels in `index.html`.
- Add certificate metadata and image paths to `window.portfolioCertificates` in `js/projects.js`.
- Add confirmed contact links to `window.portfolioProfile` in `js/projects.js`. Links are intentionally left blank until verified.
- Replace the profile image placeholder in `index.html` with a supplied photograph and add project/certificate images under `assets/images/`.
- The **Download CV** button opens the browser print dialog; choose “Save as PDF” to create a PDF from the included résumé summary. Update the summary in `index.html` when verified contact or experience information is available.

Unknown project research, outcomes, certificates, and contact details are intentionally shown as placeholders rather than invented.
