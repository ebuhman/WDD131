// Functions
const nameOfFunction = (string) => {
    console.log(string);
    console.log(`${string} My name is Ethan!`)
}

nameOfFunction("Hello World!");

// Event Listeners
    // Grab an element from the DOM to listen to
const selectBox = document.getElementById("theme-select");
const body = document.body;

    // Register an event listener on element
selectBox.addEventListener("change", () => {
    const current = selectBox.value;
    if (current === "ocean") {
        document.body.style.backgroundImage = "url('https://wddbyui.github.io/wdd131/images/ocean.jpg')";
        body.style.fontFamily = "Papyrus, fantasy";
    } else if (current === 'forest') {
        document.body.style.backgroundImage = "url('https://wddbyui.github.io/wdd131/images/forest.jpg')";
        body.style.fontFamily = "Impact, sans-serif";
    } else if (current === 'desert') {
        document.body.style.backgroundImage = "url('https://wddbyui.github.io/wdd131/images/desert.jpg')";
        body.style.fontFamily = "'Big Caslon', serif";
    } else {
        // default
        document.body.style.backgroundImage = "none";
        body.style.fontFamily = "Georgia, serif";
    }
});

// If Statements