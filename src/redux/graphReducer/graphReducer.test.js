import graphReducer, { createGraphReducer } from './index';
import Action from './graphActions';
import expect from 'expect';
import { testNodes, testEdges, INIT_NODE, INIT_EDGE, fillNode, fillEdge, DEFAULT_NODE_TYPE } from './test/common';

describe('graph actions and reducer', () => {
  it('should return a graph from graphReducerFactory', () => {
    const greducer = createGraphReducer();
    expect(greducer(undefined, {})).toEqual({
      nodes: {},
      edges: {}
    })
  });
  it('should return the initial state', () => {
    expect(graphReducer(undefined, {})).toEqual({
      nodes: {},
      edges: {}
    })
  });
  it('should handle adding a node', () => {
    const node = testNodes[0];
    const addNode = Action.addNode(node);
    const expectedNode = fillNode(node);

    /* add a node */
    expect(graphReducer(undefined, addNode)).toEqual({
      nodes: {
        [node.id]: expectedNode
      },
      edges: {}
    })

    /* add nodes in succession */
    const addTwoNodes = testNodes.slice(0, 2).map(Action.addNode);
    const expectedNodes = testNodes.slice(0, 2).map(fillNode);

    expect(addTwoNodes.reduce(graphReducer, undefined)).toEqual({
      nodes: {
        [testNodes[0].id]: expectedNodes[0],
        [testNodes[1].id]: expectedNodes[1]
      },
      edges: {}
    })
  });
  it('should handle updating a node', () => {
    const node = testNodes[0]

    const updatedData = { byebye: 'baby' };

    const addNode = Action.addNode(node);
    const updateNode = Action.updateNode({ id: node.id, data: updatedData });
    const updateExistingNode = [addNode, updateNode];

    /* updates node */
    expect(updateExistingNode.reduce(graphReducer, undefined)).toEqual({
      nodes: {
        [node.id]: fillNode(Object.assign({}, node, { data: updatedData })),
      },
      edges: {}
    })

    const badUpdate = Action.updateNode({ id: 'fakeId', data: updatedData });
    const updateNonExistingNode = [addNode, badUpdate];

    /* will do nothing if trying to update non-existent node */
    expect(updateNonExistingNode.reduce(graphReducer, undefined)).toEqual({
      nodes: {
        [node.id]: fillNode(node),
      },
      edges: {}
    })
  });
  describe('deleting nodes', () => {
    const node = testNodes[0];
    const node2 = testNodes[1];
    const { addNode, deleteNode, addEdge } = Action;

    const edge = testEdges[0](node.id, node2.id);

    const populatedState = [addNode(node), addNode(node2)]
      .reduce(graphReducer, undefined);

    it('should delete node from the nodes branch', () => {
      const postDelete = graphReducer(populatedState, deleteNode(node));

      expect(postDelete).toEqual({
        nodes: {
          [node2.id]: fillNode(node2)
        },
        edges: {}
      })
    });
    it('should delete edges that belong to the node', () => {
      const postDelete = [addEdge(edge), deleteNode(node)]
        .reduce(graphReducer, populatedState);
      expect(postDelete).toEqual({
        nodes: {
          [node2.id]: fillNode(node2)
        },
        edges: {}
      });
    });
  })
  describe('adding edges', () => {
    const node1 = testNodes[0];
    const node2 = testNodes[1];
    const edge = testEdges[0](node1.id, node2.id);
    const { addNode, addEdge } = Action;
    const actions = [addNode(node1), addNode(node2), addEdge(edge)];

    const updatedState = actions.reduce(graphReducer, undefined);

    it('should add edge to edges branch of in state tree', () => {
      expect(updatedState.edges[edge.id]).toEqual(fillEdge(edge));
    });
    it('should add edge to incoming and outgoing arrays of nodes', () => {
      expect(updatedState.nodes[node1.id].outgoing[DEFAULT_NODE_TYPE])
        .toEqual(expect.arrayContaining([edge.id]));
      expect(updatedState.nodes[node2.id].incoming[DEFAULT_NODE_TYPE])
        .toEqual(expect.arrayContaining([edge.id]));
    });

    const EMPTY_STATE = { nodes: {}, edges: {} };

    it('should not add the edge when none of the nodes exist', () => {
      const state = [addEdge(edge)].reduce(graphReducer, undefined);
      expect(state).toEqual(EMPTY_STATE);
    })
    it('should not add the edge when one of the nodes doesn\'t exist', () => {
      const state = [addNode(node1), addEdge(edge)].reduce(graphReducer, undefined);
      expect(state).toEqual({
        nodes: { [node1.id]: fillNode(node1) },
        edges: {}
      });
    })
    it('should not add the edge when an edge with the same id already exists', () => {
      const anotherEdge = Object.assign({}, edge, { data: 'new edge with same id' });
      const state = graphReducer(updatedState, addEdge(anotherEdge));
      expect(state.edges[edge.id]).toEqual(fillEdge(edge));
      expect(state.nodes[node1.id].outgoing[DEFAULT_NODE_TYPE])
        .toEqual(expect.arrayContaining([edge.id]));
      expect(state.nodes[node2.id].incoming[DEFAULT_NODE_TYPE])
        .toEqual(expect.arrayContaining([edge.id]));
    })
  });
  describe('deleting edges', () => {
    const node1 = testNodes[0];
    const node2 = testNodes[1];
    const node3 = testNodes[2];

    const edge = testEdges[0](node1.id, node2.id);
    const edge2 = testEdges[1](node1.id, node3.id);

    const { addNode, addEdge, deleteEdge } = Action;

    const actions = [node1, node2, node3].map(addNode)
    const populatedState = actions.reduce(graphReducer, undefined);

    it('should remove the edge from the edges branch', () => {
      const postRemove = [addEdge(edge), deleteEdge(edge)]
        .reduce(graphReducer, populatedState);
      expect(Object.keys(postRemove.edges)).toEqual([]);
    });
    it('should remove edge from its nodes incoming and outgoing', () => {
      const postRemove = [addEdge(edge), deleteEdge(edge)]
        .reduce(graphReducer, populatedState);
      expect(postRemove.nodes[node1.id].outgoing).toEqual(fillNode(node1).outgoing);
      expect(postRemove.nodes[node2.id].incoming).toEqual(fillNode(node2).incoming);
    });
    it('should not delete anything else', () => {
      const postRemove = [addEdge(edge), addEdge(edge2), deleteEdge(edge)]
        .reduce(graphReducer, populatedState);

      const stateWithoutEdge = graphReducer(populatedState, addEdge(edge2));
      expect(postRemove).toEqual(stateWithoutEdge);
    });
    it('should not delete anything if edge does not exist', () => {});
  });
  describe('updating edges', () => {
    const { addNode, addEdge, updateEdge } = Action;

    const node1 = testNodes[0];
    const node2 = testNodes[1];

    const edge = testEdges[0](node1.id, node2.id);

    const populatedState = [addNode(node1), addNode(node2)]
      .reduce(graphReducer, undefined);

    it('should update edges', () => {
      const newData = {
        id: edge.id,
        data: { mytestdata: 'hello' }
      };
      const edgeWithUpdate = Object.assign({}, edge, newData);

      const edgeUpdate = [addEdge(edge), updateEdge(newData)]
        .reduce(graphReducer, populatedState);

      const builtFromScratch = graphReducer(populatedState, addEdge(edgeWithUpdate));

      expect(edgeUpdate).toEqual(builtFromScratch);
    })
  })
});
