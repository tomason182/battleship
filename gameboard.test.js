import {Gameboard} from './gameboard.js';


test('Should be an instance of the class', () => {
    expect(new Gameboard()).toBeInstanceOf(Gameboard);
});

test('Should have a height and a width', () => {
    const gameboard = new Gameboard(6, 6);
    expect(gameboard.height).toBe(6);
    expect(gameboard.width).toBe(6);
});

test('Should place ships at specific coordinates', () => {
    
})