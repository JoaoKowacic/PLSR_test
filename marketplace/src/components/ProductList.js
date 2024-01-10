import React, { Component } from 'react';
import ProductRow from './ProductRow';
import data from '../database/data.json'

class ProductList extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
        products: [],
      }
    }
  
    componentDidMount() {
      this.setState({ products: data });
    }
  
    render() {
      return (
        <div className="container main-content">
          {
            this.state.products.map((product, index) => {
              return <ProductRow key={index} image={product.image_url} name={product.name} details={product.details} price={product.price} />
            })
          }
        </div>
      );
    }
  }
  
  export default ProductList;