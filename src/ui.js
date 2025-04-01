import {
  createProject,
  getProjects,
  addTodoToProject,
  getTodosFromProject,
} from './project';
import { createTodo } from './todo';

export function renderLayout() {
  const app = document.getElementById('app') || document.body;

  app.innerHTML = `
    <div class="sidebar">
      <div class="top-bar">
        <h1>// <span class="highlight">TO-DO</span></h1>
      </div>
      <ul class="nav">
        <li id="home-view">🏠 Home</li>
        <li id="today-view">🕒 Today</li>
        <li id="important-view">⭐ Important</li>
      </ul>
      <h2>Projects</h2>
      <ul id="project-list"></ul>
      <button id="add-project">+ Add Project</button>

      <div class="dark-mode-toggle">
        <button id="dark-toggle" title="Toggle Dark Mode">🌙</button>
      </div>
    </div>

    <div class="main">
      <h2 id="current-title">Home</h2>
      <form id="add-todo-form">
        <input type="text" id="todo-title" placeholder="Title" required />
        <input type="text" id="todo-desc" placeholder="Description" />
        <input type="date" id="todo-date" required />
        <select id="todo-priority">
          <option value="low">Low</option>
          <option value="medium" selected>Medium</option>
          <option value="high">High</option>
        </select>
        <button type="submit">Add Todo</button>
      </form>
      <div id="todos-container"></div>
    </div>
  `;

  setEventListeners();
  renderProjects();
  renderTodos('Home');
  applyDarkModeFromStorage();
}

function setEventListeners() {
  document.getElementById('home-view').addEventListener('click', () => renderTodos('Home'));
  document.getElementById('today-view').addEventListener('click', () => renderTodos('Today'));
  document.getElementById('important-view').addEventListener('click', () => renderTodos('Important'));

  document.getElementById('add-project').addEventListener('click', () => {
    const name = prompt('Project name:');
    if (name) {
      createProject(name);
      renderProjects();
    }
  });

  document.getElementById('add-todo-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const title = document.getElementById('todo-title').value;
    const description = document.getElementById('todo-desc').value;
    const dueDate = document.getElementById('todo-date').value;
    const priority = document.getElementById('todo-priority').value;

    // 🔧 Fix: prevent disappearing todos in "Today" and "Important"
    let currentProject = document.getElementById('current-title').textContent;
    if (currentProject === 'Today' || currentProject === 'Important') {
      currentProject = 'Home';
    }

    const todo = createTodo(title, description, dueDate, priority);
    addTodoToProject(currentProject, todo);
    renderTodos(document.getElementById('current-title').textContent); // re-render current view
    e.target.reset();
  });

  // 🌙 Dark mode toggle with icon swap
  const toggle = document.getElementById('dark-toggle');
  toggle.addEventListener('click', () => {
    const body = document.body;
    body.classList.toggle('dark');
    const isDark = body.classList.contains('dark');
    toggle.textContent = isDark ? '☀️' : '🌙';
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  });
}

function applyDarkModeFromStorage() {
  const isDark = localStorage.getItem('theme') === 'dark';
  if (isDark) {
    document.body.classList.add('dark');
    const toggle = document.getElementById('dark-toggle');
    if (toggle) toggle.textContent = '☀️';
  }
}

function renderProjects() {
  const projectList = document.getElementById('project-list');
  projectList.innerHTML = '';
  getProjects().forEach((project) => {
    const li = document.createElement('li');
    li.textContent = project.name;
    li.addEventListener('click', () => renderTodos(project.name));
    projectList.appendChild(li);
  });
}

function renderTodos(projectName) {
  document.getElementById('current-title').textContent = projectName;
  const container = document.getElementById('todos-container');
  container.innerHTML = '';

  const todos = getTodosFromProject(projectName);
  if (todos.length === 0) {
    container.innerHTML = '<p>No tasks yet.</p>';
    return;
  }

  todos.forEach((todo, index) => {
    const card = document.createElement('div');
    card.className = `todo-card ${todo.priority}`;

    const title = document.createElement('h3');
    title.textContent = todo.title;

    const desc = document.createElement('p');
    desc.textContent = todo.description;

    const date = document.createElement('p');
    date.textContent = `Due: ${todo.dueDate}`;

    const priority = document.createElement('p');
    priority.textContent = `Priority: ${todo.priority}`;

    const delBtn = document.createElement('button');
    delBtn.textContent = '❌';
    delBtn.classList.add('delete-btn');
    delBtn.addEventListener('click', () => {
      const project = getProjects().find(p => p.name === projectName || p.name === 'Home');
      if (project) {
        project.todos.splice(index, 1);
        localStorage.setItem('todoProjects', JSON.stringify(getProjects()));
        renderTodos(projectName);
      }
    });

    card.append(title, desc, date, priority, delBtn);
    container.appendChild(card);
  });
}
