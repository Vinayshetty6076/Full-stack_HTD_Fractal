import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Productitem from "./components/Productitem";
import GetApi1 from "./components/GetApi1";

function App() {
  const product = [
    {
      item: "Apple",
      price: 40,
      total: 0,
    },
    {
      item: "Banana",
      price: 6,
      total: 0,
    },
    {
      item: "Orange",
      price: 20,
      total: 0,
    },
  ];
  return (
    <>
      <div className="container">
        <h1>Shopping Cart</h1>
        <Productitem productData = {product} />
        <hr />
        <GetApi1 />
      </div>
    </>
  );
}

export default App;
