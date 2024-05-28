import { Gameboard } from './gameboard.js';
import { Ship } from "./ships.js";


test('Should be an instance of the class', () => {
    expect(new Gameboard()).toBeInstanceOf(Gameboard);
});

test('Should have a height and a width', () => {
    const gameboard = new Gameboard(6, 6);
    expect(gameboard.height).toBe(6);
    expect(gameboard.width).toBe(6);
});

test('Should reject adding a ship out of the board', () => {
    const gameboard = new Gameboard();
    const ship = new Ship(3);
    ship.setPosition(21, 30);
    expect(gameboard.placeShip(ship)).toBe(false);
})