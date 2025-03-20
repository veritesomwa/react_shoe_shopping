import Input from "../../components/Input";
import "./Colors.css";

const Colors = ({ handleChange }) => {
  return (
    <div>
      <h2 className="sidebar-title color-title">Color</h2>
      <label className="sidebar-label-container">
        <input onChange={handleChange} value="" type="radio" name="test3" />
        <span className="checkmark all"></span>
        All
      </label>
      <Input
        handleChange={handleChange}
        value="black"
        name="test3"
        title="Black"
        color="black"
      />
      <Input
        handleChange={handleChange}
        value="blue"
        name="test3"
        title="Blue"
        color="blue"
      />
      <Input
        handleChange={handleChange}
        value="red"
        name="test3"
        title="Red"
        color="red"
      />
      <Input
        handleChange={handleChange}
        value="green"
        name="test3"
        title="Green"
        color="green"
      />
      <Input
        handleChange={handleChange}
        value="white"
        name="test3"
        title="White"
        color="white"
        iswhite="white checkmark-white"
      />
    </div>
  );
};

export default Colors;
