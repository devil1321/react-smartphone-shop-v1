import React, { Component } from 'react'

export default class CartColumns extends Component {
  render() {
    return (
        <div className="container-fluid p-0 text-center">
                <div className="row d-none  d-lg-flex justify-content-around align-items-center text-uppercase">
                    <div className="col-2">
                        <h6>Products</h6>
                    </div>
                    <div className="col-2">
                        <h6>Name Of Product</h6>
                      
                    </div>
                    <div className="col-2">
                        <h6>Price</h6>
                     
                    </div>
                    <div className="col-2">
                        <h6>Quantity</h6>
                      
                    </div>
                    <div className="col-2">
                        <h6>Remove</h6>
                       
                    </div>
                    <div className="col-2">
                        <h6>Total</h6>
                    </div>
                </div>
            </div>
    )
  }
}
