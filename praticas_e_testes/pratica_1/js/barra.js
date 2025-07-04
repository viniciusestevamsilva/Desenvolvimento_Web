function toggleSidebar() {
  const sidebar = document.getElementById('sidebar');
  sidebar.classList.toggle('closed');
}

// Troca de tema
document.addEventListener('DOMContentLoaded', () => {
  const btnTheme = document.getElementById('btnToggleTheme');
  const body = document.body;

  // Começa com tema claro se nenhum estiver salvo
  if (!body.classList.contains('dark')) {
    body.classList.add('light');
  }

  btnTheme.addEventListener('click', () => {
    body.classList.toggle('light');
    body.classList.toggle('dark');
  });
});