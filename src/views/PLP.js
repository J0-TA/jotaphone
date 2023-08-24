import React, { useState, useEffect } from 'react';
import { fetchItems } from '../API/itemsAPI';
import ListView from '../components/ListView';

const PLP = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetchItems()
      .then(data => {
        setItems(data);
      })
      .catch(error => {
        console.error('There was an error fetching the data:', error);
    });
  }, []);

  return (
    <ListView items={items} />
  );
};

export default PLP;
