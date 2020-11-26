import React from 'react';
import {Link} from "react-router-dom"
import styled from "styled-components"
import {ButtonContainer} from "../Button"
export default function CardTotals({data}) {
    const {cartSubtotal,cartTax,cartTotal,clearCart} = data
        return (
            <CardTotalsStyle>
                <div className="footer text-right mt-5 mr-5">
                    <Link to="/">
                        <ButtonContainer className="btn-clear-cart my-2" onClick={()=>{clearCart()}}>Clear Cart</ButtonContainer>
                    </Link>
                    <h6 className="my-2 font-weight-bold">Subtotal : {cartSubtotal}$</h6>
                    <h6 className="my-2 font-weight-bold">Tax : {cartTax}$</h6>
                    <h6 className="my-2 font-weight-bold">Total : {cartTotal}$</h6>
                    <ButtonContainer className="btn-paypal mt-2"><i className="fa fa-paypal mx-1"></i><span>Checkout</span></ButtonContainer>
                    <p className="font-weight-bold">The safier,easier way to pay</p>
                </div>
            </CardTotalsStyle>
        )

}
const CardTotalsStyle = styled.div`
    button{
        border-radius:25px;
        padding:5px 30px;
    }
    .btn-clear-cart{
        background-color:red;
    }
    .btn-paypal{
        background-color:orangered;
        i{
            color:blue;
        }
    }
    p{
        font-size:12px;
        
    }
`