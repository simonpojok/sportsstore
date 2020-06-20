import React from "react";
import { DataTypes } from "./Types";

export class DataGetter extends React.Component {
    componentDidMount = () => this.getData();
    componentDidUpdate = () => this.getData();

    getData = () => {
        const dsData = this.props.products_params || { };
        const rtData = {
            _limit: this.props.pageSize || 5,
            _sort: this.props.sortKey || "category",
            _page: this.props.location.pathname.split("/")[4] || 1,
            category_like: (this.props.location.pathname.split("/")[3] || "") === "all" ?
            "" : this.props.location.pathname.split("/")[3]
        }
        if (Object.keys(rtData).find((key) => dsData[key] !== rtData[key])) {
            console.log(`Loading Data: ${new Date().toString() }`);
            this.props.loadData(DataTypes.PRODUCTS, rtData);
        }
    }
    render() {
    return <React.Fragment>{this.props.children}</React.Fragment>
    }
} 