import React, {useState, useEffect} from 'react';
import './App.css';
import {Link} from 'react-router-dom';

function Item({ match }) {
  useEffect(() => {
    fetchItem();
    console.log(match);
  },[]);

  const [item, setItem] = useState({
    // set value in here image: {}
  });

  const fetchItem = async () => {
    // You would go deeper to get the actual item to get the id then use {} to get it in
    const fetchItem = await fetch('https://cat-fact.herokuapp.com/facts');
    const item = await fetchItem.json();
    setItem(item);
    console.log(item);
  }

  return (
    <div>
      <h1>Item</h1>
    </div>
  );
}

export default Item;
