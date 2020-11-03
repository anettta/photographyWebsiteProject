import React from 'react';
import { useMediaQuery } from 'react-responsive';




export default function CartColumns() {
    
    return (
        <div className="room-info">
           
            <div className="row">
            <Desktop>
                <div className="text-info">
                    <p>PHOTOS</p>
                </div>
                <div className="cart-headings">
                    <p>TITLE</p>
                </div>
                <div className="cart-headings">
                    <p>PRICE</p>
                </div>
                <div className="cart-headings">
                    <p>QTY</p>
                </div>
                <div className="cart-headings" >
                    <p>REMOVE</p>
                </div>
                <div className="cart-headings" >
                    <p>TOTAL</p>
                </div>
                </Desktop>
            </div>
        </div>
    )
};




 const Desktop = ({ children }) => {
    const isDesktop = useMediaQuery({ minWidth: 992 })
    return isDesktop ? children : null
  }

