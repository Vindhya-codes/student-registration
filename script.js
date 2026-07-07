document.addEventListener("DOMContentLoaded", function () {
const form = document.getElementById("regForm");

form.addEventListener("submit", function (event) {
event.preventDefault();
if (validateForm()) {
alert("Form submitted successfully!");
form.reset();
clearAllErrors();
}
else {

setError("validate-error", "Please fill all the fields.");
}
});

form.addEventListener("reset", function () {
// Let the native reset run first, then clear errors on next tick
setTimeout(clearAllErrors, 0);
});
});

function setError(id, message) {
const el = document.getElementById(id);
if (el) el.textContent = message;
}

function clearAllErrors() {
const errorIds = [
"fname-error", "lname-error", "mail-error", "password-error",
"phno-error", "age-error", "dob-error", "gender-error",
"cname-error", "gyear-error", "cdegree-error", "cgpa-error",
"sname-error", "tenth-error", "twelfth-error", "skillcourse-error", "validate-error"
];
errorIds.forEach(id => setError(id, ""));

}

function validateForm() {
clearAllErrors();

let isValid = true;

// First name
const firstName = document.getElementById("fname").value.trim();
if (firstName === "" || /\d/.test(firstName)) {
setError("fname-error", "Please enter a valid first name.");
isValid = false;
}

// Last name
const lastName = document.getElementById("lname").value.trim();
if (lastName === "" || /\d/.test(lastName)) {
setError("lname-error", "Please enter a valid last name.");
isValid = false;
}

// Email
const email = document.getElementById("mail").value.trim();
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
if (email === "" || !emailPattern.test(email)) {
setError("mail-error", "Please enter a valid email address.");
isValid = false;
}

// Password
const pass = document.getElementById("password").value;
if (pass === "" || pass.length < 6) {

setError("password-error", "Password must be at least 6 characters.");
isValid = false;
}

// Phone
const phone = document.getElementById("phno").value.trim();
if (!/^\d{10}$/.test(phone)) {
setError("phno-error", "Please enter a valid 10-digit phone number.");
isValid = false;
}

// Age
const ageField = document.getElementById("age");
const age = ageField.value;
if (age === "" || Number(age) < 17 || Number(age) > 25) {
setError("age-error", "Age must be between 17 and 25.");
isValid = false;
}

// Date of birth
const dob = document.getElementById("dob").value;
if (dob === "") {
setError("dob-error", "Please enter your date of birth.");
isValid = false;
} else if (new Date(dob) > new Date()) {
setError("dob-error", "Date of birth cannot be in the future.");
isValid = false;
}

// Gender
const genderChecked = document.querySelector('input[name="gender"]:checked');

if (!genderChecked) {
setError("gender-error", "Please select your gender.");
isValid = false;
}

// College name
const college = document.getElementById("cname").value.trim();
if (college === "") {
setError("cname-error", "Please enter your college name.");
isValid = false;
}

// Graduating year
const gyearChecked = document.querySelector('input[name="gyear"]:checked');
if (!gyearChecked) {
setError("gyear-error", "Please select your graduating year.");
isValid = false;
}

// Course (degree)
const degree = document.getElementById("cdegree").value;
if (degree === "") {
setError("cdegree-error", "Please select a course.");
isValid = false;

}

// CGPA
const cgpa = document.getElementById("cgpa").value;
if (cgpa === "" || Number(cgpa) < 1 || Number(cgpa) > 10) {
setError("cgpa-error", "CGPA must be between 1 and 10.");
isValid = false;

}

// School name
const school = document.getElementById("sname").value.trim();
if (school === "") {
setError("sname-error", "Please enter your school name.");
isValid = false;
}

// 10th marks
const tenth = document.getElementById("tenth").value;
if (tenth === "" || Number(tenth) < 1 || Number(tenth) > 100) {
setError("tenth-error", "Please enter valid 10th marks (1-100).");
isValid = false;
}

// 12th marks
const twelfth = document.getElementById("twelfth").value;
if (twelfth === "" || Number(twelfth) < 1 || Number(twelfth) > 100) {
setError("twelfth-error", "Please enter valid 12th marks (1-100).");

isValid = false;
}

// Skill development program
const skillChecked = document.querySelector('input[name="skillcourse"]:checked');
if (!skillChecked) {
setError("skillcourse-error", "Please select a skill development program.");
isValid = false;
}

return isValid;

}