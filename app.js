function verificarIdade(idade) {
    if (idade >= 18) {
        console.log("O usuário é maior de idade.");
        return "O usuário é maior de idade.";
    } else {
        console.log("O usuário é menor de idade.");
        return "O usuário é menor de idade.";
    }
}

function verificar() {
    var idade = document.getElementById('idade').value;
    var resultado = verificarIdade(idade);
    document.getElementById('resultado').innerText = resultado;
}