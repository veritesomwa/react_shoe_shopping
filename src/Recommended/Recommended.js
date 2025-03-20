import "./Recommended.css";
import Button from "../components/Buttons";

const Recommended = ({ handleClick }) => {
  return (
    <>
      <div>
        <h2 className="recommended-title">Recommended</h2>
        <div className="recommended-flex">
          <Button value="" onClickHandler={handleClick} title="All Products" />
          <Button value="Nike" onClickHandler={handleClick} title="Nike" />
          <Button value="Adidas" onClickHandler={handleClick} title="Adidas" />
          <Button value="Puma" onClickHandler={handleClick} title="Puma" />
          <Button value="Vans" onClickHandler={handleClick} title="Vans" />
        </div>
      </div>
    </>
  );
};

export default Recommended;
