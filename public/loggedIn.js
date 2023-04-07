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

const commentBtn = document.querySelectorAll('.comment');
const commentSubmit = document.querySelectorAll('.submit');
const commentCancel = document.querySelectorAll('.cancel')
const commentForm = document.querySelectorAll('.form');

for (let i = 0; i < commentBtn.length; i++){
//Should be the same number of all buttons//
commentBtn[i].addEventListener('click', function(i){
  console.log(commentBtn)
  commentForm[i].style.display = 'block'
  commentBtn[i].style.display = 'none'
});
}

// commentCancel[i].addEventListener('click', function(){
//   commentForm.style.display = 'none'
//   commentBtn.style.display = 'block'
// })