const cells = document.querySelectorAll('.cell');
let currentPlayer = 'X'; // começa com X

cells.forEach(cell => {
    cell.addEventListener('click', handleClick);
});

function handleClick() {
    if (this.textContent === '') { // verifica se a célula está vazia
        this.textContent = currentPlayer;
        if (checkWinner()) {
            alert('Jogador ' + currentPlayer + ' venceu!');
            resetGame();
            return;
        }
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X'; // troca de jogador
    }
}

function checkWinner() {
    const winPatterns = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // linhas
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // colunas
        [0, 4, 8], [2, 4, 6] // diagonais
    ];

    for (let pattern of winPatterns) {
        if (cells[pattern[0]].textContent === currentPlayer &&
            cells[pattern[1]].textContent === currentPlayer &&
            cells[pattern[2]].textContent === currentPlayer) {
            return true; // se houver um padrão vencedor
        }
    }
    return false;
}

function resetGame() {
    cells.forEach(cell => {
        cell.textContent = '';
    });
    currentPlayer = 'X'; // jogador começa com X novamente
}