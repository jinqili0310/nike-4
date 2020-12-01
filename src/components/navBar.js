/*
 * @Author: Jinqi Li
 * @Date: 2020-07-20 21:27:54
 * @LastEditors: Jinqi Li
 * @LastEditTime: 2020-12-01 03:15:47
 * @FilePath: /nike-2/src/components/navBar.js
 */
import React, { Component } from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Form } from 'react-bootstrap';
import icon from '../assets/images/nike-logo.png';

class NavBar extends Component {
	state = {
		isFocused: false
	};

	handleFocus = () => {
		console.log('focus');
		this.setState((e) => ({
			isFocused: !e.isFocused
		}));
	};

	render() {
		return (
			<Navbar className="nav-style" collapseOnSelect expand="lg" fixed="top">
				<Navbar.Brand href="/nike-4/#/" className="nav-brand">
					<img alt="" src={icon} className="nav-icon" />
				</Navbar.Brand>
				<Nav className="nav-link-group">
					<span className="nav-link">NIKE</span>
				</Nav>
				{/* <Nav className="nav-link-group">
					<Nav.Link
						href="/shop"
						onFocus={this.handleFocus}
						className={this.state.isFocused ? 'nav-link link-focus' : 'nav-link'}
					>
						NEW RELEASES
					</Nav.Link>
					<Nav.Link
						href="/shop"
						onFocus={this.handleFocus}
						className={this.state.isFocused ? 'nav-link link-focus' : 'nav-link'}
					>
						MEN
					</Nav.Link>
					<Nav.Link
						href="/shop"
						onFocus={this.handleFocus}
						className={this.state.isFocused ? 'nav-link link-focus' : 'nav-link'}
					>
						WOMEN
					</Nav.Link>
					<Nav.Link
						href="/shop"
						onFocus={this.handleFocus}
						className={this.state.isFocused ? 'nav-link link-focus' : 'nav-link'}
					>
						KIDS
					</Nav.Link>
					<Nav.Link
						href="/shop"
						onFocus={this.handleFocus}
						className={this.state.isFocused ? 'nav-link link-focus' : 'nav-link'}
					>
						CUSTOMIZE
					</Nav.Link>
					<Nav.Link
						href="/shop"
						onFocus={this.handleFocus}
						className={this.state.isFocused ? 'nav-link link-focus' : 'nav-link'}
					>
						SALE
					</Nav.Link>
				</Nav> */}
				<Form inline className="nav-form">
					{/* <FormControl type="text" placeholder="Search" className="mr-sm-2" />
								<Button variant="outline-primary">Search</Button> */}
				</Form>
			</Navbar>
		);
	}
}

export default NavBar;
