// Click on button
const dice = document.querySelectorAll("#gameboard img")

const button = document.getElementById('rollButton');
button.addEventListener("click", () => {
    // Animate dice
    setDieImages("assets/die_rolling.gif");
    // Land on a new random number
    setTimeout(() => {
        // This function will run after the timeout duration below
        dice.forEach(image => {
            const random = Math.ceil(Math.random() * 6);
            image.src = `assets/white_dice_${random}.gif`;
        });
    }, 1000);
});


function setDieImages(imagePath) {
    // Animate dice
    dice.forEach(image => {
        image.src = imagePath;
    });
}
