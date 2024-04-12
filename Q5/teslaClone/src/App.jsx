import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/navbar";
import Bodyitem from "./components/bodyItem";
import Footer from "./components/footer";

import "./App.css";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Bodyitem></Bodyitem>
      <Footer></Footer>
    </>
  );
}

export default App;
