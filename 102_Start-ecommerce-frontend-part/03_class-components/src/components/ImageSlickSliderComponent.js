import React, { Component } from "react";
import { Carousel, Image } from "react-bootstrap";

export default class ImageSlickSliderComponent extends Component {
	constructor(props) {
		super(props);
		this.state = {
			Images: props.Images,
		};
	}
	render() {
		const sliderImages =
			this.state.Images &&
			this.state.Images.map((image, i) => {
				return (
					<Carousel.Item key={i}>
						<Image
							style={{ width: "100%", height: "300px" }}
							src={image}
							alt={`Slide ${i}`}
							fluid
						/>
					</Carousel.Item>
				);
			});
		return <Carousel>{sliderImages}</Carousel>;
	}
}
