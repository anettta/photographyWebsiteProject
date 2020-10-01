import React, { Component } from "react";
import styled from 'styled-components';
import {RoomConsumer} from '../context';


import { Link } from "react-router-dom";

export default class Modal extends Component {
  
    render() {
       

        return (
            <RoomConsumer>
            {(value)=>{
                const {modalOpen, closeModal, modalPhoto} = value;
               

                if(!modalOpen){
                    return null;
                } else {
                    return ( <ModalContainer> 
                        <div className="container">
                            <div className="row">
                                <div id="modal" 
                                className="modal-view">
                                    <h5 className="confirm-modal-text">photo added to the cart</h5>
                                    
                                    <h5>{modalPhoto.name}</h5>
                                 
                                    <img src={modalPhoto.images} className="img-in-modal-view"></img>
                                   

                                    <h5 className="text-muted">price: $ {modalPhoto.price}</h5>
                                    <Link to='/rooms'>
                                        <button className="btn-primary-detailed"  onClick={()=>closeModal()}>
                                            store
                                        </button>
                                    </Link>
                                    <Link to='/cart'>
                                        <button className="btn-primary-detailed-2"  onClick={()=>closeModal()}>
                                            go to cart
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>        
                    </ModalContainer>);
                }
            }}
       </RoomConsumer>
        );
       
    }
}



const ModalContainer = styled.div`
position: fixed;
top:0;
left:0;
right:0;
bottom:0;
background:rgba(0, 0, 0, 0.3);
display: flex;
align-items: center;
justify-content: center;
#modal {
    background: var(--mainWhite);
}
`;