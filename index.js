export default function creatingShowCase(item){ 
    item.forEach(item => {
    
    const {categoria, descricao, imagem, nome, preco, id} = item;
    
    const div = document.createElement("div");
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

    div.appendChild(img);
    div.appendChild(cat);
    div.appendChild(name);
    div.appendChild(description);
    div.appendChild(price);
    div.appendChild(button)
    document.body.appendChild(div);

    })
}



