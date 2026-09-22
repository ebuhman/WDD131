// Pulled body and img DOM elements to use with checkbox

const body = document.querySelector("body");
const logo = document.querySelector("img");


/* Created a function that adds a checkbox, label, and div container to the index.
   Added event listener to track when checkbox is checked to set dark mode.
   Created CSS class dark-mode to add dark mode, and removes it when unchecked
*/

const addCheckbox = () => {
    
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.name = "Dark Mode";
    checkbox.id = "darkModeCheckbox"

    const label = document.createElement("label");
    label.textContent = "Dark Mode";
    label.htmlFor = "darkModeCheckbox"

    const container = document.createElement("div");
    container.id = "container";
    container.appendChild(checkbox);
    container.appendChild(label);
    body.prepend(container);

    checkbox.addEventListener("change", () => {
        if (checkbox.checked) {
            logo.src = "byui-logo-white.png";
            body.classList.add("dark-mode")
        } else {
            logo.src = "byui-logo-blue.webp";
            body.classList.remove("dark-mode");
        }   
    });
}

addCheckbox();





