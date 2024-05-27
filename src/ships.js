class Ship {
    constructor(length) {
        this.length = length;
        this.hits = 0;
        this.sunk = false;
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