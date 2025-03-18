document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault(); 
  
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;
  
    if (!name || !email || !phone || !message) {
      alert("Please fill out all required fields.");
      return;
    }
  
    const submittedInquiries = document.getElementById("submittedInquiries");
  
    const inquiryItem = document.createElement("li");

    inquiryItem.innerHTML = `
      <strong>Name:</strong> ${name} <br>
      <strong>Email:</strong> ${email} <br>
      <strong>Phone:</strong> ${phone} <br>
      <strong>Subject:</strong> ${subject} <br>
      <strong>Message:</strong> ${message} <br>
    `;

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.classList.add("delete");
 
    deleteButton.addEventListener("click", function() {
      if (confirm("Are you sure you want to delete this inquiry?")) {
        submittedInquiries.removeChild(inquiryItem);
      }
    });
  
    inquiryItem.appendChild(deleteButton);
    submittedInquiries.appendChild(inquiryItem);
  
    document.getElementById("contactForm").reset();
  });
  