# Owen Koehler — Engineering Portfolio

A static site (plain HTML/CSS/JS, no build step) hosted on GitHub Pages.

```
index.html                  Home page: intro, project cards, about, contact
projects/*.html             One page per project
css/style.css               All styling (auto light/dark mode)
js/main.js                  Image lightbox + footer year
assets/img/                 Web-sized photos (max 1600px JPEG)
assets/video/               Compressed MP4s (keep each under ~50 MB)
assets/Owen_Koehler_Resume.pdf
```

## Publishing on GitHub Pages

1. Create a GitHub repo named **`<your-username>.github.io`**. Your site will be at `https://<your-username>.github.io`.
2. Push this folder to it:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<your-username>.github.io.git
   git push -u origin main
   ```
3. On GitHub, go to **Settings → Pages**. Set Source to *Deploy from a branch*, then choose `main` / `/ (root)`.
4. Wait about a minute, then visit the URL.

## Adding a new project

1. Copy an existing page, e.g. `projects/robotic-arm.html` → `projects/my-new-project.html`, and edit the text.
2. Put images in `assets/img/`. To shrink photos on a Mac:
   `sips -Z 1600 -s format jpeg -s formatOptions 80 "photo.jpeg" --out assets/img/my-photo.jpg`
3. To compress videos on a Mac (GitHub rejects files over 100 MB):
   `avconvert -s input.mov -p Preset1280x720 -o assets/video/my-video.mp4`
4. In `index.html`, copy one `<a class="card">` block in the Projects grid and point it at the new page.
5. Update the "Next project" links at the bottom of the project pages.
6. Run `git add . && git commit -m "Add project" && git push`.

## Previewing locally

Open `index.html` in a browser, or run `python3 -m http.server` in this folder and go to http://localhost:8000.
