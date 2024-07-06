
let p = fetch("https://cdn.shopify.com/s/files/1/0564/3685/0790/files/multiProduct.json")
p.then((response) => {
    console.log(response.result);
    return response.json()
}).then((data) => {
    console.log(data)
    const categories = data.categories; // assuming data contains a property called "categories"
    categories.forEach((category) => {
        const categoryDiv = document.getElementById(`category-${category.category_name.toLowerCase()}`);
        category.category_products.forEach((product) => {
            const productDiv = document.createElement('div');
            productDiv.innerHTML = `
       
             <img src="${product.image}" style="width: 90%; height: 300px; margin: 10px;" />
            
               <span style="font-weight: bold;">${product.title}</span>
             <small"> ${product.vendor} </small>
             <br>
             
              <span>RS ${product.price}</span>
             <h5" style="text-decoration: line-through;">  ${product.compare_at_price}</h5>

             <p style="padding:0px 5px"><button style="padding: 5px 90px; background-color:black; color:white;">ADD to Cart </button></P>
             
        `;
            categoryDiv.appendChild(productDiv);
        });
    });


})
    .catch((error) => console.log(error));

   


function frstImg() {
    
    document.getElementById("category-men").style.display = "flex";
    document.getElementById("category-kids").style.display = "none";
    document.getElementById("category-women").style.display = "none";
    
    
    

}
function SecondImg() {

    document.getElementById("category-women").style.display = "flex";
    document.getElementById("category-men").style.display = "none";
    document.getElementById("category-kids").style.display = "none";


}
function thirdImg() {

    document.getElementById("category-kids").style.display = "flex";
    document.getElementById("category-women").style.display = "none";
    document.getElementById("category-men").style.display = "none";

}

