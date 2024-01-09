import React, { useState } from 'react';
import { Card, Button, Modal } from 'react-bootstrap';
import ProductModal from './ProductModal';

const ProductList = ({ products }) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    setShowModal(true);
  };

  return (
    <div className="product-list">
      {products.map((product, index) => (
        <Card key={index} style={{ width: '18rem' }}>
          <Card.Img variant="top" src={product.image_url} />
          <Card.Body>
            <Card.Title>{product.name}</Card.Title>
            <Card.Text>Price: ${product.price.toFixed(2)}</Card.Text>
            <Button variant="primary" onClick={() => handleProductClick(product)}>
              View Details
            </Button>
          </Card.Body>
        </Card>
      ))}

      <ProductModal show={showModal} product={selectedProduct} onHide={() => setShowModal(false)} />
    </div>
  );
};

export default ProductList;