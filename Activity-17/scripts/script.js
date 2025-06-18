document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const username = document.getElementById('username').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const password = document.getElementById('password').value;
  
    const usernameValid = /^[a-zA-Z0-9]{5,}$/.test(username);
    const emailValid = /^[^@]+@\w+(\.\w+)+\w$/.test(email);
    const passwordValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/.test(password);
    const phoneValid = /^\+?\d{1,3}[-.\s]?\(?\d{1,4}[\)\s.-]?\d{1,4}[-.\s]?\d{1,9}$/.test(phone);
  
    // Feedback
    document.getElementById('usernameFeedback').textContent = usernameValid ? '' : 'Username must be at least 5 characters and alphanumeric.';
    document.getElementById('emailFeedback').textContent = emailValid ? '' : 'Please enter a valid email.';
    document.getElementById('passwordFeedback').textContent = passwordValid ? '' : 'Password must be 8+ characters, include upper/lowercase and a number.';
    document.getElementById('phoneFeedback').textContent = phoneValid ? '' : 'Enter a valid phone number (e.g., +1 555-555-5555).';
  
    document.getElementById('usernameFeedback').style.display = usernameValid ? 'none' : 'block';
    document.getElementById('emailFeedback').style.display = emailValid ? 'none' : 'block';
    document.getElementById('passwordFeedback').style.display = passwordValid ? 'none' : 'block';
    document.getElementById('phoneFeedback').style.display = phoneValid ? 'none' : 'block';
  
    const formValid = usernameValid && emailValid && passwordValid && phoneValid;
  
    if (formValid) {
      document.getElementById('registrationFeedback').textContent = 'Your user registration was accepted!';
      document.getElementById('registrationFeedback').style.display = 'block';
    } else {
      document.getElementById('registrationFeedback').textContent = '';
      document.getElementById('registrationFeedback').style.display = 'none';
    }
  });
  