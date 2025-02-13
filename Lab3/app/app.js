document.getElementById('add-btn').addEventListener('click', addTodo);
document.getElementById('todo-input').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        addTodo();
    }
});

function addTodo() {
    const todoInput = document.getElementById('todo-input');
    const todoText = todoInput.value.trim();

    if (todoText !== '') {
        const todoList = document.getElementById('todo-list');
        const li = document.createElement('li');
        li.innerHTML = `
            <input type="checkbox" class="checkbox" onclick="toggleCompletion(this)">
            <span class="todo-text">${todoText}</span>
            <button class="delete-btn" onclick="deleteTodo(this)">Delete</button>
        `;
        todoList.appendChild(li);
        todoInput.value = '';
    }
    else if (todoText === '') {
        alert("Type the task to add");
    }
}

function toggleCompletion(checkbox) {
    const li = checkbox.parentElement;
    if (checkbox.checked) {
        li.classList.add('completed');
    } else {
        li.classList.remove('completed');
    }
}

function deleteTodo(deleteBtn) {
    const li = deleteBtn.parentElement;
    li.remove();
}