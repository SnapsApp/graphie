import expect from 'expect';
import vsReducer from './index';
import Action from './vsActions';
import { find, StructureGrapher } from './vsGetters';
import dataReducer, { addToDataBranch } from '../dataReducer';

import {
  testStructure,
  testResponse,
  graphTestData,
  parseVSdata,
  testEntities,
  makeNode,
  expectNode } from './common'

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
    const entity = testEntities[0];
    const node = makeNode(entity, entity.service);
    const populatedVS = [Action.addVS(vsId), Action.initEntity(vsId)(node)].reduce(vsReducer, undefined);
    const expectedNode = expectNode(entity, 'unchanged');

    expect(populatedVS).toEqual({
      [vsId]: {
        deleted: {
          nodes: {},
          edges: {}
        },
        nodes: {
          [node.id]: expectedNode
        },
        edges: {}
      }
    });
  });
  it('should be able to add root id to a vs', () => {
    const vsId = 'randId';
    const entity = testEntities[0];
    const node = makeNode(entity, entity.service);
    const expectedNode = expectNode(entity, 'unchanged');
    const populatedVS = [
      Action.addVS(vsId),
      Action.initEntity(vsId)(node),
      Action.setRoot(vsId)(node.id)
    ].reduce(vsReducer, undefined);

    expect(populatedVS).toEqual({
      [vsId]: {
        deleted: {
          nodes: {},
          edges: {}
        },
        nodes: {
          [node.id]: expectedNode
        },
        edges: {},
        rootId: node.id
      }
    });
  });

  it('should properly parse fetched data', () => {
    const { nodes, edges, rootId } = parseVSdata(testResponse);

    expect(Object.keys(nodes).length).toEqual(20);
    expect(rootId).toEqual("59c19f324ca8fc015b183339");
    expect(Object.keys(edges).length).toEqual(19);
  });

  it('should be able to create structure/graph post body', () => {
    const vsId = 'asdflkj';
    const resp = graphTestData.virtualizeResp;
    const populatedState = vsReducer(undefined, Action.populateVS(vsId, resp));
    const dataState = dataReducer(undefined, addToDataBranch(resp));

    const grapher = new StructureGrapher(graphTestData.structure, populatedState[vsId], dataState);
    const postBody = grapher.getPostBody();

    const { nodes, edges, rootId } = parseVSdata(resp);

    expect(postBody.state).toEqual(graphTestData.graphPostBody.state);
    // expect(delinks).toEqual([]);
  });
})

describe('vs reducer helpers', () => {
  const vsId = 'test-vsid';
  const populatedState = vsReducer(undefined, Action.populateVS(vsId, testResponse));
  const thisVS = populatedState[vsId];
  it('should be able to populate structure retrieved from virtualized endpoint', () => {
    expect(Object.keys(thisVS.nodes).length).toEqual(20);
    expect(Object.keys(thisVS.edges).length).toEqual(19);
    expect(thisVS.rootId).toBeDefined();
  });
})
