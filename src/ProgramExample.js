import React, { Component } from 'react';

export default class ProgramExample extends Component {
    constructor (props) {
        super(props)
        this.handleFormSubmit = this.handleFormSubmit.bind(this)
    }
    handleFormSubmit(e) {
        e.preventDefault()
        // alert('did it!')
        var inputNode = this.refs.cheesecake
        var inputValue = inputNode.value
        // alert(inputValue)
        // console.log(this.props) // passing the prop down into this component
        this.props.history.push('./query?test=' + inputValue)
    }
  render() {
    return (
      <div>
        <h1>Program example</h1>
        <form onSubmit={this.handleFormSubmit}>
            <input ref='cheesecake' placeholder='Input here' />
            <button>Click me to route</button>
        </form>
      </div>
    );
  }
}
