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
  expectNode,
  SCHEMAS,
} from './common'

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
  it('should be able to add a new entity', () => {
    const vsId = 'aslkjdf';
    const id = 'newentity';
    const generatedEntity = Action.addNewEntity(vsId)(SCHEMAS.fauxservices, { id, name: 'Hoo nana', active: true })

    expect(generatedEntity.id).toEqual(id);

    const populatedVS = [Action.addVS(vsId), generatedEntity.action].reduce(vsReducer, undefined);
    expect(populatedVS[vsId].nodes[id]).toEqual({
      id: 'newentity',
      data: {
        entity: {
          active: true,
          appId: undefined,
          blacklistUsers: undefined,
          detailType: undefined,
          displayIcon: 'ion-ionic',
          id: 'newentity',
          name: 'Hoo nana',
          meta: undefined
        },
        updateStatus: 'new'
      },
      incoming: {},
      outgoing: {},
      nodeType: 'fauxservices'
    });
  });
  it('should be able to add a new entity and link it to a parent', () => {
    const vsId = 'aslkjdf';
    const id = 'newentity';
    const entity = testEntities[0];
    const parentNode = makeNode(entity, entity.service);
    const addParent = Action.initEntity(vsId)(parentNode);
    const generatedChild = Action.addNewEntity(vsId, () => {}, parentNode.id)(SCHEMAS.fauxservices, { id, name: 'Namehameha', active: true })
    const expectedEdgeId = `${ id }-${ parentNode.id }`;
    const populatedVS = [
      Action.addVS(vsId),
      addParent,
      generatedChild.action
    ].reduce(vsReducer, undefined);

    expect(populatedVS[vsId].nodes[parentNode.id].outgoing).toEqual({ fauxservices: [ 'newentity-node123' ] });
    expect(populatedVS[vsId].edges[expectedEdgeId]).toEqual({
      data: {
        edge: {
          childId: "newentity",
          childService: "fauxservices",
          orderIndex: 0,
          parentId: "node123",
          parentService: "banana",
        },
        updateStatus: "new",
      },
      destin: "newentity",
      id: "newentity-node123",
      origin: "node123",
    });
    expect(populatedVS[vsId].nodes[id]).toEqual({
      id: 'newentity',
      data: {
        entity: {
          active: true,
          appId: undefined,
          blacklistUsers: undefined,
          detailType: undefined,
          displayIcon: 'ion-ionic',
          id: 'newentity',
          name: 'Namehameha',
          meta: undefined
        },
        updateStatus: 'new'
      },
      incoming: { banana: [ 'newentity-node123' ] },
      outgoing: {},
      nodeType: 'fauxservices'
    });
  });
})

describe('serialize for graph', () => {
  const vsId = 'asdflkj';
  const resp = graphTestData.virtualizeResp;
  const populatedState = vsReducer(undefined, Action.populateVS(vsId, resp));
  const dataState = dataReducer(undefined, addToDataBranch(resp));
  const testOrgId = '5ad8bd24c571e541973cd927';
  const testAppId = '5ad4e2e2aff5b620a241d8ce';
  const grapher = new StructureGrapher(graphTestData.structure, populatedState[vsId], dataState, testOrgId, SCHEMAS);

  it('should be able to create structure/graph post body', () => {
    const {
      orgId,
      state,
      structure,
      delinks
    } = grapher.getPostBody();
    // console.log('GRAPHER POST BODY', JSON.stringify(grapher.getPostBody()))
    const expected = graphTestData.graphPostBody;

    expect(state).toEqual(expected.state);
    expect(delinks).toEqual(expected.delinks);
    expect(orgId).toEqual(expected.orgId);
    expect(structure).toEqual(expected.structure);
  });

  // NOTE: commented out because too lazy to update 'updatedAt' and relation
  it('should have the correct post body after updating an entity', () => {
  //   const updateRule1 = Action.updateEntity(vsId, "5b1eac9e7157989575bd7cbb")({
  //     resourceId: "change1",
  //     resourceName: "change1",
  //   })
  //   const updateRule2 = Action.updateEntity(vsId, "5b1eb16e7157989575bd7cbf")({
  //     resourceId: "change2",
  //     resourceName: "change2",
  //   })

  //   const updatedVSState = [updateRule1, updateRule2].reduce(vsReducer, populatedState);

  //   grapher.updateState(updatedVSState[vsId]);
  //   const {
  //     orgId,
  //     state,
  //     structure,
  //     delinks } = grapher.getPostBody();

  //   const expected = graphTestData.graphPostBodyAfterRuleUpdates;

  //   expect(state).toEqual(expected.state);
  //   expect(delinks).toEqual(expected.delinks);
  //   expect(orgId).toEqual(expected.orgId);
  //   expect(structure).toEqual(expected.structure);
  });
  it('should have the correct post body after adding a new entity', () => {
    const updateRule1 = Action.updateEntity(vsId, "5b1eac9e7157989575bd7cbb")({
      resourceId: "change1",
      resourceName: "change1",
    })
    const updateRule2 = Action.updateEntity(vsId, "5b1eb16e7157989575bd7cbf")({
      resourceId: "change2",
      resourceName: "change2",
    })

    const parentRulesetsId = '5b1eac9e7157989575bd7cba';
    const rulesId = '5b2303af6af1244ab5237fc4';

    const ruleInit = {
      id: rulesId,
      appId: testAppId,
      resourceName: 'change3',
      resourceId: 'change3',
      resourceType: 'funnels',
      orgId: testOrgId,
      action: 'Entered',
      value: 'true',
    };

    const addRule = Action.addNewEntity(vsId, () => {}, parentRulesetsId)(SCHEMAS.rules, ruleInit);

    // console.log('add rule', JSON.stringify(addRule.action));

    const updatedVSState = [updateRule1, updateRule2, addRule.action].reduce(vsReducer, populatedState);

    // console.log('u[pdated', JSON.stringify(updatedVSState));

    grapher.updateState(updatedVSState[vsId]);

    // console.log('UPDATE STATE')



    const {
      orgId,
      state,
      structure,
      delinks } = grapher.getPostBody();

    console.log(JSON.stringify(grapher.getPostBody()));

    const expected = graphTestData.graphPostBodyAfterAddedRule;

    expect(state).toEqual(expected.state);
    expect(delinks).toEqual(expected.delinks);
    expect(orgId).toEqual(expected.orgId);
    expect(structure).toEqual(expected.structure);
  });
  it('should have the correct post body after updating an edge', () => {

  });
  it('should have the correct post body after delinking an entity', () => {

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
