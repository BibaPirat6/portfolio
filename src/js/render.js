import { projects } from "../data/projects.js";
import { skillCategories, roadmap } from "../data/content.js";

/* ---------- Skills ---------- */
function renderSkills() {
    const grid = document.getElementById("skills-grid");
    if (!grid) return;

    grid.innerHTML = skillCategories
        .map(
            (cat) => `
        <div class="card p-6 reveal">
          <h3 class="font-semibold mb-4">${cat.title}</h3>
          <div class="flex flex-wrap gap-2">
            ${cat.items.map((item) => `<span class="tag tag-muted">${item}</span>`).join("")}
          </div>
        </div>`
        )
        .join("");
}

/* ---------- Projects ---------- */
function projectCard(p) {
    return `
    <article class="card p-7 flex flex-col reveal" data-category="${p.category.split(" ")[0]} ${p.category}">
      <div class="flex items-start justify-between gap-4 mb-3">
        <div>
          ${p.flagship ? '<span class="tag mb-2 inline-block">flagship</span>' : ""}
          ${p.internship ? '<span class="tag mb-2 inline-block">практика</span>' : ""}
          <h3 class="text-xl font-bold">${p.title}</h3>
          <p class="text-sm mt-1" style="color:var(--muted)">${p.tagline}</p>
        </div>
      </div>

      <p class="text-sm mb-4" style="color:var(--text)"><strong>Проблема:</strong> ${p.problem}</p>
      <p class="text-sm mb-4" style="color:var(--text)"><strong>Решение:</strong> ${p.solution}</p>

      <div class="flex flex-wrap gap-2 mb-5">
        ${p.stack.map((s) => `<span class="tag tag-muted">${s}</span>`).join("")}
      </div>

      <details class="mb-5 text-sm">
        <summary class="cursor-pointer font-medium mb-2">Функциональность и архитектура</summary>
        <ul class="list-disc pl-5 space-y-1 mt-2" style="color:var(--muted)">
          ${p.features.map((f) => `<li>${f}</li>`).join("")}
        </ul>
        <p class="mt-3" style="color:var(--muted)"><strong>Архитектура:</strong> ${p.architecture}</p>
        <p class="mt-3" style="color:var(--muted)"><strong>Что заинтересует работодателя:</strong> ${p.hiringNote}</p>
      </details>

      <div class="mt-auto flex gap-3 pt-4 border-t" style="border-color:var(--border)">
        <a href="${p.github}" target="_blank" rel="noopener" class="btn btn-secondary text-sm py-2 px-4 flex-1">GitHub</a>
        ${p.demo ? `<a href="${p.demo}" target="_blank" rel="noopener" class="btn btn-primary text-sm py-2 px-4 flex-1">Демо</a>` : ""}
      </div>
    </article>`;
}

function renderProjects() {
    const grid = document.getElementById("projects-grid");
    if (!grid) return;

    // flagship first, already ordered in data source
    grid.innerHTML = projects.map(projectCard).join("");
}

function initProjectFilters() {
    const buttons = document.querySelectorAll("#project-filters [data-filter]");
    const cards = () => document.querySelectorAll("#projects-grid article");

    buttons.forEach((btn) => {
        btn.addEventListener("click", () => {
            const filter = btn.getAttribute("data-filter");

            buttons.forEach((b) => b.classList.remove("tag"));
            buttons.forEach((b) => (b.className = "tag tag-muted"));
            btn.className = "tag";
            btn.style.cursor = "pointer";

            cards().forEach((card) => {
                const cat = card.getAttribute("data-category");
                const show = filter === "all" || cat.includes(filter);
                card.style.display = show ? "flex" : "none";
            });
        });
    });
}

/* ---------- Roadmap ---------- */
function renderRoadmap() {
    const doneEl = document.getElementById("roadmap-done");
    const nextEl = document.getElementById("roadmap-next");
    if (!doneEl || !nextEl) return;

    doneEl.innerHTML = roadmap.done
        .map((item) => `<div class="roadmap-item done"><span class="mono text-sm">${item}</span></div>`)
        .join("");

    nextEl.innerHTML = roadmap.next
        .map((item) => `<div class="roadmap-item"><span class="mono text-sm" style="color:var(--muted)">${item}</span></div>`)
        .join("");
}

/* ---------- Hero node graph (signature element) ---------- */
function renderNodeGraph() {
    const svg = document.getElementById("node-graph");
    if (!svg) return;

    // Nodes echo an org-chart / system-architecture shape — a nod to the
    // flagship project's hierarchy model (commissariat → department → role).
    const nodes = [
        { x: 980, y: 120 }, { x: 1140, y: 90 }, { x: 1180, y: 220 },
        { x: 1020, y: 260 }, { x: 1200, y: 360 }, { x: 1080, y: 420 },
        { x: 900, y: 380 }, { x: 1160, y: 500 }, { x: 980, y: 560 },
        { x: 1220, y: 620 }
    ];

    const edges = [
        [0, 1], [0, 2], [1, 2], [2, 3], [2, 4], [3, 6],
        [4, 5], [5, 6], [4, 7], [5, 8], [7, 9], [5, 9]
    ];

    const lines = edges
        .map(([a, b]) => {
            const n1 = nodes[a];
            const n2 = nodes[b];
            return `<line x1="${n1.x}" y1="${n1.y}" x2="${n2.x}" y2="${n2.y}" />`;
        })
        .join("");

    const circles = nodes
        .map(
            (n, i) =>
                `<circle class="${i % 3 === 0 ? "node-pulse" : ""}" cx="${n.x}" cy="${n.y}" r="${i % 3 === 0 ? 4 : 3}" />`
        )
        .join("");

    svg.innerHTML = lines + circles;
}

export function renderAll() {
    renderSkills();
    renderProjects();
    initProjectFilters();
    renderRoadmap();
    renderNodeGraph();
}
