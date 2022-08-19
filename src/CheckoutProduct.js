import React from "react";
import "./CheckoutProduct.css";
import { FaStar } from "react-icons/fa";
import { useStateValue } from "./Stateprovider";

function CheckoutProduct({ id, image, price, title, rating }) {
  const [{ basket }, dispatch] = useStateValue();
  const removeFromBasket = () => {
    // remove the item from the basket

    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };
  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct_image" src={image} />

      <div className="checkoutProduct_info">
        <p className="checkoutProduct_title"> {title}</p>
        <p className="checkoutProduct_price">
          <small>$</small>
        </p>
        <strong>{price}</strong>
        <div className="product_rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p className="star">
                <FaStar />
              </p>
            ))}
        </div>
        <button onClick={removeFromBasket}>Remove from basket</button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
