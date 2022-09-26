import AdminList from "./AdminList";
import { useSelector, useDispatch } from "react-redux";
import { actions } from "../store/index";
import "./Admin.css";
const Admin = () => {
  const orderItems = useSelector((state) => state.orderedItems);
  const dispatch = useDispatch();

  const deleteOrderedFoodHandler = (tableNumber) => {
    dispatch(actions.deleteMenuFromOrderedCart(tableNumber));
  };
  return (
    <div className="admin">
      {orderItems.map((item) => (
        <AdminList
          key={item.tableNumber}
          tableNumber={item.tableNumber}
          orderedItems={item.orderedItems}
          onDelete={deleteOrderedFoodHandler.bind(null, item.tableNumber)}
        />
      ))}
    </div>
  );
};

export default Admin;
