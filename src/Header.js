import React from 'react';
import './App.css'; 

const Header = ({ query, setQuery, handleSearch  }) => {
  return (
<header>
      <div className="logo">
        <img
          src="./logo.png"
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
};

export function Footer() {
  return (
    <footer className="footer">
      <p>© 2024 Videos YouTube . Created by<a href='https://github.com/Sara-Derdak' className="lien">Sara Derdak</a> .</p>
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
}

export default Header;
