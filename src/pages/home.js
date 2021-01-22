import React from 'react'
import Hero from '../components/Hero';
import {Link} from 'react-router-dom'
import Services from '../components/Services';
import FeaturedRooms from '../components/FeaturedRooms';



export default function home() {
    return (
    <>
    <Hero>
       
            <Link to='/rooms' className="btn-primary">
                view photographs
            </Link>
       
    </Hero>
    <Services />
   <FeaturedRooms />

    </>
    );
}

