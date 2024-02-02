import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProductId from "./pages/ProductId";
import Search from "./pages/Search";
import Category from "./pages/Category";
import axios from "axios";

axios.defaults.baseURL = "https://dummyjson.com";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/product/:id" element={<ProductId />} />
      <Route path="/products/category/:keyword" element={<Category />} />
      <Route path="/products/search/:keyword" element={<Search />} />
    </Routes>
  );
}

export default App;
