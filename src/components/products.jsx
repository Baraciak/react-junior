import React, { Component } from 'react';
import Product from "./product"

class Products extends Component {
    state = {
        count: 0
    }

    render() { 
        const {onIncrement, onDecrement, onAddToCart} = this.props;
        return ( 
            <table className="table">
                <thead className="thead-light">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Price</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">#Cart#</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.products.map(product => 
                    <Product key={product.id}
                            product={product}
                            onIncrement={onIncrement}
                            onDecrement={onDecrement}
                            onAddToCart={onAddToCart}/>)}
                </tbody>
            </table>
        );
    }
}
 
export default Products;