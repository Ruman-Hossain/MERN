import React, { Component } from 'react'

export default class ConditionalRenderingComponents extends Component {
  render() {
    if(this.props.isLoggedIn){
      return(
        <div>
          <h1>Welcome, User!</h1>
        </div>
      );
    }else{
      return(
        <div>
          <h1>Please Log in.</h1>
        </div>
      );
    }
  }
}
