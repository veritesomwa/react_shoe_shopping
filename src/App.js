import { useState } from "react";
import Navigation from "./Navigation/Nav";
import Products from "./Products/Products";
import Recommended from "./Recommended/Recommended";
import Sidebar from "./Sidebar/Sidebar";

// Database
import products from "./db/data";

import Card from "./components/Card";

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [query, setQuery] = useState("");

  const handleInputChange = (e) => {
    setQuery(e.target.value);
    // Reset All Button
    const allButtons = document.querySelectorAll(".btns");
    allButtons.forEach((button) => button.classList.remove("active"));
    allButtons[0].classList.add("active");
  };

  const filteredItems = products.filter(
    (product) => product.title.toLowerCase().indexOf(query.toLowerCase()) !== -1
  );

  // Radio Filter
  const handleChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  // Buttons Filter
  const handleClick = (e) => {
    setSelectedCategory(e.target.value);
    e.target.classList.toggle("active");
    setQuery(e.target.value);

    // Reset All Button
    const allButtons = document.querySelectorAll(".btns");
    allButtons.forEach((button) => button.classList.remove("active"));

    e.target.classList.toggle("active");
  };

  const filteredData = (products, selected, query) => {
    let filteredProducts = products;

    // Filtering INput items
    if (query) {
      filteredProducts = filteredItems;
    }
    // Selected Filter
    if (selected) {
      filteredProducts = filteredProducts.filter(
        ({ category, color, company, newPrice, title }) =>
          category === selected ||
          color === selected ||
          company === selected ||
          newPrice === selected ||
          title === selected
      );
    }
    return filteredProducts.map(
      ({ img, title, star, reviews, prevPrice, newPrice }) => (
        <Card
          key={Math.random()}
          img={img}
          title={title}
          star={star}
          reviews={reviews}
          newPrice={newPrice}
          prevPrice={prevPrice}
        />
      )
    );
  };

  const result = filteredData(products, selectedCategory, query);
  return (
    <>
      <Sidebar handleChange={handleChange} />
      <Navigation query={query} handleInputChange={handleInputChange} />
      <Recommended handleClick={handleClick} />
      <Products result={result} />
    </>
  );
};

export default App;
