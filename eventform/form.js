const form = document.querySelector("#form");
const output = document.querySelector("#output");
const eventType = document.querySelector("#eventType");

const studentField = document.querySelector(".id");
const accessField = document.querySelector(".accessCode");

const studentId = document.querySelector("#studentId");
const accessCode = document.querySelector("#accessCode");

function updateFields() {
    const isStudent = eventType.value === "student";
    const isGuest = eventType.value === "guest";

    studentField.hidden = !isStudent;
    accessField.hidden = !isGuest;

    // Only require the field that applies to the selected type
    studentId.required = isStudent;
    accessCode.required = isGuest;

    if (!isStudent) {
    studentId.value = "";
    }

    if (!isGuest) {
    accessCode.value = "";
    }
}

function isPastDate(date) {
    const today = new Date();
    const todayString = today.toISOString().split("T")[0];

    return date < todayString;
}

eventType.addEventListener("change", updateFields);

form.addEventListener("submit", (event) => {
    event.preventDefault();

    output.textContent = "";

    const firstName = form.firstName.value.trim();
    const lastName = form.lastName.value.trim();
    const email = form.email.value.trim();
    const type = eventType.value;
    const eventDate = form.eventDate.value;

    if (type === "student") {
        if (studentId.value.length != 9) {
            output.textContent = "Student ID must be exactly 9 digits.";
            return;
        }
    }

    if (type === "guest") {
        if (accessCode.value !== "EVENT131") {
            output.textContent = "Please enter a valid access code.";
            return;
        }
    }

    if (isPastDate(eventDate)) {
    output.textContent = "Please choose a later date.";
    return;
    }

    output.innerHTML = `
    <h2>Preference Submitted</h2>
    <p>${firstName} ${lastName}</p>
    <p>Email: ${email}</p>
    <p>Event Date: ${eventDate}</p>
    <p>Preference Level: ${type}</p>
    `;

    form.reset();
    updateFields();
});