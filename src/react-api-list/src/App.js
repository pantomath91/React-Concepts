import React, { useEffect, useState } from 'react';
import './style.css';

export default function App() {
  let [userList, setUserList] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((json) => setUserList(json));
  }, []);

  return userList.map((e, idx) => (
    <div key={idx} className="list">
      <div className="list-border">{e.id}</div>
      <div className="list-border">{e.category}</div>
      <div className="list-border width">{e.description}</div>
      <div className="list-border">{e.price}</div>
    </div>
  ));
}
