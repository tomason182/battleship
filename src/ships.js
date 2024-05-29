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

    getHits() {
        return this.hits;
    }

    hit() {
        this.hits += 1;
        if (this.hits >= this.length) {
            this.sunk = true;
            return;
        }
    }

    isSunk() {
        return this.sunk;
    }
}


export {Ship}