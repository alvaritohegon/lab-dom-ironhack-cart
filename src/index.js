// ITERATION 1

function updateSubtotal(product) {
  console.log("Calculating subtotal, yey!");
  console.log("yep", product);

  let priceDOM = product.querySelector(".price span").innerHTML;
  console.log("yo1", priceDOM);
  let quantityDOM = product.querySelector(".quantity Input").value;
  console.log("yo2", quantityDOM);

  let subTotal = priceDOM * quantityDOM;
  console.log(subTotal);

  let priceSubTotal = product.querySelector(".subtotal span");

  priceSubTotal.innerHTML = subTotal;

  return subTotal
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector(".product");
  // console.log(singleProduct);
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here
  let products = document.querySelectorAll(".product");
  console.log("yo3", products);

  let total = 0;
  products.forEach((eachProduct) => {
    total += updateSubtotal(eachProduct);
  });

  // ITERATION 3
  //... your code goes here
  document.querySelector('#total-value span').innerHTML = total;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log("The target in remove is:", target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener("load", () => {
  const calculatePricesBtn = document.getElementById("calculate");
  calculatePricesBtn.addEventListener("click", calculateAll);

  //... your code goes here
});
