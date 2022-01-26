import db from '../mock/db.js';

const cart = document.getElementById('itemsToBuy');
const empty = document.getElementById('emptyCar');
const balance = document.getElementById('balance');

/// itemsInCart = JSON.parse(localStorage.getItem('cart'))
let itemsInCart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : []

function addToCart(productId, productList) {
    const filteredProduct = productList.find(selectedProduct => selectedProduct.id == productId);
    itemsInCart.push(filteredProduct);
    localStorage.setItem('cart', JSON.stringify(itemsInCart))
}

function cartMaker(itemsInCart) {
    const img = document.createElement('img');
    const name = document.createElement('p');
    const type = document.createElement('span');
    const price = document.createElement('span');
    const button = document.createElement('button');
    const div = document.createElement('div');

    img.src = itemsInCart.imagem;
    name.innerText = itemsInCart.nome;
    type.innerText = itemsInCart.categoria;
    price.innerText = ` R$ ${itemsInCart.preco.toFixed(2)}`;
    button.setAttribute('data-id', itemsInCart.id);
    button.innerText = 'X';

    cart.appendChild(div)
    div.appendChild(img)
    div.appendChild(name)
    div.appendChild(type)
    div.appendChild(price)
    div.appendChild(button)
}

const makingCart = (itemsInCart, cartMaker) => {
    const itemsToBuy = document.getElementById('itemsToBuy');
    itemsToBuy.innerHTML = '';
    if (itemsInCart.length > 0) {
        empty.style.display = 'none';
        balance.style.display = 'block';
    }
    itemsInCart.forEach(element => {
        attPrice(totalPrice, itemsInCart);
        cartMaker(element);
    })
}

makingCart(itemsInCart, cartMaker)

function totalPrice (itemsInCart) {
    return itemsInCart.reduce((a, b) => a + b.preco, 0);
}

function attPrice(totalPrice, itemsInCart) {
    let price = document.getElementById('price');
    let quantity = document.getElementById('quantity');
    price.innerText = `R$ ${totalPrice(itemsInCart).toFixed(2)}`;
    quantity.innerText = itemsInCart.length;
}

export const mainInterceptor = (evt) => {
    const buyButton = evt.target;
    if (buyButton.className === 'add') {
        const productId = buyButton.getAttribute('id');
        addToCart(productId, db);
        makingCart(itemsInCart, cartMaker);
        attPrice(totalPrice, itemsInCart);
        empty.style.display = 'none';
        balance.style.display = 'block';
    }

}

const eraseItem = (itemsInCart, itemId) => {
    let product = itemsInCart.find(item => itemId == item.id);
    let index = itemsInCart.indexOf(product);
    itemsInCart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(itemsInCart))
}

export const cartInterceptor = (evt) => {
    const eraseButton = evt.target;
    if (eraseButton.tagName === 'BUTTON') {
        const productId = eraseButton.getAttribute('id');
        eraseItem(itemsInCart, productId);
        makingCart(itemsInCart, cartMaker);
        attPrice(totalPrice, itemsInCart);
        if (itemsInCart.length === 0) {
            empty.style.display = 'block';
            balance.style.display = 'none';
        }
    }
}


