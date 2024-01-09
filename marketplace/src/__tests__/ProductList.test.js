import React from 'react';
import '@testing-library/jest-dom'
import { render } from '@testing-library/react';
import ProductList from '../ProductList';

const mockProducts = [
  { name: 'Product 1', image_url: 'image1.jpg', price: 19.99 },
  { name: 'Product 2', image_url: 'image2.jpg', price: 29.99 },
];

test('ProductList renders correctly', () => {
  const { getByText } = render(<ProductList products={mockProducts} />);
  const productElement1 = getByText(/Product 1/i);
  const productElement2 = getByText(/Product 2/i);
  expect(productElement1).toBeInTheDocument();
  expect(productElement2).toBeInTheDocument();
});