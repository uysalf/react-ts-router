import React from "react";
import { Link, Outlet } from "react-router-dom";
const Products = () => {
  return (
    <>
      <div>
        <h1>Nested Routes Producs</h1>
        <input type="search" placeholder="Seacrh Product" />
      </div>
      <nav>
        {/*  without "/" */}
        <Link to="featured">featured</Link>
        <Link to="new">new</Link>

        {/*  with "/" */}
        {/* <Link to="/products/featured">featured</Link>
        <Link to="/products/new">new</Link> */}
      </nav>
      <Outlet />
    </>
  );
};

export default Products;
