// Input filling verification block

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

function saveUser() {
    let nomeUser = document.getElementById("nomeUser").value;

    if (nomeUser) {
        dadosLista.push(nomeUser);
        createList();
        document.getElementById("nomeUser").value = null;
    }else{
        alert("Digite um nome")
        document.getElementById('nomeUser').focus();   //leva o cursor para digita no campo
    }
}

//Insere nome na tabela abaixo do botão salvar
function createList() {
    let tabela = document.getElementById("tabela").innerHTML = "<tr><th>Nome Usuário</th><th>After</th><th>Levar</th><th>Quantidade</th><th>Dinheiro a Mais</th><th>Ações</th></tr>";

    for (let i = 0; i < dadosLista.length; i++) {
        tabela += "<tr><td>" + dadosLista[i] + "</td><td><button class=\"btn btn-success\" onclick=\"edit(this.parentNode.parentNode.rowIndex)\">Editar</button><button class=\"btn btn-danger\" onclick=\"remove(this.parentNode.parentNode.rowIndex)\">Excluir</button></td></tr>";
        document.getElementById("tabela").innerHTML = tabela;
    }
}

// Função para editar nome
function edit(i) {
    document.getElementById("nomeUser").value = dadosLista[i - 1];
    dadosLista.splice(dadosLista[i - 1], 1);
}


// Função deletar nome
function remove(i) {
    dadosLista.splice(i - 1, 1);
    document.getElementById("tabela").deleteRow(i);
}


//Função de Quantidade


//Função para Confirmar Pagamento fixo



