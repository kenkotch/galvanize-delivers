
$(document).ready(() => {
  let cart = []

  //add to cart
  $('.card .btn-floating').click((event) => {
    event.preventDefault()
    // console.log('button click')
    let card = $(event.target).parent()
    let price = card.find('.price').text()
    let title = card.find('.card-title').text()

    addToCart({price: price, title: title})
  })

  //remove from cart
  $('#orders').click('.remove', (event) => {
    let title = $(event.target).data("title")
    removeFromCart(title)
  })

  function removeFromCart(title) {
    let existingItem = findInCart(title)
    if (existingItem && existingItem.quantity > 0) {
      existingItem.quantity--
    }
    renderCart()
  }

  function addToCart(item) {

    let existingItem = findInCart(item.title)

    if (existingItem) {
      console.log('item exists', existingItem)
      existingItem.quantity++
    } else {
      //add quantity 1 to cart
      item.quantity = 1
      cart.push(item)
    }
    renderCart()
    console.log(cart)
  }

  function findInCart(text) {
    let existingItem = null
    for (var i = 0; i < cart.length; i++) {
      if (cart[i].title === title) {
        existingItem = cart[i]
      }
    }
    return existingItem
  }

  function renderCart() {
    //find table
    let tbody = $('#orders tbody')
    console.log(tbody)

    //clear data
    tbody.children().remove()

    //rerender tbody
    let subtotal = 0
    for (item of cart) {
      let price = parsePrice(item.price)

      if (item.quantity > 0) {
        tbody.append(`<tr>
          <td>${item.title}</td>
          <td>${item.quantity}</td>
          <td>${formatPrice(price)}</td>
          <td><a class="btn btn-primary btn-floating remove-item AddBtn removeBtn" data-title="${item.title}">Remove</a></td>
        </tr>`)
      }
      subtotal += price * +(item.quantity)
    }

    //calculate
    $('#subtotal').text(formatPrice(subtotal))
  }

  function parsePrice(price) {
    return parseFloat(price.replace(/\$/, ''))
  }

  function formatPrice(price) {
    return '$' + price.toFixed(2)
  }

})
