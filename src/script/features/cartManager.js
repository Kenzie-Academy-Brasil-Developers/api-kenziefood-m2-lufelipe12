import { db } from '../mock/db.js';
import {cartMaker, makingCart} from '../render.js'

export const cart = document.getElementById('itemsToBuy');
export const empty = document.getElementById('emptyCar');
export const balance = document.getElementById('balance');

let itemsInCart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : []

class CartManager{

    static addToCart(productId, productList) {
        const filteredProduct = productList.find(selectedProduct => selectedProduct.id == productId);
        itemsInCart.push(filteredProduct);
        localStorage.setItem('cart', JSON.stringify(itemsInCart))
    }

    static attPrice(itemsInCart) {
        let price = document.getElementById('price');
        let quantity = document.getElementById('quantity');
        price.innerText = `R$ ${this.totalPrice(itemsInCart).toFixed(2)}`;
        quantity.innerText = itemsInCart.length;
    }

    static totalPrice(itemsInCart) {
        return itemsInCart.reduce((a, b) => a + b.preco, 0);
    }

    static eraseItem = (itemsInCart, itemId) => {
        let product = itemsInCart.find(item => itemId == item.id);
        let index = itemsInCart.indexOf(product);
        itemsInCart.splice(index, 1);
        localStorage.setItem('cart', JSON.stringify(itemsInCart))
    }

}

export {CartManager}

makingCart(itemsInCart, cartMaker)

export const mainInterceptor = (evt) => {
    const buyButton = evt.target;
    if (buyButton.className === 'add') {
        const productId = buyButton.getAttribute('id');
        CartManager.addToCart(productId, db);
        makingCart(itemsInCart, cartMaker);
        CartManager.attPrice(CartManager.totalPrice, itemsInCart);
        empty.style.display = 'none';
        balance.style.display = 'flex';
    }
}

export const cartInterceptor = (evt) => {
    const eraseButton = evt.target;
    if (eraseButton.tagName === 'BUTTON') {
        const productId = eraseButton.getAttribute('id');
        CartManager.eraseItem(itemsInCart, productId);
        makingCart(itemsInCart, cartMaker);
        CartManager.attPrice(CartManager.totalPrice, itemsInCart);
        if (itemsInCart.length === 0) {
            empty.style.display = 'flex';
            balance.style.display = 'none';
        }
    }
}

