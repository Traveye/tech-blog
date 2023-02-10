// this function is called when the user submits new post data

const postHandler = async (event) => {
    event.preventDefault();
    // get the title and content from the form
    const title = document.querySelector('#post-title').value.trim();
    const content = document.querySelector('#post-content').value.trim();
    if(title && content) {
        const response = await fetch('/api/posts', {
            method: 'POST',
            body: JSON.stringify({
                title,
                content
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        // if the response is ok, redirect to the dashboard
        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert("Failed to create post");
        }
    }
}

document
  .querySelector('#new-post')
  .addEventListener('click', postHandler);