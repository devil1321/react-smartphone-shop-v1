import React, { Component } from 'react'
import {ButtonContainer} from "../Button"
import styled from "styled-components"
export default function CartItem({item,data}){
    const { id, title, img, price, total, count} = item
            return (
              <CartItemStyle>
                <div className="container-fluid p-0 text-center my-2">
                  <div className="row d-block d-md-flex justify-content-center align-items-center">
                  <div className="col-md-2 col-10 mx-auto my-2">
                      <img
                        className="img-fluid w-25"
                        src={process.env.PUBLIC_URL + img}
                        alt="Product Image"
                      />
                    </div>
                    <div className="col-md-2 col-10 mx-auto my-2">
                      <h6>{title}</h6>
                    </div>
                    <div className="col-md-2 col-10 mx-auto my-2">
                      <h6>{price}$</h6>
                    </div>
                    <div className="col-md-2 col-10 mx-auto my-2">
                      <div className="buttons d-flex justify-content-center">
                        <ButtonContainer className="minus mx-2" onClick={()=>{data.decrement(id)}}>-</ButtonContainer>
                        <ButtonContainer className="number mx-2">{count}</ButtonContainer>
                        <ButtonContainer className="plus mx-2" onClick={()=>{data.increment(id)}} >+</ButtonContainer>
                      </div>
                    </div>
                    <div className="col-md-2 col-10 mx-auto my-2">
                      <i className="fa fa-trash f1-1x" onClick={()=>{data.removeItem(id)}}></i>
                    </div>
                    <div className="col-md-2 col-10 mx-auto my-2">
                      <h6 className="font-weight-bold">Item Total: {total}$</h6>
                    </div>
                  </div>
                </div>
              </CartItemStyle>
            )
}
  const CartItemStyle = styled.div`
    button {
      border-bottom: 1px solid black;
      border-radius: 0px;
      border-color: gray;
    }
    i{
        color:orangered;
        &:hover{
            cursor:pointer;
        }
    }
    .minus:hover{
        color:red;
    }
    .number:hover{
        color:black;
    }
    .plus:hover{
        color:green;
    }
    
  `;