
/*Barra de Pesquisa*/
let lupe = document.querySelector('.search')
let close = document.querySelector('.close-icon')
let searchBar = document.querySelector('.search-bar')

lupe.addEventListener('click', () => {
    searchBar.style.top = "0"
    overlay.classList.add('ativo')
    body.classList.add('no-scroll')
})
close.addEventListener('click', () => {
    searchBar.style.top = "-100%"
    overlay.classList.remove('ativo')
    body.classList.remove('no-scroll')
})


/*Botão Menu*/
const overlay = document.querySelector('.overlay-menu')
const btnmenu = document.querySelector('.menu-lines')
const linha1 = document.querySelector('.linha:nth-child(1)')
const linha2 = document.querySelector('.linha:nth-child(2)')
const linha3 = document.querySelector('.linha:nth-child(3)')
const barramenu = document.querySelector('.menu ul')
const body = document.querySelector('body')

btnmenu.addEventListener('click', ()=> {
    barramenu.classList.toggle('ativo')
    linha1.classList.toggle('ativo')
    linha2.classList.toggle('ativo')
    linha3.classList.toggle('ativo')
    liesportes.classList.remove('ativado')
    lieventos.classList.remove('ativado')
    overlay.classList.toggle('ativo')
    body.classList.toggle('no-scroll')
})

const esportes = document.querySelector('#esportes')
const liesportes = document.querySelector('.esportes')
const eventos = document.querySelector('#eventos')
const lieventos = document.querySelector('.eventos')


esportes.addEventListener('click', ()=> {
    liesportes.classList.toggle('ativado')
    lieventos.classList.remove('ativado')
})

eventos.addEventListener('click', ()=> {
    lieventos.classList.toggle('ativado')
    liesportes.classList.remove('ativado')
})