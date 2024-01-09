import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const ProductModal = ({ show, onHide, product }) => {
  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>{product && product.name}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {product && (
          <>
            <img src={product.image_url} alt={product.name} style={{ maxWidth: '100%' }} />
            <p>{product.details}</p>
          </>
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ProductModal;