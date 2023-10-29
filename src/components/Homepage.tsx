import React from 'react';
import Projects from './Projects';
import RecentWork from './RecentWork';
import Landing from './Landing';
import Services from './Services'
import Pricing from './Pricing';
import Footer from './Footer';
import ContactSection from './ContactSection';
import Navbar from './Navbar';
import Faq from './Faq';


const Homepage: React.FC = () => {
  return (
    <>
      <Navbar />
      <Landing />
      <Projects />
      <Services />
      <RecentWork />
      <Pricing />
      <Faq />
      <ContactSection />
      <Footer />
    </>
  );
}

export default Homepage;
