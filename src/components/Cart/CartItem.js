import React from 'react';
import {FaTrash} from  'react-icons/fa';
import {FaPlus} from  'react-icons/fa';
import {FaMinus} from  'react-icons/fa';

export default function CartItem({item,value}) {
    const {name, images, price, total, count} = item;
    const {increment, decrement, removeItem} = value;
    return (
       <div class="room-info">
        <div className="row">
            <div className="text-title">
                <img 
                src={images}
                style={{width: "12rem", height: "12rem",
                float: "left",textAlign:"center", margin: 10}}
                className=""
                alt="chosen photograph"
                />
            </div>
            <div className="text-title">
                <span className="">
                    photo:
                </span> {name} 

            </div>
            <div className="text-title">
                <span className="">
                    price:
                </span> ${price}

            </div>
            <div className="">
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
            <div className="text-title">
                <div className="cart-icon" 
                onClick={()=>removeItem(name)}>
                    <FaTrash />
                </div>
            </div>
            <div className="text-title">
                <strong>Total : $ {total}</strong>
            </div>
        </div>
        </div>
    ); 
  
   
}
