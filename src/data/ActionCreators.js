import { ActionTypes, DataTypes } from "./Types";
import { RestDataSource } from "./RestDataSource";
const dataSource = new RestDataSource();

export const loadData = (dataType, params) => {
  const data = {
    type: ActionTypes.DATA_LOAD,
    payload: dataSource.GetData(dataType, params).then((response) => {
      console.log(`LOADING DATA ACTION CREATOR DATA RECIEVED ${new Date().toString() }`);
      console.log(response.data);
      return {
        dataType,
        data: response.data,
        total: Number(response.headers["x-total-count"]),
        params,
      };
    }),
  };
  return data;
};
export const setPageSize = (newSize) => {
  console.log(`SETTING PAGE SIZE >> ${newSize} << ${new Date().toString()}`);
  return {
    type: ActionTypes.DATA_SET_PAGESIZE,
    payload: newSize,
  };
};

export const setSortProperty = (newProps) => {
  console.log(`SETTING SORT PROPERTY >> ${newProps} << ${new Date().toString()}`);
  return {
    type: ActionTypes.DATA_SET_SORT_PROPERTY,
    payload: newProps,
  };
};

export const placeOrder = (order) => {
  return {
    type: ActionTypes.DATA_STORE,
    payload: dataSource.StoreData(DataTypes.ORDERS, order).then((response) => {
      return {
        dataType: DataTypes.ORDERS,
        data: response.data,
      };
    }),
  };
};
