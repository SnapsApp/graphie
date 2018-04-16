import reducers from './reducers';
import Action, { Atype } from './actions';
import expect from 'expect';
import { testNodes, testEdges, INIT_NODE, INIT_EDGE } from './test/common';

const fillNode = node => Object.assign({}, INIT_NODE, node);
const fillEdge = edge => Object.assign({}, INIT_EDGE, edge);

describe('graph actions and reducer', () => {
  it('should return the initial state', () => {
    expect(reducers(undefined, {})).toEqual({
      nodes: {},
      edges: {}
    })
  });
  it(`should handle ${ Atype.ADD_NODE }`, () => {
    const node = testNodes[0];
    const addNode = Action.addNode(node);
    const expectedNode = fillNode(node);

    /* add a node */
    expect(reducers(undefined, addNode)).toEqual({
      nodes: {
        [node.id]: expectedNode
      },
      edges: {}
    })

    /* add nodes in succession */
    const addTwoNodes = testNodes.slice(0, 2).map(Action.addNode);
    const expectedNodes = testNodes.slice(0, 2).map(fillNode);

    expect(addTwoNodes.reduce(reducers, undefined)).toEqual({
      nodes: {
        [testNodes[0].id]: expectedNodes[0],
        [testNodes[1].id]: expectedNodes[1]
      },
      edges: {}
    })
  });
  it(`should handle ${ Atype.UPDATE_NODE }`, () => {
    const node = testNodes[0]

    const updatedData = { byebye: 'baby' };

    const addNode = Action.addNode(node);
    const updateNode = Action.updateNode({ id: node.id, data: updatedData });
    const updateExistingNode = [addNode, updateNode];

    /* updates node */
    expect(updateExistingNode.reduce(reducers, undefined)).toEqual({
      nodes: {
        [node.id]: fillNode(Object.assign({}, node, { data: updatedData })),
      },
      edges: {}
    })

    const badUpdate = Action.updateNode({ id: 'fakeId', data: updatedData });
    const updateNonExistingNode = [addNode, badUpdate];

    /* will do nothing if trying to update non-existent node */
    expect(updateNonExistingNode.reduce(reducers, undefined)).toEqual({
      nodes: {
        [node.id]: fillNode(node),
      },
      edges: {}
    })
  });
  it(`should handle ${ Atype.DELETE_NODE }`, () => {
    const node = testNodes[0];
    const node2 = testNodes[1];
    const { addNode, deleteNode } = Action;

    const actions = [addNode(node), addNode(node2), deleteNode(node)];

    expect(actions.reduce(reducers, undefined)).toEqual({
      nodes: {
        [node2.id]: fillNode(node2)
      },
      edges: {}
    })
  });
  it(`should handle ${ Atype.ADD_EDGE }`, () => {
    const node1 = testNodes[0];
    const node2 = testNodes[1];
    const edge = testEdges[0](node1, node2);
    const { addNode, addEdge } = Action;
    const actions = [addNode(node1), addNode(node2), addEdge(edge)];

    expect(actions.reduce(reducers, undefined)).toEqual({
      nodes: {
        [node1.id]: fillNode(node1),
        [node2.id]: fillNode(node2),
      },
      edges: {
        [edge.id]: fillEdge(edge)
      }
    })
  })
});
