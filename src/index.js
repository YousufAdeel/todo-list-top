import './style.css';
import { renderLayout } from './ui';
import { loadProjects } from './project'; // ✅ import this

document.addEventListener('DOMContentLoaded', () => {
  loadProjects(); // ✅ load saved todos
  renderLayout(); // render everything
});
