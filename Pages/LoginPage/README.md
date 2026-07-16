# Sleek Split-Screen Auth Portal

A modern, highly interactive dark-themed Sign In and Sign Up page built using plain HTML, CSS, and Vanilla JavaScript. The interface features a sleek two-column layout: an elegant, responsive authentication form on the left and an immersive, auto-rotating real estate media showcase on the right.

---

## 🚀 Features

*   **Modern Split-Screen Layout:** Responsive design that cleanly splits into a 40/60 view on desktops and stacks beautifully on mobile devices.
*   **Dynamic Mode Toggling:** Smoothly switches between *Sign In* and *Sign Up* modes without page reloads, utilizing standard CSS toggle states.
*   **Conditional Inputs:** Dynamically injects and requires an **Email Address** field only when the user switches to the *Sign Up* form.
*   **Interactive UI Focus States:** Input wrappers highlight with a modern blue glow, transitioning the input icons from deep black to vibrant blue upon focus.
*   **Sleek Carousel Slider:** The right-hand hero column transitions background images automatically every 2 seconds across 3 curated luxury architecture presets, seamlessly synced with progress indicator lines at the bottom.
*   **Custom Toast Notifications:** Replaced generic browser alert popups with a beautiful, custom-built slide-up notification card that gracefully fades out and deletes itself from the DOM after 3 seconds.

---

## 🛠️ Technologies Used

*   **HTML5:** Semantic markup structure.
*   **CSS3:** Custom properties (variables), CSS Grid, Flexbox, smooth transitions, and keyframe animations.
*   **Vanilla JavaScript (ES6+):** Module-based logic handling DOM manipulation, carousel intervals, state toggles, and dynamic toast rendering.
*   **Font Awesome:** Vector icons for input fields and slider controls.

---

## 📂 Project Structure

```text
├── index.html          # Main HTML markup
├── style.css           # Layout, design, animations, and responsive rules
├── app.js              # State toggling, carousel logic, and toast system
└── README.md           # Project documentation
