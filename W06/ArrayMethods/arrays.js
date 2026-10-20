// Arrays in JS
let courses = ["WDD131", "WDD130", "CSE110", "CSE210"];

// Display the first course
console.log(courses[0]);

// For loop
for (let i = 0; i < courses.length; i++)
{
    console.log(courses[i]);
}

// BIF's
courses.forEach((item) => {
    console.log(item);
});

let course = {
    name: "Dynamic Web Fundamentals",
    code: "WDD131",
    credits: 3,
    instructor: "James Warner"
}

console.log(course.instructor);

// Array of objects
let courseArray = [
    {
    name: "Dynamic Web Fundamentals",
    code: "WDD131",
    credits: 2,
    instructor: "James Warner"
    },
    {
    name: "Web Fundamentals",
    code: "WDD130",
    credits: 2,
    instructor: "James Warner"
    }
];

// Challenge: Print out the name and code of the second course in this array
courseArray.forEach((item) => {
    if (item.name == "Web Fundamentals")
    {
        console.log(item.name);
        console.log(item.code);
    }
});

console.log(courseArray[1].name);

let body = document.querySelector('body');

courseArray.forEach((item) => {
    // build an html div with course contents
    let courseDiv = `
        <div>
            <h2>${item.name}</h2>
            <p>Code: ${item.code}</p>
            <p>Credits: ${item.credits}</p>
            <p>Instructor: ${item.instructor}</p>
        </div>
    `;
    // Add div to the body
    body.innerHTML += courseDiv;

});

