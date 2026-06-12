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
    title: "Improving Healthcare Experiences Through Service Design",
    body:
      "An ongoing healthcare service experience project for KK Women's and Children's Hospital, Singapore. The work focuses on visitor communication, signage clarity, service touchpoints, journey mapping, and research-backed wayfinding that can reduce stress and improve trust.",
    facts: [
      "KKH Wayfinding Transformation",
      "Ongoing",
      "Healthcare Service Design",
      "Information Accessibility",
      "Visitor Communication",
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
    kicker: "Project 01 / Science Communication + Sustainability + Decision Support",
    title: "Making Complex Sustainability Stories Understandable",
    body:
      "ReefPulse translates coral bleaching data into understandable public and institutional experiences. The project combines satellite data, environmental sensors, AI analysis, risk mapping, dashboards, and feedback loops to support awareness, collaboration, and conservation action.",
    facts: [
      "ReefPulse",
      "Data Storytelling",
      "Public Engagement",
      "Coral Reef Monitoring",
      "South China Sea",
      "Science Communication",
      "Institutional Dashboard",
    ],
    actions: [{ label: "Open ReefPulse.pdf", href: "assets/reefpulse.pdf" }],
    media: `<iframe class="pdf-viewer" title="ReefPulse.pdf case study" src="assets/reefpulse.pdf"></iframe>`,
  },
  ev: {
    theme: "audit",
    kicker: "Project 02 / Ethics + Circular Economy + Sustainability Narratives",
    title: "Understanding the Human Side of the Green Transition",
    body:
      "An editorial systems audit that reveals the hidden human and environmental tensions behind EV battery recycling. The case reframes sustainability as a question of transparency, stakeholder responsibility, policy awareness, and responsible innovation.",
    facts: [
      "EV Battery Audit",
      "Systems Thinking",
      "Stakeholder Mapping",
      "Case Overview",
      "Ethical Lens",
      "Evidence Base",
      "Transparency",
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
    kicker: "Project 03 / Cross-cultural Communication + Travel Experience",
    title: "Breaking Language Barriers Through Cross-cultural Design",
    body:
      "PicSee explores how travelers can express needs overseas when language alone is insufficient. Through contextual inquiry, interviews, affinity analysis, pain point synthesis, product feature study, and prototyping, the project turns cross-cultural empathy into a practical communication experience.",
    facts: [
      "PicSee",
      "Cross-cultural Communication",
      "Localization",
      "Visual Storytelling",
      "Contextual Inquiry + Interview",
      "Affinity Analysis",
      "Pain Points",
      "How Might We",
      "Inclusive Interaction",
    ],
    actions: [{ label: "Open NEW_Updated_Innovation By Design.pdf", href: "assets/picsee-innovation-by-design.pdf" }],
    media: `<iframe class="pdf-viewer" title="PicSee NEW_Updated_Innovation By Design.pdf" src="assets/picsee-innovation-by-design.pdf"></iframe>`,
  },
  exercise: {
    theme: "senior",
    kicker: "Project 04 / Community Engagement + Healthy Aging + Behavior Change",
    title: "Building Trust and Engagement for an Aging Community",
    body:
      "A research-backed healthy aging project with 42 seniors in Singapore: 21 control group and 21 intervention group. The work focuses on trust building, behavioral motivation, community engagement, personalization, and communication design through an AI chatbot and Figma prototype.",
    facts: [
      "AI Exercise Assistant",
      "Community Engagement",
      "Trust Building",
      "Singapore Ageing Population",
      "42 Seniors",
      "21 Control / 21 Intervention",
      "AI Chatbot Prototype",
      "C.A.R.E Framework",
      "Research-backed Insights",
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
