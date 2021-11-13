import React, { useEffect, useState } from 'react';
import MoreItem from '../MoreItem/MoreItem';
import "./MoreItems.css";

const MoreItems = () => {
    const[moreItems, setMoreItems] = useState([]);
    useEffect(()=>{
        fetch('https://rocky-mountain-96539.herokuapp.com/bycicle2')
        .then(res => res.json())
        .then (data => setMoreItems(data));
    } ,[])
    return (
        <div>
         <h2 className="text-primary">ALL BYCICLES</h2>
              <div className="item-container">
              {
                moreItems.map(moreItem=><MoreItem
                key={moreItem._id}
                moreItem={moreItem}></MoreItem>)
                }
              </div> 
        </div>
    );
};

export default MoreItems;