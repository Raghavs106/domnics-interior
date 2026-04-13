// ================= NAVBAR SCROLL =================
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 60) {
    navbar.style.background = "rgba(0,0,0,0.9)";
    navbar.style.backdropFilter = "blur(6px)";
  } else {
    navbar.style.background = "rgba(0,0,0,0.6)";
    navbar.style.backdropFilter = "blur(0px)";
  }
});


// ================= ACTIVE NAV LINK =================
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 120;
    const sectionHeight = section.offsetHeight;

    if (window.scrollY >= sectionTop &&
        window.scrollY < sectionTop + sectionHeight) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");

    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
});


// ================= SMOOTH SCROLL =================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));

    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  });
});


// ================= INTERSECTION ANIMATION =================
const animatedElements = document.querySelectorAll(
  ".card, .project, .review-card, .story, .hero-content, .final-cta, .case-study"
);

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry, index) => {
    if (entry.isIntersecting) {

      // stagger effect
      setTimeout(() => {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }, index * 120);

      observer.unobserve(entry.target); // run only once
    }
  });
}, {
  threshold: 0.2
});

animatedElements.forEach(el => {
  el.style.opacity = "0";
  el.style.transform = "translateY(50px)";
  el.style.transition = "all 0.7s cubic-bezier(0.22,1,0.36,1)";
  observer.observe(el);
});


// ================= BUTTON MICRO INTERACTION =================
const buttons = document.querySelectorAll(".btn");

buttons.forEach(btn => {
  btn.addEventListener("mouseenter", () => {
    btn.style.transform = "translateY(-2px)";
  });

  btn.addEventListener("mouseleave", () => {
    btn.style.transform = "translateY(0)";
  });
});


// ================= IMAGE HOVER DEPTH =================
const projects = document.querySelectorAll(".project");

projects.forEach(project => {
  project.addEventListener("mouseenter", () => {
    project.style.transform = "scale(1.01)";
  });

  project.addEventListener("mouseleave", () => {
    project.style.transform = "scale(1)";
  });
});