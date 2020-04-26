import React, {useState, useEffect} from 'react';
import './App.css';
import {Link} from 'react-router-dom';

function Shop() {
  useEffect(() => {
    fetchItems();
  },[]);

  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    const data = await fetch(
      'https://cat-fact.herokuapp.com/facts'
    );
    const items = await data.json();
    console.log(items.all);
    setItems(items.all);
  }

  return (
    <div>
      {items.map(item => (
        <h1 key={item._id}>
          <Link to={`/shop/${item._id}`}>{item._id}</Link>
        </h1>
      ))}
    </div>
  );
}

export default Shop;
