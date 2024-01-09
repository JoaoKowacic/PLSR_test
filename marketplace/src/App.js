import React from 'react';
import CustomNavbar from './Navbar';
import ProductList from './ProductList';
import FilterByCategory from './FilterByCategory';
import data from './database/data.json';

const App = () => {
  const categories = Array.from(new Set(data.map((product) => product.sport)));

  return (
    <div className="App">
      <CustomNavbar />
      <FilterByCategory categories={categories} onCategoryChange={(category) => console.log(category)} />
      <ProductList products={data} />
    </div>
  );
};

export default App;