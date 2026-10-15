/* ============================================================
   PORTFOLIO — js/main.js
   ------------------------------------------------------------
   This file reads SITE_DATA (from data.js) and fills the page.
   You should NOT need to edit anything here.
   ------------------------------------------------------------
   What it does:
   1. Fills static texts (name, role, about, contact…)
   2. Builds hero buttons, facts, project cards, skills, socials
   3. Mobile menu open/close
   4. Scroll-reveal animation for sections
============================================================ */

/* ── Small helper: create an element with class & text ─────── */
function el(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text !== undefined) node.textContent = text;
  return node;
}

/* ── 1. STATIC TEXTS ──────────────────────────────────────── */
// #region agent log
fetch('http://127.0.0.1:7437/ingest/9b4aa44e-0d3f-4972-b2c3-6ebe7fdab96d',{method:'POST',headers:{'Content-Type':'application/json','X-Debug-Session-Id':'f7c45d'},body:JSON.stringify({sessionId:'f7c45d',runId:'pre-fix',hypothesisId:'A',location:'js/main.js:static',message:'main.js started',data:{hasSiteData:typeof SITE_DATA!=='undefined',name:typeof SITE_DATA!=='undefined'?SITE_DATA.name:null,projectCount:typeof SITE_DATA!=='undefined'?SITE_DATA.projects&&SITE_DATA.projects.length:null,innerWidth:window.innerWidth},timestamp:Date.now()})}).catch(()=>{});
window.addEventListener('error',(e)=>{fetch('http://127.0.0.1:7437/ingest/9b4aa44e-0d3f-4972-b2c3-6ebe7fdab96d',{method:'POST',headers:{'Content-Type':'application/json','X-Debug-Session-Id':'f7c45d'},body:JSON.stringify({sessionId:'f7c45d',runId:'pre-fix',hypothesisId:'A',location:'js/main.js:onerror',message:'window error',data:{err:String(e.message),file:e.filename,line:e.lineno},timestamp:Date.now()})}).catch(()=>{});});
// #endregion
document.getElementById("nav-name").textContent   = SITE_DATA.name;
document.getElementById("hero-greeting").textContent = SITE_DATA.greeting;
document.getElementById("hero-name").textContent  = SITE_DATA.name;
document.getElementById("hero-role").textContent  = SITE_DATA.role;
document.getElementById("about-text").textContent = SITE_DATA.about;
document.getElementById("contact-lead").textContent = SITE_DATA.contactLead;
document.getElementById("footer-name").textContent = SITE_DATA.name;

/* ── 2. HERO BUTTONS ──────────────────────────────────────── */
const heroActions = document.getElementById("hero-actions");
SITE_DATA.heroActions.forEach((action) => {
  const a = el("a", "btn btn-" + action.type, action.label);
  a.href = action.link;
  heroActions.appendChild(a);
});

/* ── 3. ABOUT FACTS ───────────────────────────────────────── */
const factsList = document.getElementById("about-facts");
SITE_DATA.facts.forEach((fact) => {
  const li = el("li");
  li.appendChild(el("span", "label", fact.label));
  li.appendChild(el("span", "value", fact.value));
  factsList.appendChild(li);
});

/* ── 4. PROJECT CARDS ─────────────────────────────────────── */
const projectGrid = document.getElementById("project-grid");
SITE_DATA.projects.forEach((project) => {
  const card = el("article", "project-card");

  // Title + description
  card.appendChild(el("h3", "", project.title));
  card.appendChild(el("p", "", project.description));

  // Tech tags row
  const tags = el("div", "project-tags");
  project.tags.forEach((t) => tags.appendChild(el("span", "tag", t)));
  card.appendChild(tags);

  // Link at the bottom (only if a link is set and not "#")
  if (project.link && project.link !== "#") {
    const link = el("a", "project-link", "View project →");
    link.href = project.link;
    link.target = "_blank";       // open in a new tab
    link.rel = "noopener";        // security best practice
    card.appendChild(link);
  }

  projectGrid.appendChild(card);
});

/* ── 5. SKILL CHIPS ───────────────────────────────────────── */
const skillTags = document.getElementById("skill-tags");
SITE_DATA.skills.forEach((skill) => {
  skillTags.appendChild(el("span", "tag", skill));
});

/* ── 6. CONTACT & SOCIAL LINKS ────────────────────────────── */
const emailBtn = document.getElementById("contact-email");
emailBtn.href = "mailto:" + SITE_DATA.email;
emailBtn.textContent = "Email me";   // or change the label here

