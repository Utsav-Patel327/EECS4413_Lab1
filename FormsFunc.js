// put your JS functions here

// An array of logo image paths
const logoImages = ["images/logo/York.png", "images/logo/LAS.png"];
// A variable to keep track of the current image index
let currentLogoIndex = 0;

// validate various form components{
function validateForm() {
  const firstName = document.getElementById("firstName").value;
  const lastName = document.getElementById("lastName").value;
  const password = document.getElementById("password").value;
  const email = document.getElementById("email").value;
  const hobbies = document.getElementsByName("hobby[]");
  const courseCode = document.getElementById("course").value;

  // Check if First Name is missing
  if (firstName.trim() === "") {
    alert("First name should be filled out");
    document.getElementById("firstName").focus();
    return false;
  }

  // Check if Last Name is missing
  if (lastName.trim() === "") {
    alert("Last name should be filled out");
    document.getElementById("lastName").focus();
    return false;
  }

  // Check if Password is missing
  if (password.trim() === "") {
    alert("Password should be filled out");
    document.getElementById("password").focus();
    return false;
  }

  // Check if Email is missing
  if (email.trim() === "") {
    alert("Email should be filled out");
    document.getElementById("email").focus();
    return false;
  }

  // Check if Email format is valid
  // This is a simplified regex for the purpose of the lab
  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (!emailRegex.test(email)) {
    alert("Email format invalid");
    document.getElementById("email").focus();
    return false;
  }

  // Check if at least one hobby is selected
  let hobbySelected = false;
  for (let i = 0; i < hobbies.length; i++) {
    if (hobbies[i].checked) {
      hobbySelected = true;
      break;
    }
  }
  if (!hobbySelected) {
    alert("at least one hobby should be selected");
    return false;
  }

  // Check course code format if entered
  if (courseCode.trim() !== "") {
    const courseRegex = /^EECS\d{4}$/;
    if (!courseRegex.test(courseCode)) {
      alert("Course code format should be EECSxxxx where xxxx are digits.");
      document.getElementById("course").focus();
      return false;
    }
  }

  return true; // Form is valid, allow submission
}

// toggle logo
function toggleLogo() {
  currentLogoIndex = (currentLogoIndex + 1) % logoImages.length;
 
  const logo = document.getElementById("im");
  logo.src = logoImages[currentLogoIndex];
}

// change background
function changeBackground() {
  const formBox = document.getElementById("box");
  formBox.style.backgroundColor = "lightblue";
}

function checkOther() {
  const program = document.getElementById("program");
  const otherTextBox = document.getElementById("other");

  if (program.value === "OTHER") {
    otherTextBox.style.display = "inline";
    otherTextBox.focus();
  } else {
    otherTextBox.style.display = "none";
  }
}

window.onload = function() {
  const commentBox = document.getElementById("commentBox");
  const placeholderText = "Enter your comment here ....";

  commentBox.addEventListener("focus", function() {
    if (this.value === placeholderText) {
      this.value = "";
    }
  });

  commentBox.addEventListener("blur", function() {
    if (this.value.trim() === "") {
      this.value = placeholderText;
    }
  });
};