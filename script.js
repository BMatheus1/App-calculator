// Função para limpar a área de exibição
function clearDisplay() {
    document.getElementById('display').value = '';
}

// Função para adicionar um número à área de exibição
function appendNumber(number) {
    document.getElementById('display').value += number;
}

// Função para adicionar um operador à área de exibição
function appendOperator(operator) {
    document.getElementById('display').value += operator;
}

// Função para calcular o resultado da expressão na área de exibição
function calculateResult() {
    try {
        let result = eval(document.getElementById('display').value);
        document.getElementById('display').value = result;
    } catch (e) {
        // Exibe "Error" se a expressão for inválida
        document.getElementById('display').value = 'Error';
    }
}