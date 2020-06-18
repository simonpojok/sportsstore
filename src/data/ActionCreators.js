import { ActionTypes } from "./Types";
// import { data as phData } from "./placeholderData";
import { RestDataSource } from "./RestDataSource";
const dataSource = new RestDataSource();

export const loadData = (dataType, params) => {
  const data = {
    type: ActionTypes.DATA_LOAD,
    payload: dataSource.GetData(dataType, params).then((response) => {
      console.log(response);
      return {
        dataType,
        data: response.data,
        total: Number(response.headers["x-total-count"]),
        params,
      };
    }),
  };
  // console.log(data);
  return data;
};

// payload: {
//     dataType: "load",
//     data: { }
// }

export const setPageSize = (newSize) => {
  return {
    type: ActionTypes.DATA_SET_PAGESIZE,
    payload: newSize,
  };
};

export const setSortProperty = (newProps) => {
  return {
    type: ActionTypes.DATA_SET_SORT_PROPERTY,
    payload: newProps,
  };
};
