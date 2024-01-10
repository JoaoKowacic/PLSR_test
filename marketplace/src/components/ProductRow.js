import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';


const ProductRow = ({ image, name, details, price }) => {
    const [show, setShow] = useState(false);
    
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
      <div className="row product">
        <div className="col-md-2">
          <img src={image} alt={name} height="150" />
        </div>
        <div className="col-md-8 product-detail">
          <h4>{name}</h4>
          <Button variant="primary" onClick={handleShow}>
            Show Details
          </Button>
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>{name}</Modal.Title>
            </Modal.Header>
            <Modal.Body>{details}</Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
        <div className="col-md-2 product-price">
          R${price}
        </div>
      </div>
    );
}

export default ProductRow;