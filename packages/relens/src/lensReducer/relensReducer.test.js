import update, { RELENS_UPDATE } from '../lensAction/lensAction';
import relensReducer from './relensReducer';

describe('relensReducer update', () => {
  test(`should accept the action with the type "${RELENS_UPDATE}" and set the value along the specified path`, () => {
    const value = 'value';
    const action = update(['some', 'deep', 'prop'])(value);
    const actualState = relensReducer()(undefined, action);

    expect(actualState).toMatchSnapshot();
  });

  test('should proxy the internal reducer if it is specified', () => {
    const EXAMPLE_ACTION_TYPE = 'EXAMPLE_ACTION_TYPE';
    const action = {
      type: EXAMPLE_ACTION_TYPE,
      payload: 'some payload',
    };
    const initialState = { prop: 'some initial value' };
    const resultState = { prop: 'some state value' };
    const internalReducer = jest.fn(() => resultState);
    const actualState = relensReducer(internalReducer)(initialState, action);

    expect(actualState).toBe(resultState);
    expect(internalReducer).toHaveBeenCalledWith(initialState, action);
  });

  test('should not affect the values of other fields of the previous state', () => {
    const value = 'value';
    const action = update(['some', 'deep', 'prop'])(value);
    const previousState = { prop: 'some other value' };
    const actualState = relensReducer()(previousState, action);

    expect(actualState).toEqual(
      expect.objectContaining(previousState),
    );
    expect(actualState).toMatchSnapshot();
  });

  test('should return the previous state otherwise', () => {
    const EXAMPLE_ACTION_TYPE = 'EXAMPLE_ACTION_TYPE';
    const action = {
      type: EXAMPLE_ACTION_TYPE,
      payload: 'some payload',
    };
    const previousState = { prop: 'some other value' };
    const actualState = relensReducer()(previousState, action);

    expect(actualState).toEqual(previousState);
  });
});
