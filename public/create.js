const createPost = async (event) => {
event.preventDefault()

const title = document.getElementById('blog-title').value.trim()
const description = document.getElementById('blog-description').value.trim()
const content = document.getElementById('blog-content').value.trim()

if (title && description && content){
const post = await fetch('/api/blog/create', {
    method: 'POST',
    body: JSON.stringify({title, description, content}),
    headers: { 'Content-Type': 'application/json' },
    });
  if (post.ok) {
    alert("Blog posted successfully!");
    document.location = "./dashboard"
  } else {
    alert('Failed to post blog. Please try again.');
  };
} 
};



document.getElementById('create-Btn').addEventListener('click', (event) => {
    createPost(event)
})