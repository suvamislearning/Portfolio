// Mobile navigation
const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector(".navbar nav");

menuBtn.addEventListener("click", () => {
  nav.classList.toggle("active");
});

// Close mobile menu after clicking a link
document.querySelectorAll(".navbar nav a").forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("active");
  });
});

// Small scroll reveal effect
const revealElements = document.querySelectorAll(
  ".skill-card, .profile, .ai-card, .project, .about-section, .timeline-item, .contact"
);

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

revealElements.forEach(el => {
  el.classList.add("reveal");
  observer.observe(el);
});

// Download CV placeholder
document.querySelector(".cv-btn").addEventListener("click", (e) => {
  const cv = document.createElement("a");
  cv.href = "cv.pdf";
  cv.download = "Suvam-Gyawali-CV.pdf";
  cv.click();
});
