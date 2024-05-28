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
                const a = i[0];
                const b = i[1];
    
                if (a < 0 || a >= this.width || b < 0 || b >= this.height) {
                    continue;
                }
    
                if (board[a][b].hasShip !== false) {
                    return false;
                }
            }
        }        
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