import React, { Component } from 'react'
import {Link} from "react-router-dom"
import styled from "styled-components"
import {ProductConsumer} from "./context"
import {ButtonContainer} from "./Button"
export default class Details extends Component {
    render() {
        return (
            <ProductConsumer>
                {(data) =>{
                   const {closeModal} = data
                   const {id,title,img,price,company, inCart} = data.modalProduct
                   return(
                       <ModalStyle>
                            <div className={data.modalOpen ? "container-fluid p-0 d-flex d-md-block justify-content-center align-items-center" : "container-fluid p-0 d-none" }>
                                 <div className="row bg-light card mx-auto">
                                    <img className="img-fluid w-100" src={process.env.PUBLIC_URL + img}/>
                                    <div className="text-container mx-auto p-3">
                                        <h2 className="font-weight-bold">{title}</h2>
                                        <h4>Made By : <span>{company}</span></h4>
                                        <h4 className="font-weight-bold">Price : {price}$</h4>
                                        <div className="buttons d-flex">
                                        <ButtonContainer onClick={()=>{closeModal()}} className="btn-left mr-1">Back To Products</ButtonContainer>
                                        <ButtonContainer cart onClick={()=>{data.addToCart(id)}} className="btn-right mr-1" disabled={inCart === false ? false : true}>{inCart === true ? "In Cart" : "Add To Cart"}</ButtonContainer>
                                        <Link to="/cart">
                                            <ButtonContainer  onClick={()=>{closeModal()}} className="btn-cart">Go To Cart</ButtonContainer>
                                        </Link>
                                        </div>
                                    </div>
                                
                            </div>
                            </div>
                        </ModalStyle>
                   )
                }}
            </ProductConsumer>
        )
    }
}
const ModalStyle= styled.div`
    .container-fluid{
        position:fixed;
        top:0px;
        left:0px;
        right:0px;
        bottom:0px;
        width:100%;
        height:100%;
        z-index:2;
        background-color:rgba(0,0,0,0.8)
    }
    
    .card{
        position:relative;
        top:5%;
        width:330px;
    }
      span{
        color:red;
    }
    button{
        font-size:12px !important;
    }
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
        padding:10px 10px;
        transition: all 1s ease;
        &:hover{
            background-color:#eb5e5e
        }
    }
    .btn-cart{
        background-color:skyblue;
        color:whitesmoke;
        padding:10px 10px;
        transition: all 1s ease;
        &:hover{
            background-color:#3fa5eb;
        }
    }
`
