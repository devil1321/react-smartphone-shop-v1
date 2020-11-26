import React, { Component } from 'react'
import {Link} from "react-router-dom"
import styled from 'styled-components'
import { ProductConsumer } from "./context"
import PropTypes from "prop-types"
import { ButtonContainer } from './Button'
export default class Product extends Component {
    constructor(props){
        super()
    }
    render() {
        return(
            <ProductConsumer>
            {(data)=>{
            const {openModal} = data
            const {id, img, title, company, price, inCart} = this.props.product
                return (
                    <ProductStyle>
                    <div className="row">
                    <div className="container mt-3" onClick={(e) => {
                            data.handleDetail(id)
                        }}>
                       <div className="card border-0 p-2">
                       <Link to="/details">
                           <img className="card-img-top" src={process.env.PUBLIC_URL + img} alt="" />
                        </Link>
                            <button onClick={(e)=>{
                                data.addToCart(id)
                            }} 
                            className="btn-cart" disabled={inCart ? true : false}><i className="fa fa-cart-plus fa-1x mr-2"></i>{inCart === true ? "In Cart" : "Empty"}</button>
                           <div className="card-body">
                                <h4>{title}</h4>
                                <h3>{company}</h3>
                                <div className="d-flex justify-content-between">                                    
                                <ButtonContainer onClick={()=>openModal(id)} className="btn-left mr-2">{company}</ButtonContainer>
                                <ButtonContainer className="btn-right ml-2">{price}$</ButtonContainer>
                                </div>
                           </div>
                       </div>
                    </div>
                    </div>
                </ProductStyle>
            )}}</ProductConsumer>
        )
    }
}

Product.propTypes = {
    product:PropTypes.shape({
        id:PropTypes.number,
        img:PropTypes.string,
        title:PropTypes.string,
        price:PropTypes.number,
        inCart:PropTypes.bool
    }).isRequired
}



const ProductStyle = styled.div`
   .card{
        position:relative;
        overflow:hidden;
        width:260px;
        height:350px;
        transition:all .5s ease;
        img{
            transition: all 1s ease;
            height:200px;
           
        }
        &:hover{
            box-shadow: 0px 0px 1px black;
            transform:translateY(-10px);
            .btn-cart{
                transform:translateX(1%);
            }
            img{
                transform:scale(105%);
            }
        }
    }

    .btn-cart{
        position:absolute;
        z-index:2;
        right:0px;
        top:46.5%;
        color:white;
        padding:5px 10px;
        background-color:skyblue;
        font-size:19px;
        border:none;
        border-top-left-radius:3px;
        font-weight:bold;
        transition: all 1s ease;
        transform:translateX(100%);
            i{
                color:orangered;
            }
            &:hover{
                background-color:#3fa5eb;
            }
        }
    h1{
        font-size:30px;
    }
    h3{
        font-size:20px;
        color:orangered;
    }
    .btn-left{
        background-color:red;
        color:whitesmoke;
        transition: all 1s ease;
        &:hover{
            background-color:#eb5e5e
        }
    }
    .btn-right{
        background-color:skyblue;
        color:whitesmoke;
        padding:0px 20px;
        transition: all 1s ease;
        &:hover{
            background-color:#3fa5eb;
        }
    }
`