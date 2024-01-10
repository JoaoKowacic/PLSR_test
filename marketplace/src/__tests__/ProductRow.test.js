import { render, fireEvent, waitFor  } from '@testing-library/react';
import ProductRow from '../components/ProductRow';
import '@testing-library/jest-dom'

describe('ProductRow Component', () => {
  it('renders without crashing', () => {
    const product = {
      image: 'test-image.jpg',
      name: 'Test Product',
      details: 'Test details',
      price: 100,
    };
    render(<ProductRow {...product} />);
  });

  it('shows modal on button click', () => {
   const product = {
     image: 'test-image.jpg',
     name: 'Test Product',
     details: 'Test details',
     price: 100,
   };
   const { getByText, getAllByText } = render(<ProductRow {...product} />);
   fireEvent.click(getByText('Show Details'));
 
   const matchingElements = getAllByText('Test Product');
   expect(matchingElements.length).toBeGreaterThan(1);
 });

  it('closes modal on close button click', async () => {
    const product = {
      image: 'test-image.jpg',
      name: 'Test Product',
      details: 'Test details',
      price: 100,
    };
    const { getByText, queryByText } = render(<ProductRow {...product} />);
    fireEvent.click(getByText('Show Details'));
    fireEvent.click(getByText('Close'));

    await waitFor(() => {
      expect(queryByText('Test details')).not.toBeInTheDocument();
    });
  });
});
