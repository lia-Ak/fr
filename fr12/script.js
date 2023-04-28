// function getArray(number){
//     const numbers = []
//     for(let i = 0; i <= number; i++ ) {
//         numbers.push(i)
//     }
//     return numbers
// }
// console.log(getArray(5))
// console.log(getArray(10))



// function getArray(number1, number2) {
//     const numbers = []
//     if(number1 < number2) {
//         for(let i = number1; i <= number2; i++) {
//             numbers.push(i)
//         }
//     } else {
//         for(let i = number2; i <= number1; i++) {
//             numbers.push(i)
//         }
//     }
//     return numbers
// }

// console.log(getArray(3, 7))
// console.log(getArray(7, 3)
//const num1 = +prompt()
//const num2 = +prompt()

const numbers = [5, 10, 23, 28, 32]
for (let i = 0; i < numbers.length; i++) {
    if(numbers[i] % 2 == 1){
        console.log(numbers[i])
    }
    
}