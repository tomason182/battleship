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

test('should be a valid position', () => {
    const gameboard = new Gameboard();
    expect(gameboard.isValidPosition(5, 6)).toBe(true);
    expect(gameboard.isValidPosition(0, 0)).toBe(true);
    expect(gameboard.isValidPosition(0, 20)).toBe(false);
    expect(gameboard.isValidPosition(20, 0)).toBe(false);
    expect(gameboard.isValidPosition(20,20)).toBe(false);
    expect(gameboard.isValidPosition(19,19)).toBe(true);
})

test('Should be able to place a ship in an specific coordinate', () => {
    const gameboard = new Gameboard();
    const board = gameboard.getBoard();
    const ship = new Ship(3);
    ship.setPositionX(4);
    ship.setPositionY(6);
    gameboard.placeShip(ship);
    expect(board[4][6].hasShip).toBe(true);
    expect(board[5][6].hasShip).toBe(true);
    expect(board[6][6].hasShip).toBe(true);
    expect(board[7][6].hasShip).toBe(false);
})

test('Should have specific border delimiters', () => {
    const gameboard = new Gameboard();
    const ship = new Ship(3);
    ship.setPositionX(18);
    ship.setPositionY(3);
    expect(gameboard.placeShip(ship)).toBe(false);
})