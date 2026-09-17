// Variable types
const myAge = 23;
const myName = "Ethan";
console.log(myName, myAge)

// Lists
const newList = [];
newList.push(myName, myAge);
console.log(newList);

// Dictionary
const newMap = new Map();
newMap.set("Age", 23);
newMap.set("Name", "Ethan");
console.log(newMap.get("Age", "Name"));

// if statements
if (myAge == 23)
{
    console.log(myName);
}

// Loops
const testList = [1, 2, 3, 4, 5];

for (let i = 0; i < testList.length; i++)
{
    console.log(testList[i]);
}

testList.forEach((number) => 
{
    console.log(number);
});

while (testList.length > 0)
{
    for (let i = 0; i < testList.length; i++)
    {
        testList.splice(i);
    }
}

testList.push(120);

console.log(testList);

// Dom manipulation
document.querySelector("h1").style.color = "blue"

const newParagraph = document.createElement("p");
newParagraph.textContent = "Lorem ipsum";


