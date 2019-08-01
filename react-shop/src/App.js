import React, {Component}  from 'react';
import Products from "./components/products"

class App extends Component {
	state = {
		products: [
			{id: 1, inShoppingCart: 0, price: 200, name: "Caribena Versicolor"},
			{id: 2, inShoppingCart: 0, price: 100, name: "Pterinohilus Murinus Usambara"},
			{id: 3, inShoppingCart: 0, price: 150, name: "Chromatopelma Cyanopubescens"},
			{id: 4, inShoppingCart: 0, price: 300, name: "Poecilotheria Metallica"},
			{id: 5, inShoppingCart: 0, price: 250, name: "Monocentropus Balfouri"},
			{id: 6, inShoppingCart: 0, price: 100, name: "Jumping Spider"}
		]
	}
	render(){
		return (
			<React.Fragment>
				<nav class="navbar navbar-light bg-light">
					<span class="navbar-brand mb-0 h1">ALLEDROGO</span>
				</nav>
				<div className="container">
					<Products products={this.state.products}/>
				</div>
			</React.Fragment>
		);
	}
}

export default App;
