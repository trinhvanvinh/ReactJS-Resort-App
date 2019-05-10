import React from 'react';
import Hero from './utils/Hero';
import Banner from './utils/Banner';
import {Link} from 'react-router-dom';

export default function Error() {
  return (
   <Hero>
     <Banner title='404' subtitle="page not found" >
      <Link to="/" className="btn-primary" >
        return Home
      </Link>
     </Banner>
   </Hero>
  )
}

