document.getElementById("submitBtn").addEventListener("click", function(event) {
    event.preventDefault();
    
    let fullName = document.getElementById("fullName").value;
    let email = document.getElementById("email").value;
    let phoneNumber = document.getElementById("phoneNumber").value;
    let subject = document.getElementById("subject").value;
    let message = document.getElementById("message").value;
    
    console.log("Full Name:", fullName);
    console.log("Email:", email);
    console.log("Phone Number:", phoneNumber);
    console.log("Subject:", subject);
    console.log("Message:", message);
  
    alert("Your message has been sent successfully!");
  });
  