import React, { Component } from "react";
import { BrowserRouter as Redirect} from "react-router-dom";

class Payment extends Component {
    state={
        name: '',
        surname: ''
    }

    onNameInput = (e) =>{
        this.setState({name: e.target.value});
    }

    onSurnameInput = (e) =>{
        this.setState({surname: e.target.value});
    }

    render() {
        const {name, surname} = this.state;
        return (
            <div className="container mt-5">
                <form action={"/home" + "/" +  name + "/" + surname}>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label htmlFor="name">Name</label> 
                            <input onChange={(e) =>this.onNameInput(e)} type="text" className="form-control" id="name" placeholder="Name" required/>
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="inputPassword4">Surname</label>
                            <input onChange={(e) =>this.onSurnameInput(e)} type="text" className="form-control" id="password" placeholder="Surname" required/>
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="inputAddress">Address</label>
                        <input type="text" className="form-control" id="inputAddress" placeholder="Broke Street 22" required/>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label htmlFor="inputCity">City</label>
                            <input type="text" className="form-control" id="inputCity" required/>
                        </div>
                        <div className="form-group col-md-2">
                            <label htmlFor="inputZip">Zip</label>
                            <input type="text" className="form-control" id="inputZip" required/>
                        </div>
                    </div>
                    <Redirect push to={"/home/"}></Redirect>
                    <button type="submit" className="btn btn-info">
                        Submit your order
                    </button>
                </form>
            </div>
        );
    }
}

export default Payment;
