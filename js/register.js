const form = document.querySelector("form");

const firstNameOutput = document.querySelector("#firstname-output");
const lastNameOutput = document.querySelector("#lastname-output");
const emailOutput = document.querySelector("#email-output");
const passwordOutput = document.querySelector("#kodeord-output");
const hackerenOutput = document.querySelector("#hackeren-output");
const angrebstypeOutput = document.querySelector("#angrebstype-output");
const beskrevetOutput = document.querySelector("#beskrevet-output");
const backupOutput = document.querySelector("#backup-output");
const handlingOutput = document.querySelector("#handling-output");

form.addEventListener("invalid", cancelPopup, true);
form.addEventListener("submit", handleSubmit);

function cancelPopup(event) {
  event.preventDefault();
  form.querySelector(":user-invalid").focus();
}

function handleSubmit(event) {
  event.preventDefault();

  const formData = new FormData(form);
  const firstname = formData.get("fornavn");
  const lastname = formData.get("efternavn");
  const email = formData.get("email");
  const password = formData.get("kodeord");
  const hackeren = formData.get("hackeren");
  const angrebstype = formData.get("angreb");
  const beskrevet = formData.get("beskriv");
  const backup = formData.getAll("backup").join(", ");
  const handling = formData.getAll("action").join(", ");

  firstNameOutput.textContent = firstname;
  lastNameOutput.textContent = lastname;
  emailOutput.textContent = email;
  passwordOutput.textContent = password;
  hackerenOutput.textContent = hackeren;
  angrebstypeOutput.textContent = angrebstype;
  beskrevetOutput.textContent = beskrevet;
  backupOutput.textContent = backup;
  handlingOutput.textContent = handling;
  form.reset();
}
