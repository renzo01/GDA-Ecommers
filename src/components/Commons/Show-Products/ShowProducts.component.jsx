import React from "react";
import "./ShowProducts.styles.css";
import ProductCard from "../Product-card/ProductCard.component";
import Prod1 from "../../../assets/product/producto1.jpg";
const ShowProducts = ({ title }) => {
  return (
    <div className='show-products'>
      <h4 className='show-products-title'>{title}</h4>
      <div className='show-products-content'>
        <ProductCard
          img={Prod1}
          title="Macbook Air 13'"
          description='MacBook Air 13 (2019) Intel i5 de 1.6GHz RAM 8GB - 128GB - Plata'
          price='S./2.000'
        />
        <ProductCard
          img={Prod1}
          title="Macbook Air 13'"
          description='MacBook Air 13 (2019) Intel i5 de 1.6GHz RAM 8GB - 128GB - Plata'
          price='S./2.000'
        />
        <ProductCard
          img={Prod1}
          title="Macbook Air 13'"
          description='MacBook Air 13 (2019) Intel i5 de 1.6GHz RAM 8GB - 128GB - Plata'
          price='S./2.000'
        />
        <ProductCard
          img={Prod1}
          title="Macbook Air 13'"
          description='MacBook Air 13 (2019) Intel i5 de 1.6GHz RAM 8GB - 128GB - Plata'
          price='S./2.000'
        />
        <ProductCard
          img={Prod1}
          title="Macbook Air 13'"
          description='MacBook Air 13 (2019) Intel i5 de 1.6GHz RAM 8GB - 128GB - Plata'
          price='S./2.000'
        />
        <ProductCard
          img={Prod1}
          title="Macbook Air 13'"
          description='MacBook Air 13 (2019) Intel i5 de 1.6GHz RAM 8GB - 128GB - Plata'
          price='S./2.000'
        />
        <ProductCard
          img={Prod1}
          title="Macbook Air 13'"
          description='MacBook Air 13 (2019) Intel i5 de 1.6GHz RAM 8GB - 128GB - Plata'
          price='S./2.000'
        />
      </div>
    </div>
  );
};
export default ShowProducts;
