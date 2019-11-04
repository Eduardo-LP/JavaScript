//------------referenciação de componentes da Dom-------------
var entrada = document.getElementById('nomeTarefa');
var lista = document.getElementById('tarefas');
var botao = document.getElementById('botao');


//------------------lista inicial-------------------
var toDos = [
    'terminar maquete',
    'testar bluetooth app',
    'programar em python'
];

function criarLista(){
    lista.innerHTML = '';//não replicar um texto presente no html
    for(toDo of  toDos){
        var item = document.createElement('li');
        var nome = document.createTextNode(toDo);

        var link = document.createElement('a');
        var linkTexto = document.createTextNode('Excluir');
        link.setAttribute('href', '#');
        var posicao = toDos.indexOf(toDo);
        link.setAttribute('onclick', 'deletaItens('+ posicao +')');
        link.appendChild(linkTexto);

        item.appendChild(nome);
        item.appendChild(link);
        lista.appendChild(item);
    }
}
criarLista();

function addNovoItem(){
    var nome = entrada.value;

    toDos.push(nome);//add o 'nome' no final do array
    entrada.value = '';
    criarLista();
}

botao.onclick = addNovoItem;

function deletaItens(pos){
    toDos.splice(pos, 1);
    criarLista();
}