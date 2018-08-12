/*
import React, { Component } from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import { read, write } from '../packages/relens/src/helpers/helpers'
import { relensReducer } from '../packages/relens/src/lensReducer/relensReducer';
import { lensConnect } from '../packages/react-relens/src/lensConnect';

const store = createStore(relensReducer)
window.store = store

store.dispatch(write(['some', 'another', 'value'])('anotherValue'))
console.log(read(['some', 'another', 'value'])(store.getState()));

const AppComponent = ({ text, counter }) => (
  <div>
    <div>
      <input onChange={event => text.set(event.target.value)} />
    </div>
    <div>
      <button onClick={() => counter.over((value = 0) => value - 1)}>-</button>
      <button onClick={() => counter.over((value = 0) => value + 1)}>+</button>
    </div>
    <div>
      <span>{counter.view}: {text.view}</span>
    </div>
  </div>
)

const App = lensConnect({
  text: ['some', 'deep', 'value'],
  counter: ({ id }) => ['some', 'more', 'deep', id],
})(AppComponent)

render(
  <Provider store={store}>
    <App id={42} />
  </Provider>,
  document.getElementById('root')
)
*/
