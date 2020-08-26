import React from "react";
import "./OfferProduct.styles.css";
const OfferProduct = ({ image }) => {
  return (
    <div className='offer-product'>
      <img className='img-prod' src={image} alt='producto en oferta' />
      <div className='offer-container'>
        <p>S./2.000</p>
      </div>
    </div>
  );
};
export default OfferProduct;
