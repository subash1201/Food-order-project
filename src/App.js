import "./styles.css";
import { Routes, Route } from "react-router-dom";
import FoodMenu from "./components/FoodMenu";
import Cart from "./components/Cart";
import NavBar from "./components/NavBar";
import Admin from "./components/Admin";

export default function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<FoodMenu />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </div>
  );
}
