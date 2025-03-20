import { FiHeart } from "react-icons/fi";
import { AiOutlineShoppingCart, AiOutlineUserAdd } from "react-icons/ai";
import "./Nav.css";
import { useEffect, useRef } from "react";
import SearchInput from "../components/SearchInput";

const Nav = ({ query, handleInputChange }) => {
  const navRef = useRef(null);

  useEffect(() => {
    document.title = `OTANGO KICKS - ${query}`;
  }, [query]);
  return (
    <nav ref={navRef}>
      <div className="nav-container">
        <div className="nav-banner">
          <a href="/">
            OTANGO<span>KICKS</span>
          </a>
        </div>
        <SearchInput handleInputChange={handleInputChange} />
        {/* <input
            type="text"
            onChange={handleInputChange}
            // value={query
            className="search-input"
            placeholder="Enter your search shoes."
          /> */}
      </div>
      <div className="profile-container">
        <a href="#heart">
          <FiHeart className="nav-icons" />
        </a>
        <a href="#cart">
          <AiOutlineShoppingCart className="nav-icons" />
        </a>
        <a href="#add">
          <AiOutlineUserAdd className="nav-icons" />
        </a>
      </div>
    </nav>
  );
};

export default Nav;
