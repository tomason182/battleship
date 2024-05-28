class Ship {
    constructor(length, x, y) {
        this.length = length;
        this._x = x;
        this._y = y;
        this.hits = 0;
        this.sunk = false;
    }

    setPositionX(x) {
        this._x = x;
        return this._x;
    }

    getPositionX() {
        return this._x;
    }

    setPositionY(y) {
        this._y = y;
        return this._y;
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