import React from "react";
import { Outlet } from "react-router-dom";

const ProductPage = () => {
  return (
    <div>
      {/* <h3>ProductsPage</h3> */}
      <Outlet />
    </div>
  );
};

export default ProductPage;
