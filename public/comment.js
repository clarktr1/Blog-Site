const commentSubmit = document.querySelector('.submit');
const commentForm = document.querySelector('#comment-input');

//id in title data-id

const createComment = async (event) =>{
    event.preventDefault()

    if(confirm('Are you sure you would like to submit this comment?')){
        const blogID = document.querySelector('.id').dataset.id
        const comment = commentForm.value.trim()
        const commentData = {
            content: comment,
            blog_id: blogID
        }
        console.log(JSON.stringify(commentData))

        const postComment = await fetch('/api/blog/comment', {
            method: 'POST',
            body: JSON.stringify({content: comment, blog_id: blogID}),
            headers: { 'Content-Type': 'application/json' },
        });

        if (postComment.ok){
            alert('Comment posted successfully!')
            location.reload()
        } else {
            alert ('Comment failed to post. Please try again.')
        };
    };
};
commentSubmit.addEventListener('click', (event) => {
    createComment(event)
});