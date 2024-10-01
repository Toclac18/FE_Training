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