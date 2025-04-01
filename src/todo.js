// src/todo.js

export function createTodo(title, description, dueDate, priority) {
  return {
    title,
    description,
    dueDate,
    priority,
    completed: false,
  };
}
