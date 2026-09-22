// Select HTML element from DOM
// Save it to a local variable called heading
const heading = document.querySelector("h1");

console.log(heading);

heading.style.color = "#0000ff";
heading.style.fontSize = "1em";

heading.style.padding = "200px";

// Do everything on one line
document.querySelector("p").style.color = "blue";

// There are different ways to select from the DOM
document.getElementById("topics");

// Select more than one DOM element at a time
console.log(document.querySelectorAll(".list"));

// apply a class
const cssClass = document.querySelector("#topics").classList;

cssClass.add("special");


let selectElem = document.getElementById('webdevlist');
selectElem.addEventListener('change', function(){
    let codeValue = selectElem.value;
    console.log(codeValue);
})
                
