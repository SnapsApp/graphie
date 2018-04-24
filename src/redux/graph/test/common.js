import { DEFAULT_NODE_TYPE } from '../graphReducer';

export { DEFAULT_NODE_TYPE };

export const INIT_NODE = {
  id: undefined,
  data: {},
  incoming: {},
  outgoing: {},
  nodeType: DEFAULT_NODE_TYPE
}

export const INIT_EDGE = {
  id: undefined,
  data: {},
  origin: undefined,
  destin: undefined,
}

export const fillNode = node => Object.assign({}, INIT_NODE, node);
export const fillEdge = edge => Object.assign({}, INIT_EDGE, edge);

const nodeId = ['node123',  'node12',  'node234',  'node987',];

export const testNodes = [
  {
    id: nodeId[0],
    data: { helloWorld: 'hello' },
  },
  {
    id: nodeId[1],
    data: { helloWorld: 'asdfg' },
    incoming: {
      [DEFAULT_NODE_TYPE]: ['e1'],
    },
    outgoing: {
      [DEFAULT_NODE_TYPE]: ['e1'],
    }
  },
  {
    id: nodeId[2],
    data: { anotherNode: 'hello' },
    outgoing: {
      [DEFAULT_NODE_TYPE]: [],
    },
    incoming: {
      [DEFAULT_NODE_TYPE]: ['asdf'],
    }
  }
]

export const testEdges = [
  (origin, destin) => ({
    id: 'edge123',
    data: { relationship: 'complicated' },
    origin,
    destin
  }),
  (origin, destin) => ({
    id: 'edge098',
    data: { relationship: 'complicated' },
    origin,
    destin
  })
]
