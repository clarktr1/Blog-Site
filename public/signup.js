const signup = async (event) => {
    event.preventDefault();

    const username = document.getElementById('username-signup').value.trim()
    const email = document.getElementById('email-signup').value.trim();
    const password = document.getElementById('password-signup').value.trim();


    if (username && email && password) {
      const response = await fetch('/api/user/signup', {
        method: 'POST',
        body: JSON.stringify({ username, email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        alert("Signup was successful!");
        document.location = "./dashboard"
      } else {
        alert('Signup was unsuccessful.');
      }
    }
  };

  const signupBtn = document.getElementById('signup-Btn')
  signupBtn.addEventListener('click', function(event){
    signup(event)
  });