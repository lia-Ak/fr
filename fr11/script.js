// const title = document.querySelector("h1")
// console.log(title)
// const text = document.querySelector(".description")
// console.log(text)
// const text1 =document.querySelector("section p")
// const container = document.querySelector(".container")
// console.log(container)

// const text = document.querySelector(".text")
// console.log(text)

// const link = document.querySelector(".link")
// console.log(link)

// const text = document.querySelectorAll("p")
// console.log(text)

// const title = document.querySelector("h1")
// title.innerText = "привет, мир"

// const link = document.querySelector("#googl-link")
// title.innerText = "ссылка на гугл"


// const texts = document.querySelectorAll("p")
// console.log(texts[0])
// // texts[0].innerText = " мой текст"
// // texts[1].innerText = " мой текст"
// // texts[2].innerText = " мой текст"
// // texts[3].innerText = " мой текст"



// for(let i = 0; i < texts.length; i++) {
//     texts[i].innerText = "мой текст"
    
// }
// const links = document.querySelectorAll("a")
// for (let i = 0; i < links.length; i++) {
//     links[i].innerText = "link"
    
// }

//const link = document.querySelector("#google-link")
//const href = link.qetAttribute("href")
//console.log(href)


const atributes = document.querySelector("img")
const href = atributes.getAttribute("src")
console.log(href)


const images = document.querySelectorAll("img")


for (let i = 0; i < images.length; i++) {
    const src = images[i].getAttribute("src")
    console.log(src)
    
    
}