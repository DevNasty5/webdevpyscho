import React from 'react';
import Projects from './Projects';
import RecentWork from './RecentWork';
import Landing from './Landing';
import Services from './Services'
import Pricing from './Pricing';
import Footer from './Footer';

const Homepage = () => {
  return (
    <>
      <Landing/>
      <Services/>
      
      <Projects/>
      <RecentWork/>
      <Pricing/>
      <Footer/>
      
    </>
  );
}

export default Homepage;
