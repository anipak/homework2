var arr = [10,20,30,50,235,3000]
var number = []
for (var a = 0; a < arr.length; a++){
    var b = arr[a].toString()
    if (b[0] === '1' || b[0] === '2' || b[0] === '5'){
        number.push(arr[a])
    }
}
console.log(number)



// 2
// for (var number = 20; number >= 0; number--){
//     console.log(number)
// }


// 3
// var color = prompt('красный желтый зеленый').toLowerCase().trim()
// var object ={
//     red: 'красный',
//     yellow: 'желтый',
//     green: 'зеленый'
// }
// var red = 'стоп!'
// var yellow = 'подготовься!'
// var green1 = 'проходи!'
//
// switch (color){
//     case object.red:
//         alert(red)
//         break
//     case object.yellow:
//         alert(yellow)
//         break
//     case object.green:
//         alert(green1)
//         break
//     default:
//         alert('Надо вводить цвета!')
//         break
//
// }

// if (color === object.red){
//     alert(red)
// } else if(color === object.yellow){
//     alert(yellow)
// } else if (color === object.green){
//     alert(green1)
// } else{
//     alert('Надо вводить цвета')
// }


