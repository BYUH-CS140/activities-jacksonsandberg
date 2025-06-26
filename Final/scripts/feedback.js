document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("feedbackForm").addEventListener("submit", function (e) {
      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const feedback = document.getElementById("feedback").value.trim();
  
      if (!name || !email || !feedback) {
        alert("Please fill out all fields before submitting.");
        e.preventDefault();
      } else {
        alert("Thanks for your feedback!");
      }
    });
  });
  