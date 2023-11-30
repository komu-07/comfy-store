import { getElement } from './utils.js';

const toggleNav = getElement('.toggle-nav');
const sidebar = getElement('.sidebar-overlay');
const closeSidebarBtn = getElement('.sidebar-close');

toggleNav.addEventListener('click', () => {
  sidebar.classList.add('show');
});
closeSidebarBtn.addEventListener('click', () => {
  sidebar.classList.remove('show');
});
