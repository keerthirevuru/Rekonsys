import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Feature from '../components/Feature';
import CTAS from '../components/CTAS';
import Footer from '../components/Footer';
// import ForgotPassword from './forgotpassword';


function HomePage() {
 return (
    <div>
      <Navbar />
      <Hero />
      <Feature />
      <CTAS />
      <Footer />
      {/* <ForgotPassword /> */}
    </div>
 );
}

export default HomePage;
