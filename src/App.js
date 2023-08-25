import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import Header from "./components/Header";
import PLP from "./views/PLP";

import "./App.css";

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#0066cc',
    },
    background: {
      default: '#f4f6f8',
      paper: '#ffffff',
    },
  },
});


const App = () => (
  <ThemeProvider theme={theme}>
    <Router>
      <Header bgColor="#0066cc"/>
      <Routes>
        <Route path="/" element={<PLP />} />
        {/* <Route path="/" exact component={PDP} /> */}
      </Routes>
    </Router>
  </ThemeProvider>
);

export default App;
