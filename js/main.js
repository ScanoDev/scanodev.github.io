// ============================================================
// Lógica de la página. No necesitas editar este archivo.
// Todo el contenido sale de js/content.js.
// ============================================================

let lang = "en";
try { lang = localStorage.getItem("lang") || "en"; } catch (e) {}

// Orden en que aparecen las secciones en la página
const SECTION_ORDER = ["experience", "work", "projects", "certs", "about", "contact"];

const t = (v) => (!v ? "" : typeof v === "object" && !Array.isArray(v) ? (v[lang] ?? v.en ?? "") : v);
const pad = (n) => String(n).padStart(2, "0");
const $ = (id) => document.getElementById(id);
const numberOf = (section) => pad(SECTION_ORDER.indexOf(section) + 1);
const tags = (list) => (list && list.length ? `<span class="tags">${list.join(" / ")}</span>` : "");
const linkList = (list, cls = "row-links") => {
  const html = (list || []).map((l) => `<a href="${l.url}" target="_blank" rel="noopener">${t(l.label)} ↗</a>`).join("");
  return html ? `<div class="${cls}">${html}</div>` : "";
};

/* ---------- Portada ---------- */
function renderHero() {
  $("legend").innerHTML = SECTION_ORDER.map((section) => `
    <li><a href="#${section}">
      <span class="l-num">${numberOf(section)}</span>
      <span class="l-title">${t(TEXTS[section].title)}</span>
    </a></li>`).join("");
}

/* ---------- Secciones ---------- */
function sectionHead(section) {
  const sub = t(TEXTS[section].sub);
  return `
    <div class="grid sec-head">
      <span class="sec-num">${numberOf(section)}</span>
      <h2 class="sec-title">${t(TEXTS[section].title)}</h2>
      ${sub ? `<p class="sec-sub">${sub}</p>` : ""}
    </div>`;
}

function renderExperience() {
  const items = EXPERIENCE.map((e) => `
    <li class="grid job">
      <div class="job-when">
        <span class="job-dates">${t(e.dates)}</span>
        <span class="job-place">${e.place || ""}</span>
      </div>
      <div class="job-what">
        <h3 class="job-role">${t(e.role)}</h3>
        <span class="job-org">${e.org}</span>
      </div>
      <div class="job-body">
        <ul class="bullets">${(t(e.bullets) || []).map((b) => `<li>${b}</li>`).join("")}</ul>
        ${tags(e.tags)}
      </div>
    </li>`).join("");
  return `<ol class="jobs">${items}</ol>`;
}

function renderWork() {
  const items = WORK.map((p) => `
    <article class="work">
      <div class="thumb">
        ${p.image ? `<img src="${p.image}" alt="${t(p.title)}" loading="lazy" onerror="this.remove()">` : ""}
      </div>
      <div class="meta"><span>${p.org || ""}</span><span class="year">${p.year || ""}</span></div>
      <h3>${t(p.title)}</h3>
      <p>${t(p.description)}</p>
      ${tags(p.tags)}
    </article>`).join("");
  return `<div class="grid gallery work-gallery">${items}</div>`;
}

function renderDetail(p) {
  const metrics = (p.metrics || []).map((m) => `
    <div class="stat"><span class="stat-value">${m.value}</span><span class="stat-label">${t(m.label)}</span></div>`).join("");
  const details = (p.details || []).map((d) => `
    <div class="fact"><dt>${t(d.label)}</dt><dd>${t(d.text)}</dd></div>`).join("");
  const images = (p.images || []).map((s) => `
    <figure class="shot">
      <a class="shot-frame" href="${s.image}" target="_blank" rel="noopener"><img src="${s.image}" alt="${t(s.caption)}" loading="lazy"></a>
      <figcaption>${t(s.caption)}</figcaption>
    </figure>`).join("");
  return `
    <div class="modal-bar">
      <span>${t(p.label)}${p.year ? ` · ${p.year}` : ""}</span>
      <button class="modal-close" data-close>${t(TEXTS.close)} ✕</button>
    </div>
    <div class="modal-body">
      <h3 class="case-title">${t(p.title)}</h3>
      ${p.inProgress ? `<span class="badge">${t(TEXTS.inProgress)}</span>` : ""}
      <p class="case-summary">${t(p.description)}</p>
      ${p.context ? `<p class="case-context">${t(p.context)}</p>` : ""}
      ${linkList(p.links, "case-links")}
      ${metrics ? `<div class="stats case-stats">${metrics}</div>` : ""}
      ${details ? `<dl class="case-details">${details}</dl>` : ""}
      ${images ? `<div class="shots">${images}</div>` : (p.image ? `<div class="shots"><figure class="shot"><span class="shot-frame"><img src="${p.image}" alt=""></span></figure></div>` : "")}
      ${tags(p.tags)}
    </div>`;
}

function openProject(i) {
  const m = $("modal");
  m.innerHTML = renderDetail(PERSONAL[i]);
  m.querySelector("[data-close]").addEventListener("click", () => m.close());
  if (m.showModal) m.showModal(); else m.setAttribute("open", "");
  m.scrollTop = 0;
}

