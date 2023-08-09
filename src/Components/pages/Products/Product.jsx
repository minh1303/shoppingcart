/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import Navbar from "../../header/Navbar";
import styles from "./Product.module.css"
import Card from "./Card";
const Product = ({cartCounter, setCartCounter}) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {
        setProducts(json);
      });
  }, []);

  const productDisplay = products.map((product) => {
    return <Card key={product.id} product={product} setCartCounter={setCartCounter}></Card>;
  });
  return (
    <div>
      <header>
        <Navbar cartCounter={cartCounter}></Navbar>
      </header>

      <main className={styles.main}>{productDisplay}</main>
    </div>
  );
};

export default Product;
