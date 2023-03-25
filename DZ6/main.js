
const input = document.querySelector('.input')
const button = document.querySelector('#btn')
function func () {
    if (input.value.trim() === ''){
        return false
    } else {
        let arr = []
        arr.push(input.value)
        arr.forEach(i => {
            const  h2 = document.createElement('h2')
            h2.innerText = i.split('').reverse().join('')
            document.body.append(h2)
            input.value = ''
        })
    }
}

button.onclick = () => func()