// let products = [];

// function addProduct() {
//     let productNameInput = document.getElementById("productName");
//     let productName = productNameInput.value.trim();
//     if (productName !== "") {
//         products.push(productName);
//         renderProducts();
//         productNameInput.value = "";
//     }
// }

// function renderProducts() {
//     let productListElement = document.getElementById("productList");
//     productListElement.innerHTML = "";
//     products.forEach(product => {
//         let listItem = document.createElement("li");
//         listItem.textContent = product;
//         productListElement.appendChild(listItem);
//     });
// }


// function addProduct (name, price,cont){
//    const productitem= {
// id: Date.now(),
// name: name,
// price: price,
// cont: cont,
// show: true
//    }
//    product.push(productItem)
// }

// function render() {
//     const productList = document.querySelector('#productList')
//     productList.innerHTML = ''
//     product.map((item)) => {
//         if (item.show) {
//             const listItem = productList.create

//         }
//     }
// }


let product = [];

function render(){
    product = JSON.parse(localStorage.getItem('data'));
    
}