import React, { Component } from 'react'
import ConditionalRendering from './pages/ConditionalRendering'
import UseReference from './pages/UseReference'
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import HomePage from './pages/HomePage';
import CompDidMount from './pages/CompDidMount'
export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path='conditional-rendering' element={<ConditionalRendering/>} />
          <Route path='use-ref' element={<UseReference/>} />
          <Route path='/' element={<HomePage/>} />
          <Route path='/component-did-mount' element={<CompDidMount/>} />
        </Routes>
      </BrowserRouter>
    )
  }
}
