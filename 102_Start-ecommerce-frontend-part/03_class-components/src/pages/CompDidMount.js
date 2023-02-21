import React, { Component } from "react";
import ComponentDidMount from "../components/ComponentDidMount";
export default class CompDidMount extends Component {
	render() {
		return (
			<div className='container'>
				<h1 className='text-center'>
					Products Fetch API and Products Images Carousel
				</h1>
				<ComponentDidMount />
			</div>
		);
	}
}
