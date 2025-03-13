document.addEventListener("DOMContentLoaded", () => {
    console.log("Cart Path Only Golf - Site Loaded!");

    const headerContainer = document.querySelector(".header-container");
    const heroSection = document.querySelector(".hero");
    let lastScrollY = window.scrollY;

    function adjustHeroPadding() {
        heroSection.style.paddingTop = `${headerContainer.offsetHeight}px`;
    }
    adjustHeroPadding();
    window.addEventListener("resize", adjustHeroPadding);

    window.addEventListener("scroll", function () {
        if (window.scrollY > 80 && window.scrollY > lastScrollY) {
            headerContainer.classList.add("hide");
        } else {
            headerContainer.classList.remove("hide");
        }
        lastScrollY = window.scrollY;
    });

    // Dark Mode Toggle
    const darkModeToggle = document.createElement("button");
    darkModeToggle.textContent = "🌙";
    darkModeToggle.classList.add("dark-mode-toggle");
    document.body.appendChild(darkModeToggle);

    darkModeToggle.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
        localStorage.setItem("darkMode", document.body.classList.contains("dark-mode"));
    });

    if (localStorage.getItem("darkMode") === "true") {
        document.body.classList.add("dark-mode");
    }

    // Toggle "Other" field visibility
    const referralSelect = document.getElementById("referral");
    const otherField = document.getElementById("other-field");

    // Function to toggle the visibility of the "Other" input field
    function toggleOtherField() {
        if (referralSelect.value === "other") {
            otherField.style.display = "block";
        } else {
            otherField.style.display = "none";
        }
    }

    // Add event listener for changes in the dropdown selection
    referralSelect.addEventListener("change", toggleOtherField);

    // Ensure the "Other" field is hidden by default
    toggleOtherField();
});
