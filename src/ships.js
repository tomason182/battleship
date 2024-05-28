class Ship {
    constructor(length, x, y) {
        this.length = length;
        this._x = x;
        this._y = y;
        this.hits = 0;
        this.sunk = false;
    }

    setPosition(x, y) {
        this._x = x;
        this._y = y;
    }

    getPositionX() {
        return this._x;
    }

    getPositionY() {
        return this._y;
    }

    hit() {
        if (this.hits >= this.length) {
            throw new Error ('Hits exceed length')
        }
        this.hits += 1;
        return this.hits;
    }

    isSunk() {
        if (this.hits >= this.length) {
            return true;
        }

        return this.sunk;
    }
}


export {Ship}