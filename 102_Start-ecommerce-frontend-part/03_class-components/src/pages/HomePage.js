import React, { Component } from 'react'
import HomeBanner from '../components/home/HomeBanner';

export default class HomePage extends Component {
    constructor(){
        super();
    }
    render() {
        return (
        <div>
            <HomeBanner/>
        </div>
        )
    }
}
