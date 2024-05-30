import { default as GameBoard } from "./gameboard.js";

function gameController(playerOneName = "Player One", playerTwoName = "Computer") {

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
  	  player: playerOneName,
      board: new GameBoard()
  	},
    {
      player: playerTwoName,
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
    return players[playerIndex].board.allShipSunk();
  }

  const getPlayerBoard = (playerIndex) => {
    return players[playerIndex].board.getBoard();
  }

  return {
    switchPlayerTurn,
    getActivePlayer,
    placePlayerShip,
    attack,
    checkForVictory,
    getPlayerBoard
  }
}

export { gameController };