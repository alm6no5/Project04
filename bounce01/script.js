const themeBtn = document.getElementById("themeBtn");
const photoBtn = document.getElementById("photoBtn");
const profilePhoto = document.getElementById("profilePhoto");
const contactForm = document.getElementById("contactForm");
const formResult = document.getElementById("formResult");

let photoNumber = 1;

themeBtn.addEventListener("click", function () {
    document.body.classList.toggle("dark");
});

photoBtn.addEventListener("click", function () {
    profilePhoto.style.opacity = "0";

    setTimeout(function () {
        if (photoNumber === 1) {
            profilePhoto.src = "assets/profile2.svg";
            profilePhoto.alt = "Zaid profile photo 2";
            photoNumber = 2;
        } else {
            profilePhoto.src = "assets/profile1.jpg";
            profilePhoto.alt = "Zaid profile photo 1";
            photoNumber = 1;
        }

        profilePhoto.style.opacity = "1";
    }, 200);
});

contactForm.addEventListener("submit", function (event) {
    event.preventDefault();
    formResult.textContent = "Message received.";
    contactForm.reset();
});
