import React, { Component } from 'react'
import styled from "styled-components"
export default class Footer extends Component {
    render() {
        return (
            <FooterStyle>
            <div className="row">
                <div className="footer p-2 text-center d-block d-md-flex justify-content-around align-items-center">
                    <p className="col-10 col-md-3 mx-auto  font-weight-bold">Adress: Houston Road 25</p>
                    <p className="col-10 col-md-3 mx-auto font-weight-bold">Email: smarphones@gmail.com</p>
                    <p className="col-10 col-md-3 mx-auto font-weight-bold">Phone: 2223-321-333</p>
                </div>
            </div>
            </FooterStyle>
        )
    }
}
const FooterStyle = styled.div`
.footer{
    width:100%;
    height:100%;
    margin-top:100px;
    background-color:black;
    color:white;
    h3{
        width:30%;
    }
}
`