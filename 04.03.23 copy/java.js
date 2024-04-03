let products = [];

function addProduct() {
    let productNameInput = document.getElementById("productName");
    let productName = productNameInput.value.trim();
    if (productName !== "") {
        products.push(productName);
        renderProducts();
        productNameInput.value = "";
    }
}

function renderProducts() {
    let productListElement = document.getElementById("productList");
    productListElement.innerHTML = "";
    products.forEach(product => {
        let listItem = document.createElement("li");
        listItem.textContent = product;
        productListElement.appendChild(listItem);
    });
}
