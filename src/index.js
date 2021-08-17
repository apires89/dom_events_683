console.log("Hello from lewagon!");

const players = document.querySelector("#players");
// same as
// const list = document.getElementById("players");

// console.log(players);

// const lewagon = document.querySelector("p")

// console.log(lewagon);

// basic css selectors

// const child = document.querySelector("ul .active")

// // multiple selections

// const list = document.querySelector("ul.lewagon")


// // wating 3 seconds to add a new player!
// setTimeout(() => {
//   list.insertAdjacentHTML("beforeend", "<li>Thierry</li>")
// }, 3000);


// select all of the li's
const countries = document.querySelectorAll("#fifa-wins li");

countries.forEach((item) => {
  console.log(item.innerText);
})

const list = document.querySelector("#fifa-wins")

list.insertAdjacentHTML("beforeend","<li>France(2 wins)</li>")


const footer = document.querySelector("p")
// make footer disapear
footer.style.display = "none";
// make footer appear
footer.style.display = "";


// add css and view classList
footer.classList

footer.classList.add("red")
footer.classList.remove("red")
footer.classList.toggle("red")


//access values
const emailInput = document.getElementById("email")

//output the email
emailInput.value


//get the link

const home = document.getElementById("home");
console.log(home.innerText);
console.log(home.innerHTML);
console.log(home.attributes.href.value);

home.innerHTML = "Le Wagon <strong>rocks</strong>!"; // Update HTML


// get info from the dataset

const boris = document.getElementById('user');
console.log(boris.dataset.uid);
console.log(boris.dataset.githubNickname);




// select the image and add an event listener
const romain = document.getElementById("romain");

romain.addEventListener("click", (event) => {
  event.currentTarget.classList.toggle("img-circle");
});
