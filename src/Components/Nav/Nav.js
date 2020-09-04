/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './Nav.css';
import Jumpman from '../../assets/jordan-logo-1.svg'

const Nav = ({ activeTab, onTabChange }) => {
   const itemClass = (tabName) => `App-nav-item ${activeTab === tabName ? "selected" : ""}`
    return (
        <nav className="App-nav">
            <ul>
                <li className={itemClass("items")}>
                    <a onClick={() => onTabChange('items')}>Items</a>
                </li>
                <li className={itemClass("cart")}>
                    
                    <a onClick={() => onTabChange('cart')}>
                    Cart
                    <img src={Jumpman} alt="logo"/>
                    </a>
                    
                </li>
            </ul>
        </nav>
    );
}

export default Nav;
