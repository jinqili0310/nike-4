import React, { Component } from 'react';
import { Form } from 'react-bootstrap';

class ProductOneText extends Component {
	state = {};
	render() {
		return (
			<Form.Group className="intro-text-one">
				<Form.Row>
					<Form.Label>
						<b>A LEGEND AMONG LEGENDS.</b>
					</Form.Label>
				</Form.Row>
                {/* <br /> */}
                <Form.Row>
					<Form.Label>
						Nike's first lifestyle-tuned Max Air unit meets the softest, smoothest and most resilient foam yet in the Nike Air Max 270 React SE. The design draws inspiration from the Air Max pantheon, showcasing Nike's greatest innovation through micro-textured finishes that create a sensation of Air you can touch.
					</Form.Label>
                </Form.Row>
                <br />
				<Form.Row>
					<Form.Label>
						<b>Benefits</b>
					</Form.Label>
				</Form.Row>
				<Form.Row>
					<Form.Label>
                        <ul>
                            <li>Textured textiles on the upper create a sensation of Air you can touch.</li>
                            <li>The colors are inspired by the concepts of future sense discovery and space exploration, providing a base for the new sensory fabrics.</li>
                            <li>The 270 unit delivers unrivaled, all-day comfort.</li>
                            <li>Nike React technology delivers an extremely smooth ride, reduces weight and adds flexibility.</li>
                            <li>The no-sew synthetic skins on the upper provide a lightweight feel and flexible fit.</li>
                            <li>The soft, padded collar with low cut design feels comfortable.</li>
                        </ul>
					</Form.Label>
                </Form.Row>
                {/* <br /> */}
				<Form.Row>
					<Form.Label>
						<b>Product Details</b>
					</Form.Label>
                </Form.Row>
                <Form.Row>
					<Form.Label>
						<ul>
                            <li>Heel-to-toe rubber adds traction and durability</li>
                            <li>Pull tab</li>
                            <li>Shown: Midnight Navy/Flash Crimson/Hyper Pink/Black</li>
                            <li>Style: CK6929-400</li>
                        </ul>
					</Form.Label>
                </Form.Row>
			</Form.Group>
		);
	}
}

export default ProductOneText;
