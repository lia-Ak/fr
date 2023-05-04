const form = document.querySelector("form")

const productName = document.querySelector(".product-name")

const productPrice = document.querySelector(".product-price")

const products = [
    {
        name: "велосипед",
        price: 70000
    },
    {
        name: "самокат",
        price: 50000
    }
]



form.addEventListener("submit", function(event) {
    event.preventDefault()
   const newProduct = {
    name: productName.value,
    price: Number (productPrice.value)
   }
  products.push(newProduct)
})
