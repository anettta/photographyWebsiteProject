import React, { Component } from 'react';
import {FaInstagram, FaFacebook, FaPinterest, FaGithub} from  'react-icons/fa'
import Title from './Title';

export default class Services extends
Component {
    state={
        footer: [
            {
                icon: <a href="https://www.instagram.com/anetta_gpk/" ><FaInstagram/> </a>
                
            },
           
            {
                icon: <a href="https://www.facebook.com/AfotoG" ><FaFacebook/> </a>
                
            },
            {
                icon: <a href="www.pinterest.com/MoyiFoto" ><FaPinterest/> </a>

            },
            {
                icon: <a href="https://github.com/anettta" ><FaGithub/> </a>

            }

        ]
    }
    render() {
        return (
            <section className="services">
               <Title title='Follow me on' />
               <div className="services-center">
                   {this.state.footer.map((item, index) => {
                       return <article key={index} className="service">
                           <span >{item.icon}</span>
                         
                           
                       </article>

                   })}

               </div>
               <div className="services-center">
                   &copy; Anna G. Photography. All rights reserved. Unauthorized use prohibited.
               </div>

            </section>
        )
    }
}