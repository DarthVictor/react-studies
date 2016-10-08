import * as React from "react";
import {Product} from '../shared/Product'

interface ProductRowProps {
    product: Product
}

interface ProductRowState {
}

export class ProductRow extends React.Component<ProductRowProps, ProductRowState> {
    constructor() {
        super()
        //this.state = {};        
    }

    render() {
        const name = this.props.product.stocked ?
            this.props.product.name :
            <span style={{color: 'red'}}>
                {this.props.product.name}
            </span>;

        return (
            <tr>
                <td>{name}</td>
                <td>{this.props.product.price}</td>
            </tr>
        );
    }
}
