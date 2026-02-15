window.PORTFOLIO_LINKS = {
  github: "https://github.com/yoannchelin",
  email: "Yoann.chelin@epitech.eu",

  cafeflow: {
    repo: "https://github.com/yoannchelin/cafeflow-",
    demo: "" // add later
  },

  jobhunt: {
    repo: "https://github.com/yoannchelin/Jobhunt",
    demo: "" // add later
  },

  cv: "assets/Yoann_Chelin_CV.pdf"
};


(function () {
  const y = document.getElementById("year");
  if (y) y.textContent = String(new Date().getFullYear());

  const L = window.PORTFOLIO_LINKS;

  const setHref = (id, url) => {
    const el = document.getElementById(id);
    if (!el) return;
    if (!url) {
    
      el.setAttribute("href", "#");
      el.style.pointerEvents = "none";
      el.style.opacity = "0.6";
      return;
    }
    el.setAttribute("href", url);
  };

  setHref("githubLink", L.github);
  setHref("emailLink", `mailto:${L.email}`);
  setHref("cvLink", L.cv);

  setHref("cafeflowRepo", L.cafeflow.repo);
  setHref("cafeflowDemo", L.cafeflow.demo);

  setHref("jobhuntRepo", L.jobhunt.repo);
  setHref("jobhuntDemo", L.jobhunt.demo);
})();
