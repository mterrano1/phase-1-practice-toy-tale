let addToy = false;
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");
  addBtn.addEventListener("click", () => {
    // hide & seek with the form
    addToy = !addToy;
    if (addToy) {
      toyFormContainer.style.display = "block";
    } else {
      toyFormContainer.style.display = "none";
    }
  });
});


function renderOneToy(toy){
  let card = document.createElement('div');
  card.className = 'card';
  card.innerHTML = `
    <h2>${toy.name}</h2>
    <img src='${toy.image}' class='toy-avatar'>
    <p>'0 likes'</p>
    <button class='like-btn' id=${toy.id}>${EMPTY_HEART}</button>
  `

document.querySelector('#toy-collection').appendChild(card)
}

// document.querySelector('like-btn').addEventListener('click', () => {
//   document.querySelector('p').textContent = `${likes} likes`
// });

// sendLike = {
//   method: "PATCH",
//   headers: {
//     "Content-Type": "application/json",
//     Accept: "application.json",
//   },
//   body: JSON.stringify(jsonDataOne),
// };

document.querySelector('form').addEventListener('submit', (e) => {
  e.preventDefault();  
  let inputName = e.target[0].value;
  let inputUrl = e.target[1].value;

  let jsonData = {
    name: inputName,
    image: inputUrl,
    likes: 0
  }

  sendToy = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application.json",
    },
    body: JSON.stringify(jsonData),
  };
  postFetch()
})

function postFetch(){
  fetch('http://localhost:3000/toys', sendToy)
  .then(res => res.json())
  // .then(toys => toys.forEach(toy => renderOneToy(toy)))
  .then(data => renderOneToy(data))
}

function getAllToys(){
  fetch('http://localhost:3000/toys')
  .then(res => res.json())
  .then(toys => toys.forEach(toy => renderOneToy(toy)))
}

getAllToys()


