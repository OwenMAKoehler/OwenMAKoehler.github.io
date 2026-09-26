(function () {
  // ---- Looping animations: stop and show controls for visitors who prefer reduced motion ----
  // Otherwise play them only while they're on screen.
  const loops = document.querySelectorAll("video[autoplay]");
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    loops.forEach((v) => {
      v.pause();
      v.removeAttribute("autoplay");
      v.controls = true;
    });
  } else if ("IntersectionObserver" in window) {
    const watcher = new IntersectionObserver((entries) => {
      entries.forEach((e) => (e.isIntersecting ? e.target.play().catch(() => {}) : e.target.pause()));
    }, { threshold: 0.25 });
    loops.forEach((v) => watcher.observe(v));
  }

  // ---- Lightbox: click a gallery image to view it full-size ----
  const box = document.createElement("div");
  box.className = "lightbox";
  box.innerHTML = "<img alt=''>";
  document.body.appendChild(box);
  const big = box.querySelector("img");

  document.querySelectorAll(".gallery img").forEach((img) => {
    img.addEventListener("click", () => {
      big.src = img.src;
      big.alt = img.alt;
      box.classList.add("open");
    });
  });
  box.addEventListener("click", () => box.classList.remove("open"));
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") box.classList.remove("open");
  });

  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();
})();
