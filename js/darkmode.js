const preferredColorScheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
const setTheme = (theme) => {
    document.documentElement.setAttribute('data-theme', theme);
    try {
        localStorage.setItem('theme', theme);
    } catch (error) {
        console.error('Error al guardar el tema en localStorage:', error);
    }
};
const initializePage = async () => {
    const slider = document.getElementById('slider');
    slider.addEventListener('click', () => {
        let switchToTheme = localStorage.getItem('theme') === 'dark' ? 'light' : 'dark';
        setTheme(switchToTheme);
    });
    document.addEventListener('DOMContentLoaded', () => {
        let darkMode = localStorage.getItem('theme') || 'off';
        let checkDark = document.getElementById('slider');
        if (darkMode === 'dark') {
            checkDark.checked = true;
        }
        checkDark.addEventListener('change', e => {
            setTheme(localStorage.getItem('theme') || preferredColorScheme);
            darkMode = checkDark.checked ? 'dark' : 'light';
            try {
                localStorage.setItem('theme', darkMode);
            } catch (error) {
                console.error('Error al guardar el tema en localStorage:', error);
            }
        });
    });
    await setTheme(localStorage.getItem('theme') || preferredColorScheme);
};
initializePage();

async function lazyLoadImages() {
    const images = document.querySelectorAll("#experiences-row img[data-src]");

    for (const img of images) {
        await new Promise((resolve) => {
            const imageLoader = new Image();
            imageLoader.src = img.getAttribute("data-src");
            imageLoader.onload = () => {
                img.src = img.getAttribute("data-src");
                resolve();
            };
        });
    }
}

// Cargar las imágenes cuando se haya cargado el contenido principal de la página
document.addEventListener("DOMContentLoaded", async () => {
    await lazyLoadImages();
});