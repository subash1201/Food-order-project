import "./AdminList.css";

const AdminList = (props) => {
  return (
    <div className="adminlist">
      <h2>Table Number : {props.tableNumber}</h2>
      {props.orderedItems.map((item) => (
        <div className="ordered-food">
          <h3>
            {item.quantity} * {item.title}
          </h3>
        </div>
      ))}
      <button type="button" onClick={props.onDelete}>
        Delete
      </button>
    </div>
  );
};

export default AdminList;
