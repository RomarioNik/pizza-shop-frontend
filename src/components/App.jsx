import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import Layout from "./Layout/Layout";
import CategoriesPage from "../pages/CategoriesPage";
import GoodsPage from "../pages/GoodsPage";
import ProductsPage from "../pages/ProductPage";
import FoodPage from "../pages/Foodpage";
import WishlistPage from "../pages/WishlistPage";
import CartPage from "../pages/CartPage";
import NotFoundPage from "../pages/NotFoundPage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="categories" element={<CategoriesPage />}>
          <Route path=":goodsId" element={<GoodsPage />} />
        </Route>
        <Route path="products" element={<ProductsPage />}>
          <Route path=":foodId" element={<FoodPage />} />
        </Route>
        <Route path="wishlist" element={<WishlistPage />} />
        <Route path="cart" element={<CartPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};

export default App;
