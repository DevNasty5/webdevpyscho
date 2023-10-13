import React from 'react';
import Projects from './Projects';
import RecentWork from './RecentWork';
import Landing from './Landing';
import Services from './Services'
import Pricing from './Pricing';
import Footer from './Footer';
import Whyus from './Text2';
import ContactSection from './ContactSection'
 

const Homepage = () => {
  return (
    <>
      <Landing/>
      <Services/>
      <Whyus/>
      <Projects/>
      <RecentWork/>
      <Pricing/>
      <Footer/>
      <ContactSection/>
      
    </>
  );
}

export default Homepage;
