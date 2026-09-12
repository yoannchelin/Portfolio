// ===== Links config (edit here) =====
window.PORTFOLIO_LINKS = {
  github: "https://github.com/yoannchelin",
  email: "Yoann.chelin@epitech.eu",

  // Git Archaeologist ecosystem (Go / MCP)
  archaeologist: "https://github.com/yoannchelin/Git-archeologist",
  blastRadius:   "https://github.com/yoannchelin/Blaster",
  bugHunter:     "https://github.com/yoannchelin/Bug-Hunter",
  testSentinel:  "https://github.com/yoannchelin/Test-sentinel",
  depSentinel:   "https://github.com/yoannchelin/Dep-sentinel",

  docwhisper: {
    repo: "https://github.com/yoannchelin/docwhisper",
    demo: "" // add later
  },

  saasStarter: {
    repo: "https://github.com/yoannchelin/create-saas-app",
    demo: "" // add later
  },

  cafeflow: {
    repo: "https://github.com/yoannchelin/cafeflow-",
    demo: "https://cafeflow-inky.vercel.app"
  },

  quant: {
    repo: "https://github.com/yoannchelin/bot-crypto",
    demo: "" // local-only dashboard
  },

  jobhunt: {
    repo: "https://github.com/yoannchelin/Jobhunt",
    demo: "" // add later
  },

  cv: "./assets/Yoann_Chelin_CV.pdf"
};

// ===== Apply links =====
(function () {
  const y = document.getElementById("year");
  if (y) y.textContent = String(new Date().getFullYear());

  const L = window.PORTFOLIO_LINKS;

  const setHref = (id, url, disableIfEmpty = false) => {
    const el = document.getElementById(id);
    if (!el) return;

    if (disableIfEmpty && (!url || url.trim() === "")) {
      el.setAttribute("href", "#");
      el.setAttribute("aria-disabled", "true");
      el.style.pointerEvents = "none";
      el.style.opacity = "0.6";
      return;
    }

    el.setAttribute("href", url);
    el.removeAttribute("aria-disabled");
    el.style.pointerEvents = "";
    el.style.opacity = "";
  };

  setHref("githubLink", L.github);
  setHref("githubLink2", L.github);
  setHref("githubLink3", L.github);
  setHref("emailLink", `mailto:${L.email}`);
  setHref("emailLink2", `mailto:${L.email}`);
  setHref("cvLink", L.cv);
  setHref("cvLink2", L.cv);

  // Git Archaeologist ecosystem
  setHref("agentArchaeo", L.archaeologist);
  setHref("agentBlast", L.blastRadius);
  setHref("agentHunter", L.bugHunter);
  setHref("agentSentinel", L.testSentinel);
  setHref("agentDep", L.depSentinel);

  // Projects
  setHref("docwhisperRepo", L.docwhisper.repo);
  setHref("saasRepo", L.saasStarter.repo);

  setHref("cafeflowRepo", L.cafeflow.repo);
  setHref("cafeflowDemo", L.cafeflow.demo, true);

  setHref("quantRepo", L.quant.repo);
  setHref("jobhuntRepo", L.jobhunt.repo);
})();
