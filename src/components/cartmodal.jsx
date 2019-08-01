import React from 'react';
import ReactDOM from 'react-dom';


const CartModal = (props) => {
    const modalContent = 
    <table className="table">
        <thead className="thead-light">
            <tr>
                <th scope="col">Name</th>
                <th scope="col">Price</th>
                <th scope="col">In Cart</th>
            </tr>
        </thead>
        <tbody>
            {props.products.map(p => {
                if(p.inCart > 0){
                    return (
                        <tr key={p.id}>
                            <td>{p.name}</td>
                            <td>{p.price}</td>
                            <td>{p.inCart} Item/s</td>
                        </tr>
                    )
                }return null})
            }
        </tbody>
    </table>

    ReactDOM.render(modalContent, document.querySelector(".modal-body"));


}
 
export default CartModal;