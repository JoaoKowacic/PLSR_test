import React, { useState } from 'react';
import { Form } from 'react-bootstrap';

const FilterByCategory = ({ categories, onCategoryChange }) => {
  const [selectedCategory, setSelectedCategory] = useState('');

  const handleCategoryChange = (e) => {
    const category = e.target.value;
    setSelectedCategory(category);
    onCategoryChange(category);
  };

  return (
    <Form>
      <Form.Group controlId="formCategory">
        <Form.Label>Filter by Category</Form.Label>
        <Form.Control as="select" value={selectedCategory} onChange={handleCategoryChange}>
          <option value="">All</option>
          {categories.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </Form.Control>
      </Form.Group>
    </Form>
  );
};

export default FilterByCategory;