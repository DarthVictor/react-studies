import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import Counter from './Counter'
import { incrementCounter } from 'redux/actions/counterActions'


const propTypes = {
    dispatch: PropTypes.func.isRequired,
    value: PropTypes.number.isRequired
}

class ReduxCounter extends Component {
    constructor(props){
        super(props)

        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(e){
        this.props.dispatch(incrementCounter())
    }

    render(){
        return <Counter value={this.props.value} onClick={this.handleClick} />
    }
}

ReduxCounter.propTypes = propTypes

function mapStateToProps(state){
    return {
        value: state.counter.value
    }
}

export default connect(mapStateToProps)(ReduxCounter)