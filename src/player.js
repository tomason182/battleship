import { default as Gameboard } from './gameboard.js';

class Player {
    constructor(name) {
        this.name = name;
        this.gameboard = new Gameboard();
    }

    getGameboard() {
        return this.gameboard;
    }
}

export { Player }