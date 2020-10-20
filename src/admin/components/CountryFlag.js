import React from "react";
import { Modal, Button } from "react-bootstrap";

const CountryFlag = (props) => {
  const { showModal, targetCountry, closeModalHandler } = props;

  return (
    <Modal show={showModal} onHide={closeModalHandler} centered>
      <Modal.Header closeButton>
        <Modal.Title>{targetCountry && targetCountry.country}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {targetCountry && (
          <img
            src={`https://www.countryflags.io/${targetCountry.code}/shiny/64.png`}
            alt={targetCountry.code}
          />
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={closeModalHandler}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CountryFlag;
