import { ActionTypes } from "./Types";

export const ShopReducer = (storeData, action) => {
  console.log(action);
  switch (action.type) {
    case ActionTypes.DATA_LOAD:
      return {
        [action.payload.dataType]: action.payload.data,
        ...storeData,
      };

    default:
      return storeData || {};
  }
};
