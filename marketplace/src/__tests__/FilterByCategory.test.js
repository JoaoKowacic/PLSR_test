import React from 'react';
import '@testing-library/jest-dom'
import { render, fireEvent } from '@testing-library/react';
import FilterByCategory from '../FilterByCategory';

const mockCategories = ['Futebol', 'Basquete', 'Corrida'];

test('FilterByCategory renders correctly', () => {
  const { getByLabelText, getByDisplayValue } = render(
    <FilterByCategory categories={mockCategories} onCategoryChange={() => {}} />
  );

  const filterLabelElement = getByLabelText(/Filter by Category/i);
  const defaultOptionElement = getByDisplayValue(/All/i);

  expect(filterLabelElement).toBeInTheDocument();
  expect(defaultOptionElement).toBeInTheDocument();

});

test('FilterByCategory invokes onCategoryChange when selecting a category', () => {
  const onCategoryChangeMock = jest.fn();
  const { getByLabelText } = render(
    <FilterByCategory categories={mockCategories} onCategoryChange={onCategoryChangeMock} />
  );

  const filterDropdown = getByLabelText(/Filter by Category/i);
  fireEvent.change(filterDropdown, { target: { value: 'Basquete' } });

  expect(onCategoryChangeMock).toHaveBeenCalledWith('Basquete');
});