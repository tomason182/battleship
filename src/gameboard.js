import { Ship } from "./ships.js";

class Gameboard {
    constructor(height = 20, width = 20) {
        this.height = height;
        this.width = width;
        this.board = [];

        for (let i = 0; i < this.width; i++) {
            this.board[i] = [];
            for (let j = 0; j  < this.length; j ++) {
                this.board[i].push({hasShip: false, receiveAttack: false});
            }
        }
    }

    placeShip(ship = new Ship()) {
        const positionX = ship.getPositionX();
        const positionY = ship.getPositionY();
        const shipLength = ship.length;

        if (positionX + shipLength > this.width || positionY > this.height) {
            return false;
        };
            
        return true;
    }
}

export {Gameboard}