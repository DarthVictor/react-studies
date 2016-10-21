import React, { Component, PropTypes } from 'react';
import {connect} from 'react-redux'
import PageHeader from 'react-bootstrap/lib/PageHeader';
import Button from 'react-bootstrap-button-loader';
import { timeRequest } from 'redux/actions/timeActions';

const propTypes = {
  dispatch: PropTypes.func.isRequired
}

class TimePage extends Component {
  constructor() {
    super();

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.dispatch(timeRequest());
  }

  render() {
    return (
      <div>
        <PageHeader>Timestamp</PageHeader>
        <Button onClick={this.handleClick}>Запросить!</Button>
      </div>
    );
  }
}

TimePage.propTypes = propTypes;

export default connect()(TimePage);
