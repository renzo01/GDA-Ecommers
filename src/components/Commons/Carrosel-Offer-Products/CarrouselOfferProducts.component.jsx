import React from "react";
import OfferProduct from "../Offer-Product/OfferProduct.component";
import Prod1 from "../../../assets/product/producto1.jpg";
import Carrousel from "react-elastic-carousel";
import "./CarrouselOfferProducts.styles.css";
const CarrouselOfferProducts = () => {
  return (
    <div className='carrousel-offer-products'>
      <Carrousel itemsToShow={4}>
        <item>
          <OfferProduct image={Prod1} />
        </item>
        <item>
          <OfferProduct image={Prod1} />
        </item>
        <item>
          <OfferProduct image={Prod1} />
        </item>
        <item>
          <OfferProduct image={Prod1} />
        </item>
        <item>
          <OfferProduct image={Prod1} />
        </item>
        <item>
          <OfferProduct image={Prod1} />
        </item>
        <item>
          <OfferProduct image={Prod1} />
        </item>
        <item>
          <OfferProduct image={Prod1} />
        </item>
      </Carrousel>
    </div>
  );
};

export default CarrouselOfferProducts;
