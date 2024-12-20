import React from 'react';
import './App.css'; // Assurez-vous d'ajouter ce fichier CSS

const Header = ({ query, setQuery, handleSearch }) => {
    
  return (
    <header className="header">
      <div className="logo">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/4/42/YouTube_icon_%282013-2017%29.png"
          alt="YouTube Logo"
          className="logo-img"
        />
        <h1>Videos YouTube</h1>
      </div>
      <form className="search-form" onSubmit={handleSearch}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for videos"
          className="search-input"
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>
    </header>
  );
}

export function Footer(){
  return (
    <footer className="footer">
      <p>© 2024 Videos YouTube . All rights reserved.</p>
      <div className="social-links">
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          Facebook
        </a>
        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
          Twitter
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          Instagram
        </a>
      </div>
    </footer>
  );
};


export default Header;