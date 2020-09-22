import React from "react";
import Item from "../../Components/Item/Item";
import { FaCcPaypal, FaCcMastercard } from "react-icons/fa";
import "./CartPage.css";

const CartPage = ({ items, onAddOne, onRemoveOne, finalPrice }) => {
  return (
    <div className="CartPage-container">
      <div className="CartPage-items">
        <ul>
          {items.map((item) => (
            <li key={item.id}>
              <Item item={item}>
                <div className="CartItem-totalPriceItem">
                  <span>$ </span>
                  <span>{item.price * item.count}</span>
                </div>
                <div className="CartItem-controls">
                  <button
                    className="CartItem-removeOne"
                    onClick={() => onRemoveOne(item)}
                  >
                  <span> - </span>
                  </button>
                  <span className="CartItem-count">{item.count}</span>
                  <button
                    className="CartItem-addOne"
                    onClick={() => onAddOne(item)}
                  >
                  <span> + </span>
                  </button>
                </div>
              </Item>
            </li>
          ))}
        </ul>
      </div>      
      <div className="CartPage-checkout">
        <div className="CartPage-Totalprice">
          <p>TOTAL COST </p>
          <p>$ {finalPrice}</p>
        </div>
        <div className="Card-Section">
          <div className="Payment-Type">
            <label>
              <input
                type="radio"
                name="payment"
                value="paypal"
                defaultChecked
              />
              <FaCcPaypal />
            </label>
            <label>
              <input type="radio" name="payment" value="master" />
              <FaCcMastercard />
            </label>
          </div>
          <span>
            Name On Card
            <br />
            <input type="text" />
          </span>
          <span>
            Card Number
            <br />
            <input type="number" />
          </span>
          <div className="Card-details">
            <span>
              Expiration Date
              <br />
              <input />
            </span>
            <span>
              CVV
              <br />
              <input />
            </span>
          </div>
        </div>
        <button>CHECKOUT</button>
      </div>
    </div>
  );
};

export default CartPage;
