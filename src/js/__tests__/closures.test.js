const results = [
  { name: 'маг', type: 'character', description: 'Персонаж, обладающий магическими способностями' },
  { name: 'заклинание', type: 'attack', description: 'Атака магическим заклинанием' },
  { name: 'урон', type: 'help', description: 'Страница описания элемента интерфейса' },
];

export default function findBy(key, value) {
  return results.find(({ [key]: val }) => val === value);
}

test('should check value', () => {
  const received = findBy('name', 'урон');

  const expected = { name: 'урон', type: 'help', description: 'Страница описания элемента интерфейса' };

  expect(received).toBe(expected);
});
