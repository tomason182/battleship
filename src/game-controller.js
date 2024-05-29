import { default as Player } from "./player.js";
import {default as Ship } from "./ships.js";
import { default as GameBoard } from "./gameboard.js";

function gameController(playerOneName = "Player One", PlayerTwoName = "Computer") {

    const ships = {
        carrier: new Ship(5),
        battleShip: new Ship(4),
        cruiser: new Ship(3),
        submarine: new Ship(3),
        destroyer: new Ship(2)        
    }

    const players = [
        {
            player: new Player(playerOneName),
            board: new GameBoard()
        },
        {
            player: new Player(PlayerTwoName),
            board: new GameBoard()
        }
    ];

    let activePlayer = players[0];

    const switchPlayerTurn = () => {
        activePlayer = activePlayer === players[0] ? players[1] : players[0];
    }

    const getActivePlayer = () => activePlayer;

    const placePlayerShip = (playerIndex, ship, x, y) => {
        return players[playerIndex].board.placeShip(ship, x, y);
    }

    const attack = (attackerIndex, x, y) => {
        const opponentIndex = attackerIndex === 0 ? 1 : 0;
        return players[opponentIndex].board.receiveAttack(x, y);
    }

    const checkForVictory = (playerIndex) => {
        return players[playerIndex].board.allShipsSunk();
    }

}