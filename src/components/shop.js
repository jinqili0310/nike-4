import React, { Component } from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
// import Buttons from './buttons';
import NavBar from './navBar';
import Footer from './footer';
import ShopCard from './shopCard';
import shopOne from '../assets/images/air-force-1-07-mens-shoe-g1N5BF.jpg';
import shopTwo from '../assets/images/sb-nyjah-free-2-skate-shoe-Q6fg7s.jpg';
import shopThree from '../assets/images/sb-zoom-stefan-janoski-slip-rm-t-skate-shoe-1JtX2S.jpg';
import shopFour from '../assets/images/sportswear-womens-coveralls-dhw8hH.jpg';
import shopFive from '../assets/images/superrep-go-mens-training-shoe-19sK4X.jpg';
import shopSix from '../assets/images/jordan-air-mens-washed-crew-6vxjrG.jpg';
import shopSeven from '../assets/images/tech-fleece-mens-joggers-4x29ft.jpg';
import shopEight from '../assets/images/blazer-77-vintage-mens-shoe-zKwHc5.jpg';
import shopNine from '../assets/images/throwback-mens-basketball-pullover-hoodie-n6WcnX.jpg';

class Shop extends Component {
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
					<Row lg={3} className="product-card-group shop-area shop-area-top">
						<Col className="product-card-left">
                            <ShopCard
                                src={shopOne}
                                title="Nike Air Force 1 '07"
                                price="$90"
                                text="Men's Shoe" />
						</Col>
						<Col className="product-card-mid">
                            <ShopCard
                                src={shopTwo}
                                title="Nike SB Nyjah Free 2"
                                price="$95"
                                text="Skate Shoe" />
						</Col>
						<Col className="product-card-right">
							<ShopCard
								src={shopThree}
								title="Nike SB Zoom Stefan Janoski Slip RM T"
								price="$75"
								text="Skate Shoe"
							/>
						</Col>
                    </Row>
                    <Row lg={3} className="product-card-group shop-area">
						<Col className="product-card-left">
                            <ShopCard
                                src={shopFour}
                                title="Nike Sportswear"
                                price="$100"
                                text="Women's Coveralls" />
						</Col>
						<Col className="product-card-mid">
                            <ShopCard
                                src={shopFive}
                                title="Nike SuperRep Go"
                                price="$100"
                                text="Men's Training Shoe" />
						</Col>
						<Col className="product-card-right">
							<ShopCard
								src={shopSix}
								title="Jordan Air"
								price="$45"
								text="Men's Washed Crew"
							/>
						</Col>
                    </Row>
                    <Row lg={3} className="product-card-group shop-area">
						<Col className="product-card-left">
                            <ShopCard
                                src={shopSeven}
                                title="Nike Tech Fleece"
                                price="$110"
                                text="Men's Joggers" />
						</Col>
						<Col className="product-card-mid">
                            <ShopCard
                                src={shopEight}
                                title="Nike Blazer '77 Vintage"
                                price="$100"
                                text="Men's Shoe" />
						</Col>
						<Col className="product-card-right">
							<ShopCard
								src={shopNine}
								title="Nike Throwback"
								price="$85"
								text="Men's Basketball Pullover Hoodie"
							/>
						</Col>
					</Row>
					<Footer />
				</Container>
			</React.Fragment>
		);
	}
}

export default Shop;
