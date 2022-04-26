import React from "react";

const Header = ({ query, setQuery }) => {
  return (
    <header className="navbar">
      <div><h1 className='title'> Restaurant Finder 🔍</h1></div>
        <div className="links">
          {/* <h4><a href="#">About Us</a></h4>
          <h4><a href="#">Contact</a></h4> */}
        </div>
    </header>
  );
};

export default Header;
