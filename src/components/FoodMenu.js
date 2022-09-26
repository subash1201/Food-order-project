import { useEffect, useState } from "react";
import FoodList from "./FoodList";
const FoodMenu = () => {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      const response = await fetch(
        "https://food-menu-api-default-rtdb.firebaseio.com/menu.json"
      );
      const data = await response.json();

      const foodMenu = [];

      for (const key in data) {
        foodMenu.push({
          id: key,
          title: data[key].title,
          image: data[key].image,
          price: data[key].price
        });
      }

      setMenu(foodMenu);
    };
    fetchApi();
  }, []);
  return (
    <div>
      {menu.map((item) => (
        <FoodList
          key={item.id}
          id={item.id}
          title={item.title}
          image={item.image}
          price={item.price}
        />
      ))}
    </div>
  );
};

export default FoodMenu;
