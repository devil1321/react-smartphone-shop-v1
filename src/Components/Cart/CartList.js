import React, { Component } from 'react'
import CartItem from "./CartItem"
export default function CartList({data}) {
      const {cart} = data
    return (
      <div className="container-fluid p-0">
      {cart.map(item =>{
          return  <CartItem key={item.id} item={item} data={data} />
      })}
      </div>
    )
}
