$(document).ready(() => {
  let cart = []

  $('.addBtn').click((event) => {
    // event.preventDefault()
    let card = $(event.target).parent().siblings()
    let price = card.find('.price').text()
    let title = card.find('.card-title').text()
    addToCart({price, title})
  })


  function addToCart(item) {
    cart.push(item)
    console.log('cart', cart)

    renderCart()
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

      // if (item.quantity > 0) {
        tbody.append(`<tr>
          <td>${item.title}</td>
          <td>${item.quantity}</td>
          <td>${item.price}</td>
          <td><a class="btn btn-primary remove-item" data-title="${item.title}">Remove</a></td>
        </tr>`)
      // }
      subtotal += price //* +(item.quantity)
    }

    // do calculate
    console.log("subtotal", subtotal)
    $('#subtotal').text(formatPrice(subtotal))
  }

  function parsePrice(price) {
    return parseFloat(price.replace(/\$/, ''))
  }

  function formatPrice(price) {
    return '$' + price.toFixed(2)
  }





})
