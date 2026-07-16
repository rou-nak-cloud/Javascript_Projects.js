const formTitle = document.getElementById("form-title");
const authForm = document.getElementById("auth-form");
const submitBtn = document.getElementById("submit-btn");
const forgotLink = document.querySelector(".forgot-link");

const signupToggleText = document.getElementById("toggle-to-signup");
const signinToggleText = document.getElementById("toggle-to-signin");

const emailGroup = document.getElementById("email-group");
const emailInput = document.getElementById("email");

const toastContainer = document.getElementById("toast-container");

// all links that trigger a toggle
const toggleTriggers = document.querySelectorAll(".toggle-auth-trigger");

let isSignInMode = true;

toggleTriggers.forEach((trigger) => {
  trigger.addEventListener("click", (e) => {
    e.preventDefault();

    isSignInMode = !isSignInMode;
    signupToggleText.classList.toggle("hidden");
    signinToggleText.classList.toggle("hidden");

    if (isSignInMode) {
      formTitle.textContent = "Sign In";
      submitBtn.textContent = "SIGN IN";
      forgotLink.style.display = "block";

      emailGroup.classList.add("hidden");
      emailInput.removeAttribute("required");
      emailInput.value = ""; // Clear input
    } else {
      formTitle.textContent = "Sign Up";
      submitBtn.textContent = "SIGN UP";
      forgotLink.style.display = "none";

      emailGroup.classList.remove("hidden");
      emailInput.setAttribute("required", "");
    }
  });
});

function showToast(message) {
  const toast = document.createElement("div");
  toast.className = "toast";

  toast.innerHTML = `
    <i class="fa-solid fa-circle-check" style="color: #3b82f6;"></i>
    <span>${message}</span>
    `;

  toastContainer.appendChild(toast);

  // after 3seconds exit
  setTimeout(() => {
    toast.classList.add("fade-out");
    // remove the element
    setTimeout(() => {
      toast.remove();
    }, 1000);
  }, 3000);
}
authForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const usernameValue = document.getElementById("username").value;

  if (isSignInMode) {
    showToast(`Welcome back, ${usernameValue}!`);
  } else {
    const emailValue = emailInput.value;
    showToast(`Account created for ${usernameValue} (${emailValue})!`);
  }
});

const mediaColumn = document.querySelector(".media-column");
const indicatorLines = document.querySelectorAll(".slider-indicator .line");
const carouselImages = [
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80", // Modern Exterior
  "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80", // Luxury Lounge
  "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80", // Elegant Interior
];
let currentImageIndex = 0;

function rotateImages() {
  // increment loop
  currentImageIndex = (currentImageIndex + 1) % carouselImages.length;

  mediaColumn.style.backgroundImage = `
  linear-gradient(to right, rgba(11, 11, 11, 0.9), rgba(0, 0, 0, 0.3)),
        url('${carouselImages[currentImageIndex]}')
    `;

  // Update active state on indicator lines
  indicatorLines.forEach((line, idx) => {
    if (idx === currentImageIndex) {
      line.classList.add("active");
    } else {
      line.classList.remove("active");
    }
  });
}
setInterval(rotateImages, 5000);
