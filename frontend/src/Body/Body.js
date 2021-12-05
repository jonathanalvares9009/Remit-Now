import "./Body.css";
import React from "react";
import Transfer from "./Transfer";

function Body() {
  const [modalShow, setModalShow] = React.useState(true);

  const alert = modalShow ? (
    ""
  ) : (
    <p>Transfer money by clicking the transfer button</p>
  );

  return (
    <main>
      {alert}
      <Transfer show={modalShow} onHide={() => setModalShow(false)} />
    </main>
  );
}

export default Body;
