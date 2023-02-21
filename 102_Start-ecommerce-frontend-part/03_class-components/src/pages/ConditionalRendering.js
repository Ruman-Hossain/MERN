import React, { Component } from 'react'
import ConditionalRenderingComponents from '../components/ConditionalRenderingComponents'
export default class ConditionalRendering extends Component {
  constructor(props){
    super(props);
    this.state ={
      isLoggedIn: true
    }
  }
  render() {
    return (
      <div>
        <ConditionalRenderingComponents isLoggedIn={this.state.isLoggedIn}/>
      </div>
    )
  }
}
