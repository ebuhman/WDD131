const gallery = document.querySelector('.gallery');
const modal = document.querySelector('dialog');
const modalImage = modal.querySelector('img');
const closeButton = modal.querySelector('.close-viewer');

gallery.addEventListener("click", (event) => {
    if (event.target.src !== undefined) {
        modalImage.src = event.target.src.replace("-sm", "-full");
        modal.showModal();
    }
})

// Close modal on button click
closeButton.addEventListener('click', () => {
    modal.close();
});

// Close modal if clicking outside the image
modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.close();
    }
});
                        
const paragraph = "I think Max's code is more efficient than yours.";

console.log(paragraph.replace("Max's", "my"));
// Expected output: "I think my code is more efficient than yours."