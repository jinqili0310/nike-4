import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
// import Buttons from './buttons';

class IntroCardDark extends Component {
	state = {
	};
	render() {
		return (
			<Card className="bg-dark text-white card-style medium-card">
				<Card.Img src={this.props.src} alt="Card image" className="card-image medium-card-image" />
				<Card.ImgOverlay>
					<Card.Title className="intro-title text-black">{this.props.title}</Card.Title>
					<Card.Title className="intro-title text-black intro-title-more">{this.props.titleMore}</Card.Title>
					<Card.Text className="intro-text text-black">
						{this.props.text}
					</Card.Text>
					{/* <Buttons buttonLabel="Shop" buttonLink="/shop" class="button-style button-dark"></Buttons> */}
				</Card.ImgOverlay>
			</Card>
		);
	}
}

export default IntroCardDark;
