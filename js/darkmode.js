
// Escuchar el tema preferido del cliente en su sistema
const preferedColorScheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'light' : 'dark';
// Obtener el checkbox
const slider = document.getElementById('slider');

const setTheme = (theme) => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
}

slider.addEventListener('click', () => {
    let switchToTheme = localStorage.getItem('theme') === 'dark' ? 'light' : 'dark';
    setTheme(switchToTheme);
});
setTheme(localStorage.getItem('theme') || preferedColorScheme);

//JS Boostrap
document.addEventListener('DOMContentLoaded', () => {
    // Buscar valor en localStorage, si no existe, poner en 'off'
    let darkMode = localStorage.getItem('dark') || 'off';
    // Obtener el checkbox
    let checkDark = document.getElementById('slider');
    // Marcar checkbox y aplicar estilo a body si darkMode = 'off'
    if (darkMode == 'on') {
        checkDark.checked = true;
    }
    // Escuchar cambios en checkbox
    checkDark.addEventListener('change', e => {
        // Cambiar estilo 
        setTheme(localStorage.getItem('theme') || preferedColorScheme);
        // Actualizar variable de acuerdo a estado del checkbox
        darkMode = (checkDark.checked) ? 'on' : 'off';
        // Guardar variable en localStorage
        localStorage.setItem('dark', darkMode);

        window.localStorage.setItem(slider.id, slider.checked)
    })
})