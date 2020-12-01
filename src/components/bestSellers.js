import React, { Component } from 'react';
import { Card } from 'react-bootstrap';

class BestSellers extends Component {
	state = {};
	render() {
		return (
			<Card className="product-card">
				<Card.Img variant="top" src={this.props.src} className="best-card-image" />
			</Card>
		);
	}
}

export default BestSellers;
