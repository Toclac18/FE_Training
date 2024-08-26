import React from "react";
import "./GoogleSearchPage.css";

const TopRightLinks = () => (
  <div className="top-right-links">
    <a href="https://mail.google.com" target="_blank" rel="noopener noreferrer">Gmail</a>
    <a href="https://www.google.com/imghp" target="_blank" rel="noopener noreferrer">Images</a>
    <a href="#" className="sign-in-button">Sign in</a>
  </div>
);

const GoogleLogo = () => (
  <div className="logo">
    <img 
      src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png" 
      alt="Google Logo"
    />
  </div>
);

const SearchBar = () => (
  <div className="search-bar">
    <i className="fa-solid fa-magnifying-glass icon-search"></i>
    <input type="text" className="search-input" />
    <i className="fa-solid fa-microphone icon-microphone"></i>
    <i className="fa-solid fa-camera icon-camera"></i>
  </div>
);

const SearchButtons = () => (
  <div className="buttons">
    <button className="search-button">Google Search</button>
    <button className="search-button">I'm Feeling Lucky</button>
  </div>
);

const LanguageOffer = () => (
  <div className="language-offer">
    Google offered in:
    <a href="#">Français</a>
    <a href="#">Español</a>
    <a href="#">Deutsch</a>
    <a href="#">日本語</a>
    <a href="#">中文</a>
  </div>
);

const Footer = () => (
  <footer>
    <div className="footer-left">
      <a href="https://about.google/">About</a>
      <a href="https://www.google.com/intl/en/ads/">Advertising</a>
      <a href="https://www.google.com/intl/en/policies/privacy/">Privacy</a>
      <a href="https://www.google.com/intl/en/policies/terms/">Terms</a>
    </div>
    <div className="footer-right">
      <a href="https://www.google.com/preferences">Settings</a>
    </div>
  </footer>
);

const GoogleSearchPage = () => (
  <div className="google-search-page">
    <TopRightLinks />
    <div className="container">
      <GoogleLogo />
      <SearchBar />
      <SearchButtons />
    </div>
    <LanguageOffer />
    <Footer />
  </div>
);

export default GoogleSearchPage;
