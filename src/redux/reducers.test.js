import reducers from './reducers';
import { Atype } from './actions';
import expect from 'expect';

describe('graph actions and reducer', () => {
  it('should return the initial state', () => {
    expect(reducers(undefined, {})).toEqual({
      nodes: {},
      edges: {}
    })
  });
  it(`should handle ${ Atype.ADD_NODE }`, () => {
    const node = {
      id: 'node123',
      data: { helloWorld: "hello" },
    }
    const addNode = Object.assign({}, node, { type: Atype.ADD_NODE });
    const expectedNode = Object.assign({}, node, { outgoing: [], incoming: [] });

    expect(reducers(undefined, addNode)).toEqual({
      nodes: {
        [node.id]: expectedNode
      },
      edges: {}
    })
  });
  // it(`should handle UPDATE_POST_SUCCESS`);
  // it(`should handle GET_POST_FAIL`);
  // it(`should handle GET_POST_START`);
});
