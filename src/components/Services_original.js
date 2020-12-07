import React, { Component } from 'react';
import {FaChevronLeft, FaChevronRight, FaQuoteRight} from  'react-icons/fa';
import Title from './Title';
export default class Services extends
Component { 
     state = {
         services: [
            {
                icon:<FaQuoteRight/>,
                author: "Ansel Adams",
                quote: "You don’t make a photograph just with a camera. You bring to the act of photography all the pictures you have seen, the books you have read, the music you have heard, the people you have loved."
            },
            { icon:<FaQuoteRight/>,
                author: "Ansel Adams",
                quote: "When words become unclear, I shall focus with photographs. When images become inadequate, I shall be content with silence."
            },
            { icon:<FaQuoteRight/>,
                author: "Scott Lorenzo",
                quote: "The picture that you took with your camera is the imagination you want to create with reality."
            }
        //     { icon:<FaQuoteRight/>,
        //         author: "James Lalropui Keivom",
        //         quote: "It’s weird that photographers spend years or even a whole lifetime, trying to capture moments that added together, don’t even amount to a couple of hours."
        //     },
        //     { icon:<FaQuoteRight/>,
        //         author: "C.S. Lewis",
        //         quote: "If we find ourselves with a desire that nothing in this world can satisfy, the most probable explanation is that we were made for another world."
        //     }

        //     },
           
        //     {
        //         icon:<FaBlackTie/>,
        //         title: "Portraits",
        //         info: 'Professional portraits for LinkedIn'
        //     },
        //     {
        //         icon:<FaPhotoVideo/>,
        //         title: "Custom",
        //         info: 'Personalized photoshoot'
        //     }

        ]
    }

   
    render() {


    const nextTip = () => {
      

        
    }

     const prevTip = () => {
        
    }
       return ( 
 <section className="services">
               <Title title='photo tips' />
               <div className="services-center">
                   {this.state.services.map((item, index) => {
                       return <article key={index} className="service">
                           <span>{item.icon}</span>
                           <h6>{item.author}</h6>
                           <p>{item.quote}</p>
                          
                           <div className="button-container">
                               <button className="prev-btn" onClick={prevTip}>
                                     <FaChevronLeft />
                               </button>
                               <button className="next-btn"onClick={nextTip}>
                                     <FaChevronRight />
                               </button>
                              
                           </div>
                           <button className="random-btn">surprise me</button>
                       </article>
                      

                   })}

               </div>

            </section>
        )
    }

}


