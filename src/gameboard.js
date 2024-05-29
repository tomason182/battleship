import { Ship } from "./ships.js";

class Gameboard {
    constructor(height = 20, width = 20) {
        this.height = height;
        this.width = width;
        this.board = [];

        for (let i = 0; i < this.width; i++) {
            this.board[i] = [];
            for (let j = 0; j  < this.height; j ++) {
                this.board[i].push({hasShip: false, receiveAttack: false, shipObj: null});
            }
        }
    }

    getBoard() {
        return this.board;
    }

    isValidPosition(x, y, length) {
        // One unit of the length is contemplated in the x position.
        return x >= 0 && x + length - 1 < this.width && y >= 0 && y < this.height;
    }

    isPositionAvailable(x, y, length) {
        const board = this.getBoard();
        if (!this.isValidPosition(x, y, length)) {
            return false;
        }

        for (let l = x; l < x + length - 1; l ++) {
            const conditions = [
                [l,y],
                [l - 1, y],
                [l + 1, y],
                [l, y - 1],
                [l, y + 1],
                [l - 1, y + 1],
                [l + 1, y + 1],
                [l - 1, y - 1],
                [l + 1, y - 1]
            ];

            for (let i = 0; i < conditions.length; i ++) {
                const a = conditions[i][0];
                const b = conditions[i][1];
    
                if (a < 0 || a >= this.width || b < 0 || b >= this.height) {
                    continue;
                }
    
                if (board[a][b].hasShip !== false) {
                    return false;
                }
            }
        }
        
        return true;
    }

    placeShip(ship = new Ship()) {
        const positionX = ship.getPositionX();
        const positionY = ship.getPositionY();
        const shipLength = ship.length;
        const board = this.getBoard();
        
        if (!this.isPositionAvailable(positionX, positionY, shipLength)) {
            return false;
        }
        
        for (let s = 0; s < shipLength; s ++) {
            board[positionX + s][positionY].hasShip = true;
            board[positionX + s][positionY].shipObj = ship;
        }

        return true;

    }

    receiveAttack(x,y) {
        const board = this.getBoard();
        if(board[x][y].hasShip === true) {
            const ship = board[x][y].shipObj; // getShip should be a function that retrieves the hitted ship.
            ship.hit();
        } else {
            board[x][y].receiveAttack = true;
        }

    }
}

export {Gameboard}