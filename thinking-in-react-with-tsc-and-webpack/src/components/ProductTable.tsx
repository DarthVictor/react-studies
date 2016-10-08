import * as React from "react";
import {ProductRow} from './ProductRow'
import {ProductCategoryRow} from './ProductCategoryRow'
import {Product} from '../shared/Product'

interface ProductTableProps {
    products: Array<Product>
    filterText: string
    inStockOnly: boolean
}

interface ProductTableState {
}

export class ProductTable extends React.Component<ProductTableProps, ProductTableState>{
    constructor(){
        super(); 
    }

    render(){
        let rows: any = [];
        let lastCategory: any = null;
        this.props.products.forEach(product => {
            if (product.name.indexOf(this.props.filterText) === -1 || (!product.stocked && this.props.inStockOnly)) {
                return;
            }
            if (product.category !== lastCategory) {
                rows.push(<ProductCategoryRow category={product.category} key={product.category} />);
            }
            rows.push(<ProductRow product={product} key={product.name} />);
            lastCategory = product.category;
        });

        return (
            <table>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
                </thead>
                <tbody>{rows}</tbody>
            </table>
        );
    }
}