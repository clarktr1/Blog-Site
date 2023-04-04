const login = async (event) => {
  event.preventDefault()

  const email = document.querySelector('#email-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();

  if (email && password){
  const loginData = await fetch('/api/user/login', {
    method: 'POST',
    body: JSON.stringify({email, password}),
    headers: { 'Content-Type': 'application/json' },
  })

  if (loginData.ok) {
      alert("Login was successful!");
      location.document('/')
    } else {
      alert('Login was unsuccessful.');
    }
  };
};

  const loginBtn = document.getElementById('login-Btn')
  loginBtn.addEventListener('click', function(event){
    login(event)
  });


