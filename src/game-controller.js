import { default as Player } from "./player.js";
import {default as Ship } from "./ships.js";
import { default as GameBoard } from "./gameboard.js";

export default function gameController(playerOneName = "Player One", PlayerTwoName = "Computer") {
    const playerOne = new Player(playerOneName);
    const playerTwo = new Player(PlayerTwoName);

    const ships = {
        carrier: new Ship(5),
        battleShip: new Ship(4),
        cruiser: new Ship(3),
        submarine: new Ship(3),
        destroyer: new Ship(2)        
    }

}