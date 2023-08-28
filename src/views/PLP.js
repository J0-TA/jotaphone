import React, { useState, useEffect } from "react";
import { useAppContext } from "../AppContext";
import { fetchItems } from "../API/itemsAPI";
import { Box, CircularProgress, Snackbar, Alert } from "@mui/material";
import ListView from "../components/ListView";
import SearchBar from "../components/SearchBar";

const PLP = () => {
  const [items, setItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [openErrorSnackbar, setOpenErrorSnackbar] = useState(false);
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
        setOpenErrorSnackbar(true);
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
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          minHeight="100vh"
        >
          <CircularProgress size={80} />
        </Box>
      ) : (
        <>
          <SearchBar onSearch={handleSearch} />
          <ListView items={filteredItems} />
          <Snackbar
            open={openErrorSnackbar}
            autoHideDuration={6000}
            onClose={() => setOpenErrorSnackbar(false)}
          >
            <Alert onClose={() => setOpenErrorSnackbar(false)} severity="error">
              There was an error!
            </Alert>
          </Snackbar>
        </>
      )}
    </div>
  );
};

export default PLP;
