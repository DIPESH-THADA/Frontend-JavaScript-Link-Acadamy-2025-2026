// ================= BACK TO TOP =====================

document
  .querySelector(".back-to-top span")
  .addEventListener("click", function (e) {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

// =============== CURRENT YEAR =====================
const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

// ============= CHANGE COLOR WHEN CLICK ON CHECKBOX ================
const checkboxes = document.querySelectorAll('input[type="checkbox"]');

checkboxes.forEach((checkbox) => {
  checkbox.addEventListener("click", function () {
    const span = this.closest(".zara").querySelector("span");

    if (this.checked) {
      span.style.color = "#00ccdd";
      span.style.fontWeight = "500";
    } else {
      span.style.color = "#4b5563";
      span.style.fontWeight = "400";
    }
  });
});
