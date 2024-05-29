export default class Ship {
    constructor(name, length) {
        this.name = name;
        this._length = length;
        this._hits = 0;
        this._sunk = false;
    }

    getHits() {
        return this._hits;
    }

    hit() {
        if(this._sunk) {
            return false;
        }
        
        this._hits += 1;
        if (this._hits >= this._length) {
            this._sunk = true;
            return;
        }
    }

    isSunk() {
        return this._sunk;
    }

    getLength() {
        return this._length;
    }
}