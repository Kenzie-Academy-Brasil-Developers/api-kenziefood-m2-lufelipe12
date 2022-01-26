import db from "../mock/db.js";
import creatingShowCase from "../../../index.js"

function buttonSectionEvent(){
    let productSection = document.querySelectorAll('#section')
    productSection.forEach(item => {
        item.addEventListener('click', () => {
            whatSection(sectionFilter, item.className)
        })
    })
}

function allItems() {
    const response = db;
    creatingShowCase(response)
    buttonSectionEvent()
}
allItems()

function inputFilter(name) {
    const response = db;
    const input = response.filter(item => {
        return item.nome.toLowerCase().includes(name.toLowerCase()) ||
            item.categoria.toLowerCase().includes(name.toLowerCase())
    })
    creatingShowCase(input)
    buttonSectionEvent()
}

const input = document.querySelector(".input")
const all = document.querySelector(".todos")
const drinks = document.querySelector(".bebidas")
const bakery = document.querySelector(".panificadora")
const fruits = document.querySelector(".frutas")

input.addEventListener('keyup', function () {
    inputFilter(input.value)
})

const whatSection = (sectionFilter, product) => {
    if (product === "frutas") {
        return sectionFilter("frutas")
    }
    if (product === "bebidas") {
        return sectionFilter("bebidas")
    }
    if (product === "panificadora") {
        return sectionFilter("panificadora")
    }
}

function sectionFilter(section) {
    const response = db;
    const secao = response.filter(item => {
        return item.categoria.toLowerCase() === section.toLowerCase();
    })
    creatingShowCase(secao)
}

all.addEventListener('click', function () {
    allItems()
})

drinks.addEventListener('click', function () {
    sectionFilter("bebidas")
})

bakery.addEventListener('click', function () {
    sectionFilter("panificadora")
})

fruits.addEventListener('click', function () {
    sectionFilter("frutas")
})

