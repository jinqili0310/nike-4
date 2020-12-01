import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
// import Buttons from './buttons';

class IntroCard extends Component {
	state = {
	};
	render() {
		return (
			<Card className="bg-dark text-white card-style large-card">
				<Card.Img src={this.props.src} alt="Card image" className="card-image large-card-image" />
				<Card.ImgOverlay>
					<Card.Title className="intro-title text-light">{this.props.title}</Card.Title>
					<Card.Title className="intro-title text-light intro-title-more">{this.props.titleMore}</Card.Title>
					<Card.Text className="intro-text text-light">
						{this.props.text}
					</Card.Text>
					{/* <Buttons buttonLabel="Shop" buttonLink="/shop" class="button-style button-white"></Buttons> */}
				</Card.ImgOverlay>
			</Card>
		);
	}
}

export default IntroCard;
