import "./FoodList.css";
import { useDispatch } from "react-redux";
import { actions } from "../store/index";

const FoodList = (props) => {
  const dispatch = useDispatch();

  const addItemToCartHandler = () => {
    dispatch(
      actions.addItemsToCart({
        id: props.id,
        image: props.image,
        price: props.price,
        title: props.title
      })
    );
  };
  return (
    <div className="foodlist">
      <div className="foodimage">
        <img src={props.image} alt="chicken" />
      </div>
      <div className="fooddetails">
        <h2>{props.title}</h2>
        <h3>₹{props.price}</h3>
      </div>
      <button type="button" onClick={addItemToCartHandler}>
        ADD
      </button>
    </div>
  );
};

export default FoodList;
