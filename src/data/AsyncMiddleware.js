const isPromise = (payload) =>
  (typeof payload === "object" || typeof payload === "function") &&
  typeof payload.then === "function";

export const asyncActions = ({ getState, dispatch }) => (next) => (action) => {
  if (isPromise(action.payload)) {
    console.log(`LOADING DATA ASYNC MIDDLEWARE ${new Date().toString() }`);
    action.payload.then((result) => {
      console.log(result);
      return next({ ...action, payload: result });
    });
  } else {
    next(action);
  }
};