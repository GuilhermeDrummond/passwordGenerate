function gerarSenha() {
    const tamanho = document.getElementById('tamanho').value;
    const usarNumeros = document.getElementById('usarNumeros').checked;
    const usarLetras = document.getElementById('usarLetras').checked;
    const usarSimbolos = document.getElementById('usarSimbolos').checked;

    let caracteres = '';
    if (usarNumeros) caracteres += '0123456789';
    if (usarLetras) caracteres += 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (usarSimbolos) caracteres += '!@#$%^&*()_+[]{}|;:,.<>?';

    if (!caracteres) {
        alert('Selecione pelo menos uma opção (números, letras, símbolos)');
        return;
    }

    let senha = '';
    for (let i = 0; i < tamanho; i++) {
        senha += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
    }

    document.getElementById('senha').value = senha;
}

function copiarSenha() {
    const senha = document.getElementById('senha');
    senha.select();
    senha.setSelectionRange(0, 99999);  // Para dispositivos móveis

    document.execCommand('copy');
    alert('Senha copiada para a área de transferência');
}

document.addEventListener("click", function(e) {
    if (e.target.classList.contains('reset')) {
        document.getElementById('senha').value = '';
    }
});
