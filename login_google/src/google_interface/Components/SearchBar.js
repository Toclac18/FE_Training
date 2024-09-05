import React from "react";
import "../GoogleSearchPage.css";

const SearchBar = () => (
  <div className="search-bar">
    <i className="fa-solid fa-magnifying-glass icon-search"></i>
    <input type="text" className="search-input" />
    <i className="fa-solid fa-microphone icon-microphone"></i>
    <i className="fa-solid fa-camera icon-camera"></i>
  </div>
);

export default SearchBar;
