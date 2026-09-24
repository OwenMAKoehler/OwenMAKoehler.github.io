(function () {
  // ---- YouTube embeds ----
  // Put a YouTube link or video ID in data-youtube on a .video element, e.g.
  //   <div class="video" data-youtube="https://youtu.be/dQw4w9WgXcQ"> ...local <video> fallback... </div>
  // The video shows a thumbnail and only loads the YouTube player when clicked.
  // If data-youtube is empty, the local <video> inside is used instead.
  function youtubeId(value) {
    const m = value.match(/(?:youtu\.be\/|v=|embed\/|shorts\/)([\w-]{11})/);
    return m ? m[1] : /^[\w-]{11}$/.test(value) ? value : null;
  }

  document.querySelectorAll(".video[data-youtube]").forEach((box) => {
    const id = youtubeId(box.dataset.youtube.trim());
    if (!id) return;
    const title = box.dataset.title || "Project video";

    const cover = document.createElement("button");
    cover.className = "yt-cover";
    cover.type = "button";
    cover.setAttribute("aria-label", "Play video: " + title);
    cover.innerHTML = `<img src="https://i.ytimg.com/vi/${id}/hqdefault.jpg" alt="">`;
    cover.addEventListener("click", () => {
      const frame = document.createElement("iframe");
      frame.src = `https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`;
      frame.title = title;
      frame.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
      frame.allowFullscreen = true;
      frame.referrerPolicy = "strict-origin-when-cross-origin";
      box.replaceChildren(frame);
    });
    box.replaceChildren(cover);
  });

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
