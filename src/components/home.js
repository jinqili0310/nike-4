import React, { Component } from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
// import Buttons from './buttons';
import NavBar from './navBar';
import IntroCard from './introCard';
import SimpleCard from './simpleCard';
import ProductCard from './productCard';
import IntroCardDark from './introCardDark';
import SimpleCardDark from './simpleCardDark';
import BestSellers from './bestSellers';
import Footer from './footer';
import ProductOneText from './productOneText';
import ProductTwoText from './productTwoText';
import ProductThreeText from './productThreeText';
import jdiOne from '../assets/images/nike-just-do-it.jpg';
import jdiTwo from '../assets/images/nike-just-do-it-1.jpg';
import jdiThree from '../assets/images/nike-just-do-it-2.jpg';
import jdiFour from '../assets/images/nike-just-do-it-3.jpg';
import jdiFive from '../assets/images/nike-just-do-it-4.jpg';
import jdiSix from '../assets/images/nike-just-do-it-5.jpg';
import pdtOne from '../assets/images/air-max-270-react-se-womens-shoe-npb2CK.jpg';
import pdtThree from '../assets/images/air-max-90-womens-shoe-S6hW4R.jpg';
import pdtTwo from '../assets/images/joyride-dual-run-mens-running-shoe-8BGXtk.jpg';
import bbOne from '../assets/images/image1.jpg';
import bbTwo from '../assets/images/image2.jpg';
import bbThree from '../assets/images/image3.jpg';

class Home extends Component {
	state = {};
	render() {
		return (
			<React.Fragment>
				<Container className="container-style">
					<Row lg={1}>
						<Col>
							<NavBar />
						</Col>
					</Row>
					<Row lg={1} className="everyday-label">
						<Col>
							<div>
								<span className="latest-title">Everyday Essentials</span>
							</div>
						</Col>
					</Row>
					<Row lg={1} className="card-area intro-card">
						<Col className="card-col">
							<IntroCard
								src={jdiOne}
								title="NEW FOR"
								titleMore="NEXT SEASON"
								text="Must-haves for first days, first practices and more."
							/>
						</Col>
					</Row>
					<Row lg={2} className="card-area">
						<Col className="simple-card-left">
							<SimpleCard src={jdiTwo} text="All Day, Every Day Layers" />
						</Col>
						<Col className="simple-card-right">
							<SimpleCard src={jdiThree} text="The Latest Running Essentials" />
						</Col>
					</Row>
					<Row lg={1} className="latest-label">
						<Col>
							<div>
								<span className="latest-title">Latest and Greatest</span>
								{/* <Link to="/" className="latest-link">
									Shop
								</Link> */}
							</div>
						</Col>
					</Row>
					{/* <Row lg={3} className="product-card-group">
						<Col className="product-card-left">
							<ProductCard
								src={pdtOne}
								title="Nike Air Max 270 React SE"
								price="$170"
								text="Women's Shoe"
							/>
						</Col>
						<Col className="product-card-mid">
							<ProductCard
								src={pdtTwo}
								title="Nike Joyride Dual Run"
								price="$130"
								text="Men's Running Shoe"
							/>
						</Col>
						<Col className="product-card-right">
							<ProductCard src={pdtThree} title="Nike Air Max 90" price="$140" text="Women's Shoe" />
						</Col>
					</Row> */}
					<Row className="product-intro product-intro-start">
						<Col md={5} className="product-intro-image">
							<ProductCard
								src={pdtOne}
								title="Nike Air Max 270 React SE"
								price="$170"
								text="Women's Shoe"
							/>
						</Col>
						<Col md={7} className="product-intro-text">
							<ProductOneText />
						</Col>
					</Row>
					<Row className="product-intro ">
						<Col md={5} className="product-intro-image">
							<ProductCard
								src={pdtTwo}
								title="Nike Joyride Dual Run"
								price="$130"
								text="Men's Running Shoe"
							/>
						</Col>
						<Col md={7} className="product-intro-text">
							<ProductTwoText />
						</Col>
					</Row>
					<Row className="product-intro">
						<Col md={5} className="product-intro-image">
							<ProductCard
								src={pdtThree}
								title="Nike Air Max 90" price="$140" text="Women's Shoe"
							/>
						</Col>
						<Col md={7} className="product-intro-text">
							<ProductThreeText />
						</Col>
					</Row>
					<Row lg={1} className="latest-label">
						<Col>
							<div>
								<span className="latest-title">Trending Now</span>
							</div>
						</Col>
					</Row>
					<Row lg={1} className="card-area intro-card">
						<Col className="card-col">
							<IntroCardDark
								src={jdiFour}
								title="ICON CLASH"
								titleMore="COLLECTION"
								text="Bold styles with the functionality to match."
							/>
						</Col>
					</Row>
					<Row lg={1} className="latest-label">
						<Col>
							<div>
								<span className="latest-title">Featured Footwear</span>
							</div>
						</Col>
					</Row>
					<Row lg={2} className="card-area">
						<Col className="simple-card-left">
							<SimpleCard src={jdiFive} text="VaporMax 2020" />
						</Col>
						<Col className="simple-card-right">
							<SimpleCardDark src={jdiSix} text="What's New. What's Coming." />
						</Col>
					</Row>
					<Row lg={1} className="latest-label">
						<Col>
							<div>
								<span className="latest-title">Best Sellers</span>
							</div>
						</Col>
					</Row>
					<Row lg={3} className="card-area">
						<Col className="product-card-left">
							<BestSellers src={bbOne} />
						</Col>
						<Col className="product-card-mid">
							<BestSellers src={bbTwo} />
						</Col>
						<Col className="product-card-right">
							<BestSellers src={bbThree} />
						</Col>
					</Row>
					{/* <Row lg={3} className="best-label">
						<Col>
							<div>
								<span className="latest-title">Men's</span>
							</div>
						</Col>
						<Col>
							<div>
								<span className="latest-title">Women's</span>
							</div>
						</Col>
						<Col>
							<div>
								<span className="latest-title">Kids'</span>
							</div>
						</Col>
					</Row> */}
					<Footer />
				</Container>
			</React.Fragment>
		);
	}
}

export default Home;
