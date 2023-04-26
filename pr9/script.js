const laptop = {
    RAM: "4 Гбайт",
    country: "Китай",
    price: 20000,
    currency: "руб",
    color: ["blak","grey","white"],
additional_info: {
    warranty:  "24 месяца",
    class: "обычный",
}
}

// const product = {
//     price: 100,
//     name: "samsung",
// }


// console.log(product.name),
// console.log(product.price)

// const products = [
//     {
//         name: "iphone 14",
//         price: 50000

//     },
//     {
//         name: "iphone 13",
//         price: 40000

//     },

//     {
//         name: "iphone 12",
//         price: 30000

//     }
    
// ]

// for (let i  = 0; i  < products.length; i ++) {
//     if(products[i].price > 40000){
//         console.log(products[i].name)
//     }
// }
    

// for(let i = 0; i < products.length; i++){
// console.log(`название: ${products[i].name} цена: ${products[i].price}`)

// }
// let sum = 0
// for( let i = 0; i < products.length; i++){
//     sum = sum + products[i].price
// }
// console.log(sum)
// const numbers = [10, 20, 30, 40, 50]
// let sum = 0
// // sum = sum + numbers[0]
// // sum = sum + numbers[1]
// // sum = sum + numbers[2]

// for (let i = 0; i < numbers.length; i++) {
// sum = sum + numbers [i]
// }
// console.log(sum)

const products =[
{
    title: "tv samsung",
    category: "tv",
    price: 40000
},
{
    title: "iphone 14",
    category: "phone",
    price: 50000
},
{
    title: "hp 1065",
    category: "laptop",
    price: 70000
},
{
    title: "ager g6575",
    category : "laptop",
    price: 63000
},

]

// for (let i = 0; i < products.length; i++) {
//     console.log(`Name: ${products[i].title}, Category: ${products[i].category}`);
// }
// for (let i  = 0; i  < products.length; i ++){
//        if(products[i].price > 45000){
//           console.log(products[i].title)
//        }
//     }

// for (let i  = 0; i  < products.length; i ++){
//         if(products[i].category== "laptop"){
//          console.log(`Name: ${products[i].title} price  ${products[i].price}`)
//           }
//        }
// for (let i  = 0; i  < products.length; i ++){
//           if(products[i].price > 45000){
//             console.log(products[i].price * 0.9)

//           }
//           else{
//             console.log(products[i].price)
//           }
//         }

const names = ["Arsen", "Ivan", "Lera", "Anastasiia"]
const newNames = []
for(let i = 0; i < names.length; i++) {
    const newName = names[i].toUpperCase()
     newName.push(newName)
}
console.log(newNames)