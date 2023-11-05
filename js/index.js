// Write your Pizza Builder JavaScript in this file.

// Constants
const basePrice = 10;
const ingredients = {
  pepperoni: { name: 'pepperoni', price: 1 },
  mushrooms: { name: 'Mushrooms', price: 1 },
  greenPeppers: { name: 'Green Peppers', price: 1 },
  whiteSauce: { name: 'White sauce', price: 3 },
  glutenFreeCrust: { name: 'Gluten-free crust', price: 5 }
};

// Initial value of the state (the state values can change over time)
const state = {
  pepperoni: true,
  mushrooms: true,
  greenPeppers: true,
  whiteSauce: false,
  glutenFreeCrust: false
};

// This function takes care of rendering the pizza based on the state
// This function is triggered once at the beginning and every time the state is changed
function renderEverything() {
  renderPepperoni();
  renderMushrooms();
  renderGreenPeppers();
  renderWhiteSauce();
  renderGlutenFreeCrust();

  renderButtons();
  renderPrice();
}

function renderPepperoni() {
  document.querySelectorAll('.pep').forEach((onePep) => {
    if (state.pepperoni) {
      onePep.style.visibility = 'visible';
    } else {
      onePep.style.visibility = 'hidden';
    }
  });
}

function renderMushrooms() {
  document.querySelectorAll('.mushroom').forEach((oneMush) => {
    if (state.mushrooms) {
      oneMush.style.visibility = 'visible';
    } else {
      oneMush.style.visibility = 'hidden';
    }
  })
}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  document.querySelectorAll('.green-pepper').forEach((oneGreenPep) => {
    if (state.greenPep) {
      oneGreenPep.style.visibility = 'visible';
    } else {
      oneGreenPep.style.visibility = 'hidden';
    }
  })
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  const whiteSauce = document.querySelector(".sauce")
  whiteSauce.classList.toggle("sauce-white")
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  const GlutenFreeCrust = document.querySelector(".crust")
  GlutenFreeCrust.classList.toggle("crust-gluten-free")
}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
//1. Check if "state" is equal to each one of the pizza's type
//2. Use if..../ else...Every time that state is equal to the pizza's type, 
// the "active class" should be added / else re3moved - maybe I can use .toggle?? I've tried, but it was not working neither...
if(state.pepperoni){
  document.querySelector('.btn-pepperoni').classList.add ('active')}
  else{
    document.querySelector('.btn-pepperoni').classList.remove('active')
  }

  if(state.mushrooms){
    document.querySelector('.btn-mushrooms').classList.add ('active')}
    else{
      document.querySelector('.btn-mushrooms').classList.remove('active')
    }

  if(state.greenPeppers){
    document.querySelector('.btn-green-peppers').classList.add ('active')}
    else{
      document.querySelector('.btn-green-peppers').classList.remove('active')
    }

    if(state.whiteSauce){
      document.querySelector('.btn-sauce').classList.add ('active')}
      else{
        document.querySelector('.btn-sauce').classList.remove('active')
      }

      if(state.glutenFreeCrust){
        document.querySelector('.btn-crust').classList.add ('active')}
        else{
          document.querySelector('.btn-crust').classList.remove('active')
        }
  }



function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">
  // Display a list with all the items that are selected with the buttons 
  // Display a number which represents the total price of all those selected ingredients. 
  // Check if the state is true or not, 
  // Loop through each one a see. 
  //Then work with the DOM and manipulate those innerHTML


 //const itemsList=document.querySelector ('.panel price ul')
  //itemsList.innerHTML = ''
  //let totalPrice = document.querySelector ('.panel price strong')
  //totalPrice.innerHTML = ''
  
  //itemsList.forEach ((price) =>
//  if (state === true){
// totalPrice
 //   }
 // )
 
  }


renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document.querySelector('.btn.btn-pepperoni').addEventListener('click', function () {
  state.pepperoni = !state.pepperoni;
  renderEverything();
});



// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document.querySelector('.btn.btn-mushrooms').addEventListener('click', function () {
  state.mushrooms = !state.mushrooms;
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document.querySelector('.btn.btn-green-peppers').addEventListener('click', function () {
  state.GreenPep = !state.GreenPep;
  renderEverything();
});

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`

document.querySelector('.btn.btn-sauce').addEventListener('click', function () {
  state.sauce =!state.sauce
  renderEverything();
});

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector('.btn.btn-crust').addEventListener('click', function () {
  state.crust =!state.crust
  renderEverything();
})