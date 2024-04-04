let postsC = document.getElementById('posts');
let postType = document.querySelector(".post_type");
let tables = document.querySelector(".table");
let tiles = document.querySelector(".plite");
let url = "https://jsonplaceholder.typicode.com/todos";
let displayedPosts = 0;

function fetchData(url) {
  return fetch(url)
    .then(response => response.json())
    .catch(error => {
      console.error('Ошибка при загрузке данных:', error);
    });
}

function createElements(posts) {
  posts.forEach(todo => {
    if (displayedPosts < 10) {
      let postElem = document.createElement('div');
      postsC.appendChild(postElem);
      postElem.innerHTML = `
        <hr class="hr">  
        <h1 class="title">${todo.title}</h1>
        <p>${todo.completed}</p>`;
      displayedPosts++;
    }
  });
}

function Reload(postsC) {
  fetchData(url)
    .then(posts => {
      createElements(posts);
    });
}

Reload(postsC);


function changeColorOnClick(element, otherButton) {
  element.onclick = () => {
    if (element.style.color !== "blue") {
      element.style.color = "blue";
      otherButton.style.color = "";
    } else {
      element.style.color = "";
    }

  }
element.onclick = () => {
  postsC.innerHTML = ""
}



}






changeColorOnClick(tables, tiles);
changeColorOnClick(tiles, tables);