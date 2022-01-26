//pegando conteudo do html para fazer o post ou patch
const registerForm = document.getElementById("path-post")
const get = document.getElementById("get")
const del = document.getElementById("delete")
const inputGet = document.getElementById("idGet")
const inputDel = document.getElementById("idDel")

async function handleSubmit(evt) {
    evt.preventDefault()
    let boleano = false;
    let id = 0;
    let data = {}
    const elements = registerForm.elements

    for (let i = 0; i < elements.length; i++) {
        let item = elements[i];

        if (item.name !== "") {
            data[item.name] = item.value
        }

        if (item.name === "id" && item.value !== "") {
            boleano = true;
            id = item.value;
        }
    }

    if (boleano) {
        const response = await patchApi(data, id);
    } else {
        const response = await createUpdateUser(data);
    }

}
registerForm.addEventListener("submit", handleSubmit)

//rota post 
async function createUpdateUser(data) {

    const response = await fetch(
        `https://kenzie-food-api.herokuapp.com/my/product`,

        {
            method: "post",
            headers: {
                "Content-Type": "application/json",
                Authorization: "Token eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTUsImlhdCI6MTY0MzExNzE3NSwiZXhwIjoxNjQzOTgxMTc1LCJzdWIiOiJbb2JqZWN0IFVuZGVmaW5lZF0ifQ.6b_3z1Gck1dkq6MUXX-d5XGOYW_rgkyYGOLr_6Xo_MI",
            },
            body: JSON.stringify(data),
        }

    )
    return response;
}

//rota patch 
async function patchApi(data, id) {

    if (id === undefined) { id = "/"; }

    const response = await fetch(`https://kenzie-food-api.herokuapp.com/my/product/${id}`,
        {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                Authorization: "Token eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTUsImlhdCI6MTY0MzExNzE3NSwiZXhwIjoxNjQzOTgxMTc1LCJzdWIiOiJbb2JqZWN0IFVuZGVmaW5lZF0ifQ.6b_3z1Gck1dkq6MUXX-d5XGOYW_rgkyYGOLr_6Xo_MI",
            },
            body: JSON.stringify(data),
        })
    const json = await response.json();
}

//rota get 
async function getApi(id) {


    if (id === undefined) { id = "/"; }

    const response = await fetch(`https://kenzie-food-api.herokuapp.com/my/product/${id}`,

        {
            headers: {
                "Content-Type": "application/json",
                Authorization: "Token eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTUsImlhdCI6MTY0MzExNzE3NSwiZXhwIjoxNjQzOTgxMTc1LCJzdWIiOiJbb2JqZWN0IFVuZGVmaW5lZF0ifQ.6b_3z1Gck1dkq6MUXX-d5XGOYW_rgkyYGOLr_6Xo_MI",
            },

        })
    const json = await response.json();
    console.log(json)
}
get.addEventListener('click', async function () {
    getApi(inputGet.value)
})

//rota delete 
async function deleteApi(id) {

    if (id === undefined) { id = "/"; }

    const response = await fetch(`https://kenzie-food-api.herokuapp.com/my/product/${id}`,

        {
            method: "delete",
            headers: {
                "Content-Type": "application/json",
                Authorization: "Token eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTUsImlhdCI6MTY0MzExNzE3NSwiZXhwIjoxNjQzOTgxMTc1LCJzdWIiOiJbb2JqZWN0IFVuZGVmaW5lZF0ifQ.6b_3z1Gck1dkq6MUXX-d5XGOYW_rgkyYGOLr_6Xo_MI",
            }
        })
}
del.addEventListener('click', async function () {
    deleteApi(inputDel.value)
})






