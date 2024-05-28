import { Ship } from "./ships.js";

class Gameboard {
    constructor(height, width, shipSize) {
        this.height = height;
        this.width = width;
        this.shipSize = shipSize;
    }

    placeShip(x, y) {

        if (x + this.shipSize > this.width || y > this.height) {
            return false;
        };
            
        return true;
    }
}

export {Gameboard}