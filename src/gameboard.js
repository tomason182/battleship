import { Ship } from "./ships.js";

class Gameboard {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }

    placeShip(x, y, length) {
        const ship = new Ship(length);

        if (x + ship.length > this.width || y > this.height) {
            return false;
        };
            
        return true;
    }
}

export {Gameboard}