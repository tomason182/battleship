import { Ship } from "./ships.js";

class Gameboard {
    constructor(height = 20, width = 20) {
        this.height = height;
        this.width = width;
        this.board = [];

        for (let i = 0; i < this.width; i++) {
            this.board[i] = [];
            for (let j = 0; j  < this.height; j ++) {
                this.board[i].push({hasShip: false, receiveAttack: false});
            }
        }
    }

    getBoard() {
        return this.board;
    }

    placeShip(ship = new Ship()) {
        const positionX = ship.getPositionX();
        const positionY = ship.getPositionY();
        const shipLength = ship.length;
        const board = this.getBoard();
        
        if (positionX + shipLength > this.width || positionY > this.height) {
            return false;
        };
        
        // Check for available space.
        // Check before and after x coordinate.
        if(board[positionX - 1][positionY].hasShip !== false || board[positionX + shipLength + 1][positionY].hasShip !== false) {
            return false;
        };
        
        // Check for available space within ship length.
        for (let s = 0; s < shipLength; s ++) {
            if (board[positionX + s][positionY].hasShip !== false) {
                return false;
            };
        };     
        
        for (let s = 0; s < shipLength; s ++) {
            board[positionX + s][positionY].hasShip = true;
        }

    }
}

export {Gameboard}