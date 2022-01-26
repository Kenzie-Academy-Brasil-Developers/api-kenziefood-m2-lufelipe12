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

        img.src = imagem;
        cat.innerText = categoryIcon(categoria.toLowerCase());
        cat.className = categoria.toLowerCase();
        cat.setAttribute('id', 'section')
        name.innerText = nome;
        description.innerText = descricao;
        price.innerText = `R$ ${preco.toFixed(2)}`;
        button.innerText = "🛒";
        button.id = id;
        button.className = "add";

        div.appendChild(img);
        div.appendChild(cat);
        div.appendChild(name);
        div.appendChild(description);
        div.appendChild(price);
        div.appendChild(button)
        div.appendChild(button)
        main.appendChild(div)
    })
}

function categoryIcon(cat){
    if(cat === "panificadora"){
        return "🥖 " + cat; 
    }else if(cat === "bebidas"){
        return "🥂 " + cat;
    }else{
        return "🍉 " + cat
    }
}

categoryIcon("panificadora")

main.addEventListener('click', mainInterceptor)
cart.addEventListener('click', cartInterceptor)

