import db from "../mock/db.js";
import creatingShowCase from "../../../index.js"

function allItems(){
    const response = db;
    creatingShowCase(response)
}
allItems()

const input = document.querySelector(".input")
const all = document.querySelector(".todos")
const drinks = document.querySelector(".bebidas")
const bakery = document.querySelector(".panificadora")
const fruits = document.querySelector(".frutas")

function inputFilter(name){
    const response = db;
    const input = response.filter(item => {
        return item.nome.toLowerCase().includes(name.toLowerCase()) ||
        item.categoria.toLowerCase().includes(name.toLowerCase())
    })
    creatingShowCase(input)
}

input.addEventListener('keyup', function(){
    inputFilter(input.value)
})

function sectionFilter(section){
    const response = db;
    const secao = response.filter(item => {
        return item.categoria.toLowerCase() === section.toLowerCase();
    })
    creatingShowCase(secao)
}

all.addEventListener('click', function(){
    allItems()
})

drinks.addEventListener('click', function(){
    sectionFilter("bebidas")
})

bakery.addEventListener('click', function(){
    sectionFilter("panificadora")
})

fruits.addEventListener('click', function(){
    sectionFilter("frutas")
})



