import { preparePath } from '../helpers/helpers';

export const RELENS_UPDATE = 'RELENS_UPDATE';

const update = path => (value, props) => {
  const preparedPath = preparePath(path, props);
  return ({
    type: RELENS_UPDATE,
    payload: {
      path: preparedPath,
      value,
    },
  });
};

export default update;
