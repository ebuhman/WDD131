const menuButton = document.querySelector(".menu");
const modal = document.querySelector(".modal");
const closeButton = document.querySelector(".close-button");

menuButton.addEventListener("click", () => {
    const navLinks = document.querySelector(".nav-links");
    navLinks.classList.toggle("active");
});

const images = document.querySelectorAll("#img-container img");

images.forEach((image) => {
    image.addEventListener("click", () => {
        modal.classList.add("active");
    });
});

function closeModal() {
    modal.classList.remove("active");
}

closeButton.addEventListener("click", closeModal);

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        closeModal();
    }
});