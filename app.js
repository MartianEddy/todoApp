// selectors

const todoInput = document.querySelector('.todo-input')
const todoForm = document.querySelector('body > div.app > form')
const todoList = document.querySelector('.todo-list')


// event listeners

todoForm.addEventListener('submit', addTodo)
todoList.addEventListener('click', deleteCheck);


// functions

function addTodo(event) {
    // prevent form from submitting
    event.preventDefault();

    // Todo 
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");

    // Create LI
    const newTodo = document.createElement("li");
    newTodo.innerText = todoInput.value;
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo);

    // completed button
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);

    // trash button 
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);

    // append to list
    todoList.appendChild(todoDiv);


    //clear todo input value

    todoInput.value = "";


    function deleteCheck(e) {
        const item = e.target;
    }

    //delete todo

    if (item.classList[0] === "trash-btn") {
        const todo = item.parentElement;

        //animation

        todo.classList.add("fall");
        todo.addEventListener("transitioned", function () {
            todo.remove();
        });


        //check complete

        if (item.classList[0] === "complete-btn") {
            const todo = item.parentElement;
            todo.classList.toggle("completed");

        }
    }
};