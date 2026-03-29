const todoList = [{
  name: 'make dinner',
  dueDate: '2022-12-22'
}, {
  name: 'wash dishes',
  dueDate: '2022-12-22'
}];

renderToDoList();

function renderToDoList () {
  let todoListHTML = '';

  for(let i = 0; i < todoList.length; i += 1) {
    const todoObject = todoList[i];
    const name = todoObject.name;
    const dueDate = todoObject.dueDate;
    const html = `
      <div>${name}</div>
      <div>${dueDate}</div>
      <button onclick="
        todoList.splice(${i}, 1);
        renderToDoList();
      " class="delete-todo-button">Delete</button>
      `;
    todoListHTML += html;
  }

  console.log(todoListHTML);
  document.querySelector('.js-todo-list')
    .innerHTML = todoListHTML;
}


function addToDo() {
  const inputElement = document.querySelector('.js-name-input');
  const name = inputElement.value;
  const dateInputElement = document.querySelector('.js-due-date-input');
  const dueDate = dateInputElement.value;

  todoList.push({
    name: name,
    dueDate: dueDate
  });
  console.log(todoList);
  inputElement.value = '';
  dateInputElement.value = '';

  renderToDoList();
}