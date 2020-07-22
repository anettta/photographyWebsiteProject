import React from 'react'
import Loading from "../images/gif/loading-arrow.gif";


export default function loading() {
    return (
        <div className="loading">
            <h4>photographs loading...</h4>
            <img src={Loading} alt=""></img>
            
        </div>
    )
}
