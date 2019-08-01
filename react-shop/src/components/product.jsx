import React, { Component } from 'react';

class Product extends Component {

    render() { 
        const {product, onIncrement, onDecrement, onAddToCart} = this.props;
        return (  
                <tr>
                    <th>{product.id}</th>
                    <td>{product.name}</td>
                    <td>{product.price} PLN</td>
                    <td>
                        <span className="badge badge-warning badge-pill">{product.count}</span>
                        <button onClick={() => onIncrement(product.id)} className="btn btn-success m-2"> + </button>
                        <button onClick={() => onDecrement(product.id)} className="btn btn-danger m-2"> - </button>
                    </td>
                    <td><button onClick={() => onAddToCart(product.id)} className="btn btn-info m-2">To cart</button></td>
                </tr>
        );
    }
}
 
export default Product;