import { Gameboard } from './gameboard.js';
import { Ship } from "./ships.js";

const gameboard = new Gameboard();
const board = gameboard.getBoard();
const shipOne = new Ship(3);
const shipTwo = new Ship(4);
const shipThree = new Ship(2);
const shipFour = new Ship(3);


test('Should be an instance of the class', () => {
    expect(gameboard).toBeInstanceOf(Gameboard);
});

test('Should reject adding a ship out of the board', () => {
    shipOne.setPosition(21, 30);
    expect(gameboard.placeShip(shipOne)).toBe(false);
})

test('Should add a ship inside the board', () => {
    shipOne.setPosition(3, 4);
    gameboard.placeShip(shipOne);
    expect(board[2][4].hasShip).toBe(false);
    expect(board[3][4].hasShip).toBe(true);
    expect(board[4][4].hasShip).toBe(true);
    expect(board[5][4].hasShip).toBe(true);
    expect(board[6][4].hasShip).toBe(false);
});

test('Should add more than one ship on the board', () => {
    shipOne.setPosition(0,0);
    shipTwo.setPosition(7,9);
    expect(gameboard.placeShip(shipOne)).toBe(true);
    expect(gameboard.placeShip(shipTwo)).toBe(true);
    expect(board[3][4].hasShip).toBe(true);
    expect(board[7][9].hasShip).toBe(true);
});

test('Should reject overlapping ships', () => {
    shipOne.setPosition(3,4);
    shipTwo.setPosition(3,4);
    expect(gameboard.placeShip(shipTwo)).toBe(false);
    expect(board[3][4].hasShip).toBe(true);
});

test('Should reject ships positioning next to each other', () => {
    shipOne.setPosition(3,4);
    shipTwo.setPosition(3,5);
    expect(gameboard.placeShip(shipTwo)).toBe(false);
    expect(board[3][4].hasShip).toBe(true);
    expect(board[3][5].hasShip).toBe(false);
});

test('Ship should recieve hit when attack', () => {
    shipThree.setPosition(7,7);
    gameboard.placeShip(shipThree);
    gameboard.receiveAttack(7,7);
    expect(board[7][7].hasShip).toBe(true);
    expect(board[8][7].hasShip).toBe(true);
    expect(board[7][7].receiveAttack).toBe(true);
    expect(shipThree.getHits()).toBe(1);

});

test('Should count when ship has been sunken', () => {
    shipFour.setPosition(17,19);
    gameboard.placeShip(shipFour);
    gameboard.receiveAttack(17,19);
    gameboard.receiveAttack(18,19);
    gameboard.receiveAttack(19,19);
    expect(shipFour.getHits()).toBe(3);
    expect(gameboard.getSunkenShipCount()).toBe(1);

})
