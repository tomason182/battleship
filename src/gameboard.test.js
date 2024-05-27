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

test('Should place ships at specific coordinates', () => {
    const gameboard = new Gameboard(10, 10);
    expect(gameboard.placeShip(2, 3)).toBe(true);
});

test('Should not place ships outside the gameboard', () => {
    const gameboard = new Gameboard(10, 10);
    expect(gameboard.placeShip(12, 12)).toBe(false);
});

test('The length of the ship should count when placing it.', () => {
    const ship = new Ship(4);
    const gameboard = new Gameboard(10, 10);
    expect(gameboard.placeShip(8, 2, ship.length)).toBe(false);
})