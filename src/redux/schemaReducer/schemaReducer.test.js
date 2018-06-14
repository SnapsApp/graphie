import expect from 'expect';
import { generateEntityFromSchema } from './schemaGetters';
import schemaReducer from './index';
import { fauxSchema } from '../vsReducer/common';

describe('schema getters', () => {
  it('should correctly initialize a blank entity from a schema', () => {
    const schema = fauxSchema.schema;
    const expectedEntity = fauxSchema.defaultEntity;

    const emptyEntity = generateEntityFromSchema(schema);
    expect(emptyEntity).toEqual(expectedEntity);
  })
})
