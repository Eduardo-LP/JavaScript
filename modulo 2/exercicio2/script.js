var conteiner = document.getElementById('app');
var quadrados = document.getElementsByClassName('box');

function addCaixa(){
    var caixa = document.createElement('div');
    caixa.style.width = '300px';
    caixa.style.height = '300px';
    caixa.style.backgroundColor = 'red';
    caixa.style.marginBottom = '10px';
    caixa.setAttribute('class', 'box');
    conteiner.appendChild(caixa);
}

console.log(quadrados);