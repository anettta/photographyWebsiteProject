import React from 'react'
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import {Link} from 'react-router-dom'
import Services from '../components/Services';
import FeaturedRooms from '../components/FeaturedRooms';



export default function home() {
    return (
    <>
    <Hero>
        <Banner title="Nature photography" subtitle="Landscapes, Macro, Abstracts, Black and White by Anna G.">
            <Link to='/rooms' className="btn-primary">
                photographs
            </Link>
        </Banner>
    </Hero>
    <Services />
   <FeaturedRooms />

    </>
    );
}

