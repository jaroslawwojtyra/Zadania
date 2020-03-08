const listOnHTML = document.getElementById("posts");
const fetchURL = 'https://jsonplaceholder.typicode.com/posts/';
const userId = 2;
let postList;


fetch(fetchURL).then(response => response.json())
  .then(json => {console.log(json)
    postList = json;
    let publicPost = postList.filter(function(post){
            return post.userId !== 2
      });
      console.log(publicPost);
      publicPost.reverse();

    publicPost.forEach(function(post, i) {
      let newPost = document.createElement('h3');
      newPost.innerHTML = ` ${post.id} ${post.title} `;
      listOnHTML.appendChild(newPost);
  });
  });
