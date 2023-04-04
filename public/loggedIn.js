const logout = async (event) => {
event.preventDefault();

const logoutData = await fetch('/api/user/logout', {
    method: 'POST', 
    headers: {
        'Content-Type': 'application/json'
        }
    });

if (logoutData.ok) {
    alert("You have logged out successfully!");
    window.location.href('/')
  } else {
    alert('Please retry logging out.');
  };

};

const logoutBtn = document.getElementById('logout-btn')
logoutBtn.addEventListener('click', (event) => {
    logout(event);
});