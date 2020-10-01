import React, { Component } from 'react';
import defaultBcg from '../images/galleryBcg.jpf';
// import Hero from '../components/Hero';
import Banner from '../components/Banner';
import {Link} from 'react-router-dom';
import {RoomContext} from '../context';
import {RoomConsumer} from '../context';

import StyledHero from '../components/StyledHero';
import styled from "styled-components";

export default class SingleRoom extends Component {
    constructor(props) {
        super(props)
        this.state = {
            slug:this.props.match.params.slug,
            defaultBcg

        };

    }
    static contextType = RoomContext;
    // componentDidMount(){
        
    // }
    render() {
        const { getRoom } = this.context;
        const room = getRoom(this.state.slug);
    
        if (!room) {
          return (
           
            <div className="error">
              <h3> no such photo could be found...</h3>
              <Link to="/rooms" className="btn-primary">
                back to gallery
              </Link>
            </div>
          );
        }
       
       
        const {
          name,
          description,
          // capacity,
          // size,
          price,
          extras,
          // canvas,
          // availability,
          images, inCart
        } = room;
        const [...defaultImages] = images;
        //console.log(defaultImages);
    
        return (
          <>
            <StyledHero img={images[0] || this.state.defaultBcg}>
              <Banner title={`${name}`}>
                <Link to="/rooms" className="btn-primary">
                  back to gallery
                </Link>
              </Banner>
            </StyledHero>
            <section className="single-room">
              <div className="single-room-images">
                {defaultImages.map((item, index) => (
                  <img key={index} src={item} alt={name} />
                ))}
              </div>
              <div className="single-room-info">
                <article className="desc">
                  <h3>details</h3>
                  <p>{description}</p>
                </article>
                <article className="info">
                  <h3>info</h3>
                  <h6>price : ${price}</h6>
                  {/* <h6>size : {size} inches</h6> */}
                  {/* <h6>
                    max capacity :
                    {capacity > 1 ? `${capacity} people` : `${capacity} person`}
                  </h6> */}
                  {/* <h6>{availability ? "in stock" : "out of stock"}</h6>
                  <h6>{canvas && "printed on canvas"}</h6> */}
                  <div>
                    <div>
                    <Link to='/'>
                      <button className="btn-primary-detailed">
                        Back to Gallery
                      </button>
                    </Link>
                    </div>
                    <div>
                    <RoomConsumer>
                    {(value)=> (
                    <ButtonContainer className="btn-primary-detailed" 
                    cart
                    disabled={inCart?true:false} 
                    onClick={()=>{
                      value.addToCart(name);
                      value.openModal(name);
                      }}>
                        {inCart ? "in cart" : "add to cart"}
                      </ButtonContainer>)}
                      </RoomConsumer>
                      </div>
                  </div>



                </article>
              </div>
            </section>
            <section className="room-extras">
              <h6> Features </h6>
              <ul className="extras">
                {extras.map((item, index) => (
                  <li key={index}>- {item}</li>
                ))}
              </ul>
            </section>
          </>
         
        );
            
        
      }
      
    }
    
  

    export const ButtonContainer = styled.button`
    background: ${props =>
      props.cart ? "var(--mainComplementary)":"var(--mainPrimary)"};
      &:hover {
        color: ${props =>
          props.cart ? "var(--mainComplementary)":"var(--mainPrimary)"};
      }
    `;
