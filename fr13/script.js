// const title = document.createElement("h1")
// title.innerText = "мой заголовок"
// console.log(title)
// const main = document.querySelector("main")
// main.appendChild(title)



// main.innerHTML = main.innerHTML + `<section></section>`


// let number = 10
//     // number = number + 20 // number = 10 + 20; number = 30
//     number += 20 // number = number + 20

//main = {
   // innerHTML: "<p>hello</p>"
//}
//main.innerHTML = "<section></section>
//const main = document.querySelector("main")
//main.innerHTML += "<p></p>"

//for (let i = 1; i <= 100; i++) {
   
   // main.innerHTML += `<p>${i}</p>`
//}
//const names = ["Arsen", "Sergej", "Illya", "Artur"]
//main.innerHTML += `<p>${names[0]}</p>`

//for (let i = 0; i < names.length; i++) {
    //main.innerHTML += `<p>${names[i]}</p>`
    
//}




//let name = ""
//or(let i = 0; i < names.length; i++) {
   // name = "," + names[i] // "Arsen, Sergej, Illya, Artur"
//}
//main.innerHTML += `<p>${names}</p>`
//main.innerHTML += `<p>${names.join(",")}</p>`


//const images = ["https://i.pinimg.com/736x/34/0f/37/340f37ae4f36826f3571a2f9c64544ec.jpg", 
//"https://img1.akspic.ru/previews/7/4/7/9/6/169747/169747-ikanvas-art-pechat_na_holste-poster-oblako-500x.jpg", 
//"https://s1.1zoom.ru/big0/52/Love_Sunrises_and_sunsets_Fingers_Hands_Heart_Sun_532758_1280x897.jpg"]
//main.innerHTML += `<img src = ${images[0]}>`



//for(let i = 0; i < images.length; i++) {
 //   main.innerHTML += `<img src=${images[i]}>`
//}


//const links = [
//{
  //  name: "Google",
  //  link: "https://google.com"
//},
//{
  //  name: "Facebook",
  //  link: "https://facebook.com"
//},
//{
  //  name: "Instagram",
   // link: "https://instagram.com"
//},


//]
//for (let i = 0; i <div links.length; i++) {
 //   ;
    


//main.innerHTML += `<a href="${links[i].link}">${links[i].names}<a>`
//}


// const products = [
//     {
//         name: "Iphone 14",
//         price: 70000
//     },
//     {
//         name: "Iphone 13",
//         price: 60000
//     },
//     {
//         name: "Samsung S30",
//         price: 65000
//     }
// ]





// for (let i = 0; i < products.length; i++) {
    
       
   
   
//    main.innerHTML += `
//    <div class="product">
//    <h5>${products[i].name}</h5>
//    <p>${products[i]}.price}</p>
//    </div>`
//    }
   

const users = [
  {
      email: "test@gmail.com",
      login: "Test"
  },
  {
      email: "starta@gmail.com",
      login: "Starta University"
  },
  {
      email: "admin@gmail.com",
      login: "Admin"
  },

]
const usersContainer = document.querySelector(".users-container")


for (let i = 0; i < users.length; i++) {
  
  usersContainer.innerHTML +=
  `<div class="user">
  <h5>${users[i].email}</h5>
  <p>${users[i].login}</p>
  </div>
  `
  
}
users.forEach(function(user){
  usersContainer.innerHTML +=
`<div class="user">
<h5>{user.email}</h5>
<p>{user.login}</p>
</div>
`})




const posts = [
  {
      title: "My first title",
      descr: "My descr",
      author: "Test"
  },
  {
      title: "My second title",
      descr: "My second descr",
      author: "Admin"
  },
  {
      title: "My third title",
      descr: "My third descr",
      author: "Starta University"
  },
]

const postsContainer = document.querySelector(".posts-container")


for (let i = 0; i < posts.length; i++) {
  
  postsContainer.innerHTML +=

`<div class="post">
        <h6> ${posts[i].title} </h6>
        <p> ${posts[i].author} </p>
        <p> ${posts[i].descr} </p>
    </div>`
}


posts.forEach(function(post) {
  
  postsContainer.innerHTML +=

  `<div class="post">
          <h6> ${posts.title} </h6>
          <p> ${posts.author} </p>
          <p> ${posts.descr} </p>
      </div>`
} )


const numbers = [10, 30, 25, 60, 13]

numbers.forEach(function(number){
  console.log(number)
})


const names = ["Arsen" ,"Lera", "Natalia", "Lia"]
names.forEach(function(name){
  console.log("привет", name)
})



