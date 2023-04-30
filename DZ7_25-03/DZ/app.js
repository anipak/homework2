const input = document.querySelector('#input')
const createButton = document.querySelector('#create_button')
const todolist = document.querySelector('#todo_list')

const createTodo = () =>{
    if (!input.value.trim()){
        input.value = ''
        return false
    } else{
        const div = document.createElement('div')
        const text = document.createElement('h3')
        const divButton = document.createElement('div')
        const deleteButton = document.createElement('button')
        const editButton = document.createElement('button')

        div.setAttribute('class', 'block_text')
        deleteButton.setAttribute('class','delete_button')
        editButton.setAttribute('class', 'edit_button')
        divButton.setAttribute('class', 'div_button')

        deleteButton.innerHTML = 'delete'
        editButton.innerHTML = 'edit'
        text.innerHTML = input.value

        divButton.append(deleteButton, editButton)
        div.append(text, divButton)
        todolist.prepend(div)

        editButton.addEventListener('click', ()=>{
            const newText = prompt(`${text.innerHTML}`).trim()
            newText === '' ? text.innerHTML: text.innerHTML = newText
        })

        deleteButton.addEventListener('click', ()=>{
            text.innerHTML = ''
            createTodo.remove()
        })

        const clearInput = () => {
            input.value = ''
        }
clearInput()
    }
}


createButton.onclick = () => createTodo()