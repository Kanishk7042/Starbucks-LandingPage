import React from 'react';
import NavBarComponent from './components/NavBarComponent';
import GreenBannerComponent from './components/GreenBannerComponent';
import RecommendsComponent from './components/RecommendsComponent';
import BaristaRecommendsComponent from './components/BaristaRecommendsComponent';
import BannerComponent from './components/BannerComponent';
import LearnMoreComponent from './components/LearnMoreComponent';
import FooterComponent from './components/FooterComponent';
import './App.css'; // Make sure to import your CSS

function App() {
  return (
    <div className="scrollable"> {/* Add this div with the scrollable class */}
      <NavBarComponent />
      <GreenBannerComponent />
      <BannerComponent />
      <RecommendsComponent />
      <BaristaRecommendsComponent />
      <LearnMoreComponent />
      <FooterComponent />
    </div>
  );
}

export default App;
