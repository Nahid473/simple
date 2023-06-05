document.getElementById('postForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    // Get the values from the form
    var title = document.getElementById('postTitle').value;
    var content = document.getElementById('postContent').value;
    var photo = document.getElementById('postPhoto').files[0];
  
    // Display the uploaded post
    displayPost(title, content, photo);
  
    // Reset the form
    document.getElementById('postForm').reset();
  });
  
  function displayPost(title, content, photo) {
    // Create a new post element
    var postElement = document.createElement('div');
    postElement.classList.add('post');
    
    // Create elements for post data
    var titleElement = document.createElement('h3');
    titleElement.textContent = title;
    var contentElement = document.createElement('p');
    contentElement.textContent = content;
    var photoElement = document.createElement('img');
    photoElement.src = URL.createObjectURL(photo);
    photoElement.alt = 'Uploaded Photo';
    
    // Append post data elements to the post element
    postElement.appendChild(titleElement);
    postElement.appendChild(contentElement);
    postElement.appendChild(photoElement);
    
    // Append the post element to the post container
    var postContainer = document.getElementById('postContainer');
    postContainer.appendChild(postElement);
  }
  