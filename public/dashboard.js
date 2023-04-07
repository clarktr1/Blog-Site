const deleteBlog = async (event, id) => {
    event.preventDefault()
    if(confirm('Do you really want to delete this post? This can\'t be undone.')){
        const destroyBlog = await fetch('/api/blog/delete', {
            method: 'DELETE',
            body: JSON.stringify({id}),
            headers: { 'Content-Type': 'application/json' }
        });
        console.log(destroyBlog)
        if (destroyBlog.ok){
            alert('You have successfully deleted your post.')
            location.replace('/dashboard')
        } else {
            alert('Your post was not able to be deleted. Please try again. ')
        }
    };
}; 

const id = document.querySelectorAll('.id')
const deleteBtn = document.querySelectorAll('.delete')

deleteBtn.forEach(button => {
    button.addEventListener('click', (event) => {
        const id = button.previousElementSibling.getAttribute('data-id');
        deleteBlog(event, id)
    })
})





