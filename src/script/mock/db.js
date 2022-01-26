let db;
async function getProducts(){
    const request = await fetch("https://kenzie-food-api.herokuapp.com/product"); 
    const response = await request.json();
    return response;    
}
export default db = await getProducts()

