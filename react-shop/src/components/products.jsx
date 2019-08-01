import React, { Component } from 'react';
import Product from "./product"

class Products extends Component {

    render() { 
        return ( 
            <table class="table">
                <thead class="thead-light">
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
                    <Product product={product}/>)}
                </tbody>
            </table>
        );
    }
}
 
export default Products;