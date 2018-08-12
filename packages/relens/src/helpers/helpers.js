const isObject = state => state !== null && typeof state === 'object';

export const preparePath = (path, props) => (
  typeof path === 'function'
    ? path(props)
    : path
);

export const view = (rawPath, state) => {
  const path = [...rawPath];

  let result;
  let currentState = state;
  while (isObject(currentState) && path.length) {
    const prop = path.shift();
    currentState = currentState[prop];
    result = currentState;
  }

  return result;
};

export const set = (rawPath, value, state) => {
  const path = [...rawPath];

  const result = {};
  let currentResult = result;
  let currentState = state;
  while (path.length) {
    currentState = isObject(currentState)
      ? currentState
      : {};

    Object.assign(currentResult, currentState);

    const prop = path.shift();
    currentResult[prop] = path.length
      ? {}
      : value;
    currentResult = currentResult[prop];
    currentState = currentState[prop];
  }

  return result;
};
