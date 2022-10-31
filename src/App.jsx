import { useState } from "react";
import "./App.css";
import {
  Header,
  Footer,
  Blog,
  Features,
  Possibility,
  WhatGPT3,
} from "./containers";
import { Cta, Brand, Navbar } from "./components";

function App() {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>

      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <Cta />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
