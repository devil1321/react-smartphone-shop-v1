import React, { Component } from 'react'
import {Link} from "react-router-dom"
import styled from "styled-components"
import {ProductConsumer} from "./context"
import Title from "./Title"
import {ButtonContainer} from "./Button"
export default class Details extends Component {
    render() {
        return (
            <ProductConsumer>
                {(data) =>{
                   const {id,img,price,company, inCart, info} = data.detailProduct
                   return(
                       <DetailStyle>
                            <div className="container p-3">
                            <Title name="Best" title="Smartphones" />
                                 <div className="row d-block d-md-flex justify-content-around align-items-center">
                                    <img className="img-fluid w-100 mx-auto col-md-6" src={process.env.PUBLIC_URL + img}/>
                                    <div className="text-container mx-auto col-md-6 ">
                                        <h1>Product Nr {id}</h1>
                                        <h3>Made By : <span>{company}</span></h3>
                                        <h4 className="font-weight-bold">Price : {price}$</h4>
                                        <p className="text-muted">{info}</p>
                                        <div className="buttons d-flex">
                                        <Link to="/">
                                            <ButtonContainer className="btn-left mr-2">Back To Products</ButtonContainer>
                                        </Link>
                                        <ButtonContainer cart onClick={()=>{
                                                data.addToCart(id)
                                                // data.openModal(id)
                                                }} 
                                            className="btn-right mb-2" disabled={inCart === false ? false : true}>{inCart === true ? "In Cart" : "Add To Cart"}</ButtonContainer>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </DetailStyle>
                   )
                }}
            </ProductConsumer>
        )
    }
}
const DetailStyle= styled.div`
    .btn-right{
        color:whitesmoke;
        padding:5px 15px;
        transition: all 1s ease;
        &:hover{
            background-color:#3fa5eb;
        }
    }
    .btn-left{
        background-color:red;
        color:whitesmoke;
        height:35px;
        padding:5px 10px;
        transition: all 1s ease;
        &:hover{
            background-color:#eb5e5e
        }
    }

`
