import React from 'react';
import Navbar from './Navbar';
import Header from './Header';
import Text from './Text';
import HorizontalScrollCards from './HorizontalScroll';
import Ahead from './Ahead';
import Timeline from "./Timeline";
import Text2 from './Text2';
import Work from "./Work";
import Footer from './Footer';
import Vacancies from './Vacancies';
import Wondered from './Wondered';

const Homepage = () => {
  return (
    < >
      <Navbar />
      <Header/>
      <Text/>
      <HorizontalScrollCards/>
      <Ahead/>
      <Timeline/>
      <Wondered/>
      <Text2/>
      <Work/>
      <Vacancies/>
      <Footer/>
    </>
  );
}

export default Homepage;
