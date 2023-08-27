import React, { useState, useEffect } from "react";
import { useAppContext } from "../AppContext";
import { fetchItems } from "../API/itemsAPI";
import ListView from "../components/ListView";
import SearchBar from "../components/SearchBar";

const PLP = () => {
  const [items, setItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const { setSelectedBrand, setSelectedModel } = useAppContext();

  useEffect(() => {
    fetchItems()
      .then((data) => {
        setItems(data);
        setFilteredItems(data);
        setSelectedBrand("");
        setSelectedModel("");
      })
      .catch((error) => {
        console.error("There was an error fetching the data:", error);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSearch = (term, filter) => {
    const filtered = items.filter((item) =>
      item[filter].toLowerCase().includes(term.toLowerCase())
    );
    setFilteredItems(filtered);
  };

  return (
    <div data-testid="plp-container">
      <SearchBar onSearch={handleSearch} />
      <ListView items={filteredItems} />
    </div>
  );
};

export default PLP;
