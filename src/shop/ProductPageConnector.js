import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { setPageSize, setSortProperty } from "../data/ActionCreators";

const mapStateToProps = (dataStore, ownProps) => {
  console.log(dataStore);
  console.log(ownProps);
  return dataStore;
};
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    setPageSize,
    setSortProperty,
  };
};

const mergeProps = (dataStore, actionCreators, router) => {
  return {
    ...dataStore,
    ...router,
    ...actionCreators,
    currentPage: Number(router.match.params.page),
    pageCount: Math.ceil(
      (dataStore.products_total || dataStore.pageSize || 5) /
        (dataStore.pageSize || 5)
    ),
    navigateToPage: (page) =>
      router.history.push(
        `/shop/products/${router.match.params.category}/${page}`
      ),
  };
};

export const ProductPageConnector = (PageComponent) =>
  withRouter(
    connect(mapStateToProps, mapDispatchToProps, mergeProps)(PageComponent)
  );
