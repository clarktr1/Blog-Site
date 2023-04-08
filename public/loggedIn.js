const logout = async (event) => {
event.preventDefault();
const currentURL = window.location.href;

const logoutData = await fetch('/api/user/logout', {
    method: 'POST', 
    headers: {
        'Content-Type': 'application/json'
        }
    });

if (logoutData.ok) {
    alert("You have logged out successfully!");
    window.location.replace('/')
    
  } else {
    alert('Please retry logging out.');
  };

};

const logoutBtn = document.getElementById('logout-btn')
logoutBtn.addEventListener('click', (event) => {
    logout(event);
});

