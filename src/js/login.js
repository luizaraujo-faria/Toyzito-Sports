
/*Painel Login*/
const btncriar = document.querySelector('#btncriar')
const btnlogin = document.querySelector('#btnlogin')
const painel = document.querySelector('.painel')
const login = document.querySelector('.login')
const painellogin = document.querySelector('.painel-login')
const painelcad = document.querySelector('.painel-cad')

btncriar.addEventListener('click', ()=> {
    painel.classList.add('ativo')
    login.classList.toggle('ativo')
    painellogin.classList.toggle('ativo')
    painelcad.classList.toggle('ativo')
})

btnlogin.addEventListener('click', ()=> {
    painellogin.classList.toggle('ativo')
    painel.classList.remove('ativo')
    painelcad.classList.toggle('ativo')
})