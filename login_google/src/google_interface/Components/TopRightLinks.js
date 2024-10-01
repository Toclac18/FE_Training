import React from "react";
import { useAuth } from "../../AuthContext";
import { useNavigate } from "react-router-dom";

const TopRightLinks = () => {
  const { isLogged, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = (event) => {
    event.preventDefault();
    logout();
    navigate('/home');
  }

  return (
    <div className="top-right-links">
      <a href="https://mail.google.com" target="_blank" rel="noopener noreferrer">Gmail</a>
      <a href="https://www.google.com/imghp" target="_blank" rel="noopener noreferrer">Images</a>
      {isLogged ? (
        <>
          <a href="/logout" className="sign-in-button" onClick={handleLogout}>Log out</a>
        </>
      ) : (
        <a href="/login" className="sign-in-button">Log in</a>
      )}
    </div>
  )
}

export default TopRightLinks;
