
const plus = document.querySelector('#increment')
const minus = document.querySelector('#decrement')
const inp = document.querySelector('#counter')

plus.onclick = ()=>{
    inp.value++
}

minus.onclick = ()=>{
    inp.value--
}