export const parseVSdata = structure => {
  const getServiceData = (service, layer = {}) => {
    const layerEntities = (layer.data || []).reduce((map, e) => {
      map[e.id] = {
      id: e.id,
      data: e,
      nodeType: service
      };
      return map;
    }, {});

    return Object.assign({}, layerEntities, Object.keys(layer)
      .filter(service => service !== 'data')
      .reduce((map, s) => {
        map = Object.assign({}, getServiceData(s, layer[s]));
        return map;
      }, {})
    )
  }


  const getEdgeId = (a, b) => [a, b].sort().join('-');

  const makeEdge = edge => {
    const origin = edge.parentId;
    const destin = edge.childId;

    return ({
      id: getEdgeId(origin, destin),
      data: edge,
      origin,
      destin,
    });
  }

  // entity.edges[service].edge[id] <-- get every obj for every combo of service
  const getEdges = (entity, nodes) => {
    const services = Object.keys(entity.edges);
    const edgeData = services.reduce((dataArr, s) => {
      const ids = Object.keys(entity.edges[s].edges);
      return ids.map(id => entity.edges[s].edges[id]).concat(dataArr);
    }, []);
    return edgeData.map(makeEdge).reduce((map, e) => Object.assign(map, { [e.id]: e }), {});
  }

  const getStructureEdges = (service, layer, nodes) => {
    const layerEdges = (layer.data || []).reduce((map, entity) =>
      Object.assign(map, getEdges(entity, nodes))
    , {});

    return Object.assign({}, layerEdges, Object.keys(layer)
      .filter(service => service !== 'data')
      .reduce((map, s) => {
        map = Object.assign({}, getStructureEdges(s, layer[s], nodes));
        return map;
      }, {})
    )
  }

  const rootService = Object.keys(structure)[0];
  const rootLayer = structure[rootService];
  const rootId = rootLayer.data[0].id;

  const nodes = getServiceData(rootService, rootLayer);
  const edges = getStructureEdges(rootService, rootLayer, nodes);

  return { nodes, edges, rootId };
}


