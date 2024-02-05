let totalGeral = 0;

let produto = document.getElementById('produto');
let nomeProduto = produto.value.split('-')[0];
let valorUnitario = produto.value.split('R$')[1];
let quantidade = document.getElementById('quantidade').value;
let preco = valorUnitario * quantidade;

function adicionar(){
totalGeral = totalGeral + preco;

}

function limpar(){

}