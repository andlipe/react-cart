import React from "react";
import Item from "../../Components/Item/Item";
import "./CartPage.css";

const CartPage = ({ items, onAddOne, onRemoveOne, finalPrice }) => {
  return (
    <div className="CartPage-container">
      <ul className="CartPage-items">
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
      <div className="CartPage-checkout">
        <h2>Card Details</h2>
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
        <div class="Card-details">
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
        <div className="CartPage-Totalprice">
          <p>TOTAL COST </p>
          <p>$ {finalPrice}</p>
        </div>
        <button>CHECKOUT</button>
      </div>
    </div>
  );
};

export default CartPage;
