(function () {
  var header = document.querySelector(".site-header");
  var navToggle = document.querySelector(".nav-toggle");
  var navList = document.querySelector(".nav-list");

  if (header) {
    function onScroll() {
      header.classList.toggle("scrolled", window.scrollY > 40);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  if (navToggle && navList) {
    navToggle.addEventListener("click", function () {
      navList.classList.toggle("open");
      navToggle.setAttribute(
        "aria-expanded",
        navList.classList.contains("open")
      );
    });
    navList.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () {
        navList.classList.remove("open");
        navToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  var revealEls = document.querySelectorAll(".reveal");
  if (revealEls.length && "IntersectionObserver" in window) {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (e) {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
          }
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
    );
    revealEls.forEach(function (el) {
      io.observe(el);
    });
  } else {
    revealEls.forEach(function (el) {
      el.classList.add("visible");
    });
  }

  var raw = window.location.pathname.replace(/\\/g, "/");
  var path = raw.split("/").filter(Boolean).pop() || "index.html";
  if (!path || path.endsWith("/")) path = "index.html";
  document.querySelectorAll(".nav-list a").forEach(function (a) {
    var href = a.getAttribute("href");
    if (!href || href.startsWith("#")) return;
    var page = href.split("/").filter(Boolean).pop();
    if (!page) page = "index.html";
    var pageBase = page.split("#")[0];
    if (pageBase === path || (path === "index.html" && pageBase === "index.html")) {
      a.classList.add("active");
    }
  });
})();
