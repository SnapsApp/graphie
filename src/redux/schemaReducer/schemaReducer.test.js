import expect from 'expect';
import { generateEntityFromSchema } from './schemaGetters';
import schemaReducer from './index';

describe('schema getters', () => {
  it('should correctly initialize a blank entity from a schema', () => {
    const fauxSchema = {
      contractAttributes: {
        active: {
          type: "boolean",
          transform: "booleanize",
          defaultsTo: false
        },
        appId: { type: "string" },
        blacklistUsers: {
          type: "array",
          description: "A list of Snaps user IDs to hide this report for."
        },
        detailType: { type: "string" },
        displayIcon: {
          type: "string",
          required: true,
          defaultsTo: "ion-ionic"
        },
        id: { type: "string" },
        name: {
          type: "string",
          required: true
        },
        meta: {
          type: "object"
        },
      }
    }
    const expectedEntity = {
      active: false,
      appId: undefined,
      blacklistUsers: undefined,
      detailType: undefined,
      displayIcon: "ion-ionic",
      id: undefined,
      name: undefined,
      meta: undefined
    }
    const emptyEntity = generateEntityFromSchema(fauxSchema);
    expect(emptyEntity).toEqual(expectedEntity);
  })
})
