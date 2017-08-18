
$(document).ready(() => {
  let cart = []

  //  add to cart
  $('.addBtn').click((event) => {
    // event.preventDefault()

    let card = $(event.target).parent().siblings()
    let price = card.find('.price').text()
    let title = card.find('.card-title').text()

    addToCart({price, title})
  })

  //remove from cart
  $('#orders').click('.remove', (event) => {
    let title = $(event.target).data('title')
    console.log('title to remove: ', title)
    removeFromCart(title)
  })

    function removeFromCart(title) {
      let existingItem = findInCart(title)
      if (existingItem && existingItem.quantity > 0) {
        console.log('removing item');
        existingItem.quantity--
      }
      console.log(cart);
      renderCart()
    }

  function addToCart(item) {
    //check if in cart
    let existingItem = findInCart(item.title)

    if(existingItem) {
      existingItem.quantity++
    } else {
      console.log('set quant to 1')
      item.quantity = 1
      cart.push(item)
    }
    renderCart()
    console.log(cart);
  }


  function findInCart(title) {
    let existingItem = null
    for (var i = 0; i < cart.length; i++) {
      if (cart[i].title === title) {
        existingItem = cart[i]
      }
    }
    return existingItem
  }

  function renderCart() {
    // find table
    let tbody = $('#orders tbody')

   // clear out all order data
    tbody.children().remove()

  // re-render tbody
    let subtotal = 0
    for (item of cart) {
      let price = parsePrice(item.price)

      if (item.quantity > 0) {
        tbody.append(`<tr>
          <td>${item.title}</td>
          <td>${item.quantity}</td>
          <td>${formatPrice(price)}</td>
          <td><a class="btn btn-primary remove" data-title="${item.title}">Remove</a></td>
        </tr>`)
        console.log('cart stuff');
      }
      subtotal += (price * item.quantity)
    }

    // do calculate
    console.log("subtotal", subtotal)
    $('#subtotal').text(formatPrice(subtotal))
  }

  function parsePrice(price) {

    console.log('this is parsePrice', parseFloat(price.replace(/\$/, '')))
    return parseFloat(price.replace(/\$/, ''))
  }

  function formatPrice(price) {
    console.log('formatPrice price is', price);
    return '$' + price.toFixed(2)
  }

})
