// Escuchar el tema preferido del cliente en su sistema
const preferedColorScheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'light' : 'dark';
// Obtener el checkbox
const slider = document.getElementById('slider');

const setTheme = (theme) => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
}

slider.addEventListener('click', () => {
    let switchToTheme = localStorage.getItem('theme') === 'dark' ? 'dark' : 'light';
    setTheme(switchToTheme);
});
setTheme(localStorage.getItem('theme') || preferedColorScheme);

//DOM
document.addEventListener('DOMContentLoaded', () => {
    // Buscar valor en localStorage, si no existe, poner en 'off'
    let darkMode = localStorage.getItem('dark') || 'on';
    // Marcar checkbox y aplicar estilo a body si darkMode = 'off'
    if (darkMode == 'on') {
        slider.checked = true;
        localStorage.setItem('dark', darkMode);

        window.localStorage.setItem(slider.id, slider.checked)
    }
})