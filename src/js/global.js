
/*Tela de carregamento*/
window.onload = function() {
    const loading = document.querySelector('.loading');
    const logo = document.querySelector('.loading img')
    const line = document.querySelector('.animation-line')
    const body = document.querySelector('body')
    line.style.opacity = "1"
    logo.style.opacity = "1"

    setTimeout(() => {
        loading.style.opacity = '0';

        setTimeout(() => {
            loading.style.display = 'none';
            
        }, 500);
    }, 3000);
};