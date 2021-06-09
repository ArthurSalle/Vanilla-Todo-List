const counterTodos = document.querySelector('.counter-todos');
const formSubmit = document.querySelector('.form-todo');
const list = document.querySelector('.todo-list');
formSubmit.addEventListener('submit', newTodos);

const todoArray = [];

function newBtn(name) {
  const btn = document.createElement('button');
  btn.innerText = name;
  return btn;
}

function newTodo(value) {
  const todoContainer = document.createElement('div');
  const todoInput = document.createElement('input');
  todoInput.value = value;

  const completedBtn = newBtn('Completed');
  const deleteBtn = newBtn('Delete');

  completedBtn.addEventListener('click', () => {
    todoInput.style.background = 'green';
  });

  deleteBtn.addEventListener('click', () => {
    todoContainer.remove();
  });

  todoContainer.appendChild(todoInput);
  todoContainer.appendChild(completedBtn);
  todoContainer.appendChild(deleteBtn);

  return todoContainer;
}

function newTodos(event) {
  event.preventDefault();
  const inputValue = document.querySelector('.input-todo').value;

  const todo = newTodo(inputValue);
  list.appendChild(todo);

  const todoObject = {
    title: inputValue,
    completed: false,
    el: todo,
  };

  todoArray.push(todoObject);

  counterTodos.innerText = todoArray.length;

  event.target.reset();
}

function complete() {}
