import React, { useState } from 'react';
import { Box, TextField, IconButton, Select, MenuItem } from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('brand');

  const handleChange = e => {
    setSearchTerm(e.target.value);
    onSearch(e.target.value, filter);
  };

  const handleFilterChange = e => {
    setFilter(e.target.value);
  };

  const resetSearch = () => {
    setSearchTerm('');
    onSearch('', filter);
  };

  return (
    <Box display="flex" justifyContent="flex-end" p={2} data-testid="searchbar-container">
      <Select value={filter} onChange={handleFilterChange} data-testid="searchbar-select">
        <MenuItem value={'brand'}>Brand</MenuItem>
        <MenuItem value={'model'}>Model</MenuItem>
        <MenuItem value={'price'}>Price</MenuItem>
      </Select>
      <TextField
        variant="outlined"
        value={searchTerm}
        onChange={handleChange}
        style={{ marginLeft: '1rem' }}
        data-testid="searchbar-input"
      />
      <IconButton onClick={resetSearch} data-testid="searchbar-clear">
        <ClearIcon />
      </IconButton>
    </Box>
  );
};

export default SearchBar;
