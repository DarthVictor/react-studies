import * as React from "react";
import {SearchBar} from './SearchBar'
import {ProductTable} from './ProductTable'
import {Product} from '../shared/Product'

interface FilterableProductTableProps {
    products: Array<Product>
}

interface FilterableProductTableState {
    filterText: string
    inStockOnly: boolean
}

export class FilterableProductTable extends React.Component<FilterableProductTableProps, FilterableProductTableState>{
    constructor(){
        super(); 
        this.state =  {
            filterText: '',
            inStockOnly: false
        };
    }

    handleUserInput(filterText: string, inStockOnly: boolean) {
        this.setState({
            filterText: filterText,
            inStockOnly: inStockOnly
        });
    }

    render(){
        return(
            <div>
                <SearchBar
                    filterText={this.state.filterText}
                    inStockOnly={this.state.inStockOnly}
                    onUserInput={this.handleUserInput.bind(this)}
                />
                <ProductTable
                    products={this.props.products}
                    filterText={this.state.filterText}
                    inStockOnly={this.state.inStockOnly}
                />
            </div>
        )
    }
}