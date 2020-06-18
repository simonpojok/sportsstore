import { ActionTypes } from "./Types";

export const ShopReducer = (storeData, action) => {
  // debugger;
  console.log("SHOP REDUCER");
  console.log(storeData);
  console.log(action);
  switch (action.type) {
    case ActionTypes.DATA_LOAD:
      return {
        [action.payload.dataType]: action.payload.data,
        ...storeData,
        [`${action.payload.dataType}_total`]: action.payload.total,
        [`${action.payload.dataType}_params`]: action.payload.params,
      };
    case ActionTypes.DATA_SET_PAGESIZE:
      return { ...storeData, pageSize: action.payload };
    case ActionTypes.DATA_SET_SORT_PROPERTY:
      return { ...storeData, sortKey: action.payload };
    default:
      return storeData || {};
  }
};
