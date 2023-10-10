import React from "react";
import FilltersCategory from "./fillter-category/FilltersCategory";

const HomePage = () => {
  return (
    <div className="page">
      <div className="container">
        <h1>Products</h1>
        <FilltersCategory />
      </div>
    </div>
  );
};

export default HomePage;
