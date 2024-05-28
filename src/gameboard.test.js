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

test('Should be able to place a ship in an specific coordinate', () => {
    const gameboard = new Gameboard();
    const shipOne = new Ship(3);
    shipOne.setPositionX(4);
    shipOne.setPositionY(6);
    expect(gameboard.placeShip(shipOne)).toBe(true);
})

test('Should have specific border delimiters', () => {
    const gameboard = new Gameboard();
    const ship = new Ship(3);
    ship.setPositionX(18);
    ship.setPositionY(3);
    expect(gameboard.placeShip(ship)).toBe(false);
})