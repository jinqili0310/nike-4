/*
 * @Author: Jinqi Li
 * @Date: 2020-07-20 15:07:06
 * @LastEditors: Jinqi Li
 * @LastEditTime: 2020-12-01 03:29:17
 * @FilePath: /nike-4/src/App.js
 */
import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {  Switch, Route, Redirect, HashRouter } from 'react-router-dom';
import Home from './components/home';
// import Shop from './components/shop';

function App() {
	return (
		<div className="navRoute">
			<HashRouter basename="/nike-4">
				<Switch>
					<Route path="/" exact component={Home} />
					{/* <Route path="/shop" component={Shop} /> */}
					<Redirect to="/" />
				</Switch>
			</HashRouter>
		</div>
	);
}

export default App;
