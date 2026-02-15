// ===== Links config (edit here) =====
window.PORTFOLIO_LINKS = {
  github: "https://github.com/yoannchelin",
  email: "Yoann.chelin@epitech.eu",

  cafeflow: {
    repo: "https://github.com/yoannchelin/cafeflow-",
    demo: "" // add later (e.g. https://cafeflow.yourdomain.com)
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
  setHref("emailLink", `mailto:${L.email}`);
  setHref("cvLink", L.cv);
  setHref("cvLink2", L.cv);
  setHref("emailLink2", `mailto:${L.email}`);
  setHref("githubLink2", L.github);


  setHref("cafeflowRepo", L.cafeflow.repo);
  setHref("cafeflowDemo", L.cafeflow.demo, true);

  setHref("jobhuntRepo", L.jobhunt.repo);
  setHref("jobhuntDemo", L.jobhunt.demo, true);
})();

