import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContextProvider";

function Product(props) {
  const { id, productName, price, productImage } = props.data;
  const { cartItems, addToCart } = useContext(ShopContext);
  const cartItemAmount = cartItems[id];

  return (
    <div className="product">
      <img src={productImage} alt="product" />
      <div className="description">
        <p>
          <b> {productName}</b>
        </p>
        <p>$ {price}</p>
      </div>
      <button className="addToCartButton" onClick={() => addToCart(id)}>
        Add To Cart {cartItemAmount > 0 && <>({cartItemAmount})</>}
      </button>
    </div>
  );
}

export default Product;
