import { React } from "react";
import '../styles/Header.css'

const Header = ({ query, setQuery }) => {

  return (
    <header className="navbar">
      <h1 className='title'> Restaurant Finder 🔍</h1>
    </header>
  );
};

export default Header;
