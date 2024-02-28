// src/App.js
import React from 'react';
import './styles/styles.css'; // Import your CSS file
import AwardBanner from './components/AwardBanner';
import AwardSection from './components/AwardSection';
import PeopleIllustration from './components/PeopleIllustration';
import ProductSection from './components/ProductSection';
import Footer from './components/footer'

const App = () => {
  return (
    <div className="app">
      <AwardBanner />
      <AwardSection />
      <PeopleIllustration />
      <ProductSection />
      <Footer/>
    </div>
  );
};

export default App;
