import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
// import Buttons from './buttons';

class SimpleCardDark extends Component {
	state = {
	};
	render() {
		return (
			<Card className="bg-dark text-white card-style medium-card">
				<Card.Img src={this.props.src} alt="Card image" className="card-image medium-card-image" />
                <Card.ImgOverlay className="simple-overlay">
                    <div className="simple-content">
					<Card.Text className="simple-text text-black">
						{this.props.text}
					</Card.Text>
                    {/* <Buttons buttonLabel="Shop" buttonLink="/shop" class="button-style button-dark"></Buttons> */}
                    </div>
				</Card.ImgOverlay>
			</Card>
		);
	}
}

export default SimpleCardDark;
