// Задание 1
const validation = () => {
    const email = document.querySelector('#email').value
    const regExp = /^[a-zA-Z0-9._]+@gmail\.com$/
    const isValid = regExp.test(email)

    if (isValid) {
        document.getElementById('result').innerText = 'Ok'
    }else {
        document.getElementById('result').innerText = 'NotOk'
    }
}




// MOVE BLOCK

const box = document.querySelector('.child_block')

let positionX = 0
let positionY = 0

const move = () => {
    if (positionX <= 446 && positionY <= 0) {
        positionX++
        box.style.left =`${positionX}px`
        setTimeout(move, 1)
    } else if (positionX >= 446 && positionY <= 446) {
        positionY++
        box.style.top = `${positionY}px`
        setTimeout(move, 1)
    } else if (positionX >= 0 && positionY >= 446) {
        positionX--
        box.style.left = `${positionX}px`
        setTimeout(move, 1)
    } else if (positionX <= 0 && positionY >= 0) {
        positionY--
        box.style.top = `${positionY}px`
        setTimeout(move, 1)
    }
}
move()



// ДЗ2 Задание 2
let counterElement = document.getElementById("counter")
let startButton = document.getElementById("start")
let stopButton = document.getElementById("stop")
let resumeButton = document.getElementById("resume")
let clearButton = document.getElementById("clear")
let counter = 0
let intervalId

function incrementCounter() {
    counter++
    counterElement.textContent = counter
}

startButton.addEventListener("click", () => {
    intervalId = setInterval(incrementCounter, 1000)
})


stopButton.addEventListener("click", () => {
    clearInterval(intervalId)
})

resumeButton.addEventListener("click", () => {
    intervalId = setInterval(incrementCounter, 1000)
})

clearButton.addEventListener("click", () => {
    clearInterval(intervalId)
    counter = 0
    counterElement.textContent = counter
})

