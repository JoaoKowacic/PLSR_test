import React from 'react';
import '@testing-library/jest-dom'
import { render } from '@testing-library/react';
import App from '../App';

test('App renders correctly', () => {
  const { getByText, getAllByText } = render(<App />);
  const navbarElement = getByText(/Marketplace/i);
  const filterElement = getByText(/Filter by Category/i);
  const productListElement = getAllByText(/Price:/i)[0];

  expect(navbarElement).toBeInTheDocument();
  expect(filterElement).toBeInTheDocument();
  expect(productListElement).toBeInTheDocument();
});