function renderProjects() {
  const items = PERSONAL.map((p, i) => `
    <article class="work project">
      <button class="project-open" data-project="${i}" aria-label="${t(TEXTS.open)}: ${t(p.title)}">
        <div class="thumb">
          ${p.image ? `<img src="${p.image}" alt="${t(p.title)}" loading="lazy" onerror="this.remove()">` : ""}
          <span class="thumb-cta">${t(TEXTS.open)} →</span>
        </div>
        <div class="meta"><span>${t(p.label)}</span><span class="year">${p.year || ""}</span></div>
        <h3>${t(p.title)}${p.inProgress ? `<span class="badge">${t(TEXTS.inProgress)}</span>` : ""}</h3>
        <p>${t(p.description)}</p>
        ${tags(p.tags)}
      </button>
    </article>`).join("");
  return `<div class="grid gallery">${items}</div>`;
}

// Si el logo no carga, vuelve a mostrar las letras
function certFallback(img) {
  const box = img.parentElement;
  box.classList.remove("is-logo");
  if (box.dataset.red) box.classList.add("is-red");
  box.textContent = box.dataset.mark;
}

function renderCerts() {
  const items = CERTS.map((c) => {
    const href = c.url || c.file || "";
    return `
    <article class="cert">
      ${c.logo
        ? `<span class="cert-mark is-logo" data-mark="${c.mark}" data-red="${c.accent ? 1 : ""}"><img src="${c.logo}" alt="${c.issuer}" onerror="certFallback(this)"></span>`
        : `<span class="cert-mark ${c.accent ? "is-red" : ""}">${c.mark}</span>`}
      <div class="cert-body">
        <span class="cert-issuer">${c.issuer}</span>
        <h3 class="cert-title">${t(c.title)}</h3>
        <div class="cert-foot">
          <span class="year">${t(c.date)}</span>
          ${href ? `<a href="${href}" target="_blank" rel="noopener">${t(TEXTS.verify)} ↗</a>` : ""}
        </div>
      </div>
    </article>`;
  }).join("");
  return `<div class="grid certs">${items}</div>`;
}

function renderAbout() {
  const facts = ABOUT.facts.map((f) => `
    <div class="fact"><dt>${t(f.label)}</dt><dd>${t(f.value)}</dd></div>`).join("");
  const tools = (ABOUT.tools || []).map((g) => `
    <div class="tool"><span class="tool-label">${t(g.label)}</span>
      <ul class="chips">${g.items.map((x) => `<li>${x}</li>`).join("")}</ul></div>`).join("");
  return `
    <div class="grid">
      <div class="about-col">
        <p class="about-text">${t(ABOUT.text)}</p>
        <p class="about-swiss">${t(ABOUT.swiss)}</p>
      </div>
      <dl class="facts">${facts}</dl>
    </div>
    <div class="grid tools">${tools}</div>`;
}

function renderContact() {
  return `
    <div class="grid">
      <a class="contact-mail" href="mailto:${PROFILE.email}">${PROFILE.email}</a>
      <div class="contact-links">
        ${PROFILE.links.map((l) => `<a href="${l.url}" target="_blank" rel="noopener">${l.label} ↗</a>`).join("")}
        ${PROFILE.cv ? `<a href="${PROFILE.cv}" target="_blank" rel="noopener">${t(TEXTS.downloadCv)} ↓</a>` : ""}
      </div>
    </div>`;
}

const RENDERERS = {
  experience: renderExperience,
  work: renderWork,
  projects: renderProjects,
  certs: renderCerts,
  about: renderAbout,
  contact: renderContact,
};

/* ---------- Página completa ---------- */
function render() {
  document.documentElement.lang = lang;
  document.title = `${PROFILE.name} | ${t(PROFILE.role)}`;

  $("top-name").textContent = PROFILE.name;
  $("top-role").textContent = t(PROFILE.role);
  $("top-location").textContent = PROFILE.location;
  $("available").textContent = t(PROFILE.available);
  $("name").textContent = PROFILE.name;
  $("tagline").textContent = t(PROFILE.tagline);
  $("intro").textContent = t(PROFILE.intro);
  $("links").innerHTML =
    (PROFILE.cv ? `<a class="btn" href="${PROFILE.cv}" target="_blank" rel="noopener">${t(TEXTS.downloadCv)} ↓</a>` : "") +
    `<a href="mailto:${PROFILE.email}">Email</a>` +
    PROFILE.links.map((l) => `<a href="${l.url}" target="_blank" rel="noopener">${l.label}</a>`).join("");

  renderHero();

  $("sections").innerHTML = SECTION_ORDER.map((section) =>
    `<section class="section" id="${section}">${sectionHead(section)}${RENDERERS[section]()}</section>`
  ).join("");

  document.querySelectorAll("[data-project]").forEach((b) =>
    b.addEventListener("click", () => openProject(+b.dataset.project)));

  $("footer-name").textContent = `© ${new Date().getFullYear()} ${PROFILE.name}`;
  $("footer-top").textContent = `${t(TEXTS.top)} ↑`;

  document.querySelectorAll(".lang button").forEach((b) => b.classList.toggle("is-on", b.dataset.lang === lang));
}

document.querySelectorAll(".lang button").forEach((b) => {
  b.addEventListener("click", () => {
    lang = b.dataset.lang;
    try { localStorage.setItem("lang", lang); } catch (e) {}
    // Cerrar el detalle al hacer clic fuera de él
$("modal").addEventListener("click", (e) => { if (e.target.id === "modal") $("modal").close(); });

render();
  });
});

// Cerrar el detalle al hacer clic fuera de él
$("modal").addEventListener("click", (e) => { if (e.target.id === "modal") $("modal").close(); });

render();
