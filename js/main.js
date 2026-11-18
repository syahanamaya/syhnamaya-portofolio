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

  const renderCaseStudy = (index) => {
    activeProjectIndex = index;
    activeImageIndex = 0;
    const project = visibleProjects[index];
    const details = project.caseStudy || {};
    const image = project.images[activeImageIndex];
    const caption = imageLabel(project, activeImageIndex);
    const relatedProjectIndex = details.relatedProject
      ? visibleProjects.findIndex((relatedProject) => relatedProject.title === details.relatedProject.projectTitle)
      : -1;
    const metaItems = [
      ["Project Type", details.projectType],
      ["Year", details.year],
      ["Role", details.role],
      ["Tools", Array.isArray(details.tools) ? details.tools.join(", ") : details.tools],
      ["Testing", details.testing]
    ].filter(([, value]) => value);
    const paragraphs = (value) => (Array.isArray(value) ? value : [value])
      .filter(Boolean)
      .map((text) => `<p>${escapeHtml(text)}</p>`)
      .join("");
    const sections = [
      details.overview || project.description
        ? `<section class="project-info-section project-overview"><h3>Project Overview</h3>${paragraphs(details.overview || project.description)}</section>`
        : "",
      details.problem || details.objective
        ? `<div class="project-context-sections">
            ${details.problem ? `<section class="project-info-section"><h3>Problem</h3>${paragraphs(details.problem)}</section>` : ""}
            ${details.objective ? `<section class="project-info-section"><h3>${escapeHtml(details.objectiveTitle || "Objective")}</h3>${paragraphs(details.objective)}</section>` : ""}
          </div>`
        : "",
      Array.isArray(details.designObjectives) && details.designObjectives.length
        ? `<section class="project-info-section"><h3>Design Objective</h3><ul class="project-objective-list">${details.designObjectives.map((objective) => `<li>${escapeHtml(objective)}</li>`).join("")}</ul></section>`
        : "",
      details.targetUser
        ? `<section class="project-info-section"><h3>Target User</h3>${paragraphs(details.targetUser)}</section>`
        : "",
      Array.isArray(details.userRoles) && details.userRoles.length
        ? `<section class="project-info-section"><h3>User Roles</h3><ul class="project-role-list">${details.userRoles.map((role) => `<li><strong>${escapeHtml(role.title)}</strong><span>${escapeHtml(role.description)}</span></li>`).join("")}</ul></section>`
        : "",
      Array.isArray(details.features) && details.features.length
        ? `<section class="project-info-section"><h3>UI Design &amp; Features</h3><ul class="project-feature-list">${details.features.map((feature) => `<li><strong>${escapeHtml(feature.title)}</strong><span>${escapeHtml(feature.description)}</span></li>`).join("")}</ul></section>`
        : "",
      Array.isArray(details.featureGroups) && details.featureGroups.length
        ? `<section class="project-info-section"><h3>Main Features</h3><div class="project-feature-groups">${details.featureGroups.map((group) => `<div class="project-feature-group"><h4>${escapeHtml(group.title)}</h4><ul>${group.items.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul></div>`).join("")}</div></section>`
        : "",
      Array.isArray(details.contribution) && details.contribution.length
        ? `<section class="project-info-section"><h3>My Contribution</h3><ul>${details.contribution.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul></section>`
        : "",
      details.result
        ? `<section class="project-info-section project-result"><h3>${escapeHtml(details.resultTitle || "Result")}</h3>${paragraphs(details.result)}</section>`
        : "",
      details.relatedProject
        ? `<section class="project-info-section project-related"><h3>Related Project</h3><p>${escapeHtml(details.relatedProject.description)}</p>${relatedProjectIndex >= 0
          ? `<button type="button" class="related-project-link" data-related-project-index="${relatedProjectIndex}">${escapeHtml(details.relatedProject.title)} <span aria-hidden="true">↗</span></button>`
          : `<p class="related-project-title">${escapeHtml(details.relatedProject.title)}</p>`}</section>`
        : ""
    ].filter(Boolean).join("");
    const projectLinks = [
      ["GitHub", details.links && details.links.github],
      ["Live Demo", details.links && details.links.liveDemo]
    ].filter(([, href]) => href && validUrl(href));
    caseStudyContent.innerHTML = `
      <header class="case-study-header">
        <p class="eyebrow"><span class="eyebrow-line"></span> ${escapeHtml(project.category || "PROJECT CASE STUDY")}</p>
        <h2 id="case-study-title">${escapeHtml(details.displayTitle || project.title || "Project title to be added")}</h2>
        ${details.subtitle ? `<p class="project-header-subtitle">${escapeHtml(details.subtitle)}</p>` : ""}
        <p class="project-header-description">${escapeHtml(project.description || "")}</p>
        ${metaItems.length ? `<dl class="project-meta-list">${metaItems.map(([label, value]) => `<div><dt>${escapeHtml(label)}</dt><dd>${escapeHtml(value)}</dd></div>`).join("")}</dl>` : ""}
      </header>
      <div class="project-detail-layout">
        <div class="project-visual-column">
          <div class="project-gallery">
            <div class="project-gallery-stage">
              <button class="project-gallery-zoom" type="button" data-image-preview aria-label="Enlarge ${escapeHtml(caption)}">
                <img class="project-gallery-image" src="${escapeHtml(encodeURI(image.src))}" alt="${escapeHtml(`${project.title}: ${caption}`)}">
              </button>
              ${project.images.length > 1 ? `<button class="gallery-arrow gallery-previous" type="button" data-image-step="-1" aria-label="Previous image">‹</button><button class="gallery-arrow gallery-next" type="button" data-image-step="1" aria-label="Next image">›</button><span class="gallery-counter" aria-live="polite">${activeImageIndex + 1} / ${project.images.length}</span>` : ""}
            </div>
            <p class="project-gallery-caption">${escapeHtml(caption)} <span>· Click image to enlarge</span></p>
          </div>
        </div>
        <div class="project-detail-copy">
          ${sections}
          ${projectLinks.length ? `<section class="project-info-section project-links"><h3>Project Links</h3><div>${projectLinks.map(([label, href]) => `<a href="${escapeHtml(href)}" target="_blank" rel="noopener noreferrer">${label} <span aria-hidden="true">↗</span></a>`).join("")}</div></section>` : ""}
        </div>
      </div>`;
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
    const relatedProjectButton = event.target.closest("[data-related-project-index]");
    if (relatedProjectButton) {
      renderCaseStudy(Number(relatedProjectButton.dataset.relatedProjectIndex));
      return;
    }
    const previewButton = event.target.closest("[data-image-preview]");
    if (previewButton) {
      const project = visibleProjects[activeProjectIndex];
      const image = project.images[activeImageIndex];
      certificatePreview.src = encodeURI(image.src);
      certificatePreview.alt = `${project.title}: ${imageLabel(project, activeImageIndex)}`;
      certificateCaption.textContent = `${project.title} · ${imageLabel(project, activeImageIndex)}`;
      imageDialog.showModal();
      document.body.classList.add("dialog-open");
      return;
    }
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
  document.addEventListener("keydown", (event) => {
    if (event.key !== "Escape") return;
    const openDialogs = [...document.querySelectorAll("dialog[open]")];
    const topDialog = openDialogs[openDialogs.length - 1];
    if (topDialog) {
      event.preventDefault();
      closeDialog(topDialog);
    }
  });
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
