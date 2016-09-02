import React, { Component } from 'react';

export default class QueryExample extends Component {
  render() {
    console.log(this.props)
    return (
      <div>
        This is the page<br />
        {this.props.location.query.test}
      </div>
    );
  }
}
