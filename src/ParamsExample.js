import React, { Component } from 'react';

export default class ParamsExample extends Component {
  render() {
    console.log(this.props)
    return (
      <div>
        This is the dynamic page<br/>
        The current id is: {this.props.params.id}
      </div>
    );
  }
}
