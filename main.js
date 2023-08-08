// BLOCO DE VERIFICAÇÃO DE PREENCHIMENTO DE CAMPOS

function verify()
{
    // verifica se usuario e senha estão preenchidos

    let user = document.getElementById("loginEmail").value;
    let pswr = document.getElementById("loginSenha").value;

    if (!user || !pswr) {
        alert("Campos de preenchimento obrigatório. Favor preencher!");
    } else {
        window.location.href = "aula2.html";
    }
}
 
/* Função para criar lista e usuário
 *
 * Creates the Array to store users
*/

var dadosLista = [];
var after1 = [];
var levar1 = [];
var quantidade1 = [];
var dinheiro1 = [];

// Resto do código permanece inalterado

function saveUser() {
    let nomeUser = document.getElementById("nomeUser").value;
    let after = document.getElementById("after").value;
    let levar = document.getElementById("levar").value;
    let quantidade = document.getElementById("quantidade").value;
    let dinheiro = document.getElementById("dinheiro").value;

    if (nomeUser && after && levar && quantidade && dinheiro) {
        dadosLista.push(nomeUser);
        after1.push(after);
        levar1.push(levar);
        quantidade1.push(quantidade);
        dinheiro1.push(dinheiro);
        createList();
        document.getElementById("nomeUser").value = null;
        document.getElementById("after").value = null;
        document.getElementById("levar").value = null;
        document.getElementById("quantidade").value = null;
        document.getElementById("dinheiro").value = null;
    } else {
        alert("Preencha todos os campos corretamente!");
    }
}

function createList() {
    let tabela = "<tr><th>Nome Usuário</th><th>After</th><th>Levar</th><th>Quantidade</th><th>Dinheiro a mais</th><th>Ações</th></tr>";

    for (let i = 0; i < dadosLista.length; i++) {
        tabela += "<tr><td>" + dadosLista[i] + "</td><td>" + after1[i] + "</td><td>" + levar1[i] + "</td><td>" + quantidade1[i] + "</td><td>" + dinheiro1[i] + "</td><td><button class=\"btn btn-success\" onclick=\"edit(" + i + ")\">Editar</button><button class=\"btn btn-danger\" onclick=\"remove(" + i + ")\">Excluir</button></td></tr>";
    }
    document.getElementById("tabela").innerHTML = tabela;
}

function edit(i) {
    document.getElementById("nomeUser").value = dadosLista[i];
    document.getElementById("after").value = after1[i];
    document.getElementById("levar").value = levar1[i];
    document.getElementById("quantidade").value = quantidade1[i];
    document.getElementById("dinheiro").value = dinheiro1[i];
    dadosLista.splice(i, 1);
    after1.splice(i, 1);
    levar1.splice(i, 1);
    quantidade1.splice(i, 1);
    dinheiro1.splice(i, 1);
    createList();
}

function remove(i) {
    dadosLista.splice(i, 1);
    after1.splice(i, 1);
    levar1.splice(i, 1);
    quantidade1.splice(i, 1);
    dinheiro1.splice(i, 1);
    createList();
}