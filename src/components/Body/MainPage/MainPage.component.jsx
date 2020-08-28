import React from "react";
import CarrouselOfferProducts from "../../Commons/Carrosel-Offer-Products/CarrouselOfferProducts.component";
import "./MainPage.styles.css";
import ShowProducts from "../../Commons/Show-Products/ShowProducts.component";

const MainPage = () => {
  return (
    <div className='main-page'>
      <CarrouselOfferProducts />
      <ShowProducts title='PRODUCTOS DESTACADOS' />
    </div>
  );
};

export default MainPage;
