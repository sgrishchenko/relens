/*
import { connect } from 'react-redux';
import { read, write } from '../../relens/src/helpers/helpers';

export const lensConnect = structure => connect(
  (state, props) => Object.entries(structure).reduce(
    (result, [prop, path]) => ({
      ...result,
      [prop]: read(path)(state, props)
    }),
    {}
  ),
  (dispatch, props) => Object.entries(structure).reduce(
    (result, [prop, path]) => ({
      ...result,
      [prop]: value => dispatch(write(path)(value, props))
    }),
    {}
  ),
  (getters, setters) => Object.keys(structure).reduce(
    (result, prop, path) => ({
      ...result,
      [prop]: {
        view: getters[prop],
        set: setters[prop],
        over: f => setters[prop](f(getters[prop]))
      }
    }),
    {}
  )
)
*/
