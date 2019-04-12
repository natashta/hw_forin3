import heroesToString from '../src/js/app';

const hero = {
  name: 'Лучник', type: 'Bowman', health: 50, level: 1, attack: 40, defence: 10,
};

test('should show hero info with smile icon', () => {
  const recieved = heroesToString(hero);
  const expected = '😠 Л(1) ⚔ 40 🛡 10 ❤ 50';
  expect(expected).toBe(recieved);
});
