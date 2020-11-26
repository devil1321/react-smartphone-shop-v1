import React, { Component } from 'react'
import {ProductConsumer} from "../../Components/context"
import Title from "../Title"
import CartColumns from "./CartColumns"
import CartList from "./CartList"
import CardTotals from "./CardTotals"
import EmptyCart from "./EmptyCart"
export default class Cart extends Component {
    render() {
        return (
            <section>
            <ProductConsumer>
                {(data)=>{
                    const {cart} = data;
                    if(cart.length > 0){
                         return  (
                            <React.Fragment>
                                <Title name="Your" title="Cart" />
                                <CartColumns />
                                <CartList data={data}/>
                                <CardTotals data={data} />
                            </React.Fragment>
                         )
                    } else{
                        return <EmptyCart />
                        
                    }
                }}
            </ProductConsumer>
            </section>
        )
    }
}
