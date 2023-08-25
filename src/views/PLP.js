import React, { useState, useEffect } from 'react';
import { fetchItems } from '../API/itemsAPI';
import ListView from '../components/ListView';
import SearchBar from '../components/SearchBar';

const PLP = () => {
    const [items, setItems] = useState([]);
    const [filteredItems, setFilteredItems] = useState([]);
    
  useEffect(() => {
    fetchItems()    
      .then(data => {
        setItems(data);
        setFilteredItems(data);
      })
      .catch(error => {
        console.error('There was an error fetching the data:', error);
    });
  }, []);

  const handleSearch = (term, filter) => {
    const filtered = items.filter(item => item[filter].toLowerCase().includes(term.toLowerCase()));
    setFilteredItems(filtered);
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      <ListView items={filteredItems} />
    </div>
  );
};

export default PLP;
