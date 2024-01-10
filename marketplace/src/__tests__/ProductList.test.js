import { render, fireEvent } from '@testing-library/react';
import ProductList from '../components/ProductList';
import '@testing-library/jest-dom'

describe('ProductList Component', () => {
  it('renders without crashing', () => {
    render(<ProductList />);
  });

  it('has filter categories', () => {
    const { getByText } = render(<ProductList />);
    const sportCategory = getByText('sport');
    const sizesCategory = getByText('sizes');
    const sellerCategory = getByText('seller');
    const typeCategory = getByText('type');

    expect(sportCategory).toBeInTheDocument();
    expect(sizesCategory).toBeInTheDocument();
    expect(sellerCategory).toBeInTheDocument();
    expect(typeCategory).toBeInTheDocument();
  });

  it('has products', () => {
    const { getByText } = render(<ProductList />);
    
    const productName = getByText('Camiseta do Brasil');

    expect(productName).toBeInTheDocument();
  });


});
