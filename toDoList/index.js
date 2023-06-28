const inputText = document.getElementById('input');
const save = document.getElementById('save');
const toDoList = document.getElementById('todolist')
const preview = document.querySelector('li.preview');
let stringItem;


inputText.addEventListener('keyup', event =>{
    preview.innerHTML = inputText.value;

    if(event.key === 'Enter') {
        addToDo();
    }
});

save.addEventListener('click', display => {
    addToDo();
});

document.addEventListener('click', deleteItem => {
    if(deleteItem.target.classList.contains('delete')) {
        deleteItem.target.parentNode.remove();
        localStorage.setItem('toDo', toDoList.innerHTML);
    }
});

document.addEventListener('DOMContentLoaded', loadEvent => {
    if(localStorage.getItem('toDo') != '') {
        toDoList.innerHTML = localStorage.getItem('toDo');
    }
});


const addToDo = () => {
    if(inputText.value != '') {
        stringItem = `<li>${inputText.value}<span class = 'delete'></span></li>`;
        toDoList.innerHTML += stringItem;   
    }

    inputText.value = '';
    preview.innerHTML = '';
    localStorage.setItem('toDo', toDoList.innerHTML);
}