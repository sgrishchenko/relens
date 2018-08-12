import { preparePath, view } from '../helpers/helpers';

const select = path => (state, props) => {
  const preparedPath = preparePath(path, props);
  return view(preparedPath, state);
};

export default select;
