import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

class Buttons extends Component {
	state = {};
	render() {
		return (
			<Button variant="light" className={this.props.class} href={this.props.buttonLink}>
				{this.props.buttonLabel}
			</Button>
		);
	}
}

export default Buttons;
