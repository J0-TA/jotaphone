import React, { createContext, useState, useContext } from "react";

const AppContext = createContext();

export const useAppContext = () => {
  return useContext(AppContext);
};

export const AppProvider = ({ children }) => {
  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedModel, setSelectedModel] = useState("");
  const [cartItemsCount, setCartItemsCount] = useState(0);
  
  const updateCartCount = (newItems) => {
    setCartItemsCount(prevCount => prevCount + newItems);
  };

  return (
    <AppContext.Provider
      value={{
        selectedBrand,
        setSelectedBrand,
        selectedModel,
        setSelectedModel,
        cartItemsCount,
        setCartItemsCount,
        updateCartCount
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
