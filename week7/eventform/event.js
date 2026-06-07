console.log("event.js is running");

const form = document.querySelector("#eventForm");
const personType = document.querySelector("#personType");
const idContainer = document.querySelector("#idContainer");
const id = document.querySelector("#id");
const accessCodeContainer = document.querySelector("#accessCodeContainer");
const access = document.querySelector("#access");
const output = document.querySelector("#output");

function updateIdField() {
  const value = personType.value;

  // Show the ID section on the form if they are choosing student and require it, or show the access code section if they are choosing guest and require it
  if (value === "student") {
    idContainer.hidden = false;
    id.required = true;
  } else {
    idContainer.hidden = true;
    id.required = false;
  }

  if (value === "guest") {
    accessCodeContainer.hidden = false;
    access.required = true;
  } else {
    accessCodeContainer.hidden = true;
    access.required = false;
  }
}

personType.addEventListener("change", updateIdField);
updateIdField();


// Ensure they choose a date later than the current date
// function isPastDate(value) {
//   const today = new Date();
//   const chosen = new Date(value);
//   return chosen < today;
// }

function isTodayOrPast(value) {
  const today = new Date();
  today.setHours(0, 0, 0, 0); // strip the time → local midnight today

  const [year, month, day] = value.split("-").map(Number);
  const chosen = new Date(year, month - 1, day); // local midnight of chosen date

  return chosen <= today; // reject today or earlier; allow tomorrow onward
}

form.addEventListener("submit", function (event) {
  event.preventDefault();
  output.textContent = "";

  console.log("submit fired");

  const firstName = form.firstName.value.trim();
  const lastName = form.lastName.value.trim();
  const email = form.email.value.trim();
  const type = form.personType.value;
  const eventDate = form.eventDate.value;
  const id = form.id.value.trim();
  const access = form.access.value.trim();
  
  // Let the user know if they choose student but didn't put an ID that they need to add an ID
if (type === "student" && !/^\d{9}$/.test(id)) {
  output.textContent = "Student I# must be 9 digits.";
  return;
}

// Let the user know if they choose guest but didn't put an access code that they need to add an access code
if (type === "guest" && !/^EVENT131$/.test(access)) {
  output.textContent = "Guests require a valid access code.";
  return;
}

const typeDisplay = type.charAt(0).toUpperCase() + type.slice(1);

// if (isPastDate(eventDate)) {
//     output.textContent = "Please choose a later date.";
// return;
// }

if (isTodayOrPast(eventDate)) {
  output.textContent = "Please choose a later date.";
  return;
}

  output.innerHTML = `
  <h2>Event Ticket Form Submitted</h2>
  <p>${firstName} ${lastName}</p>
  <p>Email: ${email}</p>
  <p>Event Date: ${eventDate}</p>
  <p>Student or Guest: ${typeDisplay}</p>
  `;

  form.reset();
  updateIdField();
});
          