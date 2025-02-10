document.getElementById("submitBtn").addEventListener("click", function(event) {
  event.preventDefault();

  let fullName = document.getElementById("fullName").value.trim();
  let email = document.getElementById("email").value.trim();
  let phoneNumber = document.getElementById("phoneNumber").value.trim();
  let subject = document.getElementById("subject").value.trim();
  let message = document.getElementById("message").value.trim();

  // Error spans
  let fullNameError = document.getElementById("fullNameError");
  let emailError = document.getElementById("emailError");
  let phoneNumberError = document.getElementById("phoneNumberError");
  let subjectError = document.getElementById("subjectError");
  let messageError = document.getElementById("messageError");

  // Clear previous errors
  fullNameError.textContent = "";
  emailError.textContent = "";
  phoneNumberError.textContent = "";
  subjectError.textContent = "";
  messageError.textContent = "";

  let isValid = true;

  // Name validation (only letters and spaces allowed)
  let namePattern = /^[a-zA-Z\s]+$/;
  if (fullName === "") {
      fullNameError.textContent = "Full Name is required.";
      isValid = false;
  } else if (!namePattern.test(fullName)) {
      fullNameError.textContent = "Invalid name format. Only letters and spaces allowed.";
      isValid = false;
  }

  // Email validation
  let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (email === "") {
      emailError.textContent = "Email is required.";
      isValid = false;
  } else if (!emailPattern.test(email)) {
      emailError.textContent = "Invalid email format.";
      isValid = false;
  }

  // Phone number validation (optional, but should be numeric if filled)
  let phonePattern = /^[0-9]{10,15}$/;
  if (phoneNumber !== "" && !phonePattern.test(phoneNumber)) {
      phoneNumberError.textContent = "Invalid phone number. Only digits (10-15) allowed.";
      isValid = false;
  }

  // Subject validation
  if (subject === "") {
      subjectError.textContent = "Subject is required.";
      isValid = false;
  }

  // Message validation
  if (message === "") {
      messageError.textContent = "Message is required.";
      isValid = false;
  }

  // If form is valid, submit or perform action
  if (isValid) {
      alert("Form submitted successfully!");
      // You can replace this with actual form submission logic
  }
});
