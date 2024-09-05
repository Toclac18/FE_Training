import React from "react";
import "../GoogleSearchPage.css";

const TopRightLinks = () => (
  <div className="top-right-links">
    <a href="https://mail.google.com" target="_blank" rel="noopener noreferrer">Gmail</a>
    <a href="https://www.google.com/imghp" target="_blank" rel="noopener noreferrer">Images</a>
    <a href="/login " className="sign-in-button">Log in</a>
  </div>
);

export default TopRightLinks;
