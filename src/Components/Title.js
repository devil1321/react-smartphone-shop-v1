import React, { Component } from 'react'

export default function Title({name,title}) {
    return (
        <div className="row">
            <div className="col-10 mb-5 mt-3 mx-auto text-title text-center">
                <h1 className="text-danger text-capitalize font-weight-bold">{name} 
                <strong className="text-dark ml-2">{title}</strong></h1>
            </div>
        </div>
    )
}

