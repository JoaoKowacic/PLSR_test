import { render, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import NavigationBar from '../components/NavigationBar';
import '@testing-library/jest-dom'

describe('NavigationBar Component', () => {
  it('renders without crashing', () => {
    render(<Router><NavigationBar /></Router>);
  });

  it('has a brand name', () => {
    const { getByText } = render(<Router><NavigationBar /></Router>);
    const brandName = getByText('DevSports');

    expect(brandName).toBeInTheDocument();
  });

  it('has navigation links', () => {
    const { getByText } = render(<Router><NavigationBar /></Router>);
    const homeLink = getByText('Home');
    const productsLink = getByText('Products');

    expect(homeLink).toBeInTheDocument();
    expect(productsLink).toBeInTheDocument();
  });

  it('navigates to different pages', () => {
    const { getByText } = render(<Router><NavigationBar /></Router>);
    fireEvent.click(getByText('Home'));
    fireEvent.click(getByText('Products'));

    // Add assertions to check the URL
  });
});
