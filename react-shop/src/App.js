import React, {Component}  from 'react';
import Products from "./components/products"
import CartModal from "./components/cartmodal"

class App extends Component {
	state = {
		products: [
			{id: 1, inCart: 0, count: 0, price: 200, name: "Caribena Versicolor"},
			{id: 2, inCart: 0, count: 0, price: 100, name: "Pterinohilus Murinus Usambara"},
			{id: 3, inCart: 0, count: 0, price: 150, name: "Chromatopelma Cyanopubescens"},
			{id: 4, inCart: 0, count: 0, price: 300, name: "Poecilotheria Metallica"},
			{id: 5, inCart: 0, count: 0, price: 250, name: "Monocentropus Balfouri"},
			{id: 6, inCart: 0, count: 0, price: 100, name: "Jumping Spider"}
		]
	}

	getCartSum(){
		let cartSum = 0;
		this.state.products.map(p => {cartSum += p.inCart;})
		return cartSum;
	}	

		

	render(){
		return (
			<React.Fragment>
				<nav className="navbar navbar-light bg-light">
					<span className="navbar-brand mb-0 h1">ALLEDROGO</span>
					<button onClick={() => <CartModal products={this.state.products}/>} className="mr-5 btn btn-secondary" type="button" data-toggle="modal" data-target="#cart-modal">
						ShoppingCart:  
						<span className="badge badge-warning badge-pill ml-1">{this.getCartSum()}</span>
					</button>
				</nav>
				<div className="container">
					<Products products={this.state.products}
							onIncrement={this.handleIncrement}
							onDecrement={this.handleDecrement}
							onAddToCart={this.handleAddToCart}/>

				</div>
			</React.Fragment>
		);
	}


	handleIncrement = (productId) =>{
		const products = this.state.products.filter(p => {
			if(p.id === productId) p.count++;
			return p;
		})
		this.setState({products});
	}

	handleDecrement = (productId) =>{
		const products = this.state.products.filter(p => {
			if(p.id === productId && p.count !== 0) p.count--;
			return p;
		})
		this.setState({products});
	}

	handleAddToCart = (productId) =>{
		const products = this.state.products.filter(p => {
			if(p.id === productId) p.inCart = p.count;
			return p;
		})
		this.setState({products});
	}
}

export default App;
