import styled from "styled-components"


export const ButtonContainer = styled.button `
    padding:5px 10px;
    border-radius:3px;
    border:none;
    background-color: ${props => props.cart === true ? "orangered" : "transparent"};
    &:hover{
        cursor:pointer;
        color:${props => props.cart === true ? "black" : "whitesmoke"};
    }
`