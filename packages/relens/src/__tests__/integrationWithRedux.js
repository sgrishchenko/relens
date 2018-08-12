import { createStore } from 'redux';
import { relensReducer, select, update } from '../index';

describe('integration With Redux', () => {
  test('standard usage flow', () => {
    const EXAMPLE_ACTION_TYPE = 'EXAMPLE_ACTION_TYPE';
    const exampleAction = {
      type: EXAMPLE_ACTION_TYPE,
      payload: 'some payload',
    };

    const initialState = { prop: 'some initial value' };
    const resultState = { prop: 'some state value' };

    const rootReducer = (state = initialState, action) => {
      switch (action.type) {
        case EXAMPLE_ACTION_TYPE: {
          return resultState;
        }
        default: {
          return state;
        }
      }
    };

    const store = createStore(relensReducer(rootReducer));

    expect(store.getState()).toMatchSnapshot('[0] initial state');

    store.dispatch(exampleAction);
    expect(store.getState()).toEqual(resultState);
    expect(store.getState()).toMatchSnapshot('[1] state after the work of the rootReducer');

    const value = 'value';
    const exampleId = 42;
    const relensAction = update(({ id }) => ['some', 'deep', 'prop', id])(value, { id: exampleId });
    store.dispatch(relensAction);
    expect(store.getState().some.deep.prop[exampleId]).toEqual(value);
    expect(store.getState()).toMatchSnapshot('[2] state after the work of the relensReducer');

    const actualStateValue = select(({ id }) => ['some', 'deep', 'prop', id])(store.getState(), { id: exampleId });
    expect(actualStateValue).toBe(value);
  });
});
