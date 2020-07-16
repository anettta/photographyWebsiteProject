import React, { Component } from 'react';
import {FaLeaf} from  'react-icons/fa'
//FaBlackTie, FaPhotoVideo
// import Title from './Title';
export default class Services extends
Component {
    state={
        services: [
            {
                icon:<FaLeaf/>,
                title: "fine art photography",
                info: 'Decorate your home with the beauty of natural environment'
            }
            // },
           
            // {
            //     icon:<FaBlackTie/>,
            //     title: "Portraits",
            //     info: 'Professional portraits for LinkedIn'
            // },
            // {
            //     icon:<FaPhotoVideo/>,
            //     title: "Custom",
            //     info: 'Personalized photoshoot'
            // }

        ]
    }
    render() {
        return (
            <section className="services">
               {/* <Title title='services' /> */}
               <div className="services-center">
                   {this.state.services.map((item, index) => {
                       return <article key={index} className="service">
                           <span>{item.icon}</span>
                           <h6>{item.title}</h6>
                           <p>{item.info}</p>
                       </article>

                   })}

               </div>

            </section>
        )
    }
}