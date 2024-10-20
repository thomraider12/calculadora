// Função para adicionar o valor ao display
function appendValue(value) {
    document.getElementById('display').value += value;
}

// Função para limpar o display
function clearDisplay() {
    document.getElementById('display').value = '';
}

// Função para deletar o último número ou operador
function deleteLast() {
    const display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}

// Função para calcular o valor final
function calculate() {
    const display = document.getElementById('display');
    try {
        display.value = eval(display.value);
    } catch {
        display.value = 'Erro';
    }
}

// Adiciona um listener para as teclas pressionadas
document.addEventListener('keydown', function(event) {
    const key = event.key;

    // Verifica se a tecla pressionada é um número ou um operador
    if (['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'].includes(key)) {
        appendValue(key);
    } else if (key === 'Enter') {
        calculate();  // Calcula se pressionar Enter
    } else if (key === 'Backspace') {
        deleteLast(); // Deleta o último caractere se pressionar Backspace
    } else if (key === 'Escape') {
        clearDisplay(); // Limpa o display se pressionar Esc
    }
});
