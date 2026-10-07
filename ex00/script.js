const themeBtn = document.getElementById("themeBtn");
const contactForm = document.getElementById("contactForm");
const formResult = document.getElementById("formResult");

themeBtn.addEventListener("click", function () {
    document.body.classList.toggle("dark");
});

contactForm.addEventListener("submit", function (event) {
    event.preventDefault();
    formResult.textContent = "Message received.";
    contactForm.reset();
});
