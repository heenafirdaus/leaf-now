import React from 'react';
import "./HomeScreen.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// Components
import Product from "../components/Product";

//Actions
import { getProducts as listProducts } from "../redux/actions/productActions";
import Loader from '../components/Loader';

const HomeScreen = () => {
  const dispatch = useDispatch();

  const getProducts = useSelector((state) => state.getProducts);
  const { products=[], loading, error } = getProducts;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  if(loading){
    return <Loader/>;
  }

  return (
    <div className="homescreen">
      <div className="homescreen__products">
        { error ? (
          <h2>{error}</h2>
        ) : (
          products && products.map((product) => (
            <Product
              key={product._id}
              name={product.name}
              description={product.description}
              price={product.price}
              imageUrl={product.imageUrl}
              productId={product._id}
              isDonation={product.isDonation}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default HomeScreen;
