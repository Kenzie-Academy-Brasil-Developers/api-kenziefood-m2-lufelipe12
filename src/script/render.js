import { cartInterceptor, mainInterceptor } from './features/cartManager.js'
import { cart, empty, balance, CartManager } from './features/cartManager.js'

const main = document.getElementById('mainProducts')

export default function creatingShowCase(item) {

    main.innerText = ""

    item.forEach(item => {

        const { categoria, descricao, imagem, nome, preco, id } = item;

        const div = document.createElement("div")
        const img = document.createElement("img");
        const cat = document.createElement("button");
        const name = document.createElement("h2");
        const description = document.createElement("p");
        const price = document.createElement("p");
        const button = document.createElement("button")
        const section = document.createElement("section")

        img.src = imagem;
        cat.innerText = categoryIcon(categoria);
        cat.className = categoria.toLowerCase();
        cat.setAttribute('id', 'section')
        name.innerText = nome;
        description.innerText = descricao;
        price.innerText = `R$ ${preco}`;
        price.className = "price"
        price.innerText = `R$ ${preco.toFixed(2)}`;
        button.innerText = "🛒";
        button.id = id;
        button.className = "add";

        div.appendChild(img);
        div.appendChild(cat);
        div.appendChild(name);
        div.appendChild(description);
        section.appendChild(price);
        section.appendChild(button)
        div.appendChild(section)
        main.appendChild(div)
    })
}

function categoryIcon(cat) {
    if (cat === "Panificadora") {
        return "🥖 " + cat;
    } else if (cat === "Bebidas") {
        return "🥂 " + cat;
    } else {
        return "🍉 " + cat
    }
}

export function cartMaker(itemsInCart) {
    const img = document.createElement('img');
    const name = document.createElement('p');
    const type = document.createElement('span');
    const price = document.createElement('span');
    const button = document.createElement('button');
    const div = document.createElement('div');
    const section = document.createElement('section');
    const divtext = document.createElement('div')

    img.src = itemsInCart.imagem;
    name.innerText = `${itemsInCart.nome.slice(0, 17)} ...`;
    type.innerText = itemsInCart.categoria;
    type.className = 'typeBasket'
    price.innerText = ` R$ ${itemsInCart.preco.toFixed(2)}`;
    price.className = 'priceBasket'
    button.setAttribute('data-id', itemsInCart.id);
    button.innerText = '🗑️';

    section.appendChild(img)
    divtext.appendChild(name)
    divtext.appendChild(type)
    divtext.appendChild(price)
    section.appendChild(divtext)
    section.appendChild(button)
    div.appendChild(section)
    cart.appendChild(div)
}

export function makingCart (itemsInCart, cartMaker){
    const itemsToBuy = document.getElementById('itemsToBuy');
    itemsToBuy.innerHTML = '';
    if (itemsInCart.length > 0) {
        empty.style.display = 'none';
        balance.style.display = 'flex';
    }
    itemsInCart.forEach(element => {
        CartManager.attPrice(CartManager.totalPrice, itemsInCart);
        cartMaker(element);
    })
}

main.addEventListener('click', mainInterceptor)
cart.addEventListener('click', cartInterceptor)

