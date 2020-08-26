import React from "react";
import OfferProduct from "../Offer-Product/OfferProduct.component";
import Prod1 from "../../../assets/product/producto1.jpg";
const CarrouselOfferProducts = () => {
  return (
    <div>
      <OfferProduct image={Prod1} />
    </div>
  );
};

export default CarrouselOfferProducts;
