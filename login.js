// BLOCO DE VERIFICAÇÃO DE PREENCHIMENTO DE CAMPOS
function Verifica() {
    let user = document.getElementById('loginEmail').value;
    let senha = document.getElementById('loginSenha').value;

    if (!user || !senha) {
        alert("Campos de preenchimento obrigatório. Favor preencher!");

    } else {
        window.location.href = "aula2.html";
    }
}

var dadosLista = [];
function salvarUser() {
    let nomeUser = document.getElementById("nomeUser").value;
    if (nomeUser) {
        dadosLista.push(nomeUser);
        crialista();
        document.getElementById("nomeUser").value = '';
    }else{

        alert("Digite um nome");
        document.getElementById("nomeUser").focus();
    }

        
        //console.log(dadosLista)
    }

function crialista() {
    let tabela = document.getElementById("tabela").innerHTML = "<tr><th>Nome Usuário</th><th>Ações</th></tr>";
    for (let i = 0; i <= (dadosLista.length - 1); i++) {
        tabela += "<tr><td>" + dadosLista[i] + "</td><td><button class='btn btn-success' onclick='editar(this.parentNode.parentNode.rowIndex)'>Editar</button><button class='btn btn-danger' onclick='excluir(this.parentNode.parentNode.rowIndex)'>Excluir</button></td></tr>";

        document.getElementById('tabela').innerHTML = tabela;
    }
}
//Função para editar o array

function editar(i) {
    document.getElementById('nomeUser').value = dadosLista[(i - 1)];
    dadosLista.splice(dadosLista[(i - 1)], 1);
}

//Função para excluir array

function excluir(i) {
    dadosLista.splice((i - 1), 1);
    document.getElementById("tabela").deleteRow(i);
}