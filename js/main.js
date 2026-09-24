// Click any gallery image to view it full-size.
(function () {
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
