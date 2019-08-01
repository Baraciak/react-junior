import React, { Component } from "react";

class Payment extends Component {
    render() {
        return (
            <div className="container mt-5">
                <form action="/">
                    <div class="form-row">
                        <div class="form-group col-md-6">
                            <label for="inputEmail4">Name</label> 
                            <input type="email" class="form-control" id="email" placeholder="Name"/>
                        </div>
                        <div class="form-group col-md-6">
                            <label for="inputPassword4">Surname</label>
                            <input type="password" class="form-control" id="password" placeholder="Surname"/>
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="inputAddress">Address</label>
                        <input type="text" class="form-control" id="inputAddress" placeholder="Broke Street 22" />
                    </div>
                    <div class="form-row">
                        <div class="form-group col-md-6">
                            <label for="inputCity">City</label>
                            <input type="text" class="form-control" id="inputCity"/>
                        </div>
                        <div class="form-group col-md-2">
                            <label for="inputZip">Zip</label>
                            <input type="text" class="form-control" id="inputZip"/>
                        </div>
                    </div>
                    <button type="submit" class="btn btn-info">
                        Submit your order
                    </button>
                </form>
            </div>
        );
    }
}

export default Payment;
