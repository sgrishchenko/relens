import update, { RELENS_UPDATE } from './lensAction';

describe('lensAction update', () => {
  test(`should create action with the type "${RELENS_UPDATE}"`, () => {
    const value = 'value';
    const actual = update(['some', 'deep', 'prop'])(value);

    expect(actual.type).toBe(RELENS_UPDATE);
  });

  test('should create serializable FLUX action with the path and value specified in the payload', () => {
    const value = 'value';
    const actual = update(['some', 'deep', 'prop'])(value);

    expect(actual).toMatchSnapshot();
  });

  test('should accept the path as the function of the properties', () => {
    const exampleId = 42;
    const value = 'value';
    const actual = update(({ id }) => ['some', 'deep', 'prop', id])(value, { id: exampleId });

    expect(actual).toMatchSnapshot();
  });
});
