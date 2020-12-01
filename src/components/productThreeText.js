import React, { Component } from 'react';
import { Form } from 'react-bootstrap';

class ProductThreeText extends Component {
	state = {};
	render() {
		return (
			<Form.Group className="intro-text-three">
				<Form.Row>
					<Form.Label>
						<b>GOLD DRIP, HEEL TO TOE.</b>
					</Form.Label>
				</Form.Row>
                {/* <br /> */}
                <Form.Row>
					<Form.Label>
						Bold, vibrant, glamorous. The Nike Air Max 90 looks to ladies night outings for its inspiration. The iconic design features a gold dubrae on each lace and a chain that attaches to either shoe as an anklet. Slip the dubrae onto the chain to change up the look.
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
                            <li>Leather on the upper provides durability and a premium look.</li>
                            <li>Metallic gold dubraes on laces are detachable and attach to the chain, which you can attach to the eyelets on either shoe.</li>
                            <li>TPU elements on the sides and by the laces nod to the OG Air Max 90.</li>
                            <li>Foam midsole with Max Air unit in the heel provides lightweight cushioning.</li>
                            <li>Waffle outsole delivers heritage look with durable traction.</li>
							<li>Shown: White/Obsidian/Beyond Pink/Bright Crimson</li>
							<li>Style: CZ8099-100</li>
                        </ul>
					</Form.Label>
                </Form.Row>
			</Form.Group>
		);
	}
}

export default ProductThreeText;
