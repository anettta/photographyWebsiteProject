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
                title: "nature photography",
                info: "The texture of a leaf, the morning dew, sound of waves or smell of the flower - one can recharge, feel better or/and discover a new trail or a beautiful scenery"
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