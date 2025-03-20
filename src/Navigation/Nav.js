import { FiHeart } from "react-icons/fi";
import { AiOutlineShoppingCart, AiOutlineUserAdd } from "react-icons/ai";
import "./Nav.css";

const Nav = ({ query, handleInputChange }) => {
  return (
    <nav>
      <div className="nav-container">
        <input
          type="text"
          onChange={handleInputChange}
          // value={query
          className="search-input"
          placeholder="Enter your search shoes."
        />
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
