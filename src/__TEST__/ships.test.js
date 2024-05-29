import { Ship } from "./ships.js";

test('should be an instance of the class', () => {
    expect(new Ship()).toBeInstanceOf(Ship);
});

test('Should initialize with the correct length', () => {
    const shipLength = 4;
    const ship = new Ship(shipLength);
    expect(ship.length).toBe(4);
    expect(ship.hits).toBe(0);
    expect(ship.sunk).toBe(false);
})

test('Should return the correct hit count', () => {
    const ship = new Ship();
    ship.hit();
    ship.hit();
    expect(ship.getHits()).toBe(2);
})

test('Should return false when not sunk', () => {
    const ship = new Ship();
    expect(ship.isSunk()).toBe(false);
});

test('Should return false if hit less times than its length', () => {
    const shipLength = 3;
    const ship = new Ship(shipLength);
    ship.hit();
    ship.hit();
    expect(ship.isSunk()).toBe(false);
});

test('Should return true if ship is hit times the length', () => {
    const shipLength = 3
    const ship = new Ship(shipLength);
    ship.hit();
    ship.hit();
    ship.hit();
    expect(ship.isSunk()).toBe(true);    
});

test('should not exceed the number of hits beyond the length', () => {
    const shipLength = 3;
    const ship = new Ship(shipLength);
    ship.hit();
    ship.hit();
    ship.hit();
    expect(ship.hit()).toBe(false);
    expect(ship.hits).toBe(3);

})

test('Should return ship position', () => {
    const ship = new Ship(3);
    ship.setPosition(4, 5);
    expect(ship.getPositionX()).toBe(4);
    expect(ship.getPositionY()).toBe(5);
})
