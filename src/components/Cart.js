import CartItem from "./CartItem";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { actions } from "../store/index";
import "./Cart.css";

const Cart = () => {
  const [tableNumber, setTableNumber] = useState();
  const [placeButton, setPlaceButton] = useState(false);
  const [didSubmit, setDidSubmit] = useState(false);

  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.items);
  const totalAmount = useSelector((state) => state.totalAmount);

  const removeItemFromCartHandler = (id) => {
    dispatch(actions.removeItemFromCart(id));
  };

  const modifyQuantityHandler = (id, data) => {
    dispatch(
      actions.modifyQuantity({
        id: id,
        data: data
      })
    );
  };

  const tablenumberHandler = (event) => {
    setTableNumber(event.target.value);
    setPlaceButton(true);
  };

  const placeOrderHandler = (event) => {
    event.preventDefault();
    dispatch(
      actions.placeOrder({
        tableNumber: tableNumber,
        orderedItems: cartItems
      })
    );
    setDidSubmit(true);
  };

  return (
    <div>
      {!didSubmit ? (
        <form onSubmit={placeOrderHandler}>
          {cartItems.length > 0 && (
            <div className="table">
              <label htmlFor="tablename">
                Table Number <span className="star">*</span>
              </label>
              <select onChange={tablenumberHandler}>
                <option value="select">Select Table</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
              </select>
            </div>
          )}
          {cartItems.map((item) => (
            <CartItem
              key={item.id}
              id={item.id}
              image={item.image}
              price={item.price}
              totalprice={item.totalPrice}
              quantity={item.quantity}
              title={item.title}
              onDelete={removeItemFromCartHandler.bind(null, item.id)}
              onChange={modifyQuantityHandler.bind(null, item.id)}
            />
          ))}
          {cartItems.length > 0 ? (
            <div>
              <h3>Total Amount : ₹{totalAmount}</h3>
              <button
                className={placeButton ? "order-button" : "disable-order"}
                type="submit"
                disabled={!placeButton}
              >
                Place Order
              </button>
            </div>
          ) : (
            <div className="cart-empty">
              <h1>Cart is empty</h1>
              <h3>Please add your menu to the Cart</h3>
            </div>
          )}
        </form>
      ) : (
        <div className="cart-empty">
          <h1>Your order has placed Successfully...</h1>
          <h3>Enjoy your Meals</h3>
        </div>
      )}
    </div>
  );
};

export default Cart;
