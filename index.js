import { cartInterceptor, mainInterceptor } from './src/script/features/cartManager.js'

const main = document.getElementById('mainProducts')
const cart = document.getElementById('itemsToBuy')

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
        name.innerText = nome;
        description.innerText = descricao;
        price.innerText = `R$ ${preco}`;
        price.className = "price"
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

function categoryIcon(cat){
    if(cat === "Panificadora"){
        return "🥖 " + cat; 
    }else if(cat === "Bebidas"){
        return "🥂 " + cat;
    }else{
        return "🍉 " + cat
    }
}

main.addEventListener('click', mainInterceptor)
cart.addEventListener('click', cartInterceptor)

