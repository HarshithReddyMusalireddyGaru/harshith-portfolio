// ===== NAV TOGGLE (mobile) =====
const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");

if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    navLinks.classList.toggle("open");
  });

  navLinks.querySelectorAll("a").forEach((a) => {
    a.addEventListener("click", () => navLinks.classList.remove("open"));
  });
}

// ===== PORTFOLIO FILTER =====
const chips = document.querySelectorAll(".chip");
const works = document.querySelectorAll(".work");

chips.forEach((chip) => {
  chip.addEventListener("click", () => {
    chips.forEach((c) => c.classList.remove("active"));
    chip.classList.add("active");

    const filter = chip.dataset.filter;

    works.forEach((w) => {
      const tags = (w.dataset.tags || "").split(" ");
      const show = filter === "all" || tags.includes(filter);
      w.style.display = show ? "" : "none";
    });
  });
});

// ===== CONTACT FORM (Formspree) =====
const FORM_ENDPOINT = "https://formspree.io/f/xqedldlv";

const contactForm = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");

if (contactForm) {
  contactForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    if (formStatus) {
      formStatus.style.display = "block";
      formStatus.style.color = "#0b1220";
      formStatus.textContent = "Sending...";
    }

    const formData = new FormData(contactForm);

    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: "POST",
        body: formData,
        headers: { "Accept": "application/json" }
      });

      if (!response.ok) throw new Error("Request failed");

      if (formStatus) {
        formStatus.style.color = "#2f9e44";
        formStatus.textContent = "✅ Message sent! I will get back to you soon.";
      }

      contactForm.reset();
    } catch (err) {
      if (formStatus) {
        formStatus.style.color = "#d9480f";
        formStatus.textContent = "❌ Something went wrong. Please try again.";
      }
    }
  });
}

// ===== FOOTER YEAR =====
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();
