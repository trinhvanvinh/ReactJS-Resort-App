import React from 'react';
import Hero from './utils/Hero';
import Banner from './utils/Banner';
import {Link} from 'react-router-dom';
import Services from '../components/Services';
import FeaturedRooms from '../components/FeaturedRooms';

export default function Home() {
  return (
    <>
    <Hero>
          <Banner subtitle="deluxe rooms starting at $300" title="luxurious rooms" >
            <Link className="btn-primary"  to='/rooms' >
              our rooms
            </Link>
          </Banner>
      </Hero>
      <Services/>
      <FeaturedRooms/>
    </>
      
  )
}
