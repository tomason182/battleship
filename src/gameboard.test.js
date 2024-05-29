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

test('Should add a ship inside the board', () => {
    const gameboard = new Gameboard();
    const board = gameboard.getBoard();
    const ship = new Ship(3);
    ship.setPosition(3, 4);
    gameboard.placeShip(ship);
    expect(board[2][4].hasShip).toBe(false);
    expect(board[3][4].hasShip).toBe(true);
    expect(board[4][4].hasShip).toBe(true);
    expect(board[5][4].hasShip).toBe(true);
    expect(board[6][4].hasShip).toBe(false);
});

test('Should add more than one ship on the board', () => {
    const gameboard = new Gameboard();
    const board = gameboard.getBoard();
    const shipOne = new Ship(4);
    shipOne.setPosition(3,4);
    const shipTwo = new Ship(3);
    shipTwo.setPosition(7,9);
    expect(gameboard.placeShip(shipOne)).toBe(true);
    expect(gameboard.placeShip(shipTwo)).toBe(true);
    expect(board[3][4].hasShip).toBe(true);
    expect(board[7][9].hasShip).toBe(true);
});

test('Should reject overlapping ships', () => {
    const gameboard = new Gameboard();
    const board = gameboard.getBoard();
    const shipOne = new Ship(4);
    shipOne.setPosition(3,4);
    const shipTwo = new Ship(3);
    shipTwo.setPosition(3,4);
    expect(gameboard.placeShip(shipOne)).toBe(true);
    expect(gameboard.placeShip(shipTwo)).toBe(false);
    expect(board[3][4].hasShip).toBe(true);
});

test('Should reject ships positioning next to each other', () => {
    const gameboard = new Gameboard();
    const board = gameboard.getBoard();
    const shipOne = new Ship(4);
    shipOne.setPosition(3,4);
    const shipTwo = new Ship(3);
    shipTwo.setPosition(3,5);
    expect(gameboard.placeShip(shipOne)).toBe(true);
    expect(gameboard.placeShip(shipTwo)).toBe(false);
    expect(board[3][4].hasShip).toBe(true);
    expect(board[3][5].hasShip).toBe(false);
});

test('Ship should recieve hit when attack', () => {
    const gameboard = new Gameboard();
    const ship = new Ship(4,3,5);
    gameboard.placeShip(ship);
    gameboard.receiveAttack(4,5);
    gameboard.receiveAttack(3,5);
    expect(ship.getHits()).toBe(2);
})