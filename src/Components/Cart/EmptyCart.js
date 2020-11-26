import React, { Component } from 'react'

export default class EmptyCart extends Component {
  render() {
    return (
      <div className="mt-5">
        <div className="col-10 mx-auto text-center text-title">
            <h1>Your Cart Is Currently Empty</h1>
        </div>
      </div>
    )
  }
}
