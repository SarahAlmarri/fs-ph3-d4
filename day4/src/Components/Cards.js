import React, { useState } from "react";
import data from "./Data";
import UpgradeCard from "./UpgradeCard";
import "bootstrap/dist/css/bootstrap.min.css";

function Card() {
  let [counter, setCounter] = useState("0");
  let [planet, setPlanet] = useState(0);
  let [currency, setCurrency] = useState(0);

  function changeCounter() {
    setCounter(parseInt(counter) + 1);
    changePlanet();
    changeCurre();
  }
  function changePlanet() {
    if (parseInt(counter) >= 10 && parseInt(counter) % 10 == 0) {
      setPlanet(planet + 1);
    }
  }
  function changeCurre() {
    setCurrency(currency + 1);
  }
  const upgrade = data
    .filter((d) => parseInt(d.price) <= currency)
    .map((d) => <UpgradeCard name={d.name} price={d.price} buy={buyItem} />);
  function buyItem() {}

  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
      <h1>{counter}</h1>
      <button onClick={changeCounter} className="w-50">
        Destroy Planet{" "}
      </button>
      <p>{planet} Planet Destroyed</p>

      <h3>{currency}</h3>

      <div>{upgrade}</div>
    </div>
  );
}

export default Card;
