import React, { Component } from 'react'
import { ListGroup } from 'react-bootstrap'
import { Link } from 'react-router-dom'
export default class HomePage extends Component {
  render() {
    return (
      <div className='container'>
        <h1>Welcome to Class Component Home Page</h1>
        <ListGroup>
            <ListGroup.Item><Link to="/conditional-rendering">Conditional Rendering</Link></ListGroup.Item>
            <ListGroup.Item><Link to="/use-ref">Use Reference</Link></ListGroup.Item>
            <ListGroup.Item><Link to="/component-did-mount">Component Did Mount</Link></ListGroup.Item>
        </ListGroup>
      </div>
    )
  }
}
