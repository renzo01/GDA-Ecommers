import React from "react";
import "./ShowProducts.styles.css";
const ShowProducts = ({ title }) => {
  return (
    <div className='show-products'>
      <h4 className='show-products-title'>{title}</h4>
    </div>
  );
};
export default ShowProducts;
