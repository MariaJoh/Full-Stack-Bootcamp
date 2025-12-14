 /*
    - Example: Order tracking app
        - Instantly: Order confirmed ✅
        - After 2 seconds: Order is being prepared 🍜
        - After 10 seconds: Order prepared 🎉
        - After 5 seconds: Order handed over to the delivery person 📦
        - After 3 seconds: Order is on the way 🚴
        - After 8 seconds: Order reached it's destination 📍
        - After 4 seconds: Order has been delivered 😋

        Total processing time for order: 32 seconds
*/
const burger = "Burger"
const burgerPrice = 12
const fries = "Fries"
const friesPrice = 4
const soda = "Soda"
const sodaPrice = 3

let burgerSelected = false
const selectedBurger = document.getElementById('burger-selected')
selectedBurger.addEventListener('click', () => {
    selectedBurger.classList.toggle('selected')
    selectedBurger.classList.toggle('unselected')
    burgerSelected = !burgerSelected  
})

let friesSelected = false
const selectedFries = document.getElementById('fries-selected')
selectedFries.addEventListener('click', () => {
    selectedFries.classList.toggle('selected')
    selectedFries.classList.toggle('unselected')
    friesSelected = !friesSelected   
})

let sodaSelected = false
const selectedSoda = document.getElementById('soda-selected')
selectedSoda.addEventListener('click', () => {
    selectedSoda.classList.toggle('selected')
    selectedSoda.classList.toggle('unselected')
    sodaSelected = !sodaSelected  
})

const orderBeingPrepared = (orderNo) => new Promise((resolve, reject) => {
  setTimeout(() => {
    document.getElementById(`order-status-img-${orderNo}`).src='assets/order-being-prepared.gif'
    document.getElementById(`order-status-txt-${orderNo}`).innerText = 'Order is being prepared'
    resolve(orderNo)
  }, 2000)
})

const orderPrepared = (orderNo) => new Promise((resolve, reject) => {
  setTimeout(() => {
    document.getElementById(`order-status-img-${orderNo}`).src='assets/order-prepared.gif'
    document.getElementById(`order-status-txt-${orderNo}`).innerText = 'Order prepared'
    resolve(orderNo)
  }, 10000)
})

const orderHandedOver = (orderNo) => new Promise((resolve, reject) => {
  setTimeout(() => {
    document.getElementById(`order-status-img-${orderNo}`).src='assets/order-handed-over.gif'
    document.getElementById(`order-status-txt-${orderNo}`).innerText = 'Order handed over to the delivery person'
    resolve(orderNo)
  }, 5000)
})

const orderOnTheWay = (orderNo) => new Promise((resolve, reject) => {
  setTimeout(() => {
    document.getElementById(`order-status-img-${orderNo}`).src='assets/order-on-the-way.gif'
    document.getElementById(`order-status-txt-${orderNo}`).innerText = 'Order is on the way'
    resolve(orderNo)
  }, 3000)
})

const orderReachedDestintaion = (orderNo) => new Promise((resolve, reject) => {
  setTimeout(() => {
    document.getElementById(`order-status-img-${orderNo}`).src='assets/order-reached-destination.gif'
    document.getElementById(`order-status-txt-${orderNo}`).innerText = `Order reached its destination`
    resolve(orderNo)
  }, 8000)
})

const orderDelivered = (orderNo) => new Promise((resolve, reject) => {
  setTimeout(() => {
    document.getElementById(`order-status-img-${orderNo}`).src='assets/order-delivered.gif'
    document.getElementById(`order-status-txt-${orderNo}`).innerText = 'Order has been delivered'
    resolve(orderNo)
  }, 4000)
})

let orderNo = 0

const placeOrder = () => {
  orderNo++
  createOrderCard()

  document.getElementById(`order-status-img-${orderNo}`).src='assets/order-confirmed.gif'
  document.getElementById(`order-status-txt-${orderNo}`).innerText = 'Order confirmed'

  orderBeingPrepared(orderNo)
    .then((orderNo) => orderPrepared(orderNo))
    .then((orderNo) => orderHandedOver(orderNo))
    .then((orderNo) => orderOnTheWay(orderNo))
    .then((orderNo) => orderReachedDestintaion(orderNo))
    .then((orderNo) => orderDelivered(orderNo))
    .then((orderNo) => console.log(`Order ${orderNo} completed processing`))
    .catch(() => console.log('Something went wrong'))
}