const socialLinks = document.getElementById("social-links");
SITE_DATA.socials.forEach((social) => {
  const a = el("a", "", social.label);
  a.href = social.link;
  a.target = "_blank";
  a.rel = "noopener";
  socialLinks.appendChild(a);
});

/* ── 7. FOOTER YEAR (auto-updates) ────────────────────────── */
document.getElementById("year").textContent = new Date().getFullYear();

/* ── 8. MOBILE MENU ───────────────────────────────────────── */
const navToggle = document.getElementById("nav-toggle");
const navLinks  = document.querySelector(".nav-links");

// #region agent log
fetch('http://127.0.0.1:7437/ingest/9b4aa44e-0d3f-4972-b2c3-6ebe7fdab96d',{method:'POST',headers:{'Content-Type':'application/json','X-Debug-Session-Id':'f7c45d'},body:JSON.stringify({sessionId:'f7c45d',runId:'pre-fix',hypothesisId:'A',location:'js/main.js:nav-bind',message:'binding mobile menu listeners',data:{hasToggle:!!navToggle,hasLinks:!!navLinks,toggleDisplay:navToggle?getComputedStyle(navToggle).display:null,linksPos:navLinks?getComputedStyle(navLinks).position:null,mq:window.matchMedia('(max-width: 768px)').matches},timestamp:Date.now()})}).catch(()=>{});
// #endregion
navToggle.addEventListener("click", (event) => {
  // Toggle the "open" class on button + menu panel
  const isOpen = navLinks.classList.toggle("open");
  navToggle.classList.toggle("open", isOpen);
  navToggle.setAttribute("aria-expanded", isOpen);
  // #region agent log
  const cs = getComputedStyle(navLinks);
  fetch('http://127.0.0.1:7437/ingest/9b4aa44e-0d3f-4972-b2c3-6ebe7fdab96d',{method:'POST',headers:{'Content-Type':'application/json','X-Debug-Session-Id':'f7c45d'},body:JSON.stringify({sessionId:'f7c45d',runId:'pre-fix',hypothesisId:'B',location:'js/main.js:nav-click',message:'hamburger clicked',data:{isOpen,targetTag:event.target&&event.target.tagName,currentTag:event.currentTarget&&event.currentTarget.tagName,navClass:navLinks.className,btnClass:navToggle.className,maxHeight:cs.maxHeight,navHeight:navLinks.getBoundingClientRect().height,innerWidth:window.innerWidth},timestamp:Date.now()})}).catch(()=>{});
  // #endregion
});

// Close the menu automatically after clicking a link
navLinks.addEventListener("click", (event) => {
  // #region agent log
  fetch('http://127.0.0.1:7437/ingest/9b4aa44e-0d3f-4972-b2c3-6ebe7fdab96d',{method:'POST',headers:{'Content-Type':'application/json','X-Debug-Session-Id':'f7c45d'},body:JSON.stringify({sessionId:'f7c45d',runId:'pre-fix',hypothesisId:'D',location:'js/main.js:nav-link-click',message:'nav panel click',data:{targetTag:event.target&&event.target.tagName,willClose:event.target&&event.target.tagName==='A'},timestamp:Date.now()})}).catch(()=>{});
  // #endregion
  if (event.target.tagName === "A") {
    navLinks.classList.remove("open");
    navToggle.classList.remove("open");
    navToggle.setAttribute("aria-expanded", "false");
  }
});

/* ── 9. SCROLL-REVEAL ANIMATION ───────────────────────────── */
// Elements with .reveal fade in when they enter the viewport.
document.querySelectorAll(".reveal").forEach((section) => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);  // animate only once
      }
    });
  }, { threshold: 0.15 });

  observer.observe(section);
});
// #region agent log
fetch('http://127.0.0.1:7437/ingest/9b4aa44e-0d3f-4972-b2c3-6ebe7fdab96d',{method:'POST',headers:{'Content-Type':'application/json','X-Debug-Session-Id':'f7c45d'},body:JSON.stringify({sessionId:'f7c45d',runId:'pre-fix',hypothesisId:'E',location:'js/main.js:end',message:'main.js finished',data:{revealCount:document.querySelectorAll('.reveal').length,visibleCount:document.querySelectorAll('.reveal.visible').length,title:document.title,dataName:SITE_DATA.name},timestamp:Date.now()})}).catch(()=>{});
// #endregion
