function comprar(){
    let tipo = document.getElementById('tipo-ingresso');
    let quantidade = parseInt(document.getElementById('qtd').value);

    if( tipo.value == 'pista'){
        comprarPista(quantidade);
    } else if ( tipo.value == 'inferior'){
        comprarInferior(quantidade);
    } else {
        comprarSuperior(quantidade);
    }
}

function comprarSuperior(quantidade){
    let qtdSuperior = parseInt(document.getElementById('qtd-superior').textContent);
    if(quantidade > qtdSuperior){
        alert('Quantidade indisponível para tipo superior')
    } else {
        qtdSuperior = qtdSuperior - quantidade;
        document.getElementById('qtd-superior').textContent = qtdSuperior  
        alert('Compra efetuada com sucesso!');
    }
}

function comprarInferior(quantidade){
    let qtdInferior = parseInt(document.getElementById('qtd-inferior').textContent);
    if(quantidade > qtdInferior){
        alert('Quantidade indisponível para tipo inferior')
    } else {
        qtdInferior = qtdInferior - quantidade;
        document.getElementById('qtd-inferior').textContent = qtdInferior
        alert('Compra efetuada com sucesso!');
    }
}

function comprarPista(quantidade){
    let QtdPista = parseInt(document.getElementById('qtd-pista').textContent);
    if(quantidade > QtdPista){
        alert('Quantidade indisponível para tipo pista')
    } else {
        QtdPista = QtdPista - quantidade;
        document.getElementById('qtd-pista').textContent = QtdPista
        alert('Compra efetuada com sucesso!');
    }
}