import { Outlet } from "react-router";

function Products() {
  return (
    <div>
      <h1>Products</h1>
      <Outlet />
    </div>
  );
}

export default Products;