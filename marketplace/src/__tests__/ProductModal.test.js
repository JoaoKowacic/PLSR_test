import React from 'react';
import '@testing-library/jest-dom'
import { render, fireEvent } from '@testing-library/react';
import ProductModal from '../ProductModal';

const mockProduct = {
  name: 'Test Product',
  image_url: 'test-image.jpg',
  details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
};

test('ProductModal renders correctly', () => {
  const { getByText } = render(<ProductModal show product={mockProduct} onHide={() => {}} />);

  const productNameElement = getByText(/Test Product/i);
  const productDetailsElement = getByText(/Lorem ipsum dolor sit amet/i);

  expect(productNameElement).toBeInTheDocument();
  expect(productDetailsElement).toBeInTheDocument();
});

test('ProductModal closes on button click', () => {
  const onHideMock = jest.fn();
  const { getByText } = render(<ProductModal show product={mockProduct} onHide={onHideMock} />);

  const closeButton = getByText(/Close/i);
  fireEvent.click(closeButton);

  expect(onHideMock).toHaveBeenCalled();
});