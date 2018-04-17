export const INIT_NODE = {
  id: undefined,
  data: {},
  incoming: [],
  outgoing: [],
}

export const INIT_EDGE = {
  id: undefined,
  data: {},
  origin: undefined,
  destin: undefined,
}

const nodeId = ['node123',  'node12',  'node234',  'node987',];

export const testNodes = [
  {
    id: nodeId[0],
    data: { helloWorld: 'hello' },
  },
  {
    id: nodeId[1],
    data: { helloWorld: 'asdfg' },
    incoming: ['e1'],
    outgoing: ['e1']
  },
  {
    id: nodeId[2],
    data: { anotherNode: 'hello' },
    outgoing: [],
    incoming: ['asdf']
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
