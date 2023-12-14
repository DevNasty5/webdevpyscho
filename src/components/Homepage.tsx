'use client';
import React, { useState } from 'react';
import Projects from './Cards';
import RecentWork from './RecentWork';
import Landing from './Landing';
import Services from './Services'
import Pricing from './Pricing';
import Footer from './Footer';
import ContactSection from './ContactSection';
import Navbar from './Navbar';
import Faq from './Faq';


const Homepage: React.FC = () => {
  const [selectedPackage, setSelectedPackage] = useState('');

  const handleContactSalesClick = (packageType: string) => {
    // Handle the logic for "Contact Sales" button click
    setSelectedPackage(packageType);
  };

  return (
    <>
      <Navbar />
      <Landing />
      <Projects />
      <Services />
      <RecentWork />
      <Pricing onContactSalesClick={handleContactSalesClick} />
      <Faq />
      <ContactSection package={selectedPackage} />
      <Footer />
    </>
  );
}

export default Homepage;
