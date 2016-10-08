import * as React from "react";
import {ProductRow} from './ProductRow'
import {ProductCategoryRow} from './ProductCategoryRow'
import {Product} from '../shared/Product'

interface SearchBarProps {
    filterText: string
    inStockOnly: boolean
    onUserInput (value: string, checked:boolean): any
}

interface SearchBarState {
}

export class SearchBar extends React.Component<SearchBarProps, SearchBarState>{
    refs: {
        [key: string]: (Element),
        filterTextInput: (HTMLInputElement)
        inStockOnlyInput: (HTMLInputElement)
    }
    constructor(){
        super(); 
    }
    handleChange() {
        this.props.onUserInput(
            this.refs.filterTextInput.value,
            this.refs.inStockOnlyInput.checked
        );
    }
    render(){
        return(
            <form>
                <input
                    type="text"
                    placeholder="Search..."
                    value={this.props.filterText}
                    ref="filterTextInput"
                    onChange={this.handleChange.bind(this)}
                />
                <p>
                <input
                    type="checkbox"
                    checked={this.props.inStockOnly}
                    ref="inStockOnlyInput"
                    onChange={this.handleChange.bind(this)}
                />
                {' '}
                Only show products in stock
                </p>
            </form>
        )
    }
}