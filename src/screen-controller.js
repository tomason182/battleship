import { gameController } from "./game-controller.js";

export default function screenController() {
    const game = gameController();
    const playerOneGrid = document.querySelector(".left-grid > .battleship-table > tbody");
    const playerTwoGrid = document.querySelector(".right-grid > .battleship-table > tbody");
    const displayMessage = document.querySelector(".message");

    const updateScreen = () => {
        playerOneGrid.textContent = "";
        playerTwoGrid.textContent = "";

        const playerOneBoard = game.getPlayerBoard(0);
        const playerTwoBoard = game.getPlayerBoard(1);

        const activePlayer = game.getActivePlayer();

        playerOneBoard.forEach((row, indexRow) => {
            const tableRow = document.createElement("tr");
            tableRow.classList.add("table-row")
            row.forEach((cell, indexColumn) => {
                const cellButton = createCellElement("td", "cell", indexRow, indexColumn);
                cellButton.dataset.hasShip = cell.hasShip;
                playerOneGrid.appendChild(cellButton);
            });
        });

        playerTwoBoard.forEach((row, indexRow) => {
            const tableRow = document.createElement("tr");
            tableRow.classList.add("table-row");
            row.forEach((cell, indexColumn) => {
                const cellButton = createCellElement("td", "cell", indexRow, indexColumn);
                cellButton.dataset.hasShip = cell.hasShip;
                playerTwoGrid.appendChild(cellButton);
            });
        });    
    }

    updateScreen();
}

function createCellElement(element, className, rowIndex, columnIndex) {
    const item = document.createElement(element);
    item.classList.add(className);
    item.dataset.row = rowIndex;
    item.dataset.column = columnIndex;
    return item; 
}