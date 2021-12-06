import "./Body.css";
import React from "react";
import Transfer from "./Transfer";

function Body(props) {
  return (
    <main>
      <Transfer sender={props.sender} />
    </main>
  );
}

export default Body;
