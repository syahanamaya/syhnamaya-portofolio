(() => {
  const projects = window.portfolioProjects;
  const certificates = window.portfolioCertificates;
  const profile = window.portfolioProfile;
  const projectGrid = document.querySelector("#project-grid");
  const caseStudyDialog = document.querySelector("#case-study-dialog");
  const caseStudyContent = document.querySelector("#case-study-content");
  const caseStudyPagination = document.querySelector("#case-study-pagination");
  const imageDialog = document.querySelector("#image-dialog");
  const certificatePreview = document.querySelector("#certificate-preview");
  const certificateCaption = document.querySelector("#certificate-caption");
  let visibleProjects = projects;
  let activeProjectIndex = 0;
  let activeImageIndex = 0;

  const escapeHtml = (value) => String(value ?? "").replace(/[&<>"']/g, (character) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  })[character]);

  const imageLabel = (project, index) => project.assetLabel === "slides"
    ? `Slide ${index + 1}`
    : project.assetLabel === "images"
      ? `Image ${index + 1}`
      : project.images[index].label;

  const projectImageMarkup = (project) => {
    const image = project.images[0];
    return `<img class="project-visual-image" src="${escapeHtml(encodeURI(image.src))}" alt="${escapeHtml(`${project.title}: ${imageLabel(project, 0)}`)}" loading="lazy" decoding="async">`;
  };

  const renderProjects = (filter = "All Projects") => {
    visibleProjects = projects.filter((project) => filter === "All Projects" || project.category === filter);
    if (!visibleProjects.length) {
      projectGrid.innerHTML = `<div class="project-empty"><p class="project-empty-label">SELECTED WORKS</p><div><h3>${projects.length ? "No projects in this category yet." : "Project stories are being prepared."}</h3><p>${projects.length ? "Try another category, or check back as more work is added." : "Project case studies will appear here once they are ready to share. No project details have been invented for this portfolio."}</p></div></div>`;
      return;
    }

    projectGrid.innerHTML = visibleProjects.map((project, index) => `
      <article class="project-card">
        <div class="project-card-visual">
          ${projectImageMarkup(project)}
          <span class="project-category-label">${escapeHtml(project.category || "Category to be added")}</span>
        </div>
        <div class="project-meta">
          <div>
            <h3>${escapeHtml(project.title || "Project title to be added")}</h3>
            <p class="project-description">${escapeHtml(project.description || "A short project description will be added here.")}</p>
          </div>
          <div class="project-side"><span class="project-image-count">${project.images.length} ${escapeHtml(project.assetLabel)}</span><button class="project-view" type="button" data-project-index="${index}">View Project <span aria-hidden="true">↗</span></button></div>
        </div>
      </article>`).join("");
  };

  const caseStudySections = [["overview", "Project Overview"]];

  const renderCaseStudy = (index) => {
    activeProjectIndex = index;
    activeImageIndex = 0;
    const project = visibleProjects[index];
    const details = project.caseStudy || {};
    const image = project.images[activeImageIndex];
    const caption = imageLabel(project, activeImageIndex);
    caseStudyContent.innerHTML = `
      <header class="case-study-header">
        <p class="eyebrow"><span class="eyebrow-line"></span> ${escapeHtml(project.category || "PROJECT CASE STUDY")}</p>
        <h2 id="case-study-title">${escapeHtml(project.title || "Project title to be added")}</h2>
      </header>
      <div class="project-gallery">
        <div class="project-gallery-stage">
          <img class="project-gallery-image" src="${escapeHtml(encodeURI(image.src))}" alt="${escapeHtml(`${project.title}: ${caption}`)}">
          ${project.images.length > 1 ? `<button class="gallery-arrow gallery-previous" type="button" data-image-step="-1" aria-label="Previous image">‹</button><button class="gallery-arrow gallery-next" type="button" data-image-step="1" aria-label="Next image">›</button><span class="gallery-counter" aria-live="polite">${activeImageIndex + 1} / ${project.images.length}</span>` : ""}
        </div>
        <p class="project-gallery-caption">${escapeHtml(caption)}</p>
      </div>
      ${caseStudySections.filter(([key]) => details[key]).map(([key, title]) => `<section class="case-study-section"><h3>${title}</h3><p>${escapeHtml(details[key])}</p></section>`).join("")}`;
    caseStudyPagination.innerHTML = `
      <button type="button" data-case-step="-1" ${index === 0 ? "disabled" : ""}>← Previous project</button>
      <button type="button" data-case-step="1" ${index === visibleProjects.length - 1 ? "disabled" : ""}>Next project →</button>`;
    caseStudyDialog.showModal();
    document.body.classList.add("dialog-open");
  };

  document.querySelector(".project-filters").addEventListener("click", (event) => {
    const button = event.target.closest("[data-filter]");
    if (!button) return;
    document.querySelectorAll(".filter-button").forEach((filterButton) => {
      const selected = filterButton === button;
      filterButton.classList.toggle("is-selected", selected);
      filterButton.setAttribute("aria-pressed", String(selected));
    });
    renderProjects(button.dataset.filter);
  });

  projectGrid.addEventListener("click", (event) => {
    const button = event.target.closest("[data-project-index]");
    if (button) renderCaseStudy(Number(button.dataset.projectIndex));
  });

  caseStudyContent.addEventListener("click", (event) => {
    const button = event.target.closest("[data-image-step]");
    if (!button) return;
    const project = visibleProjects[activeProjectIndex];
    activeImageIndex = (activeImageIndex + Number(button.dataset.imageStep) + project.images.length) % project.images.length;
    const image = project.images[activeImageIndex];
    const caption = imageLabel(project, activeImageIndex);
    caseStudyContent.querySelector(".project-gallery-image").src = encodeURI(image.src);
    caseStudyContent.querySelector(".project-gallery-image").alt = `${project.title}: ${caption}`;
    caseStudyContent.querySelector(".project-gallery-caption").textContent = caption;
    caseStudyContent.querySelector(".gallery-counter").textContent = `${activeImageIndex + 1} / ${project.images.length}`;
  });

  caseStudyPagination.addEventListener("click", (event) => {
    const button = event.target.closest("[data-case-step]");
    if (!button || button.disabled) return;
    renderCaseStudy(activeProjectIndex + Number(button.dataset.caseStep));
  });

  const closeDialog = (dialog) => {
    dialog.close();
    if (!document.querySelector("dialog[open]")) document.body.classList.remove("dialog-open");
  };
  document.querySelector(".dialog-back").addEventListener("click", (event) => {
    event.preventDefault();
    closeDialog(caseStudyDialog);
    document.querySelector("#projects").scrollIntoView({ behavior: "smooth" });
  });
  document.querySelectorAll(".dialog-close").forEach((button) => {
    button.addEventListener("click", () => closeDialog(button.closest("dialog")));
  });
  document.querySelectorAll("dialog").forEach((dialog) => {
    dialog.addEventListener("click", (event) => {
      if (event.target === dialog) closeDialog(dialog);
    });
    dialog.addEventListener("close", () => {
      if (!document.querySelector("dialog[open]")) document.body.classList.remove("dialog-open");
    });
  });

  const certificateGrid = document.querySelector("#certificate-grid");
  if (!certificates.length) {
    certificateGrid.innerHTML = `<div class="certificate-empty"><h3>Certificates will be added here.</h3><p>There are no certificate details or images available yet.</p></div>`;
  } else {
    certificateGrid.innerHTML = certificates.map((certificate, index) => `
      <article class="certificate-card">
        <button class="certificate-image-button" type="button" data-certificate-index="${index}" aria-label="Preview ${escapeHtml(certificate.name || "certificate")}">
          ${certificate.image ? `<img src="${escapeHtml(certificate.image)}" alt="${escapeHtml(certificate.name || "Certificate")}">` : "<span>Certificate image to be added</span>"}
        </button>
        <div class="certificate-info"><h3>${escapeHtml(certificate.name || "Certificate name to be added")}</h3><p>${escapeHtml(certificate.organization || "Issuing organization to be added")} · ${escapeHtml(certificate.year || "Year —")}</p></div>
      </article>`).join("");
  }

  certificateGrid.addEventListener("click", (event) => {
    const button = event.target.closest("[data-certificate-index]");
    if (!button) return;
    const certificate = certificates[Number(button.dataset.certificateIndex)];
    if (!certificate.image) return;
    certificatePreview.src = certificate.image;
    certificatePreview.alt = certificate.name || "Certificate image";
    certificateCaption.textContent = [certificate.name, certificate.organization, certificate.year].filter(Boolean).join(" · ");
    imageDialog.showModal();
    document.body.classList.add("dialog-open");
  });

  const socialItems = [
    ["linkedin", "LinkedIn", "in"],
    ["github", "GitHub", "⌘"],
    ["email", "Email", "✉"]
  ];
  const validUrl = (value) => {
    try {
      const url = new URL(value);
      return url.protocol === "https:" || url.protocol === "http:";
    } catch {
      return false;
    }
  };
  document.querySelector("#hero-social").innerHTML = socialItems.map(([key, label, mark]) => {
    const value = profile[key];
    const href = key === "email" && value ? `mailto:${encodeURIComponent(value)}` : value;
    return href && (key === "email" || validUrl(href))
      ? `<a class="social-link" href="${escapeHtml(href)}"${key === "email" ? "" : ' target="_blank" rel="noopener noreferrer"'}><span class="social-mark" aria-hidden="true">${mark}</span>${label}</a>`
      : `<span class="social-placeholder" aria-label="${label} profile link to be added"><span class="social-mark" aria-hidden="true">${mark}</span><span>${label}<small>Link to be added</small></span></span>`;
  }).join("");
  document.querySelector("#contact-links").innerHTML = socialItems.map(([key, label, mark]) => {
    const value = profile[key];
    const href = key === "email" && value ? `mailto:${encodeURIComponent(value)}` : value;
    return href && (key === "email" || validUrl(href))
      ? `<a class="contact-link" href="${escapeHtml(href)}"${key === "email" ? "" : ' target="_blank" rel="noopener noreferrer"'}><span aria-hidden="true">${mark}</span>${escapeHtml(value)}</a>`
      : `<span class="contact-placeholder">${label} contact to be added</span>`;
  }).join("");

  document.querySelector("#download-cv").addEventListener("click", () => {
    document.querySelector("#cv-note").hidden = false;
    window.print();
  });

  renderProjects();
})();
