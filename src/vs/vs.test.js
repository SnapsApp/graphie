import { parseVSdata } from './common';
import testResp from './testData';

describe('vs context', () => {
  it('should properly parse fetched data', () => {
    const { nodes, edges, rootId } = parseVSdata(testResp);

    expect(Object.keys(nodes).length).toEqual(20);
    expect(rootId).toEqual("59c19f324ca8fc015b183339");
    expect(Object.keys(edges).length).toEqual(19);
  });
})

describe('vs entity', () => {
  it('should properly parse update data');
})
