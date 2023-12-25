import React from "react";
import data from "./Data";
import "bootstrap/dist/css/bootstrap.min.css";
function UpgradeCard(props) {
  return (
    <div
      className="d-flex justify-content-center align-items-center flex-column m-3 p-3"
      style={{ border: "2px solid black", width: "600px" }}
    >
      <h1>{props.name}</h1>
      <p>{props.price}</p>
      <button onCanPlay={props.buy}> buy</button>
    </div>
  );
}
export default UpgradeCard;
