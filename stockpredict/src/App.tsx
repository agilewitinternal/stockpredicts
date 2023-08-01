import React from 'react';
import GlobalStyle from './globalStyles';
import { BrowserRouter as Router, Routes as Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';

//Pages

import StockList from './components/Stocklist/StockList';
import Hero from './components/Hero/Hero';

function App() {
	return (
		<Router>
			<GlobalStyle />
			<Navbar />
			<Switch>
				<Route path="/"  element={<Hero />} />
				<Route path="/stockList" element={<StockList />} />
			</Switch>
		</Router>
	);
}

export default App;