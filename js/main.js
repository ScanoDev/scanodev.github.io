// Lógica de la página. No necesitas editar este archivo.

let lang = "en";
try { lang = localStorage.getItem("lang") || "en"; } catch (e) {}

function t(value) {
  if (!value) return "";
  return typeof value === "object" ? value[lang] : value;
}

function card(p) {
  const img = p.image ? `<img src="${p.image}" alt="" onerror="this.remove()">` : "";
  const badge = p.comingSoon ? `<span class="badge">${t(TEXTS.comingSoon)}</span>` : "";
  const org = p.org ? `<span class="org">${p.org}</span>` : "";
  const tags = (p.tags || []).map(tag => `<i>${tag}</i>`).join("");
  const links = (p.links || []).map(l => `<a href="${l.url}" target="_blank">${t(l.label)} →</a>`).join("");

  return `
    <article class="card">
      <div class="thumb">${t(p.label)}${img}${badge}</div>
      <div class="body">
        ${org}
        <h3>${t(p.title)}</h3>
        <p>${t(p.description)}</p>
        <div class="tags">${tags}</div>
        ${links ? `<div class="card-links">${links}</div>` : ""}
      </div>
    </article>`;
}

function render() {
  document.documentElement.lang = lang;
  document.title = `${PROFILE.name} | ${t(PROFILE.role)}`;

  document.getElementById("name").textContent = PROFILE.name;
  document.getElementById("tagline").textContent = t(PROFILE.tagline);
  document.getElementById("about").textContent = t(PROFILE.about);
  document.getElementById("links").innerHTML = PROFILE.links
    .map(l => `<a href="${l.url}" target="_blank">${l.label}</a>`).join("");

  document.getElementById("langBtn").textContent = t(TEXTS.langButton);
  document.getElementById("prof-title").textContent = t(TEXTS.profTitle);
  document.getElementById("prof-sub").textContent = t(TEXTS.profSub);
  document.getElementById("pers-title").textContent = t(TEXTS.persTitle);
  document.getElementById("pers-sub").textContent = t(TEXTS.persSub);

  document.getElementById("prof-grid").innerHTML = PROFESSIONAL.map(card).join("");
  document.getElementById("pers-grid").innerHTML = PERSONAL.map(card).join("");

  document.getElementById("footer").textContent = `© ${new Date().getFullYear()} ${PROFILE.name}`;
}

document.getElementById("langBtn").addEventListener("click", () => {
  lang = lang === "en" ? "es" : "en";
  try { localStorage.setItem("lang", lang); } catch (e) {}
  render();
});

render();