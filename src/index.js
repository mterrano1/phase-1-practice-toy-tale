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
});


function renderOneToy(toy){
  let card = document.createElement('div');
  card.className = 'card';
  card.innerHTML = `
    <h2>${toy.name}</h2>
    <img src='${toy.image}' class='toy-avatar'>
    <p>''</p>
    <button class='like-btn' id=${toy.id}>'Like heart pic'</button>
  `
document.querySelector('#toy-collection').appendChild(card)
}

const sendToy = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Accept: "application.json",
  },
  body: JSON.stringify({
    name: 'Baby Yoda',
    image: 'https://target.scene7.com/is/image/Target/GUEST_c9596f8d-70ad-4700-af78-39b40fd95e09?wid=488&hei=488&fmt=pjpeg',
    likes: 0
  }),
};

function getAllToys(){
  fetch('http://localhost:3000/toys', sendToy)
  .then(res => res.json())
  // .then(toys => toys.forEach(toy => renderOneToy(toy)))
  .then(toys => renderOneToy(toys))
}

function initialize(){
  getAllToys()
}

initialize();

