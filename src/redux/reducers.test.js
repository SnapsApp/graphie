import reducers from './reducers';
import Action, { Atype } from './actions';
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
      data: { helloWorld: 'hello' },
    }
    const addNode = Action.addNode(node);
    const expectedNode = Object.assign({}, node, { outgoing: [], incoming: [] });

    /* add a node */
    expect(reducers(undefined, addNode)).toEqual({
      nodes: {
        [node.id]: expectedNode
      },
      edges: {}
    })

    /* add nodes in succession */
    const node2 = {
      id: 'node234',
      data: { anotherNode: 'hello' },
      outgoing: [],
      incoming: ['asdf']
    }
    const addTwoNodes = [node, node2].map(Action.addNode);

    expect(addTwoNodes.reduce(reducers, undefined)).toEqual({
      nodes: {
        [node.id]: expectedNode,
        [node2.id]: node2
      },
      edges: {}
    })
  });
  it(`should handle ${ Atype.UPDATE_NODE }`, () => {
    const node = {
      id: 'node123',
      data: { helloWorld: 'hello' },
      incoming: [],
      outgoing: []
    }

    const updatedData = { byebye: 'baby' };

    const addNode = Action.addNode(node);
    const updateNode = Action.updateNode({ id: node.id, data: updatedData });
    const updateExistingNode = [addNode, updateNode];
    expect(updateExistingNode.reduce(reducers, undefined)).toEqual({
      nodes: {
        [node.id]: Object.assign({}, node, { data: updatedData }),
      },
      edges: {}
    })

    const badUpdate = Action.updateNode({ id: 'fakeId', data: updatedData });
    const updateNonExistingNode = [addNode, badUpdate];
    expect(updateNonExistingNode.reduce(reducers, undefined)).toEqual({
      nodes: {
        [node.id]: node,
      },
      edges: {}
    })
  });
  it(`should handle ${ Atype.DELETE_NODE }`, () => {
    const node = {
      id: 'node123',
      data: { helloWorld: 'hello' },
    }
    const node2 = {
      id: 'node12',
      data: { helloWorld: 'asdfg' },
      incoming: ['e1'],
      outgoing: ['e1']
    }
    const addNode = Action.addNode(node);
    const addNode2 = Action.addNode(node2);
    const deleteNode = Action.deleteNode(node);

    const actions = [addNode, addNode2, deleteNode];

    expect(actions.reduce(reducers, undefined)).toEqual({
      nodes: {
        [node2.id]: node2
      },
      edges: {}
    })
  });
});
