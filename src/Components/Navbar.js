import React, { Component } from 'react'
import { Link } from "react-router-dom";
import styled from "styled-components"
import {ProductConsumer} from "./context"
import Product from './Product';
export default class Navbar extends Component {
        render() {
        return (
            <NavbarStyle>
                <React.Fragment>
                    <nav className="navbar navbar-expand align-items-center">   
                        <Link to="/cart">
                        <ProductConsumer>
                            {(data)=>{
                                return(
                                    <span className="cart ml-5"><i className="icon fa fa-shopping-cart"></i>{data.count}</span>
                                )
                            }}
                        </ProductConsumer>
                        </Link>
                        <Link className="navbar-brand ml-auto" to="/">
                            <img width="100" src={process.env.PUBLIC_URL + "./logo.jpg" } alt=""/>
                        </Link>
                        <ul className="navbar-nav jusitfy-content-end mr-5">
                                <li className="nav-item">
                                    <Link to="/" className="nav-link">Products</Link>
                                </li>
                        </ul>
                    </nav>
                    <hr></hr>
                </React.Fragment>
            </NavbarStyle>
            
        )
    }
}

const NavbarStyle = styled.div`
    nav{
        height:90px;
    }
    a{
        text-decoration:none;
    }
    .navbar{
        position:relative;
        padding:0px;
        .cart{
        position:relative;
        display:flex;
        align-items:center;
        height:60px;
        font-size:45px;
        color:orangered;
        .icon{
            position:relative;
            margin-right:5px;
            color:orangered;
        }
        
    }
    .navbar-nav{
        position:relative;
        .nav-link{
         position:relative;
         color:black;
         font-weight:bold;
         font-size:19px;
        }
    }
}
 

`