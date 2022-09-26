import "./CartItem.css";
import { useState } from "react";
// import {actions} from "../store/index"
// import {useDispatch} from "react-redux"

const CartItem = (props) => {
  const [data, setData] = useState(1);

  // const dispatch = useDispatch();

  const decrementHandler = () => {
    if (data === 1) {
      return data;
    } else {
      setData(data - 1);
    }
    props.onChange(data - 1);
    // dispatch(actions.decreaseCount({

    // }))
  };

  const incrementHandler = () => {
    setData(data + 1);
    props.onChange(data + 1);
  };

  return (
    <div className="cartlist">
      <div className="cartimage">
        <img src={props.image} alt="chicken" />
      </div>
      <div className="cartdetails">
        <h2>{props.title}</h2>
        <h3>
          {props.quantity} * {props.price} = ₹{props.totalprice}
        </h3>
      </div>
      <div className="inputbutton">
        <div className="input">
          <button type="button" onClick={decrementHandler}>
            -
          </button>
          <button type="button" onClick={incrementHandler}>
            +
          </button>
        </div>
        <button className="delbutton" onClick={props.onDelete}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default CartItem;
