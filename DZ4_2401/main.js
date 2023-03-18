// const h2 = document.querySelector('.counter_1')
// const minus = document.querySelector('.minus')
// const plus = document.querySelector('.plus')
// let i = 0;
// plus.onclick = () => {
//     i++
//     if (i > 0){
//         h2.innerText = i
//         h2.style.color = 'green'
//     }
// }
//
// minus.onclick = () => {
//     i--
//     if (i >= 0){
//         h2.innerText = i
//         h2.style.color = 'red'
//     }
// }





// Задание 2

// const posX = document.getElementById('posX')
// const posY = document.getElementById('posY')
//
// const box = document.getElementById('box')
// box.addEventListener('mousemove',(e) =>{
//     posX.innerHTML = e.screenX
//     posY.innerHTML = e.screenY
//
// })


// Задание 3
const  yellow = document.querySelector('.yellow')
const red = document.querySelector('.red')
const green = document.querySelector('.green')
const color = prompt('Выберите цвет!')
switch (color){
    case 'red':
        red.style.background = 'red'
        red.innerText = 'Stop!'
        break
    case 'yellow':
        yellow.style.background = 'yellow'
        yellow.innerText = 'Wait!'
        break
    case 'green':
        green.style.background = 'green'
        green.innerText = 'Go!'
        break
    default:
        alert('Error')

}



