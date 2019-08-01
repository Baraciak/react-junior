import React, { Component } from 'react';

class Product extends Component {
    render() { 
        const {product} = this.props;
        return (  
                <tr>
                    <th>{product.id}</th>
                    <td>{product.name}</td>
                    <td>{product.price}</td>
                    <td>
                        <span className="badge badge-warning badge-pill">{product.inShoppingCart}</span>
                        <button className="btn btn-success m-2"> + </button>
                        <button className="btn btn-danger m-2"> - </button>
                    </td>
                    <td><button className="btn btn-info m-2">To cart</button></td>
                </tr>
        );
    }
}
 
export default Product;