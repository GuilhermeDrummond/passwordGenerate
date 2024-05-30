function getRandomCharacter() {
    const characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+[]{}|;:,.<>?';
    const randomIndex = Math.floor(Math.random() * characters.length);
    return characters[randomIndex];
}

function getRandomString(length) {
    let result = '';
    for (let i = 0; i < length; i++) {
        result += getRandomCharacter();
    }
    return result;
}

document.addEventListener("DOMContentLoaded", function() {
    const password = document.querySelector("#password");
    const creatPassword = document.querySelector(".gerar");
    const copy = document.querySelector(".copy")
    

    creatPassword.addEventListener("click", function(event) {
        const randomString = getRandomString(10);
        password.textContent = randomString;
    });
    
    creatPassword.addEventListener("click", function(event) {
        const randomString = getRandomString(10);
        password.textContent = randomString;
    });
        //Copiar senha
    copy.addEventListener("click", function(event) {
        // Seleciona o texto do elemento password
        const textToCopy = password.textContent;

        // Cria um elemento de input temporário
        const tempInput = document.createElement("input");
        tempInput.value = textToCopy;
        document.body.appendChild(tempInput);

        // Seleciona o texto no input temporário
        tempInput.select();

        // Copia o texto selecionado para a área de transferência
        document.execCommand("copy");

        // Remove o input temporário
        document.body.removeChild(tempInput);
        
        // Feedback para o usuário
        alert("Senha copiada para a área de transferência!");
    });
});
