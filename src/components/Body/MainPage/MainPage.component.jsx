import React from "react";
import CarrouselOfferProducts from "../../Commons/Carrosel-Offer-Products/CarrouselOfferProducts.component";
import Navbar from "../../Header/Navbar/Navbar.component";
import Footer from "../../Commons/Footer/Footer.component";
import "./MainPage.styles.css";
import ShowProducts from "../../Commons/Show-Products/ShowProducts.component";

const MainPage = () => {
  return (
    <div className='main-page'>
      <Navbar />
      <CarrouselOfferProducts />
      <ShowProducts title='PRODUCTOS DESTACADOS' />
      <Footer />
    </div>
  );
};

export default MainPage;
