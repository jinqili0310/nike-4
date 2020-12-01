import React, { Component } from 'react';
import { Form } from 'react-bootstrap';

class ProductTwoText extends Component {
	state = {};
	render() {
		return (
			<Form.Group className="intro-text-two">
				<Form.Row>
					<Form.Label>
						<b>REVOLUTIONARY CUSHIONING THAT CONFORMS WITH EVERY STEP.</b>
					</Form.Label>
				</Form.Row>
                {/* <br /> */}
                <Form.Row>
					<Form.Label>
						The Nike Joyride Dual Run is designed to help make running feel easier and give your legs a day off. Tiny foam beads underfoot conform to your foot for cushioning that stands up to your mileage.
					</Form.Label>
				</Form.Row>
				<br />
				<Form.Row>
					<Form.Label>
						<b>Conforming Cushioning</b>
					</Form.Label>
				</Form.Row>
				<Form.Row>
					<Form.Label>
						Small foam beads are contained in 2 compartments under your heel and midfoot. They compress and adapt to your every step for better impact absorption and a stable feel.
					</Form.Label>
				</Form.Row>
				<br />
				<Form.Row>
					<Form.Label>
						<b>Enhanced Breathability</b>
					</Form.Label>
				</Form.Row>
				<Form.Row>
					<Form.Label>
						Mesh wraps your foot in lightweight support. It lets air flow freely for cooling comfort.
					</Form.Label>
				</Form.Row>
				<br />
				<Form.Row>
					<Form.Label>
						<b>Zoned Durability</b>
					</Form.Label>
				</Form.Row>
				<Form.Row>
					<Form.Label>
						Durable rubber is placed on the outside in high-wear zones. The raised nobs add traction.
					</Form.Label>
				</Form.Row>
				<br />
				<Form.Row>
					<Form.Label>
						<b>More Benefits</b>
					</Form.Label>
				</Form.Row>
				<Form.Row>
					<Form.Label>
						<ul>
							<li>
								Durable, lightweight foam cushions your forefoot to promote smooth transitions.
							</li>
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
                            <li>Weight: 8.01oz (Women’s size 8)</li>
                            <li>Offset: 11mm (Forefoot: 19mm, Heel: 30mm)</li>
                            <li>Shown: White/Metallic Silver/Aura/White</li>
                            <li>Style: CD4363-103</li>
                        </ul>
					</Form.Label>
                </Form.Row>
			</Form.Group>
		);
	}
}

export default ProductTwoText;
