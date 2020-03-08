const fetchURL= 'https://picsum.photos/v2/list?limit=10';
const imgContainer = document.getElementById('list-container');

let sliderOptions = {
    container: '.my-slider',
    items: 1,
    slideBy: 'page',
    autoplay: true,
    nav: false,
    mouseDrag: true,
    speed: 1000,
    autoplayButtonOutput: false,
    controlsPosition: "bottom",
    swipeAngle: false,
    arrowKeys: false,
    controls: false
  };

function getImages() {
  fetch(fetchURL)
    .then(response => response.json())
    .then(json =>{
        let imgList = json;
        imgList.forEach(function(img) {
            let imgElement = document.createElement("div");
            imgElement.innerHTML = `<div style="background-image:
            url('${img.download_url}.jpg')"></div>`;
            imgContainer.appendChild(imgElement);
            let imgAuthor = document.createElement('h3');
            imgAuthor.innerHTML = `${img.author}`
            imgElement.appendChild(imgAuthor);
        });
        tns (sliderOptions);
    })
  }
getImages();

const fetchURL2= 'https://jsonplaceholder.typicode.com/posts/';
const postContainer = document.getElementById('post-container');

let sliderOptions2 = {
    container: '.post-slider',
    items: 3,
    axis: 'vertical',
    slideBy: 'page',
    autoplay: true,
    nav: false,
    mouseDrag: true,
    speed: 1000,
    autoplay: true,
    autoplayButtonOutput: false,
    controlsPosition: "bottom",
    swipeAngle: false,
    arrowKeys: false,
    controls: false
  };

function getPosts() {
  fetch(fetchURL2)
    .then(response => response.json())
    .then(json =>{
        let postList = json;
        console.log(postList);
        postList.forEach(function(post) {
            let postElement = document.createElement("div");
            postElement.innerHTML = `${post.title}`;
            postContainer.appendChild(postElement);
            let postAuthor = document.createElement('h3');
            postAuthor.innerHTML = `${post.body}`
            postElement.appendChild(postAuthor);
        });
        tns (sliderOptions2);
  })
};
getPosts();
