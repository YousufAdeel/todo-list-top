let projects = [];

// Load from localStorage on startup
export function loadProjects() {
  const saved = localStorage.getItem('todoProjects');
  if (saved) {
    projects = JSON.parse(saved);
  } else {
    // Default project if none exist
    projects = [{ name: 'Home', todos: [] }];
    saveProjects();
  }
}

// Save to localStorage after every change
export function saveProjects() {
  localStorage.setItem('todoProjects', JSON.stringify(projects));
}

export function getProjects() {
  return projects;
}

export function getProjectByName(name) {
  return projects.find(p => p.name === name);
}

export function createProject(name) {
  if (!projects.some(p => p.name === name)) {
    projects.push({ name, todos: [] });
    saveProjects();
  }
}

export function addTodoToProject(projectName, todo) {
  const project = getProjectByName(projectName);
  if (project) {
    project.todos.push(todo);
    saveProjects();
  }
}

export function getTodosFromProject(name) {
  if (name === 'Today') {
    const todayStr = new Date().toISOString().split('T')[0];
    return projects.flatMap(p => p.todos).filter(todo => todo.dueDate === todayStr);
  }
  if (name === 'Important') {
    return projects.flatMap(p => p.todos).filter(todo => todo.priority === 'high');
  }
  const project = getProjectByName(name);
  return project ? project.todos : [];
}
