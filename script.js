const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");
const rows = document.querySelectorAll(".project-row");
const scrollProgress = document.querySelector(".scroll-progress");
const heroCollage = document.querySelector(".hero-collage");

const caseKicker = document.querySelector("#caseKicker");
const caseTitle = document.querySelector("#caseTitle");
const caseBody = document.querySelector("#caseBody");
const caseFacts = document.querySelector("#caseFacts");
const caseActions = document.querySelector("#caseActions");
const caseMedia = document.querySelector("#caseMedia");
const casePanel = document.querySelector("#casePanel");

const cases = {
  kkh: {
    theme: "healthcare",
    kicker: "Project 00 / Live Project / Currently In Development",
    title: "KKH Wayfinding Transformation",
    body:
      "Improving navigation and wayfinding experiences within KK Women's and Children's Hospital, Singapore. This ongoing healthcare innovation project focuses on research planning, interview design, survey development, journey mapping, and service blueprinting.",
    facts: [
      "Ongoing",
      "KK Women's and Children's Hospital",
      "Research Planning",
      "Interview Design",
      "Survey Development",
      "Journey Mapping",
      "Service Blueprinting",
    ],
    actions: [],
    media: `
      <div class="research-board">
        <div class="board-line"></div>
        <div class="sticky blue">Visitor anxiety at decision points</div>
        <div class="sticky white">Signage hierarchy audit</div>
        <div class="sticky pink">Caregiver journey map</div>
        <div class="flow-node start">Entrance</div>
        <div class="flow-node mid">Clinic Tower</div>
        <div class="flow-node end">Appointment</div>
      </div>
    `,
  },
  reef: {
    theme: "ocean",
    kicker: "Project 01 / AI + Sustainability + Decision Support",
    title: "ReefPulse",
    body:
      "A coral reef monitoring system for South China Sea coral bleaching. ReefPulse integrates satellite data, environmental sensors, AI analysis, public interface design, institutional dashboard logic, and a conservation feedback loop system.",
    facts: [
      "Coral Reef Monitoring",
      "South China Sea",
      "AI Analysis",
      "Satellite Data",
      "Environmental Sensors",
      "Public Interface",
      "Institutional Dashboard",
    ],
    actions: [{ label: "Open ReefPulse.pdf", href: "assets/reefpulse.pdf" }],
    media: `<iframe class="pdf-viewer" title="ReefPulse.pdf case study" src="assets/reefpulse.pdf"></iframe>`,
  },
  ev: {
    theme: "audit",
    kicker: "Project 02 / Ethics + Circular Economy + Sustainability",
    title: "Ethical Audit of the EV Battery Recycling System",
    body:
      "A serious investigative editorial audit of the EV battery recycling system, organized through case overview, ethical lens, evidence base, stakeholder map, ethical risks and trade-offs, and redesign proposal.",
    facts: [
      "Case Overview",
      "Ethical Lens",
      "Evidence Base",
      "Stakeholder Map",
      "Ethical Risks & Trade-offs",
      "Redesign Proposal",
    ],
    actions: [],
    media: `
      <div class="audit-board" aria-label="Ethical Audit of the EV Battery Recycling System">
        <header class="audit-hero">
          <span>Ethical Systems Audit / Design & Sustainability / 2026</span>
          <strong>Ethical Audit of the <em>EV Battery</em> Recycling System</strong>
          <p>Is the green transition creating new environmental injustice?</p>
        </header>
        <div class="audit-grid">
          <section class="audit-cell">
            <span>01 / Context</span>
            <h3>Case Overview</h3>
            <p><b>Design object:</b> End-of-life recycling system for NEV power batteries.</p>
            <p><b>Direct users:</b> NEV manufacturers, urban consumers.</p>
            <p><b>Affected users:</b> Informal recyclers, rural and suburban communities.</p>
            <div class="claim-table">
              <div>Claim</div><p>"Lifecycle green sustainability"</p>
              <div>Reality</div><p>80% of batteries go to informal channels, creating "urban benefit, rural cost" greenwashing.</p>
            </div>
          </section>
          <section class="audit-cell">
            <span>02 / Framework</span>
            <h3>Ethical Lens</h3>
            <p><b>Circular economy ethics:</b> weak material circulation, no closed-loop recycling, externalized costs.</p>
            <p><b>Environmental justice:</b> rural heavy metals exceed safe limits while vulnerable groups are excluded.</p>
            <div class="black-note">Cross-validation: negative net welfare, dignity denied, irreversible damage.</div>
          </section>
          <section class="audit-cell">
            <span>03 / Evidence</span>
            <h3>Evidence Base</h3>
            <ol>
              <li>Retired power batteries will grow rapidly.</li>
              <li>Current recycling remains restricted by technology, economy, and policy.</li>
              <li>20 systemic barriers exist across hierarchical levels.</li>
              <li>Improper disposal causes ecological and health risks.</li>
            </ol>
          </section>
          <section class="audit-cell stakeholder-cell">
            <span>04 / Stakeholders</span>
            <h3>Stakeholder Map</h3>
            <article><b>Producers</b><small>Benefits: brand premium. Burdens: EPR pressure.</small><mark>Responsibility Evasion</mark></article>
            <article><b>Consumers</b><small>Benefits: low-cost driving. Burdens: moral dilemma.</small><mark>Lack of Agency</mark></article>
            <article><b>Informal Sectors</b><small>Benefits: short-term income. Burdens: health risks.</small><mark>Exploited Vulnerability</mark></article>
            <article><b>Environment & Communities</b><small>Benefits: none. Burdens: irreversible pollution.</small><mark>Distributive Injustice</mark></article>
          </section>
          <section class="audit-cell">
            <span>05 / Risks</span>
            <h3>Ethical Risks & Trade-offs</h3>
            <p><b>1. Circularity failure:</b> formal recycling below 25% violates lifecycle responsibility.</p>
            <p><b>2. Weak producer duty:</b> profits privatized; environmental costs socialized.</p>
            <p><b>3. Environmental injustice:</b> benefits up, risks down.</p>
            <blockquote>Industry expansion vs. recycling capacity. Are costs truly internalized?</blockquote>
          </section>
          <section class="audit-cell redesign-cell">
            <span>06 / Redesign</span>
            <h3>Redesign Proposal</h3>
            <article><b>Standardized Network</b><small>Mandate automakers to build urban-rural recycling infrastructure.</small></article>
            <article><b>EPR Market Mechanism</b><small>Require automakers to fund recycling and internalize costs.</small></article>
            <article><b>Traceability System</b><small>Create end-to-end tracking from manufacture to recycle.</small></article>
          </section>
        </div>
      </div>
    `,
  },
  picsee: {
    theme: "picsee",
    kicker: "Project 03 / AI + Communication + Travel Experience",
    title: "PicSee",
    body:
      "A travel communication project about helping travelers express themselves overseas when language barriers create uncertainty. The case includes contextual inquiry, interviews, affinity analysis, pain points, HMW framing, product feature study, product development, prototype, and final design.",
    facts: [
      "Contextual Inquiry + Interview",
      "Affinity Analysis",
      "Pain Points",
      "How Might We",
      "Product Features Study",
      "Prototype",
      "Final Design",
    ],
    actions: [{ label: "Open NEW_Updated_Innovation By Design.pdf", href: "assets/picsee-innovation-by-design.pdf" }],
    media: `<iframe class="pdf-viewer" title="PicSee NEW_Updated_Innovation By Design.pdf" src="assets/picsee-innovation-by-design.pdf"></iframe>`,
  },
  exercise: {
    theme: "senior",
    kicker: "Project 04 / AI for Good + Healthy Aging + Behavior Change",
    title: "Increase Exercise Habit Formation in Older Adults via AI Assistant",
    body:
      "A complete project poster for a controlled experiment with 42 seniors in Singapore: 21 control group, 21 intervention group, AI chatbot prototype, Figma prototype, C.A.R.E Framework, findings, limitations, and future direction.",
    facts: [
      "Singapore Ageing Population",
      "42 Seniors",
      "21 Control / 21 Intervention",
      "AI Chatbot Prototype",
      "Figma Prototype",
      "C.A.R.E Framework",
      "Findings",
      "Future Direction",
    ],
    actions: [
      { label: "Open A4 - 33.pdf", href: "assets/ai-exercise-assistant-poster.pdf" },
      { label: "Open Award Certificate", href: "assets/ai-exercise-design-science-certificate.pdf" },
    ],
    media: `
      <iframe class="pdf-viewer" title="A4 - 33.pdf AI Exercise Assistant poster" src="assets/ai-exercise-assistant-poster.pdf"></iframe>
      <a class="award-badge-inline" href="assets/ai-exercise-design-science-certificate.pdf" target="_blank">
        <span>Design Science 2026</span>
        <strong>Risk Taking and Innovation Award</strong>
      </a>
    `,
  },
};

navToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

navLinks.addEventListener("click", (event) => {
  if (event.target.matches("a")) {
    navLinks.classList.remove("open");
    navToggle.setAttribute("aria-expanded", "false");
  }
});

function renderCase(projectKey) {
  const item = cases[projectKey];
  rows.forEach((row) => row.classList.toggle("active", row.dataset.project === projectKey));
  casePanel.dataset.theme = item.theme;
  caseKicker.textContent = item.kicker;
  caseTitle.textContent = item.title;
  caseBody.textContent = item.body;
  caseFacts.innerHTML = item.facts.map((fact) => `<span>${fact}</span>`).join("");
  caseActions.innerHTML = item.actions
    .map((action) => `<a class="button primary" href="${action.href}" target="_blank">${action.label}</a>`)
    .join("");
  caseMedia.innerHTML = item.media;
}

rows.forEach((row) => {
  row.addEventListener("click", () => renderCase(row.dataset.project));
  row.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      renderCase(row.dataset.project);
    }
  });
});

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.16 }
);

document.querySelectorAll(".reveal").forEach((element) => revealObserver.observe(element));

function updateScrollEffects() {
  const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
  const progress = maxScroll > 0 ? (window.scrollY / maxScroll) * 100 : 0;
  scrollProgress.style.width = `${progress}%`;
  heroCollage.style.setProperty("--parallax", `${window.scrollY * 0.08}px`);
}

window.addEventListener("scroll", updateScrollEffects, { passive: true });
updateScrollEffects();
