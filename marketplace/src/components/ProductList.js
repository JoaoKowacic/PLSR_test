import React, { Component } from 'react';
import ProductRow from './ProductRow';
import data from '../database/data.json'

class ProductList extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
        products: [],
        filter: ''
      }
    }
  
    componentDidMount() {
      this.setState({ products: data });
    }

    handleFilterChange = (event) => {
      this.setState({ filter: event.target.value });
    }
  
    render() {
      const sports = [...new Set(this.state.products.map(product => product.sport))];
      const filteredProducts = this.state.filter ? this.state.products.filter(product => product.sport === this.state.filter) : this.state.products;
      
      return (
        <div className="container main-content">
          <select value={this.state.filter} onChange={this.handleFilterChange}>
            <option value="">All</option>
            {sports.map((sport, index) => (
              <option key={index} value={sport}> {sport} </option>
            ))}
          </select>
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
