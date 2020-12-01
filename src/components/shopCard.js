import React, { Component } from 'react';
import { Card } from 'react-bootstrap';

class ShopCard extends Component {
	state = {};
	render() {
		return (
			<Card className="product-card">
				<Card.Img variant="top" src={this.props.src} className="shop-card-image" />
				<Card.Body className="product-card-body">
					<Card.Title className="product-card-title">{this.props.title}</Card.Title>
					<Card.Title className="product-card-price">{this.props.price}</Card.Title>
					<br />
					<Card.Text className="product-card-text">{this.props.text}</Card.Text>
				</Card.Body>
			</Card>
		);
	}
}

export default ShopCard;