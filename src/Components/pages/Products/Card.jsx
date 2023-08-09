import PropTypes from "prop-types";
import styles from "./Card.module.css";
import { useState } from "react";
const Card = ({ product, setCartCounter }) => {
  const { title, price, image } = product;
  const [quantity, setQuantity] = useState(0);
  return (
    <div className={styles.card}>
      <img src={image} alt="image" />
      <p>{title}</p>
      <p>Price: ${price}</p>
      <p>Quantity: </p>{" "}
      <input
        type="number"
        value={quantity}
        onChange={(e) => {
          setQuantity(Number(e.target.value));
        }}
      />
      <button
        onClick={() => {
          setCartCounter((prev) => {
            return prev + quantity;
          });
        }}
      >
        Add to cart
      </button>
    </div>
  );
};

Card.propTypes = {
  product: PropTypes.object,
  setCartCounter: PropTypes.func,
};

export default Card;
