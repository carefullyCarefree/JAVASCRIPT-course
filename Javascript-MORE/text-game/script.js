/* OBJECT
-Select all elements
-add logic that makes the inputs and selections change the following slides
-hide all but current slide and transition to the next one


- slide changer function
    - trigger

*/
// var  chosenName, chosenWeapon, chosenLocation nameInput, sword, bow, axe, forest, city, land;

// Name
var nameInput = document.getElementById("nameInput");
var chosenName = document.querySelectorAll(".name");

for (var i = 0; i < chosenName.length; i++) {
  chosenName[i] = nameInput.textcontent;
}

//weapon
var sword = document.getElementById("sword");
var bow = document.getElementById("bow");
var axe = document.getElementById("axe");
let chosenWeapon;

sword.addEventListener("click", function () {
  chosenWeapon = "Sword";
  console.log("sword")
});
bow.addEventListener("click", function () {
  chosenWeapon = "Bow";
  console.log("bow");
});
axe.addEventListener("click", function () {
  chosenWeapon = "Axe";
  console.log("axe");
});

//Explore
let forest = document.getElementById("forest");
let city = document.getElementById("city");
let land = document.getElementById("land");
let chosenExplore;

forest.addEventListener('click', function () {
    chosenExplore = "forest"
    console.log('forest');
});

// SLIDES===============
let slideSquare, firstSlide, secondSlide, thirdSlide, fourthSlide, currentSlide, nextBtn;
firstSlide = document.querySelector("#first");
secondSlide = document.querySelector("#second");
thirdSlide = document.querySelector("#third");
fourthSlide = document.querySelector("#fourth");
nextBtn = document.querySelectorAll(".next");

// let allSlides = [firstSlide, secondSlide, thirdSlide, fourthSlide];

let init = () => {
    currentSlide = firstSlide;
    currentSlide.classList.add("slideOn");
}

let buttonSetup = () => {
    for(let i = 0; i < nextBtn.length; i++) {
        nextBtn[i].addEventListener('click', function() {
            console.log('button');
            slideSwitcher();
        });
    }
}

let slideSwitcher = () => {
    currentSlide.classList.remove("slideOn");
    if (currentSlide = firstSlide) {
        currentSlide = secondSlide;
        currentSlide.classList.add("slideOn");
    } else if (currentSlide = secondSlide) {
        currentSlide = thirdSlide;
        console.log('why');
        currentSlide.classList.add("slideOn");
    } else if (currentSlide = thirdSlide) {
        currentSlide = fourthSlide;
        currentSlide.classList.add("slideOn");
    }

}

let gameFlow = () => {
    //Setup game
    init();
    //setup
    buttonSetup();



}
gameFlow();
