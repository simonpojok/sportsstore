const isPromise = (payload) =>
  (typeof payload === "object" || typeof payload === "function") &&
  typeof payload.then === "function";

export const asyncActions = ({ getState, dispatch }) => (next) => (action) => {
  if (isPromise(action.payload)) {
    action.payload.then((result) => {
      return next({ ...action, payload: result });
    });
  } else {
    next(action);
  }
};

export function asyncActionsDeport({ getState, dispatch }) {
  return function (next) {
    return function (action) {
      if (isPromise(action.payload)) {
        action.payload.then((result) => {
          return next({ ...action, payload: result });
        });
      } else {
        next(action);
      }
    };
  };
}
