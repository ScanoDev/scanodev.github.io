// ============================================================
// Lógica de la página. No necesitas editar este archivo.
// Todo el contenido sale de js/content.js y el mapa de js/map.js.
// ============================================================

let lang = "en";
try { lang = localStorage.getItem("lang") || "en"; } catch (e) {}

// Nombre de cada región en su propio idioma
const REGION_NAMES = {
  de: "Deutschschweiz",
  fr: "Suisse romande",
  it: "Svizzera italiana",
  rm: "Svizra rumantscha",
};

// Orden en que aparecen las secciones en la página
const SECTION_ORDER = ["experience", "projects", "about", "contact"];

const t = (v) => (!v ? "" : typeof v === "object" ? (v[lang] ?? v.en ?? "") : v);
const pad = (n) => String(n).padStart(2, "0");
const $ = (id) => document.getElementById(id);

// Sección -> región, y sección -> número (01, 02...)
function regionOf(section) {
  return Object.keys(MAP_REGIONS).find((r) => MAP_REGIONS[r] === section) || "";
}
function numberOf(section) {
  return pad(SECTION_ORDER.indexOf(section) + 1);
}

/* ---------- Mapa ---------- */
function renderMap() {
  const { width, height, regions, lakes, labels } = SWISS_MAP;
  let svg = `<svg viewBox="0 0 ${width} ${height}" role="img" aria-label="Map of Switzerland">`;
  for (const r of Object.keys(regions)) {
    const section = MAP_REGIONS[r];
    if (!section) continue;
    const label = `${REGION_NAMES[r]}: ${t(TEXTS[section].title)}`;
    svg += `<a href="#${section}" class="region" data-region="${r}" aria-label="${label}"><title>${label}</title><path d="${regions[r]}"/></a>`;
  }
  svg += `<path class="lakes" d="${lakes}"/>`;
  for (const r of Object.keys(labels)) {
    const section = MAP_REGIONS[r];
    if (!section) continue;
    const [x, y] = labels[r];
    svg += `<text class="num" data-region="${r}" x="${x}" y="${y}">${numberOf(section)}</text>`;
  }
  svg += `</svg>`;
  $("map").innerHTML = svg;

  $("legend").innerHTML = SECTION_ORDER.map((section) => {
    const r = regionOf(section);
    return `<li><a href="#${section}" data-region="${r}">
      <span class="l-num">${numberOf(section)}</span>
      <span class="l-title">${t(TEXTS[section].title)}</span>
      <span class="l-region">${REGION_NAMES[r] || ""}</span>
    </a></li>`;
  }).join("");

  // Resaltar la región en el mapa y en la leyenda al pasar el mouse
  document.querySelectorAll(".map .region, .legend a").forEach((el) => {
    el.addEventListener("mouseenter", () => setActive(el.dataset.region));
    el.addEventListener("mouseleave", () => setActive(null));
    el.addEventListener("focus", () => setActive(el.dataset.region));
    el.addEventListener("blur", () => setActive(null));
  });
}

function setActive(region) {
  document.querySelectorAll("[data-region]").forEach((el) => {
    el.classList.toggle("is-active", region !== null && el.dataset.region === region);
  });
}

/* ---------- Secciones ---------- */
function sectionHead(section) {
  const sub = t(TEXTS[section].sub);
  return `
    <div class="grid sec-head">
      <span class="sec-num">(${numberOf(section)})</span>
      <h2 class="sec-title">${t(TEXTS[section].title)}</h2>
      <span class="sec-region">${REGION_NAMES[regionOf(section)] || ""}</span>
      ${sub ? `<p class="sec-sub">${sub}</p>` : ""}
    </div>`;
}

function renderExperience() {
  const items = PROFESSIONAL.map((p) => `
    <article class="work">
      <div class="thumb">
        <span class="thumb-label">${t(p.label)}</span>
        ${p.image ? `<img src="${p.image}" alt="${t(p.title)}" onerror="this.remove()">` : ""}
      </div>
      <div class="meta"><span>${p.org || ""}</span><span class="year">${p.year || ""}</span></div>
      <h3>${t(p.title)}</h3>
      <p>${t(p.description)}</p>
      <span class="tags">${(p.tags || []).join(" / ")}</span>
    </article>`).join("");
  return `<div class="grid gallery">${items}</div>`;
}

function renderProjects() {
  const rows = PERSONAL.map((p, i) => {
    const links = (p.links || []).map((l) => `<a href="${l.url}" target="_blank" rel="noopener">${t(l.label)} ↗</a>`).join("");
    return `
      <li class="grid row">
        <span class="row-num">${pad(i + 1)}</span>
        <h3 class="row-title">${t(p.title)}${p.comingSoon ? `<span class="badge">${t(TEXTS.comingSoon)}</span>` : ""}</h3>
        <span class="row-label">${t(p.label)}</span>
        <div class="row-body">
          <p>${t(p.description)}</p>
          <span class="tags">${(p.tags || []).join(" / ")}</span>
          ${links ? `<div class="row-links">${links}</div>` : ""}
        </div>
      </li>`;
  }).join("");
  return `<ol class="rows">${rows}</ol>`;
}

function renderAbout() {
  const facts = ABOUT.facts.map((f) => `
    <div class="fact"><dt>${t(f.label)}</dt><dd>${t(f.value)}</dd></div>`).join("");
  return `<div class="grid"><p class="about-text">${t(ABOUT.text)}</p><dl class="facts">${facts}</dl></div>`;
}

function renderContact() {
  const links = PROFILE.links.map((l) => `<a href="${l.url}" target="_blank" rel="noopener">${l.label} ↗</a>`).join("");
  return `
    <div class="grid">
      <a class="contact-mail" href="mailto:${PROFILE.email}">${PROFILE.email}</a>
      <div class="contact-links">${links}</div>
    </div>`;
}

const RENDERERS = {
  experience: renderExperience,
  projects: renderProjects,
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
  $("name").textContent = PROFILE.name;
  $("tagline").textContent = t(PROFILE.tagline);
  $("intro").textContent = t(PROFILE.intro);
  $("links").innerHTML =
    `<a href="mailto:${PROFILE.email}">Email</a>` +
    PROFILE.links.map((l) => `<a href="${l.url}" target="_blank" rel="noopener">${l.label}</a>`).join("");
  $("map-hint").textContent = t(TEXTS.mapHint);

  renderMap();

  $("sections").innerHTML = SECTION_ORDER.map((section) =>
    `<section class="section" id="${section}">${sectionHead(section)}${RENDERERS[section]()}</section>`
  ).join("");

  $("footer-name").textContent = `© ${new Date().getFullYear()} ${PROFILE.name}`;
  $("footer-top").textContent = `${t(TEXTS.top)} ↑`;

  document.querySelectorAll(".lang button").forEach((b) => b.classList.toggle("is-on", b.dataset.lang === lang));
}

document.querySelectorAll(".lang button").forEach((b) => {
  b.addEventListener("click", () => {
    lang = b.dataset.lang;
    try { localStorage.setItem("lang", lang); } catch (e) {}
    render();
  });
});

render();
