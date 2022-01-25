import db from '../mock/db.js'
const main = document.getElementById('mainProducts')
const cart = document.getElementById('itemsToBuy')
let itemsInCart = []

function addToCart(productId, productList) {
    const filteredProduct = productList.find(selectedProduct => selectedProduct.id == productId )
    itemsInCart.push(filteredProduct)
}

function cartMaker(itemsInCart) {
    const img = document.createElement('img')
    const name = document.createElement('p')
    const type = document.createElement('span')
    const price = document.createElement('span')
    const button = document.createElement('button')
    const div = document.createElement('div')
    
    img.src = itemsInCart.imagem
    name.innerText = itemsInCart.nome
    type.innerText = itemsInCart.categoria
    price.innerText = `R$ ${itemsInCart.preco.toFixed(2)}`
    button.setAttribute('data-id', itemsInCart.id)
    button.innerText = 'X'

    cart.appendChild(div)
    div.appendChild(img)
    div.appendChild(name)
    div.appendChild(type)
    div.appendChild(price)
    div.appendChild(button)
}

const makingCart = (itemsInCart, cartMaker) => {
    const itemsToBuy = document.getElementById('itemsToBuy')
    itemsToBuy.innerHTML = ''

    itemsInCart.forEach(element => {
        cartMaker(element)
    })
}

const totalPrice = (itemsInCart) => {
    return itemsInCart.reduce((a, b) => a + b.preco, 0)
}

const attPrice = (totalPrice, itemsInCart) => {
    let price = document.getElementById('price')
    let quantity = document.getElementById('quantity')
    price.innerText = `R$ ${totalPrice(itemsInCart)}`
    quantity.innerText = itemsInCart.length
}

export const mainInterceptor = (evt) => {

    const buyButton = evt.target
    if (buyButton.tagName === 'BUTTON') {
        const productId = buyButton.getAttribute('id')
        addToCart(productId, db)
        makingCart(itemsInCart, cartMaker)
        attPrice(totalPrice, itemsInCart)
    }

}

const eraseItem = (itemsInCart, itemId) => {
    let product = itemsInCart.find(item => itemId == item.id)
    let index = itemsInCart.indexOf(product)
    itemsInCart.splice(index, 1)
}

export const cartInterceptor = (evt) => {

    const eraseButton = evt.target
    if (eraseButton.tagName === 'BUTTON') {
        //ATIVAR AS FUNCIONALIDADES DO CARRINHO
        const productId = eraseButton.getAttribute('id')
        eraseItem(itemsInCart, productId)
        makingCart(itemsInCart, cartMaker)
        attPrice(totalPrice, itemsInCart)
    }
}

