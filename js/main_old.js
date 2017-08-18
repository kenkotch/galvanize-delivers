document.addEventListener('DOMContentLoaded', () => {

  //variables
  const food = {
    burgerF: ['Royale with Cheese', '$9.37', 'img/burger.jpg'],
    pizzaF: ['Wood Oven Pizza', '$13.21', 'img/pizza.jpg'],
    ribsF: ['Meaty Ribs with extra meat', '$16.99', 'img/ribs.jpg'],
    iceCreamF: ['Melty Ice Cream', '$0.48', 'img/ice_cream.jpg']
  }
  let olDesc = document.getElementsByClassName('buying')[0]
  let olImage = document.getElementsByClassName('image')[0]
  let olPrice = document.getElementsByClassName("price")[0]
  let burger = document.getElementById('burger')
  let pizza = document.getElementById('pizza')
  let ribs = document.getElementById('ribs')
  let iceCream = document.getElementById('iceCream')

  function addFood(ol, text) {
    let li = document.createElement('li')
    li.innerHTML = text
    ol.appendChild(li)
  }

  let menu = document.querySelector('.myMenu')
  menu.addEventListener('click', function(event){
    // figure out which specific card was clicked
    // check the id attribute on event.target
    let itemName = event.target.offsetParent.getAttribute('id')
    

  })

  // add Burger
  // burger.addEventListener('click', function() {
  //
  //     let img = document.createElement('img')
  //     img.setAttribute('src', food.burgerF[2])
  //
  //
  //   addFood(olDesc, food.burgerF[0])
  //   addFood(olImage, food.burgerF[2])
  //   addFood(olPrice, food.burgerF[1])
  // })
  //
  // // add Pizza
  // pizza.addEventListener('click', function() {
  //   addFood(olDesc, food.pizzaF[0])
  //   addFood(olImage, food.pizzaF[2])
  //   addFood(olPrice, food.pizzaF[1])
  // })
  //
  // // add Ribs
  // ribs.addEventListener('click', function() {
  //   addFood(olDesc, food.ribsF[0])
  //   addFood(olImage, food.ribsF[2])
  //   addFood(olPrice, food.ribsF[1])
  // })
  //
  // // add Ice Cream
  // iceCream.addEventListener('click', function() {
  //   addFood(olDesc, food.iceCreamF[0])
  //   addFood(olImage, food.iceCreamF[2])
  //   addFood(olPrice, food.iceCreamF[1])
  // })

  //remove last food item
  function removeLi() {
    if (ol.lastChild) {
      ol.lastChild.remove()
    }
  }
  let rmButton = document.getElementById('removeBtn')
  rmButton.addEventListener('click', function() {
    removeLi()
  })
})

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
