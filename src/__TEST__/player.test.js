import { Player } from './player.js';

const player = new Player();

test('Should be an instance of the class', () => {
    expect(player).toBeInstanceOf(Player);
})