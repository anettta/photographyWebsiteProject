import React from 'react';
import {FaTrash} from  'react-icons/fa';
import {FaPlus} from  'react-icons/fa';
import {FaMinus} from  'react-icons/fa';

export default function CartItem({item,value}) {
    const {name, images, price, total, count} = item;
    const {increment, decrement, removeItem} = value;
    return (
       <div class="container-fluid">
        <div className="row">
            <div className="cart-headings">
                <img 
                src={images}
                style={{width: "5rem", height: "5rem"}}
                className="img-fluid"
                alt="chosen photograph"
                />
            </div>
            <div className="cart-headings">
                <span className="d-lg-none">
                    photo:
                </span> {name +  " " +  "11 x 14"}

            </div>
            <div className="cart-headings">
                <span className="d-lg-none">
                    price:
                </span> ${price}

            </div>
            <div className="cart-headings">
                <div className="d-flex justify-content-center">
                    <div className="btn-black">
                        <FaMinus 
                        onClick={()=>
                            decrement(name)}>
                        </FaMinus>
                        <span>
                            {count}
                        </span>
                        <FaPlus 
                        onClick={()=>
                            increment(name)}>
                                
                        </FaPlus>
                    </div>
                </div>
            </div>
            <div className="cart-headings">
                <div className="cart-icon" 
                onClick={()=>removeItem(name)}>
                    <FaTrash />
                </div>
            </div>
            <div className="cart-headings">
                <strong>Total : $ {total}</strong>
            </div>
        </div>
        </div>
    ); 
  
   
}
