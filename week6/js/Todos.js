import { readFromLS, writeToLS } from "./ls.js";
import { qs, onTouch } from "./utilities.js";

export default class Todos {
  constructor(element, key) {
    this.element = qs(element);
    this.key = key;
    this.listTodos();
    onTouch(qs("#addtask"), ()=>this.addTodo())
    onTouch(qs("#filterAll"), () => this.filterTodo("All"));
    onTouch(qs("#filterActive"), () => this.filterTodo("active"));
    onTouch(qs("#filterCompleted"), () => this.filterTodo("completed"));
    onTouch(qs(".checkTask"), (e)=>this.completeTodo(e))
    onTouch(qs(".delBtn"), (e)=>this.removeTodo(e))
  }

  addTodo() {
    let task = this.element.value;
    saveTodo(task, this.key);
    this.listTodos();
    console.log("Si se pudo!")
  }

  listTodos() {
    renderTodoList(readFromLS(this.key), qs("#list"));
  }

  completeTodo(e) {
    let taskName = e.target.dataset.name
    let list = readFromLS(this.key);
    let currentTaskIndex = list.findIndex((task) => task.content == taskName);
    let currentTask = list[currentTaskIndex];
    currentTask.completed = true;
    list[currentTaskIndex] = currentTask;
    writeToLS(this.key, list);
    this.listTodos();
  }

  removeTodo(e) {
    let taskName = e.target.dataset.name
    let list = readFromLS(this.key);
    let newList = list.filter((task) => task.content != taskName);

    writeToLS(this.key, newList);
    this.listTodos();
  }

  filterTodo(type) {
    let list = readFromLS(this.key);
    let newList = null;
    if (type == "active") {
      newList = list.filter((task) => task.completed == false);
    } else if (type == "completed") {
      newList = list.filter((task) => task.completed == true);
    } else {
        newList = list;
    }

    renderTodoList(newList, qs("#list"));
  }
}


/* qs("#addTask").setAttribute("onClick",); */

let todolist = null;

function saveTodo(task, key) {
  const todo = {
    id: Date.now(),
    content: `${task}`,
    completed: false,
  };

  let tasks = readFromLS(key);
  tasks.push(todo);
  writeToLS(key, tasks);
}

function getTodos(key) {
  if (todolist == null) {
    todolist = readFromLS(key);
  }

  return todolist;
}

function renderTodoList(list, element) {
  let listTodos = list.map((task) => {
    let item = `<li><input class="checkTask" type="checkbox" ${task.completed ? "checked" : ""} data-name="${task.content}" /> ${task.content} <button class="delBtn" data-name="${task.content}">❌</button></li>`;
    return item;
  });
  element.innerHTML = listTodos.join("");
}
