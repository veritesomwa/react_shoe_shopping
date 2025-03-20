import { useRef, useState, useEffect } from "react";
import "./SearchInput.css";
import { FaSearch } from "react-icons/fa";

export default function SearchInput({ handleInputChange }) {
  const inputRef = useRef(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    inputRef.current.addEventListener("focusout", (event) => {
      setWidth(0);
    });
  }, []);

  const handleClick = () => {
    width === 0 ? setWidth(200) : setWidth(0);
    inputRef.current.focus();
  };
  return (
    <div className="box" onClick={handleClick}>
      <input
        onChange={handleInputChange}
        ref={inputRef}
        type="text"
        placeholder="Search..."
        style={{ width }}
      />
      <span>
        <FaSearch className="fas" />
      </span>
    </div>
  );
}
