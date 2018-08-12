import select from './lensSelector';

describe('lensSelector select', () => {
  test('should get the value along the specified path', () => {
    const value = 'value';
    const state = {
      some: {
        deep: {
          prop: value,
        },
      },
    };
    const actual = select(['some', 'deep', 'prop'])(state);

    expect(actual).toBe(value);
  });

  test('should accept the path as the function of the properties', () => {
    const exampleId = 42;
    const value = 'value';
    const state = {
      some: {
        deep: {
          prop: {
            [exampleId]: value,
          },
        },
      },
    };
    const actual = select(({ id }) => ['some', 'deep', 'prop', id])(state, { id: exampleId });

    expect(actual).toBe(value);
  });
});
