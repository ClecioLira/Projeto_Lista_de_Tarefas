const newItem = document.querySelector('#newItem')
const addItem = document.querySelector('#addItem')
const listItems = document.querySelector('#listItems')
const clearItems = document.querySelector('#clearItems')

const tasks = JSON.parse(localStorage.getItem('tasks')) || []

tasks.forEach(task => {
    const li = document.createElement('li')
    const liItem = document.createTextNode(task)
    li.appendChild(liItem)
    listItems.appendChild(li)
})

function firstWordUppercase(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
}

function criarLista() {
    if (newItem.value === '') {
        alert('Digite a tarefa.')
    } else {
        const toDo = firstWordUppercase(newItem.value)
        const li = document.createElement('li')
        const liItem = document.createTextNode(toDo)
        li.appendChild(liItem)
        listItems.appendChild(li)

        tasks.push(toDo)
        localStorage.setItem('tasks', JSON.stringify(tasks))
    }
}

function removerLista() {
    listItems.innerHTML = ''
    tasks.length = 0
    localStorage.removeItem('tasks')
}

addItem.addEventListener('click', function () {
    criarLista()
    newItem.value = ''
})

clearItems.addEventListener('click', function () {
    removerLista()
})

newItem.addEventListener('keyup', function(e) {
    if (e.keyCode === 13) {
        e.preventDefault()
        addItem.click()
    }
})