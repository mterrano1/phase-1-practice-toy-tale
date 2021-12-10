let addToy = false;

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
  initialize()
});

function renderOneToy(toy){
  let card = document.createElement('div');
  card.className = 'card';
  card.innerHTML = `
    <h2>${toy.name}</h2>
    <img src='${toy.image}' class='toy-avatar'>
    <p>${likes}</p>
    <button class='like-btn' id=${toy.id}>'Like heart pic'</button>
  `
  console.log(card)
}

function getAllToys(){
  fetch('http://localhost:3000/toys')
  .then(res => res.json())
  .then(toys.forEach(toy => renderOneToy(toy)))
}

function initialize(){
  getAllToys()
}

initialize()
