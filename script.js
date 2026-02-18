// Mobile menu toggle
const toggle = document.getElementById("navToggle");
const links = document.getElementById("navLinks");

toggle?.addEventListener("click", () => {
  const open = links.classList.toggle("open");
  toggle.setAttribute("aria-expanded", String(open));
});

// Close mobile menu when clicking a link
document.querySelectorAll("#navLinks a").forEach(a => {
  a.addEventListener("click", () => {
    links.classList.remove("open");
    toggle.setAttribute("aria-expanded", "false");
  });
});

// Active link highlight on scroll (simple)
const sections = ["home", "about", "services", "portfolio", "contact"].map(id => document.getElementById(id));
const navAnchors = Array.from(document.querySelectorAll(".nav-links a"))
  .filter(a => a.getAttribute("href")?.startsWith("#"));

const setActive = () => {
  const scrollY = window.scrollY + 110;
  let current = "home";
  for (const s of sections) {
    if (!s) continue;
    if (s.offsetTop <= scrollY) current = s.id;
  }
  navAnchors.forEach(a => {
    const href = a.getAttribute("href")?.replace("#", "");
    a.classList.toggle("active", href === current);
  });
};
window.addEventListener("scroll", setActive);
setActive();

// Portfolio filter
const chips = document.querySelectorAll(".chip");
const works = document.querySelectorAll(".work");

chips.forEach(chip => {
  chip.addEventListener("click", () => {
    chips.forEach(c => c.classList.remove("active"));
    chip.classList.add("active");
    const filter = chip.dataset.filter;

    works.forEach(w => {
      const tags = (w.dataset.tags || "").split(" ");
      const show = filter === "all" || tags.includes(filter);
      w.style.display = show ? "block" : "none";
    });
  });
});

// Footer year
document.getElementById("year").textContent = new Date().getFullYear();
