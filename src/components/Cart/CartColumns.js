import React from 'react';
import 'bootstrap/dist/css/bootstrap-grid.css';


export default function CartColumns() {
    
    return (
       
        <div className="container-cart">
            <div className="row">
                <div className="col-10 mx-auto col-lg-2 ">
                    <p>PHOTOS</p>
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <p>TITLE</p>
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <p>PRICE</p>
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <p>QTY</p>
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <p>REMOVE</p>
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <p>TOTAL</p>
                </div>
                
            </div>
            
        </div>
      
    )
};



  
