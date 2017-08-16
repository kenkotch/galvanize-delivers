document.addEventListener('DOMContentLoaded', () => {
// $(document).ready(function () {

const food = {
  burger: ['Royale with Cheese', '$9.37', 'img/burger.jpg'],
  pizza: ['Wood Oven Pizza', '$13.21', 'img/pizza.jpg'],
  ribs: ['Meaty Ribs with extra meat', '$16.99', 'img/ribs.jpg'],
  iceCream: ['Melty Ice Cream', '$0.48', 'img/ice_cream.jpg']
}

let ol = document.getElementsByClassName('buying')[0]
let burger = document.getElementById('burger')
let pizza = document.getElementById('pizza')
let ribs = document.getElementById('ribs')
let iceCream = document.getElementById('iceCream')

function addFood(ol, text) {
  let li = document.createElement('li')
  li.innerHTML = text
  ol.appendChild(li)
}

// add Burger
burger.addEventListener('click', function() {
  addFood(ol, 'Royale with Cheese')
})

// add Pizza
pizza.addEventListener('click', function() {
  addFood(ol, 'Wood Fired Pizza')
})

// add Ribs
ribs.addEventListener('click', function() {
  addFood(ol, 'Sweet, Sweet Ribs')
})

// add Ice Cream
iceCream.addEventListener('click', function() {
  addFood(ol, 'Melty Ice Cream')
})




})



//
//
// function createLi(ol, text) { //create li, put it in ol
//   let li = document.createElement('li')
//   li.innerHTML = text
//   ol.appendChild(li)
// }
//
// function removeLi() { //remove 1 li
//   // let ol = document.getElementsByClassName('kenList')[0]
//   if (ol.lastChild){
//   ol.lastChild.remove()
//   }
// }
//
// let button = document.getElementById('addBtn') //call createLi
// button.addEventListener('click', function() {
//   createLi(ol, 'some text')
// })
//
// let rmButton = document.getElementById('removeBtn') //call removeLi
// rmButton.addEventListener('click', function() {
//   removeLi()
// })



  //
  // $('#simple-form').on('submit', function (event) {
  //   const serialized = $('#simple-form').serializeArray()
  //   //this is how to add and print #s for ken delivers!
  //   let num01 = parseInt($('#num-01').val(), 10)
  //   let num02 = parseInt($('#num-02').val(), 10)
  //   let total = num01 + num02
  //   $('#total').text(`$${total}!`)
  //   console.log(serialized)
  //   // console.log(total)
  //   return false
  // })
  //
  // $('#yay-btn').on('click', function (event) {
  //   event.preventDefault()
  //   alert('Yeah!')
  //   console.log('YAY YAY YAY')
  // })
