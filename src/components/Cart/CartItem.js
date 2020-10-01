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
            <div className="col-10 mx-auto col-lg-2">
                <img 
                src={images}
                style={{width: "5rem", height: "5rem"}}
                className="img-fluid"
                alt="photo" 
                />
            </div>
            <div className="col-10 mx-auto col-lg-2">
                <span className="d-lg-none">
                    photo:
                </span> {name}

            </div>
            <div className="col-10 mx-auto col-lg-2">
                <span className="d-lg-none">
                    price:
                </span> ${price}

            </div>
            <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
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
            <div className="col-10 mx-auto col-lg-2">
                <div className="cart-icon" 
                onClick={()=>removeItem(name)}>
                    <FaTrash />
                </div>
            </div>
            <div className="col-10 mx-auto col-lg-2">
                <strong>Total : $ {total}</strong>
            </div>
        </div>
        </div>
    ); 
  
   
}
