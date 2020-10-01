import React from 'react';
import {Link} from 'react-router-dom';
import defaultImg from '../images/galleryBcg.jpf';
import PropTypes from "prop-types";
import {FaLuggageCart} from 'react-icons/fa';
import {FaCheck} from 'react-icons/fa';
import {RoomConsumer} from '../context';


export default function Room({room}) {
    
    const {name, slug, images, price, inCart} = room;

   

    return (

        
        <article className="room">
            <div className="img-container">
           
                <img src={images[0] || defaultImg} alt="single image" />
                <div className="price-top">
                    <h6>${price}</h6>
                    <p>per print</p>

                </div>
              
                <Link to={`/rooms/${slug}`} className="btn-primary room-link">
                    Features
                </Link>
                <RoomConsumer>
                {(value)=> (
                <button className="cart-btn" disabled={inCart?true:false} onClick={()=>{
                      console.log("hello from the cart 3");
                      value.addToCart(name);
                      value.openModal(name);
                      }}>
                    {inCart?
                   (<FaCheck />)
                    :(<FaLuggageCart />)}

                </button>)}
                </RoomConsumer>
            </div>
          
            <p className="room-info">{name}</p>
          
        </article>
    );

}

Room.propTypes = {
    room:PropTypes.shape({
        name:PropTypes.string.isRequired,
        slug:PropTypes.string.isRequired,
        images:PropTypes.arrayOf(PropTypes.string).isRequired,
        price:PropTypes.number.isRequired,
        //inCart:PropTypes.bool.isRequired
    })
};

