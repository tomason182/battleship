export default class Ship {
    constructor(length) {
        this.length = length;
        this.hits = 0;
        this.sunk = false;
    }

    getHits() {
        return this.hits;
    }

    hit() {
        if(this.sunk) {
            return false;
        }
        
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