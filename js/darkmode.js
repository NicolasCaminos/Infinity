// Escuchar el tema preferido del cliente en su sistema
const preferedColorScheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';

const setTheme = (theme) => {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
};

// Obtener el checkbox
const slider = document.getElementById('slider');

slider.addEventListener('click', () => {
  let switchToTheme = localStorage.getItem('theme') === 'dark' ? 'light' : 'dark';
  setTheme(switchToTheme);
});

//JS Boostrap
document.addEventListener('DOMContentLoaded', () => {
  // Buscar valor en localStorage, si no existe, poner en 'off'
  let darkMode = localStorage.getItem('theme') || 'off';
  // Obtener el checkbox
  let checkDark = document.getElementById('slider');
  // Marcar checkbox y aplicar estilo a body si darkMode = 'off'
  if (darkMode === 'dark') {
    checkDark.checked = true;
  }
  // Escuchar cambios en checkbox
  checkDark.addEventListener('change', e => {
    // Cambiar estilo
    setTheme(localStorage.getItem('theme') || preferedColorScheme);
    // Actualizar variable de acuerdo a estado del checkbox
    darkMode = checkDark.checked ? 'dark' : 'light';
    // Guardar variable en localStorage
    localStorage.setItem('theme', darkMode);
  });
});

// Establecer el tema al cargar la página
setTheme(localStorage.getItem('theme') || preferedColorScheme);
