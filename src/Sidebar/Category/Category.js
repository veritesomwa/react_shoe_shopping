import Input from "../../components/Input";
import "./Category.css";
const Category = ({ handleChange }) => {
  return (
    <div>
      <h2 className="sidebar-title">Category</h2>
      <div>
        <label className="sidebar-label-container">
          <input onChange={handleChange} value="" type="radio" name="test3" />
          <span className="checkmark"></span>
          All
        </label>
        <Input
          handleChange={handleChange}
          value="sneakers"
          name="test3"
          title="Sneakers"
        />
        <Input
          handleChange={handleChange}
          value="flats"
          name="test3"
          title="Flats"
        />
        <Input
          handleChange={handleChange}
          value="sandals"
          name="test3"
          title="Sandals"
        />
        <Input
          handleChange={handleChange}
          value="heels"
          name="test3"
          title="Heels"
        />
      </div>
    </div>
  );
};

export default Category;
