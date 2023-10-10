var listagem = document.getElementById("listagem");
var lista = document.getElementById("tabela");

document.addEventListener("DOMContentLoaded", function() {
    listagem.style.display = "none";
});

document.querySelector("button").addEventListener("click", cadastrado);

var info = [];

function cadastrado (event) {
    event.preventDefault();
    listagem.style.display = "block";

    var nomeValue = document.getElementById("nome").value;
    var descriçãoValue = document.getElementById("descrição").value;
    var valorValue = document.getElementById("valor").value;
    var disponivelValue = document.getElementById("sim").value;
    var naoDisponivelValue = document.getElementById("não").value;
    
    var productInfo = {
        nome: nomeValue,
        descrição: descriçãoValue,
        valor: valorValue,
        disponível: disponivelValue,
        nãoDisponivel: naoDisponivelValue
    };

    info.push(productInfo);
    
    info.sort((a, b) => a.valor - b.valor);

    console.log(info);

    lista.innerHTML = "<tr><th>Nome do Produto</th><th>Valor do Produto</th></tr>";
     
    for(var i = 0; i < info.length; i++){
        lista.innerHTML += "<tr><td>"+ info[i].nome +"</td><td>"+ info[i].valor +"</td></tr>";
    }

    var formulario = document.querySelector("form");
    formulario.reset();
}