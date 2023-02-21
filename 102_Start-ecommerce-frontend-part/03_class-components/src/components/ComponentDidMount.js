import axios from "axios";
import React, { Component } from "react";
import { Card, Row, Col, Button } from "react-bootstrap";
import ImageSlickSliderComponent from "./ImageSlickSliderComponent";
export default class componentDidMount extends Component {
	constructor(props) {
		super(props);
		this.state = {
			products: [],
		};
	}

	//componentWillMount
	componentDidMount() {
		// API calls
		axios
			.get("https://dummyjson.com/products")
			.then((res) => {
				this.setState({
					products: res.data.products,
				});
			})
			.catch((err) => {
				alert(err);
			});
	}

	render() {
		const ProductList = this.state.products.map((item, i) => {
			return (
				<Col key={i} className='mb-4' xs={6} md={3}>
					<Card style={{ width: "18rem", margin: "10px" }}>
						<ImageSlickSliderComponent Images={item.images} />
						<Card.Body>
							<Card.Title>{item.title}</Card.Title>
							<Card.Text>{item.description}</Card.Text>
							<Card.Title>${item.price}</Card.Title>
							<Button
								variant='primary'
								style={{ width: "45%", float: "left" }}
							>
								Buy
							</Button>
							<Button
								variant='secondary'
								style={{ width: "45%", float: "right" }}
							>
								Add to Cart
							</Button>
						</Card.Body>
					</Card>
				</Col>
			);
		});
		return <Row className='four-column-layout'>{ProductList}</Row>;
	}
}
