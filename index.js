function creatingShowCase(item){ 
    item.forEach(item => {
    
    const {categoria, descricao, imagem, nome, preco} = item;
    
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
    //setAtributte = data-id, id do produto
    button.id               =  "add"

    div.appendChild(img);
    div.appendChild(cat);
    div.appendChild(name);
    div.appendChild(description);
    div.appendChild(price);
    div.appendChild(button)
    document.body.appendChild(div);

    })
}
