import React from 'react';
import '@testing-library/jest-dom'
import { render } from '@testing-library/react';
import CustomNavbar from '../Navbar';

test('Navbar renders correctly', () => {
  const { getByText } = render(<CustomNavbar />);
  const linkElement = getByText(/Marketplace/i);
  expect(linkElement).toBeInTheDocument();
});