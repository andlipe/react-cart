import React from 'react';
import './Item.css';

const Item = ({item, children}) => (
        <div className="Item">
            <div className="Item-title">{item.name}</div>
            <div className="Item-right">
                        {children}
                    </div>
                   {/* / <div className="circle"></div> */}
             <div className="Div-image"><img className="Item-image" alt="tenis" src={item.img}/>
                </div>
        </div>
    );

export default Item;
