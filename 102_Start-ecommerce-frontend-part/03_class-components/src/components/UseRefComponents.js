import React, { Component } from 'react'

export default class UseRefComponents extends Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
  }

  handleClick = () => {
    const rslt = this.inputRef.current.value;
    alert(rslt)
  }

  render() {
    return (
      <div className='container'>
        <input type="text" ref={this.inputRef} />
        <button onClick={this.handleClick}>Focus Input</button>
      </div>
    );
  }
}
