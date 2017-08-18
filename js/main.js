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
    //check if in cart
    let existingItem = findInCart(item.title)

    if(existingItem) {
      existingItem.quantity++
    } else {
      item.quantity = 1
      cart.push(item)
    }
    renderCart()
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
          <td class='ctrBtn'><a class="remove btn-floating waves-effect waves-light red" data-title="${item.title}">-<i class="material-icons"></i></a></td>
        </tr>`)
      }
      subtotal += (price * item.quantity)
    }

    // do calculate
    // console.log("subtotal", subtotal)
    $('#subtotal').text(formatPrice(subtotal))
    addTax()
    addTotal()
  }

  function parsePrice(price) {
    return parseFloat(price.replace(/\$/, ''))
  }

  function formatPrice(price) {
    return '$' + price.toFixed(2)
  }


  //  tax
  function addTax() {
    let tax = $('#subtotal').text().replace(/\$/, '') * 0.08845
    // parseFloat(tax.toFixed(2))
    tax = '$' + tax.toFixed(2)
    $('#tax').text(tax)
  }

  // total
  function addTotal() {
    let total = parseFloat($('#subtotal').text().replace(/\$/, ''))
    total += (total * 0.08845)
    total = '$' + total.toFixed(2)
    console.log(total)
    $('#total').text(total)
  }


})
