// Задание 1

// var num1, num2
// num1 = Number(prompt('Введите первое число 1'))
// num2 = Number(prompt('Введите второе число 2'))
// var minNumber = function (a,b) {
//     if ( a < b){
//         alert(a)
//     } else if (a > b){
//         alert(b)
//     } else {
//         alert('ERROR')
//     }
// }
// minNumber(num1, num2)



// // Задание 2
// var winter = prompt('Snow')
// function wint (w) {
//     console.log(w.length)
// }wint(winter)


// Задание 3
var number = Number(prompt('Введите первое число!'))
var count = prompt('Введите математическое действие!')
var number1 = Number(prompt('Введите второе число!'))
var result
function calculate (number, count, number1,result){
    switch (count){
        case '+':
            alert(result = number + number1)
            break
        case '-':
            alert(result = number - number1)
            break
        case '*':
            alert(result = number * number1)
            break
        case '/':
            if(number === 0 || number1 === 0){
                alert('Нельзя делить на 0')
                break
            }
            alert(result = number / number1)
            break
        default:
            alert('ERROR')
    }
}
calculate(number, count, number1, result)