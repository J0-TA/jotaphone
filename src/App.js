import React from "react";
import { AppProvider } from "./AppContext";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./muiTheme";
import Header from "./components/Header";
import PLP from "./views/PLP";
import PDP from "./views/PDP";

import "./App.css";

const App = () => {
  return (
    <AppProvider>
      <ThemeProvider theme={theme}>
        <Router>
          <Header bgColor="#0066cc" />
          <Routes>
            <Route path="/" element={<PLP />} />
            <Route path="/pdp/:id" element={<PDP />} />
          </Routes>
        </Router>
      </ThemeProvider>
      ƒ
    </AppProvider>
  );
};

export default App;
