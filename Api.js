const maincontainer = document.querySelector("#maincontainer");

async function getProducts() {
  let response = await fetch("https://fakestoreapi.in/api/products");
  let data = await response.json();
  displayProducts(data.products);
}

function displayProducts(allProducts){
    console.log(allProducts);

    allProducts.map((ele)=>{
        let {title, price, image, brand, category, description} = ele

        const productDiv = document.createElement("div")

        productDiv.title = description
        productDiv.className = "productCard"

        productDiv.innerHTML = `
        <img src='${image}' height = '150px' width = '150px'>
        <h4>${brand}</h4>
        <h1>${title}</h1>
        <p>Price : ${price}</p>
        <button>Add to cart</button>
        `
        maincontainer.append(productDiv)
    })

}


window.addEventListener("DOMContentLoaded", () => {
  getProducts();
});
