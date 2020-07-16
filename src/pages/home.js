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
        <Banner title="Anna G. photography" subtitle="Take a photo and just enjoy">
            <Link to='/gallery' className="btn-primary">
                photographs
            </Link>
        </Banner>
    </Hero>
    <Services />
   <FeaturedRooms />

    </>
    );
}

