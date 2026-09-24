# Owen Koehler — Engineering Portfolio

My personal portfolio site. I'm a Mechanical Engineering student at Northeastern University (Class of 2028).
The site shows the hardware, firmware, and software projects I've built, with photos, videos, and write-ups
for each one.

## Projects

### 4-DOF Robotic Arm
*Independent project · Apr – Aug 2026* · [`projects/robotic-arm.html`](projects/robotic-arm.html)

A 3D-printed desktop robotic arm that cost under $200. It has a 270 mm reach, carries about 500 g, and repeats
positions to about 1 mm.
- Custom cycloidal reducers on NEMA 17 steppers give high reduction with low backlash
- Modular, bearing-supported joint actuators and a servo-driven compliant gripper
- Modified GRBL firmware on an Arduino and CNC shield, so the steppers and gripper share one G-code stream
- A browser-based controller over USB serial with a live 3D model, joint jogging, XYZ inverse kinematics,
  recorded pick-and-place routes, and URDF-based configuration

### Automated LVAD Power Cycling Fixture
*Abbott Heart Failure, Systems Engineering Co-op · Jan – Aug 2026* · [`projects/abbott-lvad-fixture.html`](projects/abbott-lvad-fixture.html)

A test fixture that charges and drains LVAD batteries over and over to track how their capacity degrades.
The project had been stalled since 2023.
- Led a team of 4 co-ops to take it from a stalled prototype to a fixture that runs with no operator
- Added microSD data logging and rotary-encoder input so tests can be configured at the fixture
- Rewrote the Arduino C++ firmware from scratch with a modular design that handles 0 to 5 batteries
- Estimated savings of about $750K per year

## Built with

Plain HTML, CSS, and JavaScript. There is no framework and no build step. The site switches between light and
dark mode automatically, and clicking a gallery image opens it full-size. It is hosted on GitHub Pages.

```
index.html          Home page: intro, project cards, about, contact
projects/*.html     One page per project
css/style.css       All styling
js/main.js          Image lightbox and footer year
assets/img/         Web-sized photos (JPEG, max 1600 px)
assets/video/       Compressed MP4s
media/              Original full-resolution photos and videos (not committed)
```

## Running locally

```bash
python3 -m http.server
```
Then open http://localhost:8000. You can also just open `index.html` in a browser.

## Adding a project

1. Copy an existing page in `projects/` and edit the text.
2. Put the originals in `media/`, then make web-sized copies:
   ```bash
   sips -Z 1600 -s format jpeg -s formatOptions 80 "media/photo.jpeg" --out assets/img/my-photo.jpg
   avconvert -s "media/video.mov" -p Preset1280x720 -o assets/video/my-video.mp4
   ```
   GitHub rejects files over 100 MB, so keep each video under about 50 MB.
3. In `index.html`, copy one `<a class="card">` block in the Projects grid and point it at the new page.
4. Update the "Next project" links at the bottom of each project page.

## Contact

[koehler.o@northeastern.edu](mailto:koehler.o@northeastern.edu) · [LinkedIn](https://www.linkedin.com/in/owen-koehler-593384338)
