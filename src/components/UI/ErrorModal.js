import React from "react";
import ReactDOM from "react-dom";

import Card from "./Card";
import Button from "./Button";
import classes from "./ErrorModal.module.css";

function ErrorModal(props) {
  function Backdrop(props) {
    return <div className={classes.backdrop} onClick={props.onExit} />;
  }

  function ModalOverlay(props) {
    return (
      <Card className={classes.modal}>
        <header className={classes.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={classes.content}>
          <p>{props.message}</p>
        </div>
        <footer className={classes.actions}>
          <Button onClick={props.onExit}>Okay</Button>
        </footer>
      </Card>
    );
  }

  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop onExit={props.onExit} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
          title={props.title}
          message={props.message}
          onExit={props.onExit}
        />,
        document.getElementById("modal-overlay")
      )}
    </React.Fragment>
  );
}

export default ErrorModal;
