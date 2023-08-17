import React, { useContext } from "react";
import CartItem from "./CartItem";
import { PRODUCTS } from "../products";
import { ShopContext } from "../context/ShopContextProvider";
import "../styles/cart.css";
import { Link, useNavigate } from "react-router-dom";

const Cart = () => {
  const { cartItems, getTotalAmount } = useContext(ShopContext);
  const totalAmount = getTotalAmount();
  const navigate = useNavigate();
  return (
    <div className="cart">
      <div>
        <h1>Your Cart Items</h1>
      </div>
      <div className="cartItems">
        {PRODUCTS.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem key={product.id} data={product} />;
          }
        })}
      </div>
      {totalAmount > 0 ? (
        <div className="checkout">
          <p>Subtotal: $ {totalAmount}</p>
          <Link to={"/"}>
            <button> Continue Shopping</button>
          </Link>
          <button>Checkot</button>
        </div>
      ) : (
        <>
          <h2>The Cart is Empty</h2>
          <button
            onClick={() => {
              navigate("/");
            }}
          >
            Continue Shopping
          </button>
        </>
      )}
    </div>
  );
};

export default Cart;
