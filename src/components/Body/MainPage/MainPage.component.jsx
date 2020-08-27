import React from "react";
import CarrouselOfferProducts from "../../Commons/Carrosel-Offer-Products/CarrouselOfferProducts.component";
import "./MainPage.styles.css";
const MainPage = () => {
  return (
    <div className='main-page'>
      <h4 className='offers-title'>OFFERTAS</h4>
      <CarrouselOfferProducts />
    </div>
  );
};

export default MainPage;
