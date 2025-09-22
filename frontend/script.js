const sidebar = document.getElementById('sidebar');
const mainContent = document.getElementById('main-content');
const toggleSidebarBtn = document.getElementById('toggleSidebar');

toggleSidebarBtn.addEventListener('click', () => {
  sidebar.classList.toggle('collapsed');
  
  // Ajuste dinámico opcional
  if (sidebar.classList.contains('collapsed')) {
    mainContent.style.marginLeft = '60px';
    mainContent.style.width = 'calc(100% - 60px)';
  } else {
    mainContent.style.marginLeft = '250px';
    mainContent.style.width = 'calc(100% - 250px)';
  }
});
