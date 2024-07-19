import './styles.css';

const todoInput = document.querySelector<HTMLInputElement>('#todo-input')!;
const form = document.querySelector<HTMLFormElement>('#new-todo-form')!;
const list = document.querySelector<HTMLUListElement>('#list')!;

let index = 0;
let todos: string[] = loadTodos() || [];

if (todos) todos.forEach(todoText => createNewTodo(todoText));

function createNewTodo(todoText?: string) {
  const finalTodoText = (todoInput.value || todoText) as string;

  const newTodo = `
    <li class="list-item" id="list-item-${index}">
       <label class="list-item-label">
         <input class="label-input" type="checkbox" />
         <span class="label-text">${finalTodoText}</span>
       </label>
       <button class="delete-btn" id="delete-btn-${index}">Delete</button>
     </li>
  `;

  list.insertAdjacentHTML('afterbegin', newTodo);

  const newlyCreatedToDo = document.querySelector<HTMLLIElement>(`#list-item-${index}`)!;

  const deleteBtn = document.querySelector<HTMLButtonElement>(`#delete-btn-${index}`)!;
  deleteBtn.addEventListener('click', () => deleteToDo(newlyCreatedToDo, finalTodoText));

  index++;
}

form.addEventListener('submit', e => {
  e.preventDefault();

  createNewTodo();
  todos.push(todoInput.value);

  todoInput.value = '';
  saveTodos();
});

function deleteToDo(todo: HTMLLIElement, todoText: string) {
  todo.remove();
  todos.splice(todos.indexOf(todoText), 1);
  saveTodos();
}

function saveTodos() {
  localStorage.setItem('todos', JSON.stringify(todos));
}

function loadTodos(): string[] {
  const todosFromLocalStorage = localStorage.getItem('todos');
  if (!todosFromLocalStorage) return [];
  return JSON.parse(todosFromLocalStorage);
}
