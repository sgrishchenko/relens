import { set } from '../helpers/helpers';
import { RELENS_UPDATE } from '../lensAction/lensAction';

const relensReducer = reducer => (state, action) => {
  if (action.type === RELENS_UPDATE) {
    const { path, value } = action.payload;
    return set(path, value, state);
  }
  if (typeof reducer === 'function') {
    return reducer(state, action);
  }

  return state;
};

export default relensReducer;
