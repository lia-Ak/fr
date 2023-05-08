//const names = ["Arsen", "Anastasia", "Artur", "Natalia"]



//for (let i = 0; i < names.length; i++) {
  // console.log(names[i])
    
//}



//names.forEach(function(name){

 //  console.log(name)
//})



//const numbers = [10, 3, 13, 4, 100, 15]


//numbers.forEach(function(number){
  //  console.log(number ** 2)
   
//})
//const titles = ["Мой первый заголовок", "Lorem Ipsum", "Технологии Web"]




//const main = document.querySelector("main")
 ///titles.forEach(function(title) {
  //  main.innerHTML += `<h3>${title}</h3>`
// })
 
 //const texts = [
  //  {
     //   title: "Мой первый заголовок",
     //  descr: "Мое первое описание"
  //  },
 //   {
 //       title: "Lorem Ipsum",
 //       descr: "Lorem Ipsum dolor sit amet."
 //   },
  //  {
  //      title: "Технологии WEB-разработки",
  //      descr: "HTML, CSS, JS, PYTHON, PHP"
  //  }
//]

//const main = document.querySelector("main")


//texts.forEach(function(text, index) {
  //  main.innerHTML +=
  //  `<div class="item-${index + 1}">
   // <h3>${text.title}</h3>
  // <p>${text.descr}</p>
  //  </div>`
//})


//const words = [
  //  {
    //    eng: "event",
      //  ru: "событие"
    //},
    //{
      //  eng: "variable",
        //ru: "переменная"
    //},
    //{
      //  eng: "title",
        //ru: "заголовок"
    //},
    ///{
       // eng: "description",
        //ru: "описание"
    //}
//]

//const container = document.querySelector("main");


//words.forEach(function(word) {
  //  container.innerHTML +=
   //`<div>
   // <p>${word. eng}</p>
  // <p>${word.ru}</p>
    //</div>`;});



    const todos = ["Вынести мусор", "Закончить создание проекта", "Загрузить картинки",
    "Пойти на тренировку", "Убраться"]


    const container = document.querySelector("main");
    function schowTodos(){  
    todos.forEach(function(todo){
        container.innerHTML += 
        `<div class="todo">
        <h3>${todo}</h3>

        </div>`
    })


    }
    schowTodos()


    const todoList = document.querySelectorAll(".todo")

todoList.forEach(function(todo) {
   
    todo.addEventListener("click", function() {
       todo.classList.toggle("done")
    })
})


const btn = document.querySelector(".btn")
btn.addEventListener("click", function(){
    todoList.forEach(function(todo){
        todo.classList.add("done")
    })
}
)