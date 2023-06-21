
const btn = document.querySelector('.btn')
const box = document.querySelector('.wrapper')


btn.addEventListener('click',() => {
    const request = new XMLHttpRequest()
    request.open('GET','peoples.json')
    request.setRequestHeader('Content-Type','application.json')
    request.send()
    console.log(request)

    request.addEventListener("load", () => {
        const data = JSON.parse(request.response)

        data.forEach(i => {
            const card = document.createElement('div')

            card.innerHTML =`
            <div class="card">
               <p>${i.name}</p>
               <span>${i.age}</span>
            <div/>`
            box.append(card)
        })
    })
})





// Задание 2

const btn1 = document.querySelector('.get')

btn1.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET','market.json')
    request.setRequestHeader('Content-type', 'application/json')
    request.send()
    console.log(request)

}




