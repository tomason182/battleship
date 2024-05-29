import { default as Player } from "./player.js";
import {default as Ship } from "./ships.js";
import { default as GameBoard } from "./gameboard.js";

function gameController(playerOneName = "Player One", PlayerTwoName = "Computer") {

  const ships = [
    {
      name: "carrier",
      length: 5
    },
		{
			name: "battleShip",
			length: 4
		},
		{
			name: "cruiser",
			length: 3
		},
		{
			name: "submarine",
			length: 3
		},
		{
			name: "destroyer",
			length: 2
		}
  ];

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