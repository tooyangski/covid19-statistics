import React from "react";
import { Alert } from "react-bootstrap";

const ErrorNotification = (props) => {
  return (
    <Alert variant="danger" onClose={props.onClose} dismissible>
      <p>{props.children}</p>
    </Alert>
  );
};

export default ErrorNotification;
