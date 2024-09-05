import React from "react";
import TopRightLinks from "./Components/TopRightLinks";
import GoogleLogo from "./Components/GoogleLogo";
import SearchBar from "./Components/SearchBar";
import SearchButtons from "./Components/SearchButtons";
import LanguageOffer from "./Components/LanguageOffer";
import Footer from "./Components/Footer";
import "./GoogleSearchPage.css";

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




// import React, { useState } from "react";
// import "./GoogleSearchPage.css";
// import { useNavigate } from "react-router-dom";

// // TopRightLinks component with login/logout logic
// const TopRightLinks = ({ isLoggedIn, handleLogout }) => {
//   const navigate = useNavigate();

//   const handleLoginClick = () => {
//     if (isLoggedIn) {
//       handleLogout(); // Call the logout function if already logged in
//     } else {
//       navigate("/login"); // Navigate to the login page if not logged in
//     }
//   };

//   return (
//     <div className="top-right-links">
//       <a href="https://mail.google.com" target="_blank" rel="noopener noreferrer">Gmail</a>
//       <a href="https://www.google.com/imghp" target="_blank" rel="noopener noreferrer">Images</a>
//       <button onClick={handleLoginClick} className="sign-in-button">
//         {isLoggedIn ? "Log out" : "Log in"}
//       </button>
//     </div>
//   );
// };

// // GoogleSearchPage component with login state management
// const GoogleSearchPage = () => {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   const handleLogout = () => {
//     setIsLoggedIn(false); // Update the state to logged out
//   };

//   return (
//     <div className="google-search-page">
//       <TopRightLinks isLoggedIn={isLoggedIn} handleLogout={handleLogout} />
//       <div className="container">
//         <GoogleLogo />
//         <SearchBar />
//         <SearchButtons />
//       </div>
//       <LanguageOffer />
//       <Footer />
//     </div>
//   );
// };

// // Remaining components
// const GoogleLogo = () => (
//   <div className="logo">
//     <img 
//       src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png" 
//       alt="Google Logo"
//     />
//   </div>
// );

// const SearchBar = () => (
//   <div className="search-bar">
//     <i className="fa-solid fa-magnifying-glass icon-search"></i>
//     <input type="text" className="search-input" />
//     <i className="fa-solid fa-microphone icon-microphone"></i>
//     <i className="fa-solid fa-camera icon-camera"></i>
//   </div>
// );

// const SearchButtons = () => (
//   <div className="buttons">
//     <button className="search-button">Google Search</button>
//     <button className="search-button">I'm Feeling Lucky</button>
//   </div>
// );

// const LanguageOffer = () => (
//   <div className="language-offer">
//     Google offered in:
//     <a href="#">Français</a>
//     <a href="#">Español</a>
//     <a href="#">Deutsch</a>
//     <a href="#">日本語</a>
//     <a href="#">中文</a>
//   </div>
// );

// const Footer = () => (
//   <footer>
//     <div className="footer-left">
//       <a href="https://about.google/">About</a>
//       <a href="https://www.google.com/intl/en/ads/">Advertising</a>
//       <a href="https://www.google.com/intl/en/policies/privacy/">Privacy</a>
//       <a href="https://www.google.com/intl/en/policies/terms/">Terms</a>
//     </div>
//     <div className="footer-right">
//       <a href="https://www.google.com/preferences">Settings</a>
//     </div>
//   </footer>
// );

// export default GoogleSearchPage;
