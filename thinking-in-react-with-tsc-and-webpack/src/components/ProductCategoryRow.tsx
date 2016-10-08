import * as React from "react";

interface ProductCategoryRowProps {
    category: string
}

interface ProductCategoryRowState {
}

export class ProductCategoryRow extends React.Component<ProductCategoryRowProps, ProductCategoryRow> {
    constructor() {
        super()
        //this.state = {};        
    }

    render() {
        return (
            <tr><th colSpan="2">{this.props.category}</th></tr>
        );
    }
}

