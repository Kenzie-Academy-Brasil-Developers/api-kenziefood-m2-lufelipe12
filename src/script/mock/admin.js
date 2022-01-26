//pegando conteudo do html para fazer o post ou patch
const registerForm = document.getElementById("register-form")

    async function handleSubmit(evt) {

        evt.preventDefault()

        let data = {}
        const elements = registerForm.elements

        for (let i = 0; i < elements.length; i++) {
            let item = elements[i];

            if (item.name !== "") {
                data[item.name] = item.value
            }
        }

        const response = await getApi(id);
    }

registerForm.addEventListener("submit", handleSubmit)

//rota post my products
async function createUser(data) {   

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

//rota get my products
async function getApi(id){

    if(id===undefined){ id = "/"; }

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
getApi()

//rota delete id my products
async function deleteApi(id){

    if(id===undefined){ id = "/"; }

    const response = await fetch(`https://kenzie-food-api.herokuapp.com/my/product/${id}`, 
   
    {
        method: "delete",    
        headers: {
            "Content-Type": "application/json",
            Authorization: "Token eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTUsImlhdCI6MTY0MzExNzE3NSwiZXhwIjoxNjQzOTgxMTc1LCJzdWIiOiJbb2JqZWN0IFVuZGVmaW5lZF0ifQ.6b_3z1Gck1dkq6MUXX-d5XGOYW_rgkyYGOLr_6Xo_MI",
        } 
    })

}

//rota patch my products
async function patchApi(data, id){

    if(id===undefined){ id = "/"; }

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




