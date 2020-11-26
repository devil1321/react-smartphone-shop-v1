import React, { Component } from 'react'
import styled from 'styled-components'
import Title from "./Title"
import Product from "./Product"
import { storeProducts } from './data';
import {ProductConsumer} from "./context"
export default class ProductList extends Component {
     
     render() {
         return (
            <ProductsStyle>
            <div className="container">
            <Title name="Our" title="Products"/>
               <div className="row product-container d-flex justify-content-around align-items-center">
                    <ProductConsumer>
                        {(data)=>{
                            return(
                                data.products.map(product => {
                                    return  <Product 
                                                key={product.id} 
                                                product={product}
                                            />
                                })
                            )
                        }}
                    </ProductConsumer>
               </div>
            </div>
            </ProductsStyle>
        )
    }
}
const ProductsStyle = styled.div`
 
`