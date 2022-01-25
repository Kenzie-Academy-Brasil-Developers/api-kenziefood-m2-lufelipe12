
import {cartInterceptor, mainInterceptor} from './src/script/features/cartManager.js'
const main = document.getElementById('mainProducts')
const cart = document.getElementById('itemsToBuy')

export default function creatingShowCase(item){ 
    item.forEach(item => {
    
    const {categoria, descricao, imagem, nome, preco, id} = item;
    
    const img = document.createElement("img");
    const cat = document.createElement("span");
    const name = document.createElement("h2");
    const description = document.createElement("p");
    const price = document.createElement("p");
    const button = document.createElement("button")

    img.src                 =  imagem;
    cat.innerText           =  categoria;
    name.innerText          =  nome;
    description.innerText   =  descricao;
    price.innerText         =  preco;
    button.innerText        =  "icone"
    button.id               =  id

    main.appendChild(img);
    main.appendChild(cat);
    main.appendChild(name);
    main.appendChild(description);
    main.appendChild(price);
    main.appendChild(button)
    document.body.appendChild(main);
    })
}

main.addEventListener('click', mainInterceptor)
cart.addEventListener('click', cartInterceptor)

