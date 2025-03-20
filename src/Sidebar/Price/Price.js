import Input from "../../components/Input";
import "./Price.css";
const Price = ({ handleChange }) => {
  return (
    <div className="ml">
      <h2 className="sidebar-title price-title">Price</h2>
      <label className="sidebar-label-container">
        <input onChange={handleChange} value="" type="radio" name="test2" />
        <span className="checkmark"></span>
        All
      </label>
      <Input
        handleChange={handleChange}
        value={50}
        name="test2"
        title="$0 - 50"
      />
      <Input
        handleChange={handleChange}
        value={100}
        name="test2"
        title="$50 - 100"
      />
      <Input
        handleChange={handleChange}
        value={150}
        name="test2"
        title="$100 - 150"
      />
      <Input
        handleChange={handleChange}
        value={200}
        name="test2"
        title="Over $150"
      />
    </div>
  );
};

export default Price;
