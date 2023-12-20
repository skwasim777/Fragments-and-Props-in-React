// import "./App.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import FoodItems from "../components/FoodItems";
import ErrorMassege from "../components/ErrorMassge";
function App() {
  let foodsItems = ["Daal", "vegatables", "Roti", "Salaad", "Milk"];
  return (
    <>
      <h1>Healthy Food</h1>
      <FoodItems items={foodsItems}></FoodItems>
      <ErrorMassege items={foodsItems}></ErrorMassege>
    </>
  );
}

export default App;
