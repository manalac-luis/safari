import React from 'react';
import './ProductList.css';
import Product from './Product';

class ProductList extends React.Component {



  render() {


    let productComponents = [];

    for (let product of this.props.items){
      productComponents.push(<Product key={product.code} item={product} addToCartHandler={this.props.addToCartHandler}/>);
    }
    return(
    <ul>
        {productComponents}
    </ul>
  )
  }
}

export default ProductList;
