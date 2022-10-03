import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import AddExpense from "./pages/add-expense";
import Home from "./pages/home/index";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/add-expense" element={<AddExpense/>} />
      </Routes>
    </Router>
  );
};

export default App;
