import React, { Component } from 'react';

export default class FourOhFour extends Component {
  // Can add AJAX request to save incorrect url so you know if links are broken
  componentDidMount() {
    setTimeout(() => {
        this.props.history.push('/')
    }, 1000);
  }
  render() {
    return (
      <div>
        Page cannot be found<br />
        <img src='http://www.fillmurray.com/200/200'/>
      </div>
    );
  }
}
