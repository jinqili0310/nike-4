import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

class Footer extends Component {
	state = {};
	render() {
		return (
			<React.Fragment>
				{/* <Row lg={3} className="footer-area">
					<Col>
						<p className="footer-text">GIFT CARDS</p>
						<p className="footer-text">PROMOTIONS</p>
						<p className="footer-text">FIND A STORE</p>
						<p className="footer-text">SIGN UP FOR EMAIL</p>
						<p className="footer-text">BECOME A MEMBER</p>
						<p className="footer-text">SEND US FEEDBACK</p>
					</Col>
					<Col>
						<p className="footer-text">GET HELP</p>
						<p className="footer-grey">Order Status</p>
						<p className="footer-grey">Shipping and Delivery</p>
						<p className="footer-grey">Returns</p>
						<p className="footer-grey">Payment Options</p>
						<p className="footer-grey">Gift Card Balance</p>
						<p className="footer-grey">Contact Us</p>
					</Col>
					<Col>
						<p className="footer-text">ABOUT NIKE</p>
						<p className="footer-grey">News</p>
						<p className="footer-grey">Careers</p>
						<p className="footer-grey">Investors</p>
						<p className="footer-grey">Purpose</p>
						<p className="footer-grey">Sustainability</p>
						<p className="footer-grey">CA Supply Chains Act</p>
					</Col>
				</Row> */}
                <Row lg={2} className="footer-last">
                    <Col className="footer-last-left">
                        <FontAwesomeIcon className="footer-last-white" icon={faMapMarkerAlt}></FontAwesomeIcon>
                        <span className="footer-last-white">&nbsp; United States &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                        <span className="footer-last-grey">© 2020 Nike, Inc. All Rights Reserved</span>
                    </Col>
                    <Col className="footer-last-right">
                        <span className="footer-last-grey">Guides</span>
                        <span className="footer-last-grey">Terms of Sale</span>
                        <span className="footer-last-grey">Terms of Use</span>
                        <span className="footer-last-grey">Nike Privacy Policy</span>
                    </Col>
                </Row>
			</React.Fragment>
		);
	}
}

export default Footer;
