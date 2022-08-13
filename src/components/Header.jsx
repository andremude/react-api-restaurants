import { React } from "react";
import '../styles/Header.css'
import { Link } from "react-router-dom";

const Header = ({ query, setQuery }) => {

  return (
    <header className="navbar">
      <h1 className='title'> Restaurant Finder 🔍</h1>
      <Link to="/"><b>Home</b></Link>
      <Link to="/sign_in"><b>Sign In</b></Link>
      <Link to="/sign_up"><b>Sign Up</b></Link>
    </header>
  );
};

export default Header;
