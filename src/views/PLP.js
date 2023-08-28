import React, { useState, useEffect } from "react";
import { useAppContext } from "../AppContext";
import { fetchItems } from "../API/itemsAPI";
import ListView from "../components/ListView";
import SearchBar from "../components/SearchBar";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

const PLP = () => {
  const [items, setItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [loading, setLoading] = useState(true);
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
      })
      .finally(() => {
        setLoading(false);
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
      {loading ? (
        <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
          <CircularProgress size={80} />
        </Box>
      ) : (
        <>
          <SearchBar onSearch={handleSearch} />
          <ListView items={filteredItems} />
        </>
      )}
    </div>
  );
};

export default PLP;
