export default class Gameboard {
    constructor(height = 20, width = 20) {
        this.height = height;
        this.width = width;
        this.board = [];
        this.sunkenShipsCount = 0;

        for (let i = 0; i < this.width; i++) {
            this.board[i] = [];
            for (let j = 0; j  < this.height; j ++) {
                this.board[i].push({hasShip: false, receiveAttack: false, ship: null});
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

    placeShip(ship, x, y) {
        const shipLength = ship.getLength();
        const board = this.getBoard();
        
        if (!this.isPositionAvailable(x, y, shipLength)) {
            return false;
        }

        for (let s = 0; s < shipLength; s ++) {
            board[x + s][y].hasShip = true;
            board[x + s][y].ship = ship;
        }
        return true;
    }

    receiveAttack(x,y) {
        const board = this.getBoard();
        if(board[x][y].hasShip) {
            const ship = board[x][y].shipObj;
            ship.hit();
            board[x][y].receiveAttack = true;
            if(ship.isSunk() === true) {
                this.sunkenShipCount += 1;
                return true;
            }
        } else {
            board[x][y].receiveAttack = true;
        }
    }

    getSunkenShipCount() {
        return this.sunkenShipsCount;
    }
}