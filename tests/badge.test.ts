import { Badge } from "../src/components/badge";

const testBadge = {
  text: { front: 'Testing Badge', back: '03/06/2022' },
  color:{ front: '303', back: 'c0c', logo: '' },
  logo: '',
  style: 'plastic'
}
const testBadgeString = 'https://img.shields.io/badge/Testing_Badge-03/06/2022-c0c?colorA=303&style=plastic';

describe('Badge Class', () => {

  it('new Badge', () => {
    expect(new Badge(testBadge)).toBeInstanceOf(Badge);
  })

  it('toString', () => {
    const badge = new Badge(testBadge);
    expect(`${badge}`).toEqual(testBadgeString)
  })

  it('readDb', async () => {
    expect.assertions(3);
    await expect(Badge.readDb()).resolves.toBeInstanceOf(Array);
    await expect(Badge.readDb('Babel')).resolves.toBeInstanceOf(Badge);
    await expect(Badge.readDb('bebe')).resolves.toBeFalsy()
  })
});
