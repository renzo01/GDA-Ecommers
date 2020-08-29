import React from "react";
import "./ProductCard.styles.css";
const ProductCard = ({ img, title, description, price, offer }) => {
  return (
    <div className='product-card'>
      <img src={img} alt='Imagen del producto' />
      <h3>{title}</h3>
      <span>{description}</span>
      <p>{price}</p>
    </div>
  );
};

export default ProductCard;
