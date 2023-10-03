import React from 'react';
import Projects from './Projects';
import RecentWork from './RecentWork';
import Landing from './Landing';
import Services from './Services'

const Homepage = () => {
  return (
    <>
      <Landing/>
      <Services/>
      <Projects/>
      <RecentWork/>
    </>
  );
}

export default Homepage;
