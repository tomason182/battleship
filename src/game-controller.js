import { Player } from "./player";

export default function gameController(playerOneName = "Player One", PlayerTwoName = "Computer") {
    const playerOne = new Player(playerOneName);
    const playerTwo = new Player(PlayerTwoName);

    const setPlayersShips = () =>{
        const playerOneGameboard  = playerOne.getGameboard();
        const playerTwoGameboard = playerTwo.getGameboard();
    }

}