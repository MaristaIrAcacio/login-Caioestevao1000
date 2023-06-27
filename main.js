// Input filling verification block

function Verify()
{
    let user = document.getElementById("loginEmail").value;
    let pswr = document.getElementById("loginSenha").value;

    if (!user || !pswr)
    {
        alert("Campos de preenchimento obrigatório. Favor preencher!");
    }
    else
    {
        alert("Campos preenchidos com sucesso!");
    }
}