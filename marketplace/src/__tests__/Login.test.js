import { render, fireEvent } from '@testing-library/react';
import Login from '../components/Login';
import '@testing-library/jest-dom'

describe('Login Component', () => {
  it('renders without crashing', () => {
    render(<Login />);
  });

  it('has email and password inputs', () => {
    const { getByPlaceholderText } = render(<Login />);
    const emailInput = getByPlaceholderText('Enter email');
    const passwordInput = getByPlaceholderText('Enter password');

    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
  });

  it('has a submit button', () => {
    const { getByText } = render(<Login />);
    const submitButton = getByText('Submit');

    expect(submitButton).toBeInTheDocument();
  });
});
