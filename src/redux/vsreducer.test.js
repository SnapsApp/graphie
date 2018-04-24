import vsReducer from './vsReducer';
import Action from './vsActions';
import expect from 'expect';

import { testNodes, fillNode } from './graph/test/common';

describe('vs reducer', () => {
  it('should initialize as an empty object', () => {
    expect(vsReducer(undefined, {})).toEqual({});
  })
  it('should be able to add a vs', () => {
    const vsId = 'randId';
    const addedVs = vsReducer(undefined, Action.addVS(vsId));
    expect(addedVs).toEqual({
      [vsId]: {
        nodes: {},
        edges: {}
      }
    })
  });
  it('should be able to delete a vs', () => {
    const vsId = 'randId';
    const addAndDeleteVS = [Action.addVS(vsId), Action.clearVS(vsId)]
      .reduce(vsReducer, undefined);

    expect(addAndDeleteVS).toEqual({});
  });
  it('should be able to update a vsId with graph reducer actions', () => {
    const vsId = 'randId';
    const node = testNodes[0];
    const populatedVS = [Action.addVS(vsId), Action.addNode(vsId)(node)].reduce(vsReducer, undefined);
    const expectedNode = fillNode(node);

    expect(populatedVS).toEqual({
      [vsId]: {
        nodes: {
          [node.id]: expectedNode
        },
        edges: {}
      }
    });
  });
  it('should be able to add root id to a vs', () => {
    const vsId = 'randId';
    const node = testNodes[0];
    const expectedNode = fillNode(node);
    const populatedVS = [
      Action.addVS(vsId),
      Action.addNode(vsId)(node),
      Action.setRoot(vsId)(node.id)
    ].reduce(vsReducer, undefined);

    expect(populatedVS).toEqual({
      [vsId]: {
        nodes: {
          [node.id]: expectedNode
        },
        edges: {},
        rootId: node.id
      }
    });
  });
  it('should be able to split child and parent nodes based on their services', () => {

  })
})

describe('vs context', () => {
  it('should properly parse fetched data');
})

describe('vs entity', () => {
  it('should properly parse update data');
})
