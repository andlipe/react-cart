import React, {useState} from 'react';
import './App.css';
import Nav from './Components/Nav/Nav'
import CartPage from './Pages/CartPage/CartPage';
import ItemPage from './Pages/ItemPage/ItemPage';
import {items} from './static-data'

function App() {
  const [activeTab, setActiveTab] = useState("items");
  const [cart, setCart] = useState([]);
  const [price, setPrice] = useState(0)

  const addToCart = (item) => {
    setCart((prevCart) => [...prevCart, item]);
    setPrice(price + item.price)
  }

  const removeItem = (item) => {
    const index = cart.findIndex((i) => i.id === item.id);
    if (index >= 0) {
      setCart((cart) => {
        const copy = [...cart];
        copy.splice(index, 1);
        return copy;
      })
    }
    setPrice(price - item.price)
  }

  const summarizeCart = (cart) => {

    const groupedItems = cart.reduce((summary, item) => {
      summary[item.id] = summary[item.id] || {
        ...item,
        count: 0,
      };
      summary[item.id].count++;
      return summary;
    }, {});
    return Object.values(groupedItems);
  }

  const Content = ({tab, onAddToCart, cart, onRemoveItem}) => {
    switch (tab) {
      default:
        case "items":
          return(<ItemPage items={items} onAddToCart={onAddToCart}/>)
         case "cart":
           return (<CartPage onAddOne={onAddToCart} onRemoveOne={removeItem} items={cart} finalPrice={price}/>)
    }
  }

  return (
    <div className="App-home">
      <Nav activeTab={activeTab} onTabChange={setActiveTab}/>
      <main className="app-content">
        <Content tab={activeTab} onAddToCart={addToCart} cart={summarizeCart(cart)} onRemoveItem={removeItem}/>
        </main>
    </div>
  );
}



export default App;
