import React, { Component } from 'react';
import ProductRow from './ProductRow';
import data from '../database/data.json'

class Filter extends Component {
  render() {
    const { categories, handleFilterChange } = this.props;
    return (
      <div className="filter" style={{ display: 'flex', justifyContent: 'space-between' }}>
        {Object.keys(categories).map((category, index) => (
          <div key={index}>
            <h3>{category}</h3>
            {categories[category].map((value, index) => (
              <div key={index}>
                <input type="checkbox" id={`${category}-${value}`} value={value} onChange={(event) => handleFilterChange(event, category)} />
                <label htmlFor={`${category}-${value}`}>{value}</label>
              </div>
            ))}
          </div>
        ))}
      </div>
    );
  }
}


class ProductList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [],
      filter: {
        sport: [],
        sizes: [],
        seller: [],
        type: []
      }
    }
  }

  componentDidMount() {
    this.setState({ products: data });
  }

  handleFilterChange = (event, category) => {
    const { filter } = this.state;
    if (event.target.checked) {
      this.setState({ filter: {...filter, [category]: [...filter[category], event.target.value]} });
    } else {
      this.setState({ filter: {...filter, [category]: filter[category].filter(value => value !== event.target.value)} });
    }
  }

  render() {
    const sports = [...new Set(this.state.products.map(product => product.sport))];
    const sizes = [...new Set(this.state.products.flatMap(product => product.available_sizes))];
    const sellers = [...new Set(this.state.products.map(product => product.seller))];
    const types = [...new Set(this.state.products.map(product => product.type))];
    const categories = { sport: sports, sizes: sizes, seller: sellers, type: types };
    const filteredProducts = this.state.products.filter(product => 
      (this.state.filter.sport.length === 0 || this.state.filter.sport.includes(product.sport)) &&
      (this.state.filter.sizes.length === 0 || product.available_sizes.some(size => this.state.filter.sizes.includes(size))) &&
      (this.state.filter.seller.length === 0 || this.state.filter.seller.includes(product.seller)) &&
      (this.state.filter.type.length === 0 || this.state.filter.type.includes(product.type))
    );

    return (
      <div className="container main-content">
        <Filter categories={categories} handleFilterChange={this.handleFilterChange} />
        {
          filteredProducts.map((product, index) => {
            return <ProductRow key={index} image={product.image_url} name={product.name} details={product.details} price={product.price} />
          })
        }
      </div>
    );
  }
}

export default ProductList;
