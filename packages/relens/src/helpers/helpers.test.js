import { view, set } from './helpers';

describe('helpers', () => {
  let state;

  beforeEach(() => {
    state = {
      some: {
        deep: {
          prop: 'initial value',
        },
      },
    };
  });

  describe('view', () => {
    test('should get the value along the specified path', () => {
      const initialValue = state.some.deep.prop;
      const actual = view(['some', 'deep', 'prop'], state);

      expect(actual).toBe(initialValue);
    });

    test('should get an undefined value if the target contains the specified path only partially', () => {
      const currentState = { some: {} };
      const actual = view(['some', 'deep', 'prop'], currentState);

      expect(actual).toBeUndefined();
    });

    test.each(
      [
        [undefined], [null], [''], [0], [false], [{}],
      ],
    )('should get an undefined value if the target is %j', (currentState) => {
      const actual = view(['some', 'deep', 'prop'], currentState);

      expect(actual).toBeUndefined();
    });
  });

  describe('set', () => {
    test('should set the value along the specified path', () => {
      const value = 'value';
      const actual = set(['some', 'deep', 'prop'], value, state);

      expect(actual.some.deep.prop).toBe(value);
    });

    test('should not affect the values of other object fields', () => {
      const value = 'value';
      const initialValue = state.some.deep.prop;
      const actual = set(['some', 'deep', 'anotherProp'], value, state);

      expect(actual.some.deep.anotherProp).toBe(value);
      expect(actual.some.deep.prop).toBe(initialValue);
      expect(value).not.toBe(initialValue);
    });

    test('should create new objects along the specified path', () => {
      const value = state.some.deep.prop;
      const actual = set(['some', 'deep', 'prop'], value, state);

      expect(actual).toEqual(state);
      expect(actual).not.toBe(state);
      expect(actual.some).not.toBe(state.some);
      expect(actual.some.deep).not.toBe(state.some.deep);
    });

    test.each(
      [
        [undefined], [null], [''], [0], [false], [{}],
      ],
    )('should set the value along the specified path, even if the target is %j', (currentState) => {
      const value = 'value';
      const actual = set(['some', 'deep', 'prop'], value, currentState);

      expect(actual).toEqual({
        some: {
          deep: {
            prop: value,
          },
        },
      });
    });
  });
});
