import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import Header from "./components/Home/Header";

import "./App.css";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      {/* <Provider store={store}> */}
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      {/* </Provider> */}
    </BrowserRouter>
  );
};

export default App;
