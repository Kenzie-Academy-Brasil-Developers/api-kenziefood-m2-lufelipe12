import db from "../mock/db.js";
import creatingShowCase from "../../../index.js"

const input = document.querySelector(".input")

async function inputFilter(name){
    const response = db;
    const input = response.filter(item => {
        return item.nome.toLowerCase().includes(name.toLowerCase());
    })
    creatingShowCase(input)
}

input.addEventListener('keyup', function(){
    inputFilter(input.value)
    
})

async function allItems(){
    const response = db;
    creatingShowCase(response)
}

allItems()


