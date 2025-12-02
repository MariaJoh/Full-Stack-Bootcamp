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

const orderBeingPrepared = () => new Promise((resolve, reject) => {
    setTimeout(() => {
        document.getElementById('order-status').innerText = 'Order is being prepared 🍜'
        resolve()
    }, 2000)
})

const orderPrepared = () => new Promise((resolve, reject) => {
    setTimeout(() => {
        document.getElementById('order-status').innerText = 'Order prepared 🎉'
        resolve()
    }, 10000)
})

const orderHandedOver = () => new Promise((resolve, reject) => {
    setTimeout(() => {
        document.getElementById('order-status').innerText = 'Order handed over to the delivery person 📦'
        resolve()
    }, 5000)
})

const orderOnTheWay = () => new Promise((resolve, reject) => {
    setTimeout(() => {
        document.getElementById('order-status').innerText = 'Order is on the way 🚴'
        resolve()
    }, 3000)
})

const orderReachedDestintaion = () => new Promise((resolve, reject) => {
    setTimeout(() => {
        document.getElementById('order-status').innerText = `Order reached it's destination 📍`
        resolve()
    }, 8000)
})

const orderDelivered = () => new Promise((resolve, reject) => {
    setTimeout(() => {
        document.getElementById('order-status').innerText = 'Order has been delivered 😋'
        resolve()
    }, 4000)
})

const placeOrder = () => {
    createOrderCard()
    orderBeingPrepared()
    .then(() => orderPrepared())
    .then(() => orderHandedOver())
    .then(() => orderOnTheWay())
    .then(() => orderReachedDestintaion())
    .then(() => orderDelivered())
    .then(() => console.log('Enjoy your meal ✅'))
    .catch(() => console.log('Something went wrong'))
}

function createOrderCard() {
    const orderList = document.getElementById('order-list')

    const colDiv = document.createElement('div')
    colDiv.classList.add('col-xl-4','col-md-6')

    const cardDiv = document.createElement('div')
    cardDiv.classList.add('card','text-center','mt-2')

    const cardHeaderDiv = document.createElement('div')
    cardHeaderDiv.classList.add('card-header')
    cardHeaderDiv.innerText = `Order No. 1`

    const cardBodyDiv = document.createElement('div')
    cardBodyDiv.classList.add('card-body')
    cardBodyDiv.innerText = `Card Body`

    const cardFooterDiv = document.createElement('div')
    cardFooterDiv.classList.add('card-footer', 'text-body-secondary')
    cardFooterDiv.innerText = `Order No. 1`
    

    cardDiv.append(cardHeaderDiv, cardBodyDiv, cardFooterDiv)
    colDiv.append(cardDiv)
    orderList.append(colDiv)
}

            


/* ---------------------------- */
// const placeOrder = () => {
//   console.log('Order confirmed ✅')
//   orderBeingPrepared()
//     .then(orderPrepared)
//     .then(orderHandedOver)
//     .then(orderOnTheWay)
//     .then(orderReachedDestintaion)
//     .then(orderDelivered)
//     .then(() => console.log('Enjoy your meal ✅'))
//     .catch(() => console.log('Something went wrong'))
// }