// Attach event listener for the place order button so it works when script is a module
document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('place-order-btn')
  if (btn) btn.addEventListener('click', placeOrder)
})

function createOrderCard() {
    const orderList = document.getElementById('order-list')

    const colDiv = document.createElement('div')
    colDiv.classList.add('col-xl-4', 'col-md-8')
    colDiv.id = `order-${orderNo}`

    const cardDiv = document.createElement('div')
    cardDiv.classList.add('card', 'text-center', 'mt-2')

    const cardHeaderDiv = document.createElement('div')
    cardHeaderDiv.classList.add('card-header')
    cardHeaderDiv.innerText = `Order No. ${orderNo}`

    const cardBodyDiv = document.createElement('div')
    cardBodyDiv.classList.add('card-body')

    let total = 0
    const orderForm = document.getElementById('order-form')
    orderForm.reset()
    
    let bodyHTML = `
      <table class="table table-striped">
        <thead>
          <tr>
          <th scope="col">#</th>
          <th scope="col">Item</th>
          <th scope="col">Price</th>
          </tr>
        </thead>
        <tbody>`


    let count = 1 
    if (burgerSelected) {
      bodyHTML += `
        <tr>
          <th scope="row">${count}</th>
          <td>${burger}</td>
          <td>$${Number(burgerPrice).toFixed(2)}</td>
        </tr>`
        total += burgerPrice
        count++
    }

    if (friesSelected) {
      bodyHTML += `
        <tr>
          <th scope="row">${count}</th>
          <td>${fries}</td>
          <td>$${Number(friesPrice).toFixed(2)}</td>
        </tr>`
        total += friesPrice
        count++
    }

    if (sodaSelected) {
      bodyHTML += `
        <tr>
          <th scope="row">${count}</th>
          <td>${soda}</td>
          <td>$${Number(sodaPrice).toFixed(2)}</td>
        </tr>`
        total += sodaPrice
        count++
    }

    bodyHTML += `
          <tr>
            <th scope="row">Total</th>
            <td></td>
            <td>$${Number(total).toFixed(2)}</td>
          </tr>
        </tbody>
      </table>`

    cardBodyDiv.innerHTML = bodyHTML

    const orderStatusImg =  document.createElement('img')
    orderStatusImg.src = ''
    orderStatusImg.id = `order-status-img-${orderNo}`
    orderStatusImg.width = '75'

    const orderStatusTxt =  document.createElement('p')
    orderStatusTxt.classList.add('card-text')
    orderStatusTxt.id = `order-status-txt-${orderNo}`

    const cancelBtn = document.createElement('button')
    cancelBtn.classList.add('btn', 'btn-danger', 'btn-sm')
    cancelBtn.innerText = 'Cancel'
    cancelBtn.addEventListener('click', () => {
        const orderCol = document.getElementById(`order-${orderNo}`)
        orderList.remove(orderCol)
    })

    cardBodyDiv.append(orderStatusImg, orderStatusTxt, cancelBtn)

    const cardFooterDiv = document.createElement('div')
    cardFooterDiv.classList.add('card-footer', 'text-body-secondary')
    const currentTime = new Date()
    cardFooterDiv.innerText = currentTime.toLocaleString()

    cardDiv.append(cardHeaderDiv, cardBodyDiv, cardFooterDiv)
    colDiv.append(cardDiv)
    orderList.append(colDiv)

    if (burgerSelected) {
        selectedBurger.classList.remove('selected')
        selectedBurger.classList.add('unselected')
        burgerSelected = false
    }

    if (friesSelected) {
        selectedFries.classList.remove('selected')
        selectedFries.classList.add('unselected')
        friesSelected = false
    }

    if (sodaSelected) {
        selectedSoda.classList.remove('selected')
        selectedSoda.classList.add('unselected')
        sodaSelected = false
    }